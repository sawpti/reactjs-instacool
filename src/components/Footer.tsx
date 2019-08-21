import * as React from 'react'

import { faRetweet, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles ={
    button: {
        cursor:'pointer',
        flex: 1, 
        padding: '10px 15px',
        textAlign: 'center', 
    } ,      
    footer: {
        backgroundColor:'#eee',
        display: 'flex',
        marginBottom:'-10px',
        marginLeft:'-15px',
        width:'calc(100% + 30px)',
    },
}

interface IFooterProps {
like: () => void
share: () => void
}

export default class Footer extends React.Component<IFooterProps>{
    public render(){
        const {like, share} = this.props
        return(
        <div style ={styles.footer}>
            <div onClick={like} style = {styles.button as React.CSSProperties}><FontAwesomeIcon icon={faThumbsUp} />  Like</div>
            <div onClick={share} style = {styles.button as React.CSSProperties}><FontAwesomeIcon icon={faRetweet} />  Compartir</div>
        </div>
        )
    }
}



// import * as React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faThumbsUp, faRetweet } from '@fortawesome/free-solid-svg-icons'

// const styles = {
//     footer: {
//         display: 'flex',
//         backgroundColor: '#eee',
//         marginLeft: '-15px',
//         marginBottom: '-10px',
//         width: 'calc(100% + 30px)'
//     },
//     button: {
//         flex: 1,
//         textAlign: 'center',
//         padding: '10px, 15px',
//         cursor: 'pointer'
//     } as React.CSSProperties,


// }



// export default class Footer extends React.Component {
//     public render() {
//         return (
//             <div style={styles.footer}>
//                 <div style={styles.button}> <FontAwesomeIcon icon={faThumbsUp} /> Like</div>
//                 <div style={styles.button}> <FontAwesomeIcon icon={faRetweet} /> Compartir</div>

//             </div>
//         );
//     }
// }
