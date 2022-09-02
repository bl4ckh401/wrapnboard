import React from 'react'

function CartPage() {
  return (
      <div className='flex w-full pt-24 h-fit lg:-ml-40 bg-gray-100 flex-col justify-start items-center'>
        <div className='w-full py-2 bg-white shadow-xl flex flex-col justify-center items-center rounded-lg border border-white '>
        <h2>CART</h2>
        <hr className='w-full text-white h-2' />
        <div className='w-full flex justify-center items-center'>
          <table className='w-full'>
            <tr className='items-center'>
              <th className=''>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </table>
        </div>
        </div>
      </div>
  )
}

export default CartPage