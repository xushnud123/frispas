import React , {useState} from 'react';
import DatePicker from "react-datepicker";
import '../sass/SignUp.scss';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';




function Signup() {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [num, setNum] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [autor, setAutor] = useState('Vobkent , Buxoro');

    const buttons = document.querySelectorAll('a');
    buttons.forEach(btn => {
        btn.addEventListener('click',function(e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);

            setTimeout(() => {
                ripples.remove()
            },1000);
        })
    })

    return (
        <div>
            <div className="signUp">
                <div className="signCard">
                    <img src="/img/form.png" alt="rasm topilmadi"/>
                    <h1>Registration Form</h1>
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
                        <label>Birthday</label>
                        <DatePicker 
                        type="date"
                        selected={startDate} 
                        onChange={date => setStartDate(date)} 
                        />
                        </div>
                        <div className="form">
                        <label>Location</label>
                        <select value={autor} onChange={(e) => setAutor(e.target.value)}>
                            <option value="buxoro">Vobkent , Buxoro</option>
                            <option value="jizzah">Paxtakor , Jizzah</option>
                            <option value="paxtaobod">Paxtaobod , Andijon</option>
                            <option value="kattaqo`rg`on">Kattaqo`rg`on , Samarqand</option>
                        </select>
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
                                <Link to="/log">Login</Link>
                            </li>
                            <li>
                                <Link to="/sign">Submit</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
