'use client'

import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';

/**
 * A form for logging in to the application.
 *
 * Contains the following fields:
 *  - Email
 *  - Password
 *  - Remember me
 *
 * When the form is submitted, it will send a request to the server to verify the credentials.
 *
 * @returns A JSX element containing the login form.
 */
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false // Don't redirect automatically so you can handle it manually
    });
    console.log(result);
    

    if (result?.error) {
      console.error(result.error);
      // Handle error (display a message, etc.)
    } else {
      redirect('/'); // Redirect after successful login
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  } 

  return (
    <div className="max-w-sm mx-auto flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col">
        {/* Google & GitHub Sign-In Buttons */}
        <div className="mb-5 flex flex-col items-center justify-center py-10">
          <button onClick={() => signIn('google')} className="bg-white py-2 px-6 text-black rounded-3xl mb-4">Sign in with Google</button>
          <button onClick={() => signIn('github')} className="bg-white py-2 px-6 text-black rounded-3xl">Sign in with GitHub</button>

          {/* Email input */}
          <label htmlFor="email" className="flex flex-col mb-2 text-sm items-center font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>

        {/* Password input */}
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        {/* Remember me checkbox */}
        <div className="flex items-start mb-5">
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          />
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Remember me
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default LoginPage;