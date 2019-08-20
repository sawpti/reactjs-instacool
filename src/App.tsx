import * as React from 'react';

import { History } from 'history'
import { Route } from 'react-router';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import Profile from './containers/Profile';
import NewsFeed from './containers/NewsFeed/';
import BarraSuperior from './components/BarraSuperior';
import services from "./service";
interface IAppProps {
  history: History,
}
class App extends React.Component<IAppProps> {
  public state = {
    loading: true,
  }

  public componentDidMount() {

    const { auth } = services;
    auth.onAuthStateChanged(user => {
      if (user) {
        if (['/', '/registro'].indexOf(location.pathname) > -1) {
          const { history } = this.props
          history.push('/app/newsfeed')
      //    console.log(this.props)
        }
      }else{ // Cuando user=null
        if (/\app\/./.test(location.pathname)){ // preguntamos si el usuario está accediento a aguna ruta dentro de app
          const {history} = this.props
          history.push('/')
        }
      }
    //  console.log(user)
      this.setState({
        loading: false
      })

    })
  }


  public render() {
    const { loading } = this.state;

    return (
      loading ? 'Loading ' :
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
