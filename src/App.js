import React, { useState } from 'react'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import './index'

const initialExpenses = [
  {
    id: 1,
    date: '2019-12-01',
    description: "Paycheck from Bob's Burgers",
    category: 'Income',
    amount: 1000,
  },
  {
    id: 2,
    date: '2019-12-01',
    description: 'South by Southwest Quinoa Bowl at Fresh & Co',
    category: 'Food',
    amount: -10.55,
  },
  {
    id: 3,
    date: '2019-12-02',
    description: 'South by Southwest Quinoa Bowl at Fresh & Co',
    category: 'Food',
    amount: -10.55,
  },
  {
    id: 4,
    date: '2019-12-04',
    description: 'Sunglasses, Urban Outfitters',
    category: 'Fashion',
    amount: -24.99,
  },
  {
    id: 5,
    date: '2019-12-06',
    description: 'Venmo, Alice Pays you for Burrito',
    category: 'Food',
    amount: 8.75,
  },
  {
    id: 6,
    date: '2019-12-06',
    description: 'Chipotle',
    category: 'Food',
    amount: -17.59,
  },
  {
    id: 7,
    date: '2019-12-07',
    description: 'Birthday Check from Grandma',
    category: 'Gift',
    amount: 50,
  },
  {
    id: 8,
    date: '2019-12-09',
    description: 'Lyft Ride',
    category: 'Transportation',
    amount: -13.25,
  },
  {
    id: 9,
    date: '2019-12-11',
    description: "Paycheck from Bob's Burgers",
    category: 'Income',
    amount: 1000,
  },
  {
    id: 10,
    date: '2019-12-16',
    description: 'Tickets, Flatiron Multiplex Cinemas',
    category: 'Entertainment',
    amount: -24,
  },
  {
    id: 11,
    date: '2019-12-16',
    description: 'MTA Vending Machine: MetroCard',
    category: 'Transportation',
    amount: -116.39,
  },
  {
    id: 12,
    date: '2019-12-17',
    description: 'Venmo, Pay Roommate for Rent',
    category: 'Housing',
    amount: -975,
  },
  {
    date: '2022-07-09',
    description: 'Office lunch',
    category: 'Food',
    amount: '2000',
    id: 13,
  },
  {
    date: '2022-07-09',
    description: 'Office lunch Wednesday',
    category: 'Food',
    amount: '3000',
    id: 14,
  },
]

const App = () => {
  //****************state values***********//
  const [expenses, setExpenses] = useState(initialExpenses)

  //single Charge
  const [date, setDate] = useState(new Date())
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  const [search, setSearch] = useState('')

  //**********functionality******/
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleDate = (e) => {
    setDate(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      (date !== '' && description !== '' && category !== '' && amount !== '') ||
      (amount < 0 && search !== '')
    ) {
      const singleTransaction = { date, description, category, amount }
      setExpenses([...expenses, singleTransaction])
      setDate('')
      setDescription('')
      setCategory('')
      setAmount('')
    }
  }

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <h1>The Royal Bank of Flatiron </h1>
      <main className="App">
        <TransactionForm
          date={date}
          description={description}
          category={category}
          amount={amount}
          handleDescription={handleDescription}
          handleCategory={handleCategory}
          handleAmount={handleAmount}
          handleDate={handleDate}
          handleSubmit={handleSubmit}
          search={search}
          handleSearch={handleSearch}
        />
        <TransactionList expenses={filteredExpenses} />
      </main>
    </>
  )
}
export default App
