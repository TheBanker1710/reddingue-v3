import { SignUp } from '@clerk/nextjs';
 import React from 'react'
 
 export default function PageSignIn() {
   return (
     <section className='w-full h-screen flex items-center justify-center flex-col'>
        <SignUp />       
     </section>
   )
 }
 