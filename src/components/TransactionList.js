import React from 'react'
import TransactionItem from './TransactionItem'

const TransactionList = ({ expenses }) => {
  return (
    <>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            return <TransactionItem key={expense.id} expense={expense} />
          })}
        </tbody>
      </table>
    </>
  )
}
export default TransactionList
