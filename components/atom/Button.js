import React from "react";

function Button({ children, className, onClick }) {
    
  const addClassName = className ? `${className}` : "";

  return (
    <button onClick={onClick} className={`mt-3 py-2 px-3 bg-[#B19973] bg-opacity-80 rounded-sm text-white text-sm ${addClassName}`}>
      {children}
    </button>
  );
}

export default Button;
