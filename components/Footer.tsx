import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col max-w-screen h-auto text-customGray py-4'>
        <div className="top_footer flex flex-wrap mx-auto h-auto">
            <ul className='flex flex-wrap space-x-2 justify-center'>
                <li className='hover:underline text-xs'>About</li>
                <li className='hover:underline text-xs'>Help center</li>
                <li className='hover:underline text-xs'>Terms and Services</li>
                <li className='hover:underline text-xs'>Privacy Policy</li>
                <li className='hover:underline text-xs'>Cookie Policy</li>
                <li className='hover:underline text-xs'>Accessibility</li>
                <li className='hover:underline text-xs'>Ads Info</li>
                <li className='hover:underline text-xs'>Blog</li>
                <li className='hover:underline text-xs'>Careers</li>
                <li className='hover:underline text-xs'>Brand Resources</li>
                <li className='hover:underline text-xs'>Advertising</li>
                <li className='hover:underline text-xs'>Marketing</li>
                <li className='hover:underline text-xs'>X for Business</li>
                <li className='hover:underline text-xs'>Developers</li>
            </ul>
        </div>
        <div className='bottom_footer mx-auto flex flex-wrap items-center mt-2'>
            <ul className='flex flex-wrap space-x-2'>
                <li className='hover:underline text-xs'>Directory</li>
                <li className='hover:underline text-xs'>Settings</li>
                <li className='hover:underline text-xs'>© 2024 X Corp.</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
