import React, { useState, useEffect } from 'react';
import Icon from './Icon';

type IconGridProps = {
  rowsInOnePage: number;
  columnsInOnePage: number;
  iconHeight: number;
  iconWidth: number;
  onIconSelect: (icon: string) => void;
};

const IconGrid: React.FC<IconGridProps> = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  onIconSelect,
}) => {
  const [icons, setIcons] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchIcons = async () => {
      const res = await fetch('/api/icons');
      const data = await res.json();
      setIcons(data.icons);
    };
    fetchIcons();
  }, []);

  const totalIconsPerPage = rowsInOnePage * columnsInOnePage;
  const totalPages = Math.ceil(icons.length / totalIconsPerPage);

  const displayedIcons = icons.slice(
    currentPage * totalIconsPerPage,
    (currentPage + 1) * totalIconsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-4">
      <div
        className="grid gap-4"
        style={{
          gridTemplateRows: `repeat(${rowsInOnePage}, ${iconHeight}px)`,
          gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)`,
        }}
      >
        {displayedIcons.map((icon) => (
          <Icon key={icon} name={icon} onClick={() => onIconSelect(icon)} />
        ))}
      </div>
      <div className="flex justify-between mt-4 px-4">
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default IconGrid;
