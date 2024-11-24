"use client"

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-zinc-800 mt-10 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-content-center justify-center">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex flex-col space-y-4">
              <Image 
                src="https://i.postimg.cc/4NdbXCFd/image.png"
                alt="School Logo"
                width={200}
                height={80}
                className="mb-4"
              />
              <p className="text-gray-600 dark:text-zinc-200 max-w-md">
                We are committed to providing quality education and nurturing young minds
                to become responsible citizens and future leaders.
              </p>
            </div>
          </div>

          {/* Quick Contact */}
          <div className='dark:text-zinc-200'>
            <h3 className="text-xl font-semibold mb-4 dark:text-zinc-200">Quick Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5  text-blue-600 mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@schoolname.edu</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">
                    123 Education Street,
                    <br />City, State 12345
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-blue-800 text-white hover:bg-blue-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">School Hours</h4>
              <p className="text-gray-600">
                Monday - Friday
                <br />8:00 AM - 3:30 PM
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Vishal Bharti Senior Secondary School. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;