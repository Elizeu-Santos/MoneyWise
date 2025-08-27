import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 0.9;
    transform: translateX(0);
  }
`;

export const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${(props) =>
    props.type === "success" ? "#4CAF50" : props.type === "error" ? "#F44336" : "#333"};
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  opacity: 0.9;
  z-index: 1000;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  min-width: 200px;
  animation: ${slideIn} 0.3s ease-out;
`;
