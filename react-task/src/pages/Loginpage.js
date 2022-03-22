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
        e.preventDefault();

        let details = {
            'login' : login,
            'password': password,
        }
        let formBody = [];
        for(let property in details){
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property])
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: 'React Hooks POST Request Example' })
            };
            fetch(`auth`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: formBody
            })
                .then(response => response.json())
                .then(data => {
                    if(data){
                        dispatch({type: "LOG_IN"});
                        navigate(`/`)
                    }
                    else alert('Wrong password or login')
                });
        


        // if(login === 'admin' && password === "1234") {
        //     dispatch({type: "LOG_IN"});
        //     navigate(`/`)
        // }
        // else alert('Wrong password')
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