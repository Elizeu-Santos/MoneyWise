import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  const formatValue = (value) => {
    const num = Number(value);
    return isNaN(num)
      ? "R$ 0,00"
      : num.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "-";
    try {
      const date = new Date(timestamp);
      if (isNaN(date.getTime())) return "-";
      
      return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }) + " " + date.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      return "-";
    }
  };

  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{formatValue(item.amount)}</C.Td>
      <C.Td>{formatDate(item.timestamp)}</C.Td>
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
