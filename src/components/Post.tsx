import * as React from 'react';
import Footer from '../components/Footer'

const style = {
    backgroundColor:'#fff',
    border: '1px solid #ddd',
    marginBottom: '10px',
    padding: '10px 15px', 
    marginTop: '10px',
  
}

interface IPostProps{
// like y share no recibe argumento porque estamos haciendo referencia
// a la segunda vez que llamamos a la funcion
 image: string;
 like: () => void
 share: () => void
}

export default class Post extends React.Component<IPostProps>{
    public render(){
        const {image, like, share} = this.props
        return (
            <div style={style}>
                <img style={{width: '300px'}} src = {image} />
                <Footer like={like} share={share}/>
            </div>            
        )
    }
}



// import * as React from 'react';
// import  Footer from '../components/Footer'
// const style = {
//   backgroundColor: 'white',
//   border: '1px solid #ddd',
//   borderRadius: '5px',
//   padding: '10px 15px',
//   marginBottom: '10px',


// };
// interface IPostProps {
//   image: string
// }
// export default class Post extends React.Component<IPostProps> {
//   public render() {
//     const { image } = this.props;
//     return (

//       <div style={style}>
//         <img src={image} alt="Imagen de prueba" />
//         <Footer/>
     
//       </div>

//     )
//   }
// }
