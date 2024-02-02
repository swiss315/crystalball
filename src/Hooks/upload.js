import { useState } from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie';
import { Apiurl } from '../Helper/Helper';

export const useUpload = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const cookies = new Cookies();

    const upload = async (data) => {
        setIsLoading(true)
        setError(null)
        let token =cookies.get('xhrToken')

        await axios.post(`${Apiurl}/crystal`, data ,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            } ).then((response) => {
            console.log(response);
            localStorage.setItem('xhrReference', JSON.stringify(response));
            setIsLoading(false)

        }).catch((err) => {
            setIsLoading(false)
            setError(err.response.data.message)
        })
    }

    return { upload, isLoading, error}
}
