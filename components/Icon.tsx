import React from 'react';

type IconProps = {
  name: string;
  onClick: () => void;
};

const Icon: React.FC<IconProps> = ({ name, onClick }) => {
  return (
    <div
      className="cursor-pointer hover:scale-110 transition-transform"
      onClick={onClick}
    >
      <img
        src={`/feather-icons/${name}.svg`}
        alt={name}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Icon;
