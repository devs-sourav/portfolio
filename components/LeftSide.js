import React from 'react'
import { Code, Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function LeftSide() {
  return (
    <div className=" w-full rounded-3xl border border-[#565656] px-6 py-8 text-white col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
        <div className="flex justify-between items-center">
        <Image className="w-32 " width={200} height={50} src={'/logo.png'} alt="logo"/>
        <div className="text-right">
            <h1 className="text-[14px]">Fullstack Developer</h1>
            <p className="text-[14px]">&<span className="ml-1">Ui/Ux Designer </span>  </p>
        </div>
        </div>
        
        <div className="flex justify-center mt-16">
            <div className="relative">
            <Image className="w-48 h-48" width={200} height={200} src={'/profileImage.png'} alt="profileImage"/>
            <div className="flex justify-center absolute -left-6 -top-6">
            <div className="w-60 h-60 rounded-full border-2 border-white relative rotateShape"> 
                <div className="w-[38px] h-[38px] bg-white absolute bottom-3 left-3 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="2"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"></path> <path fillRule="evenodd" clipRule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"></path> </g></svg>
                </div>
                <div className="w-[38px] h-[38px] bg-white absolute top-3 left-3 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="-3.8 -1.5 40.921 40.921" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <linearGradient id="b" x1="271.97" x2="211.104" y1="217.606" y2="341.772" gradientUnits="userSpaceOnUse"> <stop offset=".3" stopColor="#3e863d"></stop> <stop offset=".5" stopColor="#55934f"></stop> <stop offset=".8" stopColor="#5aad45"></stop> </linearGradient> <linearGradient id="d" x1="186.484" x2="297.349" y1="321.381" y2="239.465" gradientUnits="userSpaceOnUse"> <stop offset=".57" stopColor="#3e863d"></stop> <stop offset=".72" stopColor="#619857"></stop> <stop offset="1" stopColor="#76ac64"></stop> </linearGradient> <linearGradient id="f" x1="197.051" x2="288.72" y1="279.652" y2="279.652" gradientUnits="userSpaceOnUse"> <stop offset=".16" stopColor="#6bbf47"></stop> <stop offset=".38" stopColor="#79b461"></stop> <stop offset=".47" stopColor="#75ac64"></stop> <stop offset=".7" stopColor="#659e5a"></stop> <stop offset=".9" stopColor="#3e863d"></stop> </linearGradient> <clipPath id="a"> <path d="m239.03 226.605-42.13 24.317a5.085 5.085 0 0 0-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336a5.1 5.1 0 0 0 5.09 0l42.126-24.336a5.096 5.096 0 0 0 2.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317a5.123 5.123 0 0 0-5.1 0"></path> </clipPath> <clipPath id="c"> <path d="M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39a5.318 5.318 0 0 0-1.32-.53zm0 0"></path> </clipPath> <clipPath id="e"> <path d="M241.066 225.953a5.14 5.14 0 0 0-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336a5.105 5.105 0 0 0 2.46-3.476l-46.18-78.89a5.29 5.29 0 0 0-1.03-.102l-.42.02"></path> </clipPath> </defs> <g clipPath="url(#a)" transform="translate(-68.564 -79.701) scale(.35278)"> <path fill="url(#b)" d="m331.363 246.793-118.715-58.19-60.87 124.174L270.49 370.97zm0 0"></path> </g> <g clipPath="url(#c)" transform="translate(-68.564 -79.701) scale(.35278)"> <path fill="url(#d)" d="m144.07 264.004 83.825 113.453 110.86-81.906-83.83-113.45zm0 0"></path> </g> <g clipPath="url(#e)" transform="translate(-68.564 -79.701) scale(.35278)"> <path fill="url(#f)" d="M197.02 225.934v107.43h91.683v-107.43zm0 0"></path> </g> </g></svg>
                </div>
                <div className="w-[38px] h-[38px] bg-white absolute top-3 right-3 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C9.35329 14.5 10.6088 14.0871 11.6492 13.3799L6 6.57712V11.25C6 11.6642 5.66421 12 5.25 12C4.83579 12 4.5 11.6642 4.5 11.25V4.5C4.5 4.184 4.69807 3.9019 4.99529 3.79458C5.29251 3.68726 5.62511 3.77775 5.82699 4.02085L13.3008 13.0209C13.5622 13.3357 13.523 13.802 13.2127 14.0687C11.813 15.272 9.99057 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 8.76428 15.8926 9.50473 15.6916 10.2065C15.5936 10.5489 15.4733 10.8818 15.3325 11.2037C15.1665 11.5832 14.7243 11.7562 14.3448 11.5902C13.9653 11.4242 13.7922 10.982 13.9583 10.6025C14.0725 10.3413 14.1701 10.0712 14.2496 9.79351C14.4125 9.2247 14.5 8.6232 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM10.5 3.75C10.9142 3.75 11.25 4.08579 11.25 4.5V7.5C11.25 7.91421 10.9142 8.25 10.5 8.25C10.0858 8.25 9.75 7.91421 9.75 7.5V4.5C9.75 4.08579 10.0858 3.75 10.5 3.75Z" fill="#000000"></path> </g></svg>
                </div>
                <div className="w-[38px] h-[38px] bg-white absolute right-3 bottom-3 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#58AA50" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115c-.28-.394-.53-.954-.735-1.44c-.036.495-.055.685-.523 1.184c-.723.566-4.438 3.682-4.74 10.02c-.282 5.912 4.27 9.435 4.888 9.884l.07.05A74 74 0 0 1 11.91 24h.481a29 29 0 0 1 .51-3.07c.417-.296.604-.463.85-.693a11.34 11.34 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218m-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695c-.381-.045-.765-1.76-.765-2.405"/></svg>
                </div>
            </div>
            { /* border-[#F0CB59] */ }
            </div>
            </div>
        </div>
        <div className="mt-16 pt-[5px] flex justify-center">
        <h2 className="text-2xl font-semibold">Sourav Acherjee</h2>
        </div>
        <div className="mt-4 flex justify-center">
        <h3 className="text-sm font-normal text-[#999]">Bsc in Computer Science & Engineering</h3>
        </div>
        <div className="flex justify-center mt-8">
        <ul className="flex flex-wrap gap-4">
            <li className="w-12 h-12 rounded-full border-2 border-[#565656] text-[#565656] cursor-pointer hover:border-[#FFCC01] flex justify-center items-center ease-linear transition-all group">
            <Github className="group-hover:text-[#FFCC01] ease-linear transition-all"/>
            </li>
            <li className="w-12 h-12 rounded-full border-2 border-[#565656] text-[#565656] cursor-pointer hover:border-[#FFCC01] flex justify-center items-center ease-linear transition-all group">
            <Facebook className="group-hover:text-[#FFCC01] ease-linear transition-all"/>
            </li>
            <li className="w-12 h-12 rounded-full border-2 border-[#565656] text-[#565656] cursor-pointer hover:border-[#FFCC01] flex justify-center items-center ease-linear transition-all group">
            <Linkedin className="group-hover:text-[#FFCC01] ease-linear transition-all"/>
            </li>
            <li className="w-12 h-12 rounded-full border-2 border-[#565656] text-[#565656] cursor-pointer hover:border-[#FFCC01] flex justify-center items-center ease-linear transition-all group">
            <Instagram className="group-hover:text-[#FFCC01] ease-linear transition-all"/>
            </li>
        </ul>
        </div>
        <div className="flex justify-center mt-8">
        <button className="flex gap-x-3 px-20 py-3 border-2 border-[#FFCC01] hover:bg-transparent rounded-full text-black bg-[#FFCC01] group ease-linear transition-all">
            <Mail className="group-hover:text-[#FFCC01] ease-linear transition-all" />
            <span className="uppercase group-hover:text-[#FFCC01] ease-linear transition-all">Hire me</span>
        </button>
        </div>
      {/* bg-[#FFCC01] */}
    </div>
  )
}
