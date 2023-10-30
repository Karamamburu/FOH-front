import React from 'react';

interface CondimentItem {
  condiments: { [name: string]: number };
}

interface CondimentsListProps {
  data: CondimentItem | null;
}

const CondimentsList: React.FC<CondimentsListProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <ul className="condiments-list">
      {Object.keys(data).map((condimentName) => {
        const count = data[condimentName];
        if (count > 0) {
          return (
            <li key={condimentName}>
              <img className='condiment'
                src={`../src/assets/condiments/${condimentName}.png`}
                alt={condimentName}
              />
              <span className='condiment-num'>
              {count}
              </span>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

export default CondimentsList;