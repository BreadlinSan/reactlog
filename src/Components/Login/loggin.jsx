import React, {useState} from "react";
export const Login = (props) => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const handleSubmit = (e) => {
        console.log(email);
        email.preventDefault();
    }
    return (
        <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter email id" id="email" name="email"/>
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}  type="password" placeholder="enter password id" id="password" name="password"/>
            <button type="submit">Login</button>
            <button className="link-btn" onClick={() => props.onFormSwitch('register') }> Don't have an account ?. Register</button>
        </form>

        </div>
    )
}