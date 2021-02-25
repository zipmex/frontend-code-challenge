import faker from 'faker'

export type TOrderBookStream = {
  buy: TOrder[]
  sell: TOrder[]
}

export type TOrder = {
  price: string
  amount: string
}

export type TSide = 'buy' | 'sell'

type TOrderBookFunction = (orderBook: TOrderBookStream) => void

class OrderBookStream {
  intervalId: number
  subscribers: TOrderBookFunction[] = []
  intervalRate = 2000
  currentData: TOrderBookStream
  userOrder: TOrderBookStream = {
    buy: [],
    sell: [],
  }

  constructor() {
    this.currentData = this.produceData()
    this.intervalId = window.setInterval(() => {
      this.subscribers.forEach((callback) => {
        this.currentData = this.produceData()
        callback(this.currentData)
      })
    }, this.intervalRate)
  }

  addOrder(side: TSide, order: TOrder) {
    this.userOrder[side].push(order)
  }

  produceData(): TOrderBookStream {
    const buy: TOrder[] = Array.from({ length: 10 }, () => {
      return {
        price: faker.commerce.price(undefined, 499),
        amount: faker.finance.amount(undefined, 100),
      }
    })

    const sell: TOrder[] = Array.from({ length: 10 }, () => {
      return {
        price: faker.commerce.price(500),
        amount: faker.finance.amount(undefined, 100),
      }
    })

    return {
      buy: buy.concat(this.userOrder.buy),
      sell: sell.concat(this.userOrder.sell),
    }
  }

  subscribe(callback: TOrderBookFunction) {
    this.subscribers.push(callback)
    callback(this.currentData)
    return () => {
      const index = this.subscribers.findIndex(
        (subscriber: TOrderBookFunction) => {
          return subscriber === callback
        }
      )
      this.unSubscribe(index)
    }
  }

  unSubscribe(unSubscribeIndex: number) {
    this.subscribers = this.subscribers.filter(
      (_, index) => index !== unSubscribeIndex
    )
  }

  destroy() {
    window.clearInterval(this.intervalId)
    this.subscribers = []
  }
}

export default new OrderBookStream()
