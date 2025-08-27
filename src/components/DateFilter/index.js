import React, { useState, useEffect } from "react";
import * as C from "./styles";
import { useTranslation } from "../../i18n";

const DateFilter = ({ onFilterChange }) => {
  const { t } = useTranslation();

  // 📌 gera datas default (últimos 30 dias)
  const today = new Date();
  const priorDate = new Date();
  priorDate.setMonth(priorDate.getMonth() - 1); // 1 mês atrás

  // 📌 função para formatar para yyyy-mm-dd
  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const [startDate, setStartDate] = useState(formatDate(priorDate));
  const [endDate, setEndDate] = useState(formatDate(today));

  // 📌 já aplica o filtro inicial de 1 mês
  useEffect(() => {
    onFilterChange({
      startDate: new Date(startDate + "T00:00:00"),
      endDate: new Date(endDate + "T23:59:59"),
    });
  }, []);

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
      onFilterChange(null);
    }
  };

  const handleClearFilter = () => {
    setStartDate("");
    setEndDate("");
    onFilterChange(null);
  };

  return (
    <C.Container>
      <C.Title>{t("dateFilter.filterByDate")}:</C.Title>

      <C.DateInputGroup>
        <C.Label>{t("dateFilter.startDate")}:</C.Label>
        <C.DateInput
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </C.DateInputGroup>

      <C.DateInputGroup>
        <C.Label>{t("dateFilter.endDate")}:</C.Label>
        <C.DateInput
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
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
