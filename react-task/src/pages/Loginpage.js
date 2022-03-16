import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'

import '../styles/LoginPage.css'


function Loginpage(props) {
    let navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const user = useSelector(({user}) => user)
    const dispatch = useDispatch(user);

    const handleSubmit = (e) => {
        if(login === 'admin' && password === "1234") {
            dispatch({type: "LOG_IN"});
            navigate(`/`)
        }
        else alert('Wrong password')
        e.preventDefault();
    }

    return (
        <div className='container loginpage'>
            <h1>LogIn</h1>
            <form onSubmit={handleSubmit} className='login__form'>
                <label className='inputs'>
                    <input className='text__input' placeholder='username' type="text" onChange={e => {setLogin(e.target.value)}}/>
                    <input className='text__input' placeholder='password' type="password" onChange={e => {setPassword(e.target.value)}}/>
                </label>
                <input type="submit" className='submit__btn' value={'LogIn'}/>
            </form> 
        </div>
    );
}

export default Loginpage;