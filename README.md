# Zipmex frontend code challenge

Our frontend dev was working on order form and order book features but our dev is on vacation.

Assuming you are new joiner and you are assigned to continue working on this task.

---

## Before working on challenge

- Please git checkout to a new branch
- After finished the challenge, use git cmd
  - `git format-patch your-branch -o patches`, Then zip patches folder to interviewer email.

---

## What our dev have done

- Simple order book UI to show orders
- Simple order form UI that can add order buy or sell with price and amount to orderbook

## What we expect

![Order book](./orderbook.png)

1. Orders in order book should be sorted by price, from high to low
2. Order book should show volume for each price
3. If users place order with the same price, those orders should be merged together. For example:

   1. Buy price = 10, amount = 5
   2. Buy price = 10, amount = 4

      Order book should show single entry with:
      Price = 10, amount = 9

4. Volume bar should be added. It shows relative order size for each price
5. Market price should be shown
6. Order form should allow user to submit order with decimal places with following validations:
   - Price should be greater than 0
   - Amount should be greater than 0
7. Some unit tests should be added
   - e.g. utility function or UI that have condition

**Bonus challenge:**

8. Display a depth chart of current order book
9. Beautify Order book and order form

   - Any design are welcome
   - You can use any lib to style

10. Improve codebase
    - Show us what you got !
