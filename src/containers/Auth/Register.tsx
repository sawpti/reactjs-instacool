import * as React from 'react';
import {Link} from 'react-router-dom'
import Button from '../../components/Button';
import Card from '../../components/Card';
import Center from '../../components/Center';
import Container from '../../components/Container';
// import Input from '../../components/Input';
import Title from '../../components/Title';

export default class Register extends React.Component {
    public render() {
        return (
            <Container center= {true}>
            <Card >
              <Center>
              <Title>Registro de usuarios</Title>
              </Center>
            {/* {  <Input label='Nombres' placeholder='Nombres'/>
              <Input label='Apellidos' placeholder='Apellidos'/>
              <Input label='Ciudad' placeholder='Ciudad'/>
              <Input label='Comuna' placeholder='Comuna'/>
              <Input label='Correo' placeholder='Correo'/>
              <Input label='Contraseña' placeholder='Contraseña'/> */}
              <Button block={true}  >Registrarse</Button>} 
              <Center>
              <Link to='/'>Iniciar sesión</Link>
              </Center>     
            </Card>
          </Container>
        )
    }
}