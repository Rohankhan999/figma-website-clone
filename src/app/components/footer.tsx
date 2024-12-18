import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdSend } from 'react-icons/md'

export default function Footer() {
    return (
        <div className='bg-black text-white pt-10 px-5 md:px-20 font-poppins'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 px-2 md:px-10'>
                    {/* Subscription Section */}
                    <div>
                        <h2 className='font-medium text-lg md:text-xl'>Exclusive</h2>
                        <p className='mt-4 text-zinc-200 text-sm md:text-base font-light'>Subscribe</p>
                        <p className='mt-2 text-zinc-200 text-sm md:text-base font-light'>Get 10% off your first order</p>
                        <div className='mt-4 relative border border-white rounded'>
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='bg-black text-white p-2 text-sm md:text-base flex-grow outline-none rounded-sm w-full'
                            />
                            <button
                                type='submit'
                                className='absolute top-1 right-2 transform-translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-slate-800'
                            >
                                <MdSend />
                            </button>
                        </div>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h2 className='font-medium text-lg md:text-xl'>Support</h2>
                        <p className='mt-4 text-zinc-200 text-sm md:text-base font-light'>
                            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                        </p>
                        <p className='mt-3 text-zinc-200 text-sm md:text-base font-light'>exclusive@gmail.com</p>
                        <p className='mt-3 text-zinc-200 text-sm md:text-base font-light'>+88015-88888-9999</p>
                    </div>

                    {/* Account Section */}
                    <div>
                        <h2 className='font-medium text-lg md:text-xl'>Account</h2>
                        <ul className='mt-4 space-y-2 text-zinc-200 text-sm md:text-base font-light'>
                            <li>My Account</li>
                            <li>Login / Register</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Shop</li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h2 className='font-medium text-lg md:text-xl'>Quick Link</h2>
                        <ul className='mt-4 space-y-2 text-zinc-200 text-sm md:text-base font-light'>
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Download App Section */}
                    <div>
                        <h2 className='font-medium text-lg md:text-xl'>Download App</h2>
                        <p className='mt-4 text-zinc-200 text-sm md:text-base font-light'>
                            Save $3 with App New User Only
                        </p>
                        <div className='mt-4 flex flex-col md:flex-row items-start gap-2'>
                            <div className='w-[80px] h-[80px] md:w-[100px] md:h-[100px]'>
                                <img src="/qr.png" alt="Qr Code" className='w-full h-full object-contain' />
                            </div>

                            <div>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                                    alt="Google Play"
                                    className='w-32 h-10 md:w-36 md:h-12 object-contain mb-2'
                                />
                                <img
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="Apple Play"
                                    className='w-32 h-10 md:w-36 md:h-12 object-contain'
                                />
                            </div>
                        </div>

                        <div className='flex space-x-4 mt-4'>
                            <a href="#" className='hover:text-gray-400'>
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className='hover:text-gray-400'>
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className='hover:text-gray-400'>
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className='hover:text-gray-400'>
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className='mt-10 text-center border-t border-zinc-800 text-zinc-600'>
                    <p className='py-4 text-sm'>© Copyright Rimel 2022. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}
