import React , {useState} from 'react';
import '../sass/SignUp.scss';
import { Link } from 'react-router-dom';

function Login() {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [num, setNum] = useState('');

    return (
        <div>
            <div className="signUp">
                <div className="signCard">
                <img src="/img/login.jpg" alt="rasm topilmadi"/>
                    <h1>Login</h1>
                    <div className="signHeader">
                        <div className="form">
                            <label>First Name</label>
                            <input 
                            value={first} 
                            type="text"
                            required
                            onChange={(e) => setFirst(e.target.value)}
                            />
                        </div>
                        <div className="form">
                            <label>Last Name</label>
                            <input 
                            value={last} 
                            type="text"
                            required
                            onChange={(e) => setLast(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="signHeader">
                        <div className="form">
                            <label>Email</label>
                            <input 
                            value={email} 
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form">
                            <label>Phone Number</label>
                            <input 
                            value={num} 
                            type="number"
                            onChange={(e) => setNum(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="signFooter">
                        <ul>
                            <li>
                                <Link to="/sign">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/log">Submit</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
