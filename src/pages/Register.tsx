import React, {useState, SyntheticEvent} from 'react';

    const Register = () => {

        const [name, setName] = useState(''); //name is variable, setName is function
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const submit = (e: SyntheticEvent) => {
        e.preventDefault(); // prevent refresh
        console.log({   //log to browser console
            name,
            email,
            password
        })
        } //

        return(
        <div>
            <form onSubmit={submit}> //call function named submit
                <h1 className="h3 mb-3 fw-normal">Please register</h1>

                <input  className="form-control"  placeholder="name" required
                    onChange = {e => setName(e.target.value)}
                />

                <input type="email" className="form-control"  placeholder="name@example.com"
                    onChange = {e => setEmail(e.target.value)} //listener
                />

                <input type="password" className="form-control"  placeholder="Password"
                    onChange = {e => setPassword(e.target.value)}
                />

                <button className="btn btn-primary w-100 py-2" type="submit">Submit</button>
            </form>
        </div>
        );
    };

    export default Register