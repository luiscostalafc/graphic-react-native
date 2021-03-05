import React from 'react';
import { BarChart } from 'react-native-svg-charts';

import { ActivityIndicator } from 'react-native';

function CustomBarChart({ chartData, chartDimensions }) {
  return chartDimensions ? (
    <BarChart
      data={chartData}
      svg={{
        fill: 'rgba(175, 220, 139, 0.7)',
      }}
      yMin={0}
      yAccessor={({ item }) => item.value}
      spacingInner={0.25}
      style={{
        borderRadius: 8,
        width: chartDimensions.width,
        height: chartDimensions.height,
      }}
    />
  ) : (
    <ActivityIndicator size="small" color="#f3fa" />
  );
}

export default CustomBarChart;
