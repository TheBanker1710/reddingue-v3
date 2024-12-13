import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
   <section className='w-full h-screen flex items-center justify-center flex-col'>
    <h1 className='text-4xl font-black text-gray-900'>Red Dingue</h1>  
    <p>Extranet</p>
    <div className='flex items-center justify-center gap-2'>
      <Link href="/sign-in" className='bg-gray-900 hover:bg-gray-700 p-3 rounded-md text-white my-2'>Se connecter</Link>
      <Link href="/sign-up" className='border border-gray-900 text-gray-900 p-3 rounded-md my-2 hover:bg-gray-700 hover:border-gray-700 hover:text-white'>S'inscrire</Link>
    </div>
   </section>
  );
}
