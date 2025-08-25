import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = () => {
  return (
    <C.Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={3000} />
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={1600} />
      <ResumeItem title="Total" Icon={FaDollarSign} value={1400} />
    </C.Container>
  );
};

export default Resume;
