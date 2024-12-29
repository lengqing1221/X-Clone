'use client'

import { signIn } from 'next-auth/react'
import X from './svg/X'
import Image from 'next/image'
import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const SignIn = ({ isVisible, onClose, className }: { isVisible: boolean; onClose: () => void; className?: string }) => {
  const { data: session, status } = useSession()
  console.log(status, session);
  
  const isAuthenticated = status === 'authenticated'

  return (
    <>
    {isAuthenticated && redirect('/')}
      <div
        className={clsx(
          'z-10 w-[500px] translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 h-[580px] bg-black rounded-2xl absolute py-2 justify-center flex',
           isVisible ? 'block' : 'hidden',
           className
        )}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="absolute w-8 h-8 top-2 left-2 rounded-full hover:bg-transparentBlack px-2 py-2 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03 bg-rgb(239, 243, 244)"
          onClick={onClose}
        >
          <g>
            <path
              fill="white"
              d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
            ></path>
          </g>
        </svg>
        <X className="absolute top-2" />
        <div className="flex flex-col text-white mt-20">
          <h1 className=" font-extrabold text-2xl">Join X today</h1>
          <div className="mt-8 w-[250px] h-auto">
            <button
              onClick={() => signIn('google')}
              className="flex mt-4 items-center text-xs font-extralight w-full rounded-full px-10 py-2 cursor-pointer bg-white text-black mb-2 justify-center"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png"
                alt="Google Logo"
                width={20}
                height={20}
                className="ml-2"
              />
              <span className="text-xs px-2 font-extralight">Sign up with Google</span>
            </button>
            <button
              onClick={() => signIn('github')}
              className="flex items-center text-xs font-extralight rounded-full px-10 w-full py-2 cursor-pointer bg-white text-black"
            >
              <Image
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                alt="Github Logo"
                width={20}
                height={20}
                className="ml-2"
              />
              <span className="text-xs px-2 font-extralight">Sign up with Github</span>
            </button>
            <span className="flex items-center w-full space-x-2">
              <hr className="w-full h-[.5px] bg-customGray border-0" />
              <span className="text-sm">or</span>
              <hr className="w-full bg-customGray border-0 h-[.5px]" />
            </span>
            <button className="bg-[#198cd8] rounded-full px-10 text-xs py-2 text-white font-extralight w-full">
              Create account
            </button>
            <p className="text-[9px] mb-4 leading-tight mt-2">
              By signing up, you agree to the <span className="text-customBlue">Terms of Service</span> and{' '}
              <span className="text-customBlue">Privacy Policy</span>, including{' '}
              <span className="text-customBlue">Cookie Use</span>.
            </p>
            <span className="text-sm mb-4">
              Have an account already?{' '}
              <a href="" className="text-customBlue font-normal ">
                Login in
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
