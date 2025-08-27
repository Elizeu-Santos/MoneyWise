import React, { createContext, useContext, useMemo, useState } from "react";

const translations = {
  "pt-BR": {
    header: {
      title: "MoneyWise",
      subtitle: "Controle suas finanças de forma inteligente",
      namePlaceholder: "Clique para adicionar seu nome",
      nameInputPlaceholder: "Digite seu nome",
    },
    form: {
      description: "Descrição",
      value: "Valor",
      income: "Entrada",
      expense: "Saída",
      add: "ADICIONAR",
      alertDescriptionValue: "Informe a descrição e o valor!",
      alertPositiveValue: "O valor tem que ser positivo!",
      addedSuccess: "adicionado com sucesso!",
    },
    resume: {
      income: "Entradas",
      expense: "Saídas",
      total: "Total",
    },
    grid: {
      description: "Descrição",
      amount: "Valor",
      date: "Data/Hora",
      type: "Tipo",
      more: "Ver mais",
      remaining: "restantes",
    },
    dateFilter: {
      title: "Filtrar por Período",
      filterByDate: "Filtrar por Data",
      startDate: "Data Inicial",
      endDate: "Data Final",
      apply: "Aplicar Filtro",
      clear: "Limpar Filtro",
      invalidDateRange: "A data inicial não pode ser maior que a data final!",
      bothDatesRequired: "Por favor, preencha ambas as datas!",
    }
  },
  en: {
    header: {
      title: "MoneyWise",
      subtitle: "Manage your finances smartly",
      namePlaceholder: "Click to add your name",
      nameInputPlaceholder: "Type your name",
    },
    form: {
      description: "Description",
      value: "Amount",
      income: "Income",
      expense: "Expense",
      add: "ADD",
      alertDescriptionValue: "Enter description and amount!",
      alertPositiveValue: "Amount must be positive!",
      addedSuccess: "added successfully!",
    },
    resume: {
      income: "Income",
      expense: "Expenses",
      total: "Total",
    },
    grid: {
      description: "Description",
      amount: "Amount",
      date: "Date/Time",
      type: "Type",
      more: "See more",
      remaining: "remaining",
    },
    dateFilter: {
      title: "Filter by Period",
      filterByDate: "Filter by Date",
      startDate: "Start Date",
      endDate: "End Date",
      apply: "Apply Filter",
      clear: "Clear Filter",
      invalidDateRange: "Start date cannot be greater than end date!",
      bothDatesRequired: "Please fill in both dates!",
    }
  },
  es: {
    header: {
      title: "MoneyWise",
      subtitle: "Controla tus finanzas de forma inteligente",
      namePlaceholder: "Haz clic para agregar tu nombre",
      nameInputPlaceholder: "Escribe tu nombre",
    },
    form: {
      description: "Descripción",
      value: "Valor",
      income: "Entrada",
      expense: "Gasto",
      add: "AGREGAR",
      alertDescriptionValue: "¡Informe la descripción y el valor!",
      alertPositiveValue: "¡El valor debe ser positivo!",
      addedSuccess: "agregado con éxito!",
    },
    resume: {
      income: "Entradas",
      expense: "Salidas",
      total: "Total",
    },
    grid: {
      description: "Descripción",
      amount: "Valor",
      date: "Fecha/Hora",
      type: "Tipo",
      more: "Ver más",
      remaining: "restantes",
    },
    dateFilter: {
      title: "Filtrar por Período",
      filterByDate: "Filtrar por Fecha",
      startDate: "Fecha Inicial",
      endDate: "Fecha Final",
      apply: "Aplicar Filtro",
      clear: "Limpiar Filtro",
      invalidDateRange: "¡La fecha inicial no puede ser mayor que la fecha final!",
      bothDatesRequired: "¡Por favor, complete ambas fechas!",
    }
  },
  fr: {
    header: {
      title: "MoneyWise",
      subtitle: "Gérez vos finances intelligemment",
      namePlaceholder: "Cliquez pour ajouter votre nom",
      nameInputPlaceholder: "Tapez votre nom",
    },
    form: {
      description: "Description",
      value: "Montant",
      income: "Revenu",
      expense: "Dépense",
      add: "AJOUTER",
      alertDescriptionValue: "Renseignez la description et le montant !",
      alertPositiveValue: "Le montant doit être positif !",
      addedSuccess: "ajouté avec succès !",
    },
    resume: {
      income: "Entrées",
      expense: "Sorties",
      total: "Total",
    },
    grid: {
      description: "Description",
      amount: "Montant",
      date: "Date/Heure",
      type: "Type",
      more: "Voir plus",
      remaining: "restants",
    },
    dateFilter: {
      title: "Filtrer par Période",
      filterByDate: "Filtrer par Date",
      startDate: "Date de Début",
      endDate: "Date de Fin",
      apply: "Appliquer le Filtre",
      clear: "Effacer le Filtre",
      invalidDateRange: "La date de début ne peut pas être supérieure à la date de fin !",
      bothDatesRequired: "Veuillez remplir les deux dates !",
    }
  },
};

const I18nContext = createContext({ locale: "pt-BR", setLocale: () => {}, t: (k) => k });

export const I18nProvider = ({ children }) => {
  const [locale, setLocale] = useState("pt-BR");

  const t = useMemo(() => {
    const dict = translations[locale] || translations["pt-BR"];
    return (key) => {
      const parts = key.split(".");
      let current = dict;
      for (const part of parts) {
        current = current?.[part];
        if (current === undefined) return key;
      }
      return current;
    };
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useTranslation = () => useContext(I18nContext);


