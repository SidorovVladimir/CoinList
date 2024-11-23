import React, { useCallback, useEffect, useMemo, useRef, FC } from 'react';
import { getFavoriteAssets, getTopPriceData } from '../../store/thunks/assets';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { Box, Grid2 } from '@mui/material';
import { useStyles } from './styles';
import AreaChart from '../../components/charts/area-chart';
import TrendUp from '../../assets/images/chart/trend-up.svg';
import TrendDown from '../../assets/images/chart/trend-down.svg';
import LineChart from '../../components/charts/line-chart';
import { IChartData, ISingleAsset } from '../../common/types/assets';
import TopPriceComponent from '../../components/top-price';

const Home: FC = (): JSX.Element => {
  const classes = useStyles();
  const favoriteAssets: IChartData[] = useAppSelector(
    (state) => state.assets.favoriteAssets
  );
  const assetsArray: ISingleAsset[] = useAppSelector(
    (state) => state.assets.assets
  );
  const dispatch = useAppDispatch();
  const fetchDataRef = useRef(false);
  const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], []);
  const filteredArray = useMemo(() => {
    return favoriteAssets.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.name === value.name)
    );
  }, [favoriteAssets]);
  const filteredAssetArray = useMemo(() => {
    return assetsArray
      .slice()
      .sort((a, b) => b.current_price - a.current_price);
  }, [assetsArray]);

  const fetchData = useCallback(
    (data: string[]) => {
      data.forEach((element: string) => {
        dispatch(getFavoriteAssets(element));
      });
    },
    [dispatch]
  );
  useEffect(() => {
    if (fetchDataRef.current) return;
    fetchDataRef.current = true;
    fetchData(favoriteAssetName);
    dispatch(getTopPriceData());
  }, [favoriteAssetName, fetchData, dispatch]);

  const renderFavoriteBlock = filteredArray.map((element: IChartData) => {
    const currentPrice = element.singleAsset[0].current_price;
    const changePrice = element.singleAsset[0].price_change_percentage_24h;
    return (
      <Grid2 key={element.name} size={{ lg: 6, sm: 6, xs: 12 }}>
        <Grid2 container className={classes.topCardItem}>
          <Grid2 size={{ lg: 6, sm: 6, xs: 12 }}>
            <h3 className={classes.assetName}>{element.name}</h3>
            <div className={classes.itemDetails}>
              <h3 className={classes.cardPrice}>${currentPrice}</h3>
              <Box
                className={
                  changePrice > 0
                    ? `${classes.priceTrend} ${classes.trendUp}`
                    : `${classes.priceTrend} ${classes.trendDown}`
                }
              >
                {changePrice > 0 ? (
                  <img src={TrendUp} alt='TrendUp' />
                ) : (
                  <img src={TrendDown} alt='TrendDown' />
                )}
                <span>{changePrice.toFixed(2)}%</span>
              </Box>
            </div>
          </Grid2>
          <Grid2 size={{ lg: 6, sm: 6, xs: 12 }}>
            <AreaChart data={element.price_chart_data} />
          </Grid2>
        </Grid2>
      </Grid2>
    );
  });
  return (
    <Box className={classes.root}>
      <Grid2 container spacing={2} className={classes.areaChartBlock}>
        {renderFavoriteBlock}
      </Grid2>
      <Grid2 container className={classes.lineChartBlock}>
        <Grid2 size={{ lg: 12, sm: 12, xs: 12 }}>
          {filteredArray.length && <LineChart data={filteredArray} />}
        </Grid2>
      </Grid2>
      <Grid2 container className={classes.topPriceRoot}>
        <Grid2 size={{ lg: 12, sm: 12, xs: 12 }}>
          {filteredArray.length && (
            <TopPriceComponent assets={filteredAssetArray.slice(0, 10)} />
          )}
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Home;
