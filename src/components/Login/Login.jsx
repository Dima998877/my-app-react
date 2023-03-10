import React from 'react'
import style from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { Input } from '../Common/FormControls/FormControls'
import {required } from '../../utils/validators/validators'

const LoginForm = (props) => { 
   return (
   <form onSubmit={props.handleSubmit}className={style.login_container}>
      <div><Field placeholder={'Email'} name={'email'} component={Input} validate={[required]} /></div>
      <div><Field placeholder={'Password'} name={'password'} component={Input} type={'password'} validate={[required]} /></div>
      <div><Field type={'checkbox'} name={'rememberMe'} component={'input'}/>Remember me</div>
      <div><button>Login</button></div>
   </form>
   )
}


const LoginReduxForm = reduxForm({
   form: 'login'
 })(LoginForm)


const Login = (props) => { 
   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe)
   }
   if (props.isAuth) { 
   return <Navigate to={'/profile'}/>
}
   return <div>
      <h1>Please enter your login and passwo</h1>
   <LoginReduxForm onSubmit={onSubmit}/>
   </div>
}
const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)