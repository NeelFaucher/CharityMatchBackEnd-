import { useState } from "react";

const Login = ({ setlogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const verifyLogin = () => {
        setlogin(true);
    }

    return (<div>
        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button onClick={() => {
            verifyLogin()
            console.log(`${email} -- ${password}`)
        }}>Submit</button>
    </div>)
}

export default Login;