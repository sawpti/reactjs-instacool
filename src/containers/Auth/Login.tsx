
import * as React from 'react';
import {Link} from 'react-router-dom'
import Button from '../../components/Button';
import Card from '../../components/Card';
import Center from '../../components/Center';
import Container from '../../components/Container';
import Input from '../../components/Input';

import Title from '../../components/Title';

export default class Login extends React.Component {
    public render() {
        return (
            <Container>
            <Card >
              <Center>
              <Title>Inicio de sesión</Title>
              </Center>
              <Input label='Correo' placeholder='Correo'/>
              <Input label='Contraseña' placeholder='Contraseña'/>
              <Button block={true}  >Entrar</Button>
              <Center>
              <Link to='/registro'>Registrarse</Link>
              </Center>     
            </Card>
          </Container>
        )
    }
}
