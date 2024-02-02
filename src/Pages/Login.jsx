import React, {useState} from 'react';
import {ReactComponent as LoginImage} from "../Assets/Icons/Login.svg";
import {useLogin} from "../Hooks/login";

function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const { login } = useLogin()
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data)
        await login(data)
    }
    return (
        <div>
            <div className='flex' style={{height: '100vh'}}>
                <div className='w-1/2 bg-green-500 flex flex-col justify-center items-center'>
                    <LoginImage />
                </div>
                <div className='flex flex-col justify-center items-center w-1/2'>
                    <div className='flex flex-col min-w-[50%] p-4 rounded' style={{boxShadow: '0px 4px 20px 0px #0B22391F'}}>
                        <h1 className='text-center text-2xl font-semibold'>Welcome</h1>
                        <form onSubmit={handleSubmit} >
                            <div className=' w-full py-4'>
                                <label className='font-semibold'>Email</label>
                                <input type='email' name='email' onChange={(e) => setData({...data, email: e.target.value})}
                                       className='block px-2 py-2 w-full focus-visible:outline-none border border-gray-300 rounded-lg'
                                       required/>
                            </div>
                            <div className=' w-full '>
                                <label className='font-semibold'>Password</label>
                                <input type='password' name='password' onChange={(e) => setData({...data, password: e.target.value})}
                                       className='block px-2 py-2 w-full focus-visible:outline-none border border-gray-300 rounded-lg'
                                       required/>
                            </div>
                            <div className='w-full py-4'>
                                <button type='submit' className='block px-4 py-2 w-full focus-visible:outline-none border border-transparent text-white rounded-lg bg-green-500 hover:bg-green-600'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;