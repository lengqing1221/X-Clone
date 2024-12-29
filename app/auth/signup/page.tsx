'use client'

import React, { useState } from 'react'

import { signIn } from 'next-auth/react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import SignIn from '@/components/signIn';
// redireciint back to homepage with informatio

const SignUpPage = () => {
  const [popUp, setPopUp] = useState(false)

  return (
    <div className={`flex lg:h-screen h-auto flex-col w-screen min-h-screen bg-black text-white `}>
      <SignIn isVisible={popUp} onClose={() => setPopUp(false)} className='opacity-100'/>
      <div className={`${popUp ? 'opacity-20' : ''} lg:-mb-10 sm:items-start xs:items-center mx-auto md:mb-10 flex lg:flex-row md:flex-col md:justify-center flex-col md:mx-auto md:space-y-10 md:mt-10 items-start lg:w-screen lg:max-h-screen md:h-auto sm:h-auto`}>
      <div className='lg:w-7/12 md:w-[30%] md:h-auto lg:min-h-[90vh] xs:w-[30%] xs:w-auto items-center  flex w-auto justify-center sm:max-w-[35%] sm:mx-auto'>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[60%] r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr"><g><path fill='white' d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
      </div>
      <div className='xs:items-center sm:items-start xs:items-center w-5/12 flex flex-col justify-center items-start'>
        <h1 className='signUp_header text-5xl text-nowrap font-extrabold tracking-wider'>Happening now</h1>
        <div className='signUp_form text-2xl w-auto font-bold'>
          <h2 className='mb-4 mt-20 font-bold text-3xl'>Join today.</h2>
          <div className='mt-8 w-[250px] h-auto'>
          <button onClick={() => signIn('google')} className='flex mt-4 items-center text-xs font-extralight w-full rounded-full px-10 py-2 cursor-pointer bg-white text-black mb-2 justify-center'>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png" alt="Google Logo" width={20} height={20} className='ml-2' />
            <span className='text-xs px-2 font-extralight'>Sign up with Google</span>
            </button>
          <button onClick={() => signIn('github')} className='flex items-center text-xs font-extralight rounded-full px-10 w-full py-2 cursor-pointer bg-white text-black'>
          <Image src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Github Logo" width={20} height={20} className='ml-2' />
            <span className='text-xs px-2 font-extralight'>Sign up with Github</span></button>
            <span className='flex items-center w-full space-x-2'>
            <hr className="w-full h-[.5px] bg-customGray border-0" />
            <span className='text-sm'>or</span><hr className='w-full bg-customGray border-0 h-[.5px]'/>
            </span>
            <button onClick={() => setPopUp(true)} className='bg-[#198cd8] rounded-full px-10 text-xs py-2 text-white font-extralight w-full'>Create account</button>
            <p className='text-[9px] mb-4 leading-tight mt-2'>
            By signing up, you agree to the <span className='text-customBlue'>Terms of Service</span> and <span className='text-customBlue'>Privacy Policy</span>, including <span className='text-customBlue'>Cookie Use</span>.
            </p>
            <span className='text-sm mb-4'>Already have an account?</span>
            <button className='mt-4 bg-transparent border border-slate-500 text-customBlue rounded-full px-10 py-2 w-full font-extrabold text-sm'>Sign in</button>
            </div>  
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignUpPage
