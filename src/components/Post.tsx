import * as React from 'react';
import  Footer from '../components/Footer'
const style = {
  backgroundColor: 'white',
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '10px 15px',
  marginBottom: '10px',


};
interface IPostProps {
  image: string,
}
export default class Post extends React.Component<IPostProps> {
  public render() {
    const { image } = this.props;
    return (

      <div style={style}>
        <img src={image} alt="Imagen de prueba" />
        <Footer/>
     
      </div>

    )
  }
}
