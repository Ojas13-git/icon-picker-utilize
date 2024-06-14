import React from 'react';
import IconPicker from '../components/IconPicker';

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <IconPicker
        rowsInOnePage={4}
        columnsInOnePage={4}
        iconHeight={50}
        iconWidth={50}
        pickerHeight="500px"
        pickerWidth="500px"
      />
    </div>
  );
};

export default Home;
