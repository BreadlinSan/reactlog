import React, {useState} from "react";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        console.log(email);
        email.preventDefault();
    }
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="Enter Full name"></input>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter email id" id="email" name="email"/>
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}  type="password" placeholder="enter password id" id="password" name="password"/>
            <button type="submit">Login</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login') }>Already have an account. Login</button>
        </div>
    )
}