import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";
import Footer from "./components/Footer";

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  // Migrar dados existentes para incluir timestamp
  useEffect(() => {
    if (transactionsList.length > 0) {
      const needsMigration = transactionsList.some(item => !item.timestamp);
      
      if (needsMigration) {
        const migratedTransactions = transactionsList.map(item => {
          if (!item.timestamp) {
            return {
              ...item,
              timestamp: new Date().toISOString() // Usar data atual para itens existentes
            };
          }
          return item;
        });
        
        setTransactionsList(migratedTransactions);
        localStorage.setItem("transactions", JSON.stringify(migratedTransactions));
      }
    }
  }, []);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .reduce((acc, transaction) => acc + Number(transaction.amount), 0);

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .reduce((acc, transaction) => acc + Number(transaction.amount), 0);

    const expense = amountExpense.toFixed(2);
    const income = amountIncome.toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(Number(income));
    setExpense(Number(expense));
    setTotal(Number(income) < Number(expense) ? -Number(total) : Number(total));
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default App;
