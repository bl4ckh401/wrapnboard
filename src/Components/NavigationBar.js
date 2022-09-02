import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

import { NavData } from '../utils/NavData'

function Navigation(props) {
    console.log(props)
    return (
        <div className={props.active ? 'w-screen h-screen fixed m-0 lg:w-1/5 flex flex-col justify-start items-center z-20' : 'z-20 h-16 fixed m-0 w-screen flex flex-col justify-start items-center'}>
            <div className='w-full h-full'>
                <div className='w-screen h-16 bg-blue-500 flex flex-row'>
                    <div className='w-1/5 flex flex-row justify-center items-center h-16'>
                        <img className='h-16 ' src='/wnb.png' />
                    </div>
                    <div className=' items-center justify-end w-4/5 lg:w-4/5  h-full lg:justify-start lg:content-center lg:items-center flex'>
                        {
                            props.active ? <AiOutlineClose color="white" size={30} onClick={props.onClick} /> : <BiMenuAltRight color="white" size={30} onClick={props.onClick} />
                        }
                    </div>
                </div>
                {
                    props.active ?
                        <div className='bg-blue-500 h-screen m-0 w-full flex flex-col justify-start items-center'>
                            <ul className='pt-2 justify-start items-center text-left pl-2'>
                                {NavData.map((item) => {
                                    return (
                                        <Link to={item.path}>
                                            <li className='w-full border text-left px-1 border-white py-2 text-l text-white'>{item.title.toUpperCase()}</li>
                                        </Link>
                                    )
                                })}
                            </ul>
                            <div className='w-full mt-2 flex flex-col justify-center items-center'>
                                <button className='bg-gray-100 py-2 px-4 w-4/5' onClick="">CHANGE ROLL</button>
                                <button className='bg-gray-100 mt-1 py-2 px-4 w-4/5' onClick="">CHANGE CONSUMABLES</button>
                                <button className='bg-red-600 mt-1 py-2 px-4 w-4/5' onClick="">CLOSE SHIFT</button>
                            </div>
                        </div> : <></>
                }


            </div>
        </div>
    )
}

export default Navigation