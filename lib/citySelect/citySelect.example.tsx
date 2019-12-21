import * as React from 'react';
import CitySelect from './citySelect';

const CitySelectExample: React.FC = () => {
  return (
    <div>
      <div>
        <h2>第一个例子</h2>
        <CitySelect>
          选择城市
        </CitySelect>
      </div>
    </div>
  );
};
export default CitySelectExample;