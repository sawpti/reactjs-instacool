import { Dispatch } from 'redux'
import{ IServices } from '../service'

export interface ILogin{
    email:string,
    password:string
}
export default function reducer(state={}){
    return state 
}
 // export const login = (payload:ILogin)=>
export const login = ({email, password}:ILogin)=>
async  (dispatch: Dispatch, getState:()=>any, { auth }: IServices )  => {

    console.log("auth clg", auth);
  // const result= await auth.signInWithEmailAndPassword(payload.email, payload.password)
   const result= await auth.signInWithEmailAndPassword (email, password)
    console.log(result);
 

}
