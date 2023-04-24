import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'

const TransactionForm = ({
  date,
  description,
  category,
  amount,
  search,
  handleSearch,
  handleCategory,
  handleDescription,
  handleAmount,
  handleDate,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div
          className="form-center"
          style={{
            display: 'inline-block',
            justifyContent: 'center',
          }}
        >
          <label htmlFor="search">Search </label>
          <input
            type="text"
            className="form-control"
            id="search"
            name="search"
            placeholder="Filter transactions by keyword"
            value={search}
            onChange={handleSearch}
          />
          <button type="submit" className="btn">
            Search
          </button>
        </div>
        <br />
        <div
          className="form-center"
          style={{ display: 'inline-block', justifyContent: 'center' }}
        >
          <div className="form-group"></div>
          <label htmlFor="date">Date </label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            placeholder="YYYY-MM-DD"
            value={date}
            onChange={handleDate}
            min={new Date().toISOString().slice(0, 10)}
            max="9999-12-31"
          />
        </div>

        <div
          className="form-center"
          style={{ display: 'inline-block', justifyContent: 'center' }}
        >
          <div className="form-group"></div>
          <label htmlFor="Description">Description </label>
          <input
            type="text"
            className="form-control"
            id="Description"
            name="Description"
            placeholder="Expense or Income"
            value={description}
            onChange={handleDescription}
          />
        </div>
        <div
          className="form-center"
          style={{ display: 'inline-block', justifyContent: 'center' }}
        >
          <div className="form-group"></div>
          <label htmlFor="Category">Category </label>
          <input
            type="text"
            className="form-control"
            id="Category"
            name="Category"
            placeholder="e.g. Entertainment, Food, Transportation or Rent"
            value={category}
            onChange={handleCategory}
          />
        </div>
        <div
          className="form-center"
          style={{ display: 'inline-block', justifyContent: 'center' }}
        >
          <div className="form-group"></div>
          <label htmlFor="Amount">Amount </label>
          <input
            type="number"
            className="form-control"
            id="Amount"
            name="Amount"
            placeholder="$1-$10000000"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>

      <button type="submit" className="btn">
        Add Transaction
      </button>
    </form>
  )
}

export default TransactionForm
