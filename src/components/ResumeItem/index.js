import React from "react";
import * as C from "./styles";

const ResumeItem = ({ title, Icon, value }) => {
  const formatCurrency = (value) => {
    if (typeof value === 'string' && value.includes('R$')) {
      const numericValue = parseFloat(value.replace('R$', '').replace(/\./g, '').replace(',', '.'));
      if (!isNaN(numericValue)) {
        return numericValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
      }
    }
    
    if (typeof value === 'number' || !isNaN(parseFloat(value))) {
      return parseFloat(value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }
    
    if (typeof value === 'string' && value.startsWith('-')) {
      const numericValue = parseFloat(value.replace('-R$', '').replace(/\./g, '').replace(',', '.'));
      if (!isNaN(numericValue)) {
        return `-${numericValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
      }
    }
    
    return value;
  };

  const getIconType = () => {
    if (title === "Entradas") return "entrada";
    if (title === "Saídas") return "saida";
    return "total";
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <C.IconWrapper type={getIconType()}>
          <Icon />
        </C.IconWrapper>
      </C.Header>
      <C.Total>{formatCurrency(value)}</C.Total>
    </C.Container>
  )
};

export default ResumeItem;
