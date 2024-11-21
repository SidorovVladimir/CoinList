export interface IAreaChartProps {
  data: Array<number[]>;
}

export interface ILineChartProps {
  data: any;
}

interface ISingleAsset {
  id: string;
  symbiol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: any;
  market_cap_rank: number;
  fully_diluted_valuation: any;
  total_volume: any;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
}

export interface IChartData {
  name: string;
  price_chart_data: Array<number[]>;
  singleAsset: ISingleAsset[];
}
