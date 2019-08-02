import { Dispatch } from 'redux'
import{ IServices } from '../service'

export interface ILogin{
    email:string,
    password:string
}
export default function reducer(state={}){
    return state 
}
export const login = (payload:ILogin)=>
async  (dispatch: Dispatch, getState:()=>any, { auth }: IServices )  => {

 const result= await auth.signInWithEmailAndPassword(payload.email, payload.password)

 console.log(result);

}
 // tslint:disable-next-line:no-console