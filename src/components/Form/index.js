import React, { useState, useEffect } from "react";
import Grid from "../Grid";
import DateFilter from "../DateFilter";
import Toast from "../Toast";
import * as C from "./styles";
import { useTranslation } from "../../i18n";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [displayAmount, setDisplayAmount] = useState("");
  const [isExpense, setExpense] = useState(false);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const generateID = () => Math.round(Math.random() * 1000);
  const { t } = useTranslation();

  useEffect(() => {
    if (activeFilter) {
      const filtered = transactionsList.filter(transaction => {
        if (!transaction.timestamp) return false;
        const transactionDate = new Date(transaction.timestamp);
        return transactionDate >= activeFilter.startDate && 
               transactionDate <= activeFilter.endDate;
      });
      setFilteredTransactions(filtered);
    } else {
      setFilteredTransactions(transactionsList);
    }
  }, [transactionsList, activeFilter]);

  const handleSave = () => {
    if (!desc || !amount) {
      alert(t("form.alertDescriptionValue"));
      return;
    } else if (amount <= 0) {
      alert(t("form.alertPositiveValue"));
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: parseFloat(amount),
      expense: isExpense,
      timestamp: new Date().toISOString(),
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
    setDisplayAmount("");

    setToastMessage(`${desc} ${t("form.addedSuccess")}`);
  };

  const handleAmountChange = (e) => {
    const inputValue = e.target.value;
    const cleaned = inputValue.replace(/R\$\s*/g, '').replace(/\D/g, '');
    if (cleaned === "") {
      setDisplayAmount("");
      setAmount("");
      return;
    }
    const numberInCents = parseInt(cleaned);
    const number = numberInCents / 100;
    const formattedValue = number.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    setDisplayAmount(formattedValue);
    setAmount(number);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>{t("form.description")}</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>{t("form.value")}</C.Label>
          <C.Input
            value={displayAmount ? `R$ ${displayAmount}` : ""}
            type="text"
            onChange={handleAmountChange}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">{t("form.income")}</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">{t("form.expense")}</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>{t("form.add")}</C.Button>
      </C.Container>
      
      <DateFilter onFilterChange={handleFilterChange} />
      <Grid itens={filteredTransactions} setItens={setTransactionsList} />

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
    </>
  );
};

export default Form;
