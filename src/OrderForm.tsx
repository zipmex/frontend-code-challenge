import React, { useState } from 'react'
import { TOrder, TSide } from './order-book-stream'

export type TOrderForm = {
  submitOrder: (side: TSide, { price, amount }: TOrder) => void
}

type TOrderFormData = {
  side: TSide
} & TOrder

const initialFormData: TOrderFormData = {
  side: 'buy',
  price: '',
  amount: '',
}

const OrderForm: React.FC<TOrderForm> = ({ submitOrder }) => {
  const [formData, updateFormData] = useState<TOrderFormData>(initialFormData)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    })
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          submitOrder(formData.side, {
            price: formData.price,
            amount: formData.amount,
          })
        }}
      >
        <select name="side" onChange={handleChange}>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
        <input name="price" type="number" onChange={handleChange} />
        <input name="amount" type="number" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default OrderForm
