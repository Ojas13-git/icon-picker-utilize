import React, { useState } from 'react';
import IconGrid from './IconGrid';

type IconPickerProps = {
  rowsInOnePage: number;
  columnsInOnePage: number;
  iconHeight: number;
  iconWidth: number;
  pickerHeight?: string;
  pickerWidth?: string;
};

const IconPicker: React.FC<IconPickerProps> = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight = '500px',
  pickerWidth = '500px',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleIconSelect = (icon: string) => {
    setSelectedIcon(icon);
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center justify-center">
      <div
        className="border-2 mt-[-400px] border-gray-300 rounded-lg flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105"
        style={{ width: '100px', height: '100px' }}
        onClick={handleIconClick}
      >
        {selectedIcon ? (
          <img
            src={`/feather-icons/${selectedIcon}.svg`}
            alt={selectedIcon}
            width={iconWidth}
            height={iconHeight}
            className="object-contain"
          />
        ) : (
          <span className="text-gray-500">Pick an icon</span>
        )}
      </div>

      {isOpen && (
        <div
          className="absolute top-[-150px] left-0 bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden z-10"
          style={{ width: pickerWidth, height: pickerHeight }}
        >
          <IconGrid
            rowsInOnePage={rowsInOnePage}
            columnsInOnePage={columnsInOnePage}
            iconHeight={iconHeight}
            iconWidth={iconWidth}
            onIconSelect={handleIconSelect}
          />
        </div>
      )}
    </div>
  );
};

export default IconPicker;
