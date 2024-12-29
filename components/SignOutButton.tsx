'use client'

import React from 'react'
import { signOut } from 'next-auth/react'

const SignOutButton = () => {
  return (
        <button className="text-white" onClick={() => signOut()}>Signout</button>
  )
}

export default SignOutButton
