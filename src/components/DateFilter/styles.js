import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 0px;
  gap: 10px;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    gap: 15px;
  }
`;

export const Title = styled.h3`
  color: #333;
  padding: 0 20px;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  text-align: left;

  @media (max-width: 750px) {
    text-align: center;
  }
`;

export const DateInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  min-width: auto;

  @media (max-width: 750px) {
    width: 90%;
    justify-content: center;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  white-space: nowrap;

  @media (max-width: 750px) {
    text-align: center;
    width: 100px;
  }
`;

export const DateInput = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-color: #667eea;
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }

  @media (max-width: 750px) {
    width: 150px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-left: 15px;

  @media (max-width: 750px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-left: 0;
  }
`;

export const ApplyButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: teal;
  font-size: 15px;

  &:hover {
    background-color: #008080;
  }
`;

export const ClearButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: #ccc;
  font-size: 15px;
  margin-left: 15px;

  &:hover {
    background-color: #bbb;
  }

  @media (max-width: 750px) {
    margin-left: 0;
  }
`;
