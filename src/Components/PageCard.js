import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/style.css"

function PageCard(props) {
    const navigate = useNavigate()
    function handleClick(event) {
        event.preventDefault()
        navigate(props.path)
    }
    return (
        <div className='w-fit flex flex-col'>
            <div className='Card' onClick={handleClick}>
                <div className='flex items-center justify-center w-full'>
                    {props.icon}
                </div>
                <div className='flex flex-col items-center justify-center w-full mt-4'>
                    <h2 className='text-xl font-bold'>{props.title}</h2>
                    <div className='flex flex-col items-center justify-center w-full mt-2'>
                        <p className='px-4 text-center'>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageCard