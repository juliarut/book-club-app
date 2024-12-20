import React from "react";

interface CardProps {
  title: string;
  description: string;
  footerText?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  footerText,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {footerText && <p className="text-sm text-gray-500">{footerText}</p>}
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
