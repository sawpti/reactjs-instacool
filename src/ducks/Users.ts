import { Dispatch } from 'redux'
import{ IServices } from '../service'

export interface ILogin{
    email:string
    password:string
}
export default function reducer(state={}){
    return state 
}
// export const login = (payload:ILogin)=>
export const login = ({email, password}:ILogin)=>
async  (dispatch: Dispatch, getState:()=>any, servicios: IServices )  => {
 //  const result= await auth1.signInWithEmailAndPassword(payload.email, payload.password)
   await servicios.auth.signInWithEmailAndPassword(email, password)
 // tslint:disable-next-line:no-console
  //  console.log (" result :::: ",result);
 

}

export const register = ({email,password}: ILogin) => 
async (dispatch:Dispatch, getstate: () => any, {auth, db }: IServices)=>{
    const userCredential = await auth.createUserWithEmailAndPassword(email, password)
  
    const { user } = userCredential
    // console.log(user);
    const id = user ? user.uid : undefined
    const doc = db.collection('users').doc(id)
    await doc.set({role: 'user'})
}