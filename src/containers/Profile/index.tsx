import * as React from 'react';
import ProfileImg from '../../components/ProfileImg';
import Button from 'src/components/Button';
import Card from 'src/components/Card';

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
       // padding: '15px',
    }
    // container: {
        // display: 'flex',
        // justifyContent: 'space-between',
        // padding: '15px',
    // }
}

export default class Profile extends React.Component {
    public render() {

        return (
            <div className="container-fluid">
                <div  style={styles.row}>
                    <ProfileImg />
                    <Button>Agregar</Button>
                </div>
                <div style={styles.row}>
                    <Card>hola</Card>
                    <Card>hola</Card>
                    <Card>hola</Card>
                   
                </div>
            </div>
        );
    }
}
