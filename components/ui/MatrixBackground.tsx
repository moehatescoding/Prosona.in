"use client";

import React, { useEffect, useState } from 'react';
import styles from './MatrixBackground.module.css';

const MatrixBackground = () => {
  const [columns, setColumns] = useState<{ left: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const cols = [...Array(40)].map((_, i) => ({
      left: `${i * 2.5}%`,
      delay: `-${Math.random() * 5}s`,
      duration: `${2.5 + Math.random() * 3}s`
    }));
    setColumns(cols);
  }, []);

  return (
    <div className={styles.matrixContainer}>
      <div className={styles.matrixPattern}>
        {columns.map((col, i) => (
          <div 
            key={i} 
            className={styles.matrixColumn} 
            style={{
              left: col.left,
              animationDelay: col.delay,
              animationDuration: col.duration
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MatrixBackground;
