"use client"

import { useRouter } from 'next/navigation'
import classes from './page.module.scss'
import { useState } from 'react'
import ErrorModal from '../components/ErrorModal/ErrorModal'
import { useAppDispatch, useAppSelector } from '../lib/redux/hooks'
import { showError } from '../lib/redux/serviceSlice'

export default function SignUp() {
const router = useRouter()
const isShowErr = useAppSelector(state=>state.serviceSlice.isErrorShow)
const dispatch = useAppDispatch()

async function register(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const dataObj = {
        email: formData.get('email'),
        fullname: formData.get('name'),
        password: formData.get('password'),
        nickname: formData.get('login')
    }
    console.log('DATA ONG')
    console.log(JSON.stringify(dataObj))
    const res = await fetch('http://localhost:4200/auth/register', {
        method: 'POST',
        body: JSON.stringify(dataObj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const resData = await res.json()
        router.push('/userProfile')
    }
    else dispatch(showError(true))
}

    return(
        <div className={classes.Wrapper}>
            <div className={classes.Title}>
            <h1>РЕШИЛ НАЧАТЬ ХАКАТОНИТЬ?</h1>
            <h1>WELCOME!</h1>
            </div>
            <form onSubmit={(e)=>register(e)}>
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name" name="name" required/>
                    <label htmlFor="surname">Фамилия</label>
                    <input type="text" id="surname" name="surname" required/>
                    <label htmlFor="login">Никнейм</label>
                    <input type="text" id="login" name="login" required/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" id="password" required/>
                    <label htmlFor="contact">Предпочтительный контакт для связи</label>
                    <input type="text" id="contact" name="contact" required/>
                    <div className={classes.About}>
                    <label htmlFor="about">О себе</label>
                    <textarea name="about" id="about"></textarea>
                    </div>
                    <div className={classes.Agreement}>
                    <input type="checkbox" id="agreement" name="agreement" required/>
                    <label htmlFor="agreement">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet egestas lectus. Pellentesque vel finibus velit. Nunc vitae metus pharetra, eleifend leo eu, luctus neque. Etiam porta turpis sed tellus aliquam, sed gravida sapien sollicitudin. Nullam porta arcu nunc. In in nisi tincidunt, ornare arcu sed, congue leo. Nam imperdiet arcu et dui facilisis vestibulum.</label>
                    </div>
                <button className={classes.SignUpBtn} type='submit'>Зарегистрироваться</button>
            </form>
            {isShowErr&&<ErrorModal errText='Такой пользователь уже зарегестрирован'/>}
        </div>
    )
}