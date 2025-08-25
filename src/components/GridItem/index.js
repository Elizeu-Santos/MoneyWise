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

  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{formatValue(item.amount)}</C.Td>
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
