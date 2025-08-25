import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  padding: 15px 0px;
  gap: 10px;

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const Title = styled.h3`
  color: #333;
  padding: 20px;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  text-align: left;
`;

export const FilterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
  }
`;

export const DateInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  min-width: 220px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
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
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
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
  
  &:hover {
    background-color: #bbb;
  }
`;
