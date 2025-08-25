import React, { useState } from "react";
import GridItem from "../GridItem";
import * as C from "./styles";

const Grid = ({ itens, setItens }) => {
  const [visibleItems, setVisibleItems] = useState(10);

  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  const loadMoreItems = () => {
    setVisibleItems(prev => prev + 10);
  };

  const hasMoreItems = itens && itens.length > visibleItems;
  const itemsToShow = itens ? itens.slice(0, visibleItems) : [];

  return (
    <>
      <C.Table>
        <C.Thead>
          <C.Tr>
            <C.Th width={40}>Descrição</C.Th>
            <C.Th width={40}>Valor</C.Th>
            <C.Th width={10} alignCenter>
              Tipo
            </C.Th>
            <C.Th width={10}></C.Th>
          </C.Tr>
        </C.Thead>
        <C.Tbody>
          {itemsToShow?.map((item, index) => (
            <GridItem key={index} item={item} onDelete={onDelete} />
          ))}
        </C.Tbody>
      </C.Table>
      
      {hasMoreItems && (
        <C.LoadMoreContainer>
          <C.LoadMoreButton onClick={loadMoreItems}>
            Ver mais ({itens.length - visibleItems} restantes)
          </C.LoadMoreButton>
        </C.LoadMoreContainer>
      )}
    </>
  );
};

export default Grid;
