import React, {useState, SyntheticEvent} from 'react';


    const Login = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const submit = async (e: SyntheticEvent) => {
        e.preventDefault(); // prevent refresh

             await fetch('http://localhost:8000/api/login',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                credentials:'include',
                body: JSON.stringify({
                    email,
                    password
                })
            });

            //setRedirect(true);
        }

        return(
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <input type="email" className="form-control"  placeholder="name@example.com"
                    onChange = {e => setEmail(e.target.value)}
                />

                <input type="password" className="form-control"  placeholder="Password"
                    onChange = {e => setPassword(e.target.value)}
                />

                <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            </form>
        </div>
        );
    };

    export default Login