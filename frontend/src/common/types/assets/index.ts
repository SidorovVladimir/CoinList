export interface IAreaChartProps {
  data: Array<number[]>;
}

export interface ILineChartProps {
  data: any;
}

// interface SingleAsset {}

export interface IChartData {
  name: string;
  price_chart_data: Array<number[]>;
  // singleAsset: SingleAsset[];
  singleAsset: any;
}
