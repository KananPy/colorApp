

import React from 'react';
import { useSelector } from 'react-redux';
import styles from "./ColorList.module.css"

const ColorList = () => {
  const colors = useSelector((state) => state.colors);

  const colorGroups = [];
  for (let i = 0; i < colors.length; i += 6) {
    colorGroups.push(colors.slice(i, i + 6));
  }
  console.log(colors)
  return (



    <div>
      <h2>Color List</h2>
      {colorGroups.map((colorGroup, groupIndex) => (
        <div key={groupIndex} className="color-group">
          {colorGroup.map((color, index) => (
            <div key={index} className="color-item">
              <span className={styles['color-box']} style={{ backgroundColor: color.code }}>{color.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ColorList;
