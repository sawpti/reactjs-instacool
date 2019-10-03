import {History} from 'history'
import * as React from 'react'
import {Route} from 'react-router'
import './App.css'
import BarraSuperior from './components/BarraSuperior'
import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import NewsFeed from './containers/NewsFeed'
import Profile from './containers/Profile'
import service from './service'

// no coma (,) entre tipos en interfaces
interface IAppProps{
  history: History  
  loadInitialData: () => void
}

class App extends React.Component <IAppProps>{
  public state ={
    loading: true,
  }
  public  componentDidMount(){
    const {auth} = service   
        
    auth.onAuthStateChanged(user => {      
      if (user){
        // el usuario se esta registrando o iniciando sesion con exito.
   const { loadInitialData} = this.props
       // console.log('hola', loadInitialData())
       
          loadInitialData()  // este método no  me lo toma acá, es como si no existiera...
       //  console.log('hola')
        // ahora tenemos que inyectarle esta propiedad (loadInitialData)desde nuestro archivo index.tsx 
        if (['/','/register'].indexOf(location.pathname) > -1){
          const {history} = this.props
          history.push('/app/newsfeed')
        }
      }else{
        if (/\app\/./.test(location.pathname)){
          const {history} = this.props
          history.push('/')
        }
      }
// // tslint:disable-next-line: no-console
//       console.log(user)
        this.setState({
        loading: false,
      })
    })
  }

//   public componentDidUpdate (){
//     const {auth} = service   
        
//     auth.onAuthStateChanged(user => {      
//       if (user){
//         // el usuario se esta registrando o iniciando sesion con exito.
//    const { loadInitialData} = this.props
//         console.log('hola', loadInitialData())
       
//           loadInitialData()  // este método no  me lo toma acá, es como si no existiera...
//         console.log('hola')
//         // ahora tenemos que inyectarle esta propiedad (loadInitialData)desde nuestro archivo index.tsx 
//         if (['/','/register'].indexOf(location.pathname) > -1){
//           const {history} = this.props
//           history.push('/app/newsfeed')
//         }
//       }else{
//         if (/\app\/./.test(location.pathname)){
//           const {history} = this.props
//           history.push('/')
//         }
//       }
// // // tslint:disable-next-line: no-console
// //       console.log(user)
//         this.setState({
//         loading: false,
//       })
//     })



//   }
  public render() {
    const {loading} = this.state
    return (
      loading ? 'Loading' : 
     <div>
       <Route exact={true} path='/' component={Login} />
       <Route exact={true} path='/registro' component={Register} />
       <Route path='/app' component={BarraSuperior} />
       <Route exact={true} path='/app/newsfeed' component={NewsFeed} />
       <Route exact={true} path='/app/profile' component={Profile} />
     </div>
    );
  }
}

export default App;





// import * as React from 'react';

// import { History } from 'history'
// import { Route } from 'react-router';
// import Login from './containers/Auth/Login';
// import Register from './containers/Auth/Register';
// import Profile from './containers/Profile';
// import NewsFeed from './containers/NewsFeed/';
// import BarraSuperior from './components/BarraSuperior';
// import services from "./service";

// interface IAppProps {
//   history: History,
//   loadInitialData: () => void
// }
// class App extends React.Component<IAppProps> {
//   public state = {
//     loading: true,
    
//   }

//   public componentDidMount() {

//     const { auth } = services;
//     auth.onAuthStateChanged(user => {
//       if (user) {
//         const { loadInitialData} = this.props
//         loadInitialData()
//         if (['/', '/registro'].indexOf(location.pathname) > -1) {
//           const { history } = this.props
//           history.push('/app/newsfeed')
//       //    console.log(this.props)
//         }
//       }else{ // Cuando user=null
//         if (/\app\/./.test(location.pathname)){ // preguntamos si el usuario está accediento a aguna ruta dentro de app
//           const {history} = this.props
//           history.push('/')
//         }
//       }
//     //  console.log(user)
//       this.setState({
//         loading: false
//       })

//     })
//   }


//   public render() {
//     const { loading } = this.state;

//     return (
//       loading ? 'Loading ' :
//         <div>
//           <Route exact={true} path='/' component={Login} />
//           <Route exact={true} path='/registro' component={Register} />
//           <Route path='/app' component={BarraSuperior} />
//           <Route exact={true} path='/app/newsfeed' component={NewsFeed} />
//           <Route exact={true} path='/app/profile' component={Profile} />
//         </div>

//     );
//   }
// }

// export default App;
