"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

const AuthButton = () => {
    const {pending} = useFormStatus();
  return (
    <button className={`${pending ? "bg-gray-600" : "bg-blue-600"} rounded-md w-full px-12 py-3 text-sm font-medium text-white`} disabled={pending} type="submit">{pending ? "Loading..." : "Sign in"}
      
    </button>
  )
}

export default AuthButton
