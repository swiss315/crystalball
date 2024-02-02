import { useState } from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie';
import { Apiurl } from '../Helper/Helper';

export const useData = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const cookies = new Cookies();

    const reference = async () => {
        setIsLoading(true)
        setError(null)
        let token =cookies.get('xhrToken')
        let reference = localStorage.getItem('xhrReference')

        await axios.get(`${Apiurl}/crystal/chart/${reference}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            } ).then((response) => {
            console.log(response);
            setIsLoading(false)

        }).catch((err) => {
            setIsLoading(false)
            setError(err.response.data.message)
        })
    }

    return { reference, isLoading, error}
}
