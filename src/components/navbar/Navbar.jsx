
'use client'
import React,{useState,useEffect} from 'react'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { BiSun } from 'react-icons/bi';
import { MdOutlineDarkMode } from 'react-icons/md';


const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Service', href: '#', current: false },
  { name: 'Portfolio', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

let flag = 0

const Navbar = () => {

    let [dark, setDark] = useState(true)
    let [navlist, setNavList] = useState(navigation)

    // if(dark){
      
      // if (typeof localStorage !== 'undefined' && dark && flag==0) {
        //   flag++
        // }
        // }
        
        if (typeof localStorage !== 'undefined'){
        
          localStorage.setItem('darkMode', dark.toString());
        }
    // useEffect(() => {
    //   const storedDarkMode = localStorage.getItem('darkMode');
    //   setDark(storedDarkMode)
    //   console.log(storedDarkMode)
    // }, []);

    let handleDarkLightSet = ()=>{
        if(dark){
            // console.log("Hello")
            localStorage.setItem('darkMode', dark.toString());
            setDark(false)
          }else{
            localStorage.setItem('darkMode', dark.toString());
            setDark(true)
        }
    }

    let handleCurrentItem=(itemName)=>{
      let updateNavList = navlist.map((item)=>{
        if(item.name == itemName){
          return {...item, current:true}
        }else{
          return {...item,current:false}
        }
      })

      setNavList(updateNavList)

    }


  return (
    <div className={dark ? 'dark' : ''}>
      <Disclosure as="nav" className="bg-white dark:bg-gray-800 shadow-md dark:shadow-none">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-5 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    {/* <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    /> */}
                    <h2 className='text-gray-800 dark:text-white font-bold text-[26px] mr-[20px] font-ruboto'><span className='text-[#ff3535]'>S</span>ourav <span className='text-[#ff3535]'>A</span>charjee</h2>
                  </div>
                  <div className="hidden self-center sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navlist.map((item) => (
                        <a onClick={()=>handleCurrentItem(item.name)}
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'dark:bg-gray-900 text-[14px] dark:text-white relative before:absolute before:left-0 before:bottom-[-22px] before:w-full before:h-0.5 before:bg-[#ff3535] dark:before:bg-transparent'  : 'text-gray-600 text-[14px] hover:text-gray-900 dark:text-gray-300 bg-transparent dark:hover:bg-gray-900 dark:hover:text-white relative before:absolute before:left-0 before:bottom-[-22px] before:w-0 before:h-0.5 before:bg-[#ff3535] hover:before:w-full before:transition-all dark:before:bg-transparent',
                            'dark:rounded-md  dark:px-2 px-2 dark:py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button onClick={handleDarkLightSet}
                    type="button"
                    className="relative rounded-full border dark:border border-gray-900 dark:bg-gray-800 p-1 dark:border-white text-gray-900  hover:text-gray-900 dark:text-white "
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    {
                        dark ?
                        <MdOutlineDarkMode className="h-5 w-5 rounded-full" aria-hidden="true" />
                        :
                        <BiSun className="h-5 w-5 rounded-full" aria-hidden="true" />

                    }
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://i.ibb.co/5kwDhq0/IMG.jpg" alt="Profile Image"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navlist.map((item) => (
                  <Disclosure.Button onClick={()=>handleCurrentItem(item.name)}
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white dark:text-white' : 'text-gray-800 dark:hover:bg-gray-900 dark:text-white  hover:bg-gray-800 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>

  )
}

export default Navbar