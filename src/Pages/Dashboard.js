import React from 'react'
import PageCard from '../Components/PageCard'
import { IoChatbubbles } from 'react-icons/io5'
import { BsBroadcast, BsFillBagPlusFill } from 'react-icons/bs'
import { GoFileMedia } from 'react-icons/go'
import "./styles/style.css"

function Dashboard(props) {
  return (
      <div className='Container-main'>
        <div className='justify-center flex flex-col'>
            <h1 className='text-xl font-bold' style={{"padding-left":"150px", "padding-bottom":"40px"}}>Dashboard</h1>
            <div className={props.active ? 'flex flex-row w-full justify-start items-start flex-wrap' : 'flex flex-row w-full justify-center items-start flex-wrap'}>
                  <PageCard icon={<IoChatbubbles size={64} className="text-blue-500" />} path="/wrapping" title={"Wrapping Services"} description={"Chat with Clients and view all chats in your organisation"} />
                  <PageCard icon={<BsBroadcast size={64} className="text-blue-500" />} path="/boxes" title={"Box Sales"} description={"Get In-touch with all your clients with a click of a button."} />
                  <PageCard icon={<GoFileMedia size={64} className="text-blue-500" />} path="/boxesandwrapping" title={"Box Sale & Wrapping"} description={"Get In-touch with all your clients with a click of a button."} />
                  <PageCard icon={<GoFileMedia size={64} className="text-blue-500" />} path="/bags" title={"Bag Sales"} description={"Get In-touch with all your clients with a click of a button."} />
                  <PageCard icon={<GoFileMedia size={64} className="text-blue-500" />} path="/foams" title={"Foam"} description={"Get In-touch with all your clients with a click of a button."} />
                  <PageCard icon={<GoFileMedia size={64} className="text-blue-500" />} path="/padlocks" title={"Padlocks"} description={"Get In-touch with all your clients with a click of a button."} />
                  <PageCard icon={<BsFillBagPlusFill size={64} className="text-blue-500" />} path="/taping" title={"Taping"} description={"Chat with Clients and view all chats in your organisation"} />
                  <PageCard icon={<BsFillBagPlusFill size={64} className="text-blue-500" />} path="/strapsandtags" title={"Luggage Straps & Tags"} description={"Chat with Clients and view all chats in your organisation"} />
            </div>
        </div>
      </div>
  )
}

export default Dashboard