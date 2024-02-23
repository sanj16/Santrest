"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"
import { HiBell, HiChat, HiSearch } from "react-icons/hi";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import app from './../Shared/firebaseConfig';


function header() {
  const { data: session } = useSession();
  const db = getFirestore(app);

  useEffect(()=>{
    saveUserInfo();
  },[session])

  const saveUserInfo = async () => {
    if (session?.user) {
      await setDoc(doc(db, "user", session.user.email || ""), {
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image
      });
    }
  }
  console.log(session);
  return (
    <div className='flex gap-3 md:gap-2 items-center p-6'>
      <Image src='/logo.png' alt='logo'
        width={60} height={60} className='hover:bg-gray-300 p-2
        rounded-full cursor-pointer'/>
        <button className='bg-white text-black p-2 px-4 rounded-full'>Home</button>
        <button className='font-semibold p-2 px-4 rounded-full'>Create</button>
        <div className='bg-[#e9e9e9] p-3 flex gap-3 items-center rounded-full w-full hidden md:flex'>
            <HiSearch className='text-[25px] text-gray-500 md:hidden'/>
            <input type='text' placeholder='Search' style={{ color: 'black' }} className='bg-transparent outline-none ' />
        </div>
        <HiBell className='text-[40px] text-gray-300' />
            <HiChat className='text-[40px] text-gray-300'/>

        {session?.user ?  
          <Image src={session.user.image ?? ''}
          alt='user-image' width={60} height={60}
            className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/> :

        <button className='font-semibold p-2 px-4 rounded-full' onClick={() => signIn()}>Login</button>}
        




      </div>
        
        
        )
}

export default header