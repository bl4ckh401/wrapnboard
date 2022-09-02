import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import"./styles/style.css"

import { NavData } from '../utils/NavData'

function Navigation(props) {
    console.log(props)
    return (
        <div className={props.active ? 'w-screen h-screen fixed m-0 lg:w-1/5 flex flex-col justify-start items-center z-20' : 'z-20 h-16 fixed m-0 w-screen flex flex-col justify-start items-center'}>
            <div className='w-full h-full'>
                <div className='Full-nav'>
                    <div className='Logo'>
                        <img className='h-16 ' src='/wnb.png' />
                    </div>
                    <div className='close'>
                        {
                            props.active ? <AiOutlineClose color="white" size={50} onClick={props.onClick} /> : <BiMenuAltRight color="white" size={50} onClick={props.onClick} />
                        }
                    </div>
                </div>
                {props.active ?
                        <div className='list-con'>
                            <ul className='list'>
                                {NavData.map((item) => {
                                    return (
                                        <Link to={item.path}>
                                            <li className='Nav-Item'>{item.title.toUpperCase()}</li>
                                        </Link>
                                    )
                                })}
                            </ul>
                            <div className='w-full mt-2 flex flex-col justify-center items-center'>
                                <button className='button blue' onClick="">CHANGE ROLL</button>
                                <button className='button' onClick="">CHANGE CONSUMABLES</button>
                                <button className='button' onClick="">CLOSE SHIFT</button>
                            </div>
                        </div> : <></>
                }
            </div>
        </div>
    )
}

export default Navigation