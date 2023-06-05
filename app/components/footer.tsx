'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

    return (

        <footer className="text-white" style={
            {
                backgroundColor: "#111"
            }
        }>
            <div className="container mx-auto py-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-green-500">Contact Us</h4>
                    <p className="mb-2">Email: <a href='mailto:info@dripplug.io' className='text-neutral-400 underline'>info@dripplug.io</a></p>
                    <p>Address: <span className='text-neutral-400'>105 E Maplewood St Walsh, Colorado(CO), 81090</span></p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4 text-green-500">Shipping & Delivery</h4>
                    <p className="mb-2">Estimated delivery: 7-28 business days <span className='text-red-400 text-sm'>(Depending on circumstances)</span></p>
                    <p>International shipping available</p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4 text-green-500">Return & Exchange</h4>
                    <p>
                        Not all products are eligible for return. Please check the product page for return eligibility.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4 text-green-500">About Drip Plug</h4>
                    <p className="mb-4">We specialize in offering affordable designer clothes made in China.</p>
                    <p>Follow us on social media:</p>
                    <div className="flex mt-2">
                    <a href="#" className="mr-2 text-gray-500">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="mr-2 text-gray-500">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="mr-2 text-gray-500">
                        <i className="fab fa-twitter"></i>
                    </a>
                    </div>
                </div>
                </div>

                <div className="mt-8 text-center">
                <p>&copy; { new Date().getFullYear() } Drip Plug. All rights reserved.</p>
                <p className="text-sm"><a href="#" className='text-green-800'>Terms & Conditions</a> | <a href="#" className='text-green-800'>Privacy Policy</a></p>
                </div>
            </div>
        </footer>

    );
}

export default Footer;