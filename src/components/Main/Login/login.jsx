import React from 'react';
import st from './Login.module.css';
import { reduxForm, Field } from 'redux-form';


const LoginForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit} >
                <Field
                    component={'input'}
                    name={'login'}
                    className={st.inline_block}
                    placeholder={'Login'} />
                <Field
                    component={'input'}
                    name={'password'}
                    className={st.inline_block}
                    placeholder={'Password'} />
                <Field
                    name={'remember'}
                    component={'input'}
                    type="checkbox" /> Remember me
                <button className={st.inline_block}>Login</button>
            </form>
        </>
    );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = () => {
    const onSubmit = (formData)=>{
        console.log(formData);
    }

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

export default Login;