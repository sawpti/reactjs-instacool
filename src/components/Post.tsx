import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faRetweet } from '@fortawesome/free-solid-svg-icons'


const style = {
  backgroundColor: 'white',
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '10px 15px',


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
        <div style={{
          display:'flex',
          backgroundColor: '#eee',
          marginLeft: '-15px',
          marginBottom: '-10px',
          width: 'calc(100% + 30px)'
        }}>
          <div style={{flex:1, textAlign:'center', padding:'10px, 15px', cursor:'pointer' }}> <FontAwesomeIcon icon={faThumbsUp}/> Like</div>
          <div style={{flex:1, textAlign:'center', padding:'10px, 15px', cursor:'pointer' }}> <FontAwesomeIcon icon={faRetweet}/> Compartir</div>
           
       </div>
      </div>

    )
  }
}
