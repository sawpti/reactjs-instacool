import * as React from 'react';
import { Link } from 'react-router-dom'
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import Button from './Button';
import Input from './Input';
import Center from './Center';

class LoginForm extends React.Component<InjectedFormProps<{email:string}>>{
  public render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field  label='Correo' placeholder='Correo' name='email' type='email' component={Input}  />
        <Field label='Contraseña' placeholder='Contraseña' name='password' type='password' component={Input}  />
        <Button block = {true}  >Entrar</Button>
        <Center>
          <Link to='/registro'>Registrarse</Link>
        </Center>
      </form>
    );
  }
}
export default reduxForm({
  form: 'login'
})(LoginForm)

