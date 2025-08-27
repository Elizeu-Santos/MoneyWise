import React from "react";
import * as C from "./styles";

const ResumeItem = ({ title, Icon, value }) => {
  const formatCurrency = (value) => {
    if (typeof value === "number") {
      return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }

    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      return numValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
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
        <C.HeaderTitle>
          <span>{title}</span>
          <C.IconWrapper type={getIconType()}>
            <Icon />
          </C.IconWrapper>
        </C.HeaderTitle>
      </C.Header>
      <C.Total>{formatCurrency(value)}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;
