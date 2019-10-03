import { AnyAction, Dispatch } from 'redux';
import { IServices } from '../service'

import {IState} from './index'

const SET_PROFILE_IMAGE = 'users/set-profile-image'
export const setProfileImage = (payload:string) => ({
    payload,
    type: SET_PROFILE_IMAGE,
})

export interface ILogin {
    email: string
    password: string
}
export default function reducer(state = {}, action: AnyAction) {
    switch (action.type){
        case SET_PROFILE_IMAGE: {
            return {
                ...state,
                profileImage: action.payload
            }
        }
        default: {
            return state
        }
    }    
}

export const login = ({email, password}: ILogin) => 
async (dispatch: Dispatch, getState: () => IState, { auth }: IServices) => 
    await auth.signInWithEmailAndPassword(email, password)
// const result = await auth.signInWithEmailAndPassword(email, password)
// // tslint:disable-next-line: no-console
// console.log(result)

export const register = ({email,password}: ILogin) => 
async (dispatch:Dispatch, getstate: () => IState, {auth, db }: IServices)=>{
    const userCredential = await auth.createUserWithEmailAndPassword(email, password)
    const { user } = userCredential
    const id = user ? user.uid : undefined
    const doc = db.collection('users').doc(id)
    await doc.set({role: 'user'})
}


export const loadUserInitialData = () => 
    async (dispatch: Dispatch, getState: () => IState, {storage, auth}: IServices) => {
        // // tslint:disable-next-line: no-console
         //  console.log('object -------------------')
        // console.log(`Auth CurrentUser ${auth.currentUser}`)
        //  console.log('CurrentUser', auth.currentUser)
        if (!auth.currentUser){
           // console.log('CurrentUser', auth.currentUser)
            return            
        }
        
        const storageRef = storage.ref()
        const {uid} = auth.currentUser
        const imageRef = storageRef
            .child('profileImages')
            .child(`${uid}.jpeg`)

        const url = await imageRef.getDownloadURL()
        console.log(`url loaderUser ${url}`)
       
        dispatch(setProfileImage(url))
    }
//     export const loadUserInitialData = () => 
//    async (dispatch: Dispatch, getState: () => IState, {auth, storage}: IServices) => {
            
//         if (!auth.currentUser){
//             console.log("Exit")
//             return
//         }
//         console.log("",auth)
      
//     }
    

export const handleProfileImageSubmit = (payload: {profileImg:File}) => 
async (dispatch: Dispatch, getState: () => IState, {auth, storage}: IServices) => {
    // // tslint:disable-next-line: no-console
    console.log("payload",payload) // es me muestra el objeto
    if (!auth.currentUser){
        return
    }
    const {uid} = auth.currentUser
    const storageRef = storage.ref()
    console.log("payload.file", payload.profileImg) // esto
     const response = await storageRef
    .child(`profileImages`)
    .child(`${uid}.jpeg`)
     .put(payload.profileImg)
  console.log("payload.file", payload.profileImg)
   const url = await response.ref.getDownloadURL()
   console.log(`url:  ${url}`)
   dispatch(setProfileImage(url))
}

