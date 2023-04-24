# Getting started in creating the bank of Flatiron

This is a React application that manages expenses using state and props.

## The first few lines of code import the necessary dependencies and components.

The first few lines of code import the necessary dependencies and components.

initialExpenses is an array that contains some example transactions. These transactions will be used to populate the initial state of the expenses array.

The App component is defined using an arrow function. The App component is the top-level component of the application.

### The useState hook is used to create several state variables:

expenses is initialized with the initialExpenses array and represents all the transactions.

date, description, category, amount, and search represent individual fields of a transaction, and are used to manage the state of the form that allows users to create new transactions.

### Several event handler functions are defined to handle changes to the form fields:

handleSearch is called when the user types in the search field.
handleDate is called when the user selects a date.
handleDescription is called when the user types in the description field.
handleCategory is called when the user selects a category.
handleAmount is called when the user types in the amount field.

## HandleSubmit

The handleSubmit function is called when the user submits the form. It checks that all fields are filled out or that the amount is negative and the search field is not empty. If the form is valid, it creates a new transaction object and adds it to the expenses array. The form fields are then reset to their initial state.

### FilteredExpenses

The filteredExpenses array is created using the filter method. It contains all the transactions that match the search term entered by the user.

## The App component renders two child components:

<TransactionForm> is responsible for rendering the form that allows users to create new transactions. It is passed all the form field state variables and event handler functions as props.
<TransactionList> is responsible for rendering the list of transactions. It is passed the filteredExpenses array as a prop.
The entire application is wrapped in a fragment (<> and </>) which is used as a wrapper element.

Finally, the App component is exported as the default export of the module so that it can be used in other parts of the application.

### The next part will look at the Compoments: Form

This is a React component that represents a form for adding transactions. It contains several input fields for the user to enter information about the transaction, including the date, description, category, and amount.

The handleSubmit function is called when the form is submitted. The other functions, handleSearch, handleCategory, handleDescription, handleAmount, and handleDate, are called when the user types into the corresponding input fields.

The min and max attributes in the date input field ensure that the user can only select a date within a certain range.

The component is also using the react-datepicker package to display a date picker component. The CSS file for this package is imported at the beginning of the file.

Once the user has entered all the necessary information, they can click the "Add Transaction" button to submit the form.

### The next part will look at the Compoments: Items

This is a React component called TransactionItem that takes in an object called expense as a prop. The expense object is expected to have properties such as date, description, category, and amount.

The component then renders a table row (<tr>) with four cells (<td>) that display the date, description, category, and amount values of the expense object. The amount value is also prefixed with a dollar sign ($) to denote currency.

This component is likely used in a larger application to display a list of expenses or transactions.

### The next part will look at the Compoments: Items

This code defines a React component called TransactionList that takes a single prop called expenses. It renders a table with four columns: Date, Description, Category, and Amount. For each expense object in the expenses array, it renders a row using the TransactionItem component, passing in the expense object as a prop. The key prop is set to the id property of the expense object to help React efficiently update the DOM when the list of expenses changes.

The TransactionItem component takes a single prop called expense, which is an object containing the date, description, category, and amount properties. It renders a table row with four cells, displaying the value of each property in the corresponding cell.
# Bank-of-Flatiron
