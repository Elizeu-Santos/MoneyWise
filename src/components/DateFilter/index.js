import React, { useState } from "react";
import * as C from "./styles";
import { useTranslation } from "../../i18n";

const DateFilter = ({ onFilterChange }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { t } = useTranslation();

  const handleApplyFilter = () => {
    if (startDate && endDate) {
      const start = new Date(startDate + "T00:00:00");
      const end = new Date(endDate + "T23:59:59");
      
      if (start > end) {
        alert(t("dateFilter.invalidDateRange"));
        return;
      }
      
      onFilterChange({ startDate: start, endDate: end });
    } else if (startDate || endDate) {
      alert(t("dateFilter.bothDatesRequired"));
      return;
    } else {
      onFilterChange(null); // Limpar filtro
    }
  };

  const handleClearFilter = () => {
    setStartDate("");
    setEndDate("");
    onFilterChange(null);
  };

  return (
    <C.Container>
      <C.Title>Filtrar por data:</C.Title>
      <C.DateInputGroup>
        <C.DateInput
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder={t("dateFilter.startDate")}
        />
      </C.DateInputGroup>
      
      <C.DateInputGroup>
        <C.DateInput
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder={t("dateFilter.endDate")}
        />
      </C.DateInputGroup>
      
      <C.ButtonGroup>
        <C.ApplyButton onClick={handleApplyFilter}>
          {t("dateFilter.apply")}
        </C.ApplyButton>
        <C.ClearButton onClick={handleClearFilter}>
          {t("dateFilter.clear")}
        </C.ClearButton>
      </C.ButtonGroup>
    </C.Container>
  );
};

export default DateFilter;
