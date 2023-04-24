import React from 'react'

const TransactionItem = ({ expense }) => {
  const { date, description, category, amount } = expense

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>${amount}</td>
    </tr>
  )
}

export default TransactionItem
