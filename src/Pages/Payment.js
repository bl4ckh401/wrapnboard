import React, { useState } from 'react'
import "./styles/style.css"

function Payment() {

    let [state, setState] = useState({
        amount:0,
        total:0,
        balance:0,
        reference:"",
    }) 


    const Getbalance = (event) => {
        const value = event.target.value
        const data = event.target
        event.preventDefault();
        setState({
            ...state,
            balance : parseInt(state.amount) - parseInt(state.total)
        })
    }

    const handleChange = (event) => {
        const value = event.target.value
        const data = event.target
        event.preventDefault();
        setState({
            ...state,
            [data.name]: value
        })
        console.log(state)
    }

    const addTransaction = (event) => {
        const value = event.target.value
        const data = event.target
        event.preventDefault();
        setState(

        )
    }

  return (
      <div className=' Move'>
        <div className='w-11/12 bg-white px-2 py-2 shadow-xl flex flex-col justify-start items-center rounded-lg border border-white '>
            <h2>Payment Method</h2>
            <hr className='w-full text-white h-2' />
              <div className='w-full flex flex-col justify-start items-start'>
                <div className='w-full flex justify-center items-center'>
                    <table className='w-full'>
                          <tr className=''>
                            <th className='w-1/5'>Mode</th>
                            <th className='w-1/5'>Currency</th>
                            <th className='w-1/5'>Ref.No</th>
                            <th className='w-1/5'>Amount</th>
                            <th className='w-1/5'> </th>
                        </tr>
                        <tr className='text-center'>
                            <td className='text-center w-1/5'>
                                  <div className='flex w-full justify-center items-center'>
                                    <select className='w-full'/>
                                </div>
                            </td>
                              <td className='text-center w-1/5'>
                                  <div className='flex w-full justify-center items-center'>
                                      <select className='w-full' />
                                  </div>
                            </td>
                              <td className='text-center w-1/5'>
                                  <div className='flex w-full justify-center items-center'>
                                      <input type="text" className='w-full text-center' name='reference' onChange={handleChange} placeholder="Reference" />
                                  </div>
                              </td>
                              <td className='text-center w-1/5'>
                                  <div className='flex justify-center w-full items-center'>
                                      <input type="number" className='w-full text-center' name='amount' onChange={handleChange} placeholder="Amount" />
                                  </div>
                              </td>
                              <td className='text-center w-1/5'><button onClick={Getbalance} className=''>+</button></td>
                        </tr>
                    </table>
                </div>
            <hr className='w-full mt-3 text-white h-2' />
            <div className='w-1/2 flex flex-col justify-start items-start'>
                <div className='w-full flex flex-row justify-between'>
                    <h3 className=''>Total:</h3>
                    <h3>Ksh:{state.total}</h3>
                </div>
                <hr className='w-full mt-3 text-white h-2' />
                <div className='w-full flex flex-row justify-between'>
                    <h3 className=''>Payment Made:</h3>
                    <h3>Ksh:{state.amount}</h3>
                </div>
                <hr className='w-full mt-3 text-white h-2' />
                <div className='w-full flex flex-row justify-between'>
                    <h3 className=''>Balance Due:</h3>
                    <h3>Ksh:{state.balance.toString()}</h3>
                </div>
                <hr className='w-full mt-3 text-white h-2' />
                <div className='w-full flex flex-row justify-between'>
                    <h3 className=''>Served By:</h3>
                        <select />
                </div>
                <hr className='w-full mt-3 text-white h-2' />
            </div>
            <button className='w-full flex flex-row justify-center items-center py-4 border border-red-500'>Close Sale</button>
            </div>
        </div>
    </div>
  )
}

export default Payment