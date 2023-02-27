import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()
    const [cred, setcred] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        submitdata()
        setcred({
            email: '',
            password: ''
        })
    }
    const submitdata = async () => {
        try {
            const res = await axios.post('/user/login', cred)
            const response = await res.data
            if (response.success) {
                localStorage.setItem("token", response.token)
                toast.success(response.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    navigate('/landing')
                }, 1000);
            } else {
                toast.error(response.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            toast.error('user not exist', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center bg-gray-50 text-gray-800 mx-auto">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <h1 className="text-3xl font-semibold">Login to your account</h1>
            <form onSubmit={handleSubmit} noValidate="" className="space-y-4 ng-untouched ng-pristine ng-valid">
                <div className="flex flex-col space-y-5 ">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input required value={cred.email} onChange={(e) => setcred({
                        ...cred,
                        email: e.target.value
                    })} id="email" type="email" placeholder="Email address" className="rounded-t-md border border-gray-400 bg-gray-50 text-gray-800 focus:ring-indigo-600 focus:border-indigo-600 focus:ring-2 p-3" />
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input required
                        value={cred.password} onChange={(e) => setcred({
                            ...cred,
                            password: e.target.value
                        })} id="password" type="password" placeholder="Password" className="-mt-1 rounded-b-md border border-gray-400 bg-gray-50 text-gray-800 focus:ring-indigo-600 focus:border-indigo-600 focus:ring-2 p-3" />
                </div>
                <div className="flex items-center">
                    Don't have an account,

                    <Link to="/" relative="path" className="cursor-pointer text-blue-800 text-sm"> Signup</Link>
                </div>
                <div className="flex justify-between">
                    <a className="text-sm text-gray-600" href="/">Forgot your password?</a>
                </div>

                <button type="submit" className="px-8 py-3 space-x-2 font-semibold rounded bg-indigo-600 text-gray-50">Login</button>
            </form>
        </div>
    )
}

export default Login