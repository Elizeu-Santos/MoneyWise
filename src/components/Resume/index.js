import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";
import { useTranslation } from "../../i18n";

const Resume = ({ income, expense, total }) => {
  const { t } = useTranslation();
  return (
    <C.Container>
      <ResumeItem
        title={t("resume.income")}
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <ResumeItem
        title={t("resume.expense")}
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title={t("resume.total")} Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Resume;
