import React from 'react';

const Spinner = () => {
  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.2); opacity: 1; }
          }
          @keyframes colorShift {
            0% { border-top-color: #3498db; }
            33% { border-top-color: #e74c3c; }
            66% { border-top-color: #2ecc71; }
            100% { border-top-color: #3498db; }
          }
          .spinner {
            position: relative;
            width: 60px;
            height: 60px;
          }
          .spinner::before,
          .spinner::after {
            content: '';
            position: absolute;
            border: 6px solid #e5e7eb;
            border-top: 6px solid #3498db;
            border-radius: 50%;
            width: 100%;
            height: 100%;
            animation: spin 1.5s linear infinite, colorShift 4.5s ease-in-out infinite;
          }
          .spinner::after {
            width: 40px;
            height: 40px;
            margin: 10px;
            animation: spin 1s linear infinite reverse, colorShift 4.5s ease-in-out infinite;
            box-shadow: 0 0 10px rgba(52, 152, 219, 0.5), 0 0 20px rgba(52, 152, 219, 0.3);
          }
          .spinner-core {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #3498db, #2ecc71);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: pulse 1.2s ease-in-out infinite;
          }
        `}
      </style>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="spinner">
          <div className="spinner-core"></div>
        </div>
      </div>
    </>
  );
};

export default Spinner;