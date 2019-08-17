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

  console.log("auth clg ", servicios.auth);
  console.log (" E-mail:" ,email);
  console.log (" password:" ,password);

 //  const result= await auth1.signInWithEmailAndPassword(payload.email, payload.password)
  const result= await servicios.auth.signInWithEmailAndPassword(email, password)
 // tslint:disable-next-line:no-console
   console.log (" result :::: ",result);
 

}
