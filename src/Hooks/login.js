import { useState } from 'react'
import axios from 'axios'
import { useAuthContext } from './context'
import { useNavigate } from 'react-router-dom'
import { Cookies } from 'react-cookie';
import { Apiurl } from '../Helper/Helper';

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const cookies = new Cookies();
    const { dispatch } = useAuthContext()

    const maxNum = 1 * 24 * 60 * 60

    let Navigate = useNavigate()

    const login = async (data) => {
        setIsLoading(true)
        setError(null)

        await axios.post(`${Apiurl}/broker/login`, data ,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            } ).then((response) => {
            console.log(response);
            const token = response.data.data.token
            let data = {
                firstname: response.data.data.firstname,
                lastname: response.data.data.lastname,
                userid: response.data.data.user_id
            }
            data = btoa(JSON.stringify(data))

            cookies.set("xhrToken" , token, { path: '/', maxAge: maxNum, sameSite: 'lax', secure: true });
            cookies.set("xhrUserxx" , data, { path: '/', maxAge: maxNum, sameSite: 'lax', secure: true });
            if(response.data.data) {
                dispatch({type : 'LOGIN' ,  token: token})
                Navigate('/dashboard', {state: 'login'})
            }
            setIsLoading(false)

        }).catch((err) => {
            setIsLoading(false)
            setError(err.response.data.message)
            // console.log(err.response.data)
        })
    }

    return { login, isLoading, error}
}
