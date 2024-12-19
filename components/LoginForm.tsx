import React from 'react'
import AuthButton from './AuthButton'
import { loginWithCredentials } from '@/actions/auth'

const LoginForm = () => {
  return (
    <div>
        <form action={loginWithCredentials} className='w-full flex flex-col gap-4'>
            <div>
                <label className='block text-sm font-medium text-gray-200' htmlFor="email">Email</label>
                <input type="email" placeholder="Email" id="email" name="email" className='mt-1 w-full px-4 p-2 h-10 rounded-md border border-gray-200'/>
            </div>
             <div>
                <label className='block text-sm font-medium text-gray-200' htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" name="password" className='mt-1 w-full px-4 p-2 h-10 rounded-md border border-gray-200'/>
            </div>
            <div className='mt-4'>
                <AuthButton />
            </div>
        </form>
      
    </div>
  )
}

export default LoginForm
