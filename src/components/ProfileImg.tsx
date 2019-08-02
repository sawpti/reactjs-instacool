import * as React from 'react';


const styles ={
    img:{
        borderRadius: '100%',
    }
}

export interface IProfileProps {
    urlfoto?: string
}

export default class ProfileImg extends React.Component<IProfileProps> {
    public render() {
        const { urlfoto = "http://placeimg.com/100/100/nature" } = this.props
        return (
            <div >
                <img  style={styles.img} src={urlfoto}  alt="Foto de perfil"/>
          
            </div>
        );
    }
}
 