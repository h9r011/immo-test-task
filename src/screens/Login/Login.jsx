import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form';
import {login} from '../../redux/auth/auth-thunks';
import {getAuthData} from '../../redux/auth/auth-selectors';
import TextInput from '../../components/common/Controls/TextInput/TextInput';
import style from './Login.module.css';

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login({password: formData.password, login: formData.login});
  };

  if (props.auth.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div className={style.login}>
      <h2 className={style.login__title}>Authorization</h2>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field type='text'
             name='login'
             placeholder='example@mail.com'
             component={TextInput}/>
      <Field type='password'
             name='password'
             placeholder='****'
             component={TextInput}/>
      {
        props.error
          ? <div className={style.error}>
              <span>{props.error}</span>
            </div>
          : null
      }
      <button type='submit' className={style.submit}>Login</button>
    </form>
  );
};

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

let mapStateToProps = (state) => ({
  auth: getAuthData(state)
});

export default connect(mapStateToProps, {login})(Login);