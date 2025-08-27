import React, { useState } from "react";
import GridItem from "../GridItem";
import * as C from "./styles";
import { useTranslation } from "../../i18n";

const Grid = ({ itens, setItens, onDelete }) => {
  const [visibleItems, setVisibleItems] = useState(10);
  const { t } = useTranslation();

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
            <C.Th width={30}>{t("grid.description")}</C.Th>
            <C.Th width={25}>{t("grid.amount")}</C.Th>
            <C.Th width={15}>{t("grid.date")}</C.Th>
            <C.Th width={10} alignCenter>{t("grid.type")}</C.Th>
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
            {t("grid.more")} ({itens.length - visibleItems} {t("grid.remaining")})
          </C.LoadMoreButton>
        </C.LoadMoreContainer>
      )}
    </>
  );
};

export default Grid;
