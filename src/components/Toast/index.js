import React, { useEffect } from "react";
import { ToastContainer } from "./styles";

const Toast = ({ message, duration = 3000, onClose, type = "success" }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return <ToastContainer type={type}>{message}</ToastContainer>;
};

export default Toast;
