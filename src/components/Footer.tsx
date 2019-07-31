import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faRetweet } from '@fortawesome/free-solid-svg-icons'

const styles = {
    footer: {
        display: 'flex',
        backgroundColor: '#eee',
        marginLeft: '-15px',
        marginBottom: '-10px',
        width: 'calc(100% + 30px)'
    },
    button: {
        flex: 1,
        textAlign: 'center',
        padding: '10px, 15px',
        cursor: 'pointer'
    } as React.CSSProperties,


}



export default class Footer extends React.Component {
    public render() {
        return (
            <div style={styles.footer}>
                <div style={styles.button}> <FontAwesomeIcon icon={faThumbsUp} /> Like</div>
                <div style={styles.button}> <FontAwesomeIcon icon={faRetweet} /> Compartir</div>

            </div>
        );
    }
}
