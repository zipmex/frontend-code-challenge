import { TOrderBookStream } from './order-book-stream'

const OrderBook: React.FC<TOrderBookStream> = ({ buy, sell }) => {

  return (
    <div>
      <div>
        Buy
        <div>Price / Amount</div>
        {buy.map((buyOrder) => (
          <div>
            {buyOrder.price} {buyOrder.amount}
          </div>
        ))}
      </div>

			<div>
        Sell
        <div>Price / Amount</div>
        {sell.map((sellOrder) => (
          <div>
            {sellOrder.price} {sellOrder.amount}
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderBook
