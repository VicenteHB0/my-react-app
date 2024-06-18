import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; 

const Toast = () => {
  const showToast = () => {
    toast.info('This is a blue toast!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'custom-toast' 
    });
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      <ToastContainer />
    </div>
  );
};

export default Toast;