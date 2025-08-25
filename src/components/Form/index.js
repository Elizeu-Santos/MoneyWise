import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount <= 0) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: parseFloat(amount), // Convertendo para número
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  const formatCurrency = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const number = parseFloat(cleaned) / 100;
    return number.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const handleAmountChange = (e) => {
    const inputValue = e.target.value;
    // Removendo formatação e mantendo apenas números
    const cleaned = inputValue.replace(/\D/g, "");
    const number = parseFloat(cleaned) / 100;
    
    if (!isNaN(number)) {
      setAmount(number); // Armazenando o valor numérico
    } else {
      setAmount("");
    }
  };

  const formatDisplayValue = (value) => {
    if (!value) return "";
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={formatDisplayValue(amount)}
            type="text"
            onChange={handleAmountChange}
            placeholder="R$ 0,00"
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
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
