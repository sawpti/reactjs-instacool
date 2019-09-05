import { firestore} from 'firebase';
import { AnyAction, Dispatch } from 'redux';
import { IServices } from '../service';
import * as utils from '../utils';
// import { setProfileImage } from './Users';
// import { IServices } from '../service/index';


// Definicion de tipos para nuestras acciones
const START = 'posts/fetch-start'
const SUCCESS = 'posts/fetch-success'
const ERROR = 'posts/fetch-error'
const ADD = 'posts/add' // va a ser de tipo post y accion add

// creamos interfaz de Post (para compartir los post - C93)
export interface IPost{
    comment: string,
    userId: string,
    createdAt: firestore.Timestamp
    imageURL: string
}

// creamos una interfaz para indicar que tipo de datos es payload
export interface IDataPosts {
    [key: string]: IPost
}

// Definimos nuestros actions creators
const fetchStart = () => ({
    type: START,
})
const fetchSuccess = (payload: IDataPosts) => ({
    payload,
    type: SUCCESS,
})
const fetchError = (error: Error) => ({
    error,
    type: ERROR,
})
const add = (payload: IDataPosts) => ({
    payload,
    type: ADD,
})
// definimos el estado inicial: contiene data, fetched y fetching
// los dos ultimos porque traemos nuestros datos cuando estamos en la ruta de  newsfeed

const initialState = {
    data: {},
    fetched: false,
    fetching: false,
}

export default function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case START:
            return {
                ...state,
                fetching: true,
            }

        case SUCCESS:
            return {
                ...state,
                data: action.payload,
                fetched: true,
                fetching: false,
            }

        case ERROR:
            return {
                ...state,
                error: action.error,
                fetching: false,
            }
        case ADD:
            return {
                ...state,
                data: {
                    ...state.data, // tenemos una copia del estado
                    ...action.payload, // hacemos un destructuring del payload
                }
            }
        default:
            return state
    }
    return state
}


export const fetchPosts = () =>
    async (dispatch: Dispatch, getState: () => any, { db, storage }: IServices) => {

        dispatch(fetchStart())

        try {
            const snaps = await db.collection('posts').get()
            const posts = {}
            snaps.forEach(x => posts[x.id] = x.data())
            const imgIds = await Promise.all(Object.keys(posts).
                map(async x => {
                    const ref = storage.ref(`posts/${x}.jpg`)
                    const url = await ref.getDownloadURL()
                    return [x, url]
                }))

            const keyedImages = {}
            imgIds.forEach(x => keyedImages[x[0]] = x[1])

            Object.keys(posts).forEach(x => posts[x] = {
                 ...posts[x],
               imageURL: keyedImages[x],
              })
             // tslint:disable-next-line: no-console
           //   console.log(posts)
            dispatch(fetchSuccess(posts))
        } catch (e) {
            // tslint:disable-next-line: no-console
            console.log(e)
            dispatch(fetchError(e))

        }
    }

// definimos los dos thunks de like y share
export const like = (id: string) =>
    async (dispatch: Dispatch, getState: () => any, { auth }: IServices) => {
        if (!auth.currentUser) {
            return
        }
        const token = await auth.currentUser.getIdToken()
        // C87 - Conectando react con backend + C88 agregar token auth  
        // C89 - Agregamos un template string con el id del post seguido de la accion que queremos ejecutar
        // accion = like    
       // const result =
        await fetch(`/api/posts/${id}/like`, {
            headers: {
                authorization: token
            }
        })
        // console.log(id);
        //   const text = await result.text()
        // // tslint:disable-next-line: no-console
        // console.log(text) 
    }

export const share = (id: string) =>
    async (dispatch: Dispatch, getState: () => any, { auth, db, storage }: IServices) => {
         // tslint:disable-next-line: no-console
        console.log(id) 
        if (!auth.currentUser) {
            return
        }
        const token = await auth.currentUser.getIdToken()
        const result = await fetch(`/api/posts/${id}/share`, {
            headers: {
                authorization: token
            }
        })
        // generamos la referencia de la imagen
        const url = await storage.ref(`posts/${id}.jpg`).getDownloadURL()
        const blob = await utils.download(url) // descarga el archivo y luego vamos a poder subirlo con el id que nos devuelve la peticion de abajo
        const { id: postId }: { id: string } = await result.json()
        const ref = storage.ref(`posts/${postId}.jpg`) // le indicamos que puede guardar el archivo que va a recibir un blob
        if (blob instanceof Blob) {
            // SOLUCION PARCIAL, EL IF NO DEBERIA IR
            await ref.put(blob)
        }
        const imageURL = await ref.getDownloadURL()
        const snap = await db.collection('posts').doc(postId).get()
        // const newPost = snap.data() // tenemos el nuevo post y podemos agregarlo a nuestro reducer.

        dispatch(add({
            [snap.id]: {
                ...snap.data(), // para pasar imageURL transformamos un objeto que hace destructuring 
                imageURL,
            }
        } as IDataPosts)) // esto actualiza el post
    }
    
    // Cambia la foto de perfil

    // export const handleProfileImageSubmit= (payload:{file: File})=>
    // async (dispatch:Dispatch, getState:()=> any, {auth, storage}:IServices)=>{
    //     if (!auth.currentUser){
    //         return
    //     }
    //     const {uid} = auth.currentUser
    //     const storageRef= storage.ref()
    //     const response = await storageRef
    //     .child(`profileImages`)
    //     .child(`${uid}.jpg` )
    //     .put(payload.file)
    //     const url= await response.ref.getDownloadURL()
    //   dispatch(setProfileImage(url))
    //    console.log(payload);
    //    console.log(setProfileImage(url))
    // }

