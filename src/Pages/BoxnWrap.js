import React, { useState } from 'react'
import { InventoryData } from '../utils/InventoryData'

function BoxnWrap(props) {
    let [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    let [total, setTotal] = useState(0)

    const getTotal = () => {
        setTotal(
            parseInt(price) * parseInt(quantity)
        )
        console.log(total)
    }

    const addQuantity = (event) => {
        event.preventDefault();
        setQuantity(
            quantity += 1
        )
        console.log(quantity)
    }
    const reduceQuantity = (event) => {
        event.preventDefault();
        setQuantity(
            quantity -= 1
        )
        console.log(quantity)
    }
    return (
        <div className='flex w-full lg:w-3/5 pt-24 h-fit lg:ml-72 bg-gray-100 lg:flex-col justify-center items-center'>
            <div className='w-11/12 bg-white py-2 shadow-xl flex flex-col justify-center items-center rounded-lg border border-white '>
                <h2>BOX AND WRAPPING</h2>
                <hr className='w-4/5 text-white h-2' />
                <div className='w-full flex justify-center items-center'>
                    <table className='w-full'>
                        <tr className='items-center'>
                            <th className=''>Product</th>
                            <th>Price</th>
                            <th>No. of Products</th>
                            <th>Action</th>
                        </tr>
                        {InventoryData.map((val, key) => {
                            const getPrices = (event) => {
                                event.preventDefault()
                                setPrice(
                                    val.sellingprice
                                )
                                props.cart()
                                getTotal()
                                console.log(price)
                            }
                            return (
                                <>
                                    {val.Category === "BOX SALE & WRAPPING".toUpperCase() ?
                                        <tr className='items-center' key={key}>
                                            <td className='text-center w-1/4 py-2'>{val.Name}</td>
                                            <td className='text-center w-1/4 py-2'>K:{val.sellingprice}</td>
                                            <td className='text-center w-1/4 py-2'>
                                                <div className='w-full'>
                                                    <button onClick={reduceQuantity} className='bg-red-500 px-4'>-</button>
                                                    <input className='text-center w-full' type="number" value={quantity} />
                                                    <button onClick={addQuantity} className='bg-green-500 px-4'>+</button>
                                                </div>
                                            </td>
                                            <td className='text-center w-1/4 py-2'><button className=''>ADD</button></td>
                                        </tr>
                                        :
                                        <>
                                        </>
                                    }
                                </>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BoxnWrap