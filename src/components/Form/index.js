import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";
import { useTranslation } from "../../i18n";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [displayAmount, setDisplayAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);
  const { t } = useTranslation();

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
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
    setDisplayAmount("");
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
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
