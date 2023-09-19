"use client";

import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { getRandomColor } from "@/utils/get-color";

export interface CircularProgressBarProps {
  size: number;
  strokeWidth: number;
  percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  size,
  strokeWidth,
  percentage,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const progressOffset = ((100 - percentage) / 100) * circumference;
    setOffset(progressOffset);
  }, [percentage, circumference]);

  return (
    <svg className={styles.circularProgressBar} width={size} height={size}>
      <circle
        className={styles.backgroundCircle}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <circle
        className={styles.progressCircle}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={getRandomColor()}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <text x="30%" y="55%" className={styles.percentageText}>
        {percentage}%
      </text>
    </svg>
  );
};

export { CircularProgressBar };
