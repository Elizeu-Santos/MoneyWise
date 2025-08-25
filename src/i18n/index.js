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
    },
    resume: {
      income: "Entradas",
      expense: "Saídas",
      total: "Total",
    },
    grid: {
      description: "Descrição",
      amount: "Valor",
      type: "Tipo",
      more: "Ver mais",
      remaining: "restantes",
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
    },
    resume: {
      income: "Income",
      expense: "Expenses",
      total: "Total",
    },
    grid: {
      description: "Description",
      amount: "Amount",
      type: "Type",
      more: "See more",
      remaining: "remaining",
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
    },
    resume: {
      income: "Entradas",
      expense: "Salidas",
      total: "Total",
    },
    grid: {
      description: "Descripción",
      amount: "Valor",
      type: "Tipo",
      more: "Ver más",
      remaining: "restantes",
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
    },
    resume: {
      income: "Entrées",
      expense: "Sorties",
      total: "Total",
    },
    grid: {
      description: "Description",
      amount: "Montant",
      type: "Type",
      more: "Voir plus",
      remaining: "restants",
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


