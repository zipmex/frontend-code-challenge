import React, { useEffect, useState } from 'react'
import zipmex from './zipmex.svg'
import './App.css'
import OrderForm, { TOrderForm } from './OrderForm'
import OrderBook from './OrderBook'
import orderBookStream, { TOrderBookStream } from './order-book-stream'

function App() {
  const [orderBook, setOrderBook] = useState<TOrderBookStream>({
    buy: [],
    sell: [],
  })

  useEffect(() => {
    orderBookStream.subscribe((data) => {
      setOrderBook(data)
    })
  }, [])

  const handleSubmitOrder: TOrderForm['submitOrder'] = (side, { price, amount }) => {
    orderBookStream.addOrder(side, { price, amount })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={zipmex} className="App-logo" alt="logo" />
      </header>
      <OrderForm submitOrder={handleSubmitOrder} />
      <OrderBook buy={orderBook.buy} sell={orderBook.sell} />
    </div>
  )
}

export default App
