import React, { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ISingleAsset } from '../../common/types/assets';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import {
  Alert,
  AlertColor,
  Avatar,
  Button,
  Grid2,
  Snackbar,
  Typography,
} from '@mui/material';
import FlexBetween from '../../components/flex-between';
import { useStyles } from './styles';
import { createWatchListRecord } from '../../store/thunks/assets';

const SingleAssetPage: FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<AlertColor>('success');
  const navigate = useNavigate();
  const { id } = useParams();
  const classes = useStyles();

  const assetsArray: ISingleAsset[] = useAppSelector(
    (state) => state.assets.assets
  );
  // const currentAsset = assetsArray.filter(
  //   (element: ISingleAsset) => element.name === id as string);
  const currentAsset = assetsArray.find(
    (element: ISingleAsset) => element.name === (id as string)
  );
  const dispatch = useAppDispatch();
  const handleCreateRecord = () => {
    try {
      const data = {
        name: currentAsset?.name ?? '',
        assetId: currentAsset?.id ?? '',
      };
      dispatch(createWatchListRecord(data));
      setStatus('success');
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    } catch (e) {
      setStatus('error');
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
  };

  return (
    <>
      {currentAsset && (
        <Grid2 container className={classes.root}>
          <Grid2 size={{ xs: 12 }} className={classes.assetName}>
            <Typography variant='h1'>{currentAsset.name}</Typography>
          </Grid2>
          <Grid2 size={{ sm: 6, xs: 12 }} className={classes.card}>
            <Grid2 className={classes.cardItem}>
              <FlexBetween>
                <Avatar
                  src={currentAsset.image}
                  className={classes.assetIcon}
                />
                <Typography variant='h2' className={classes.assetSymbol}>
                  {currentAsset.symbol.toUpperCase()}
                </Typography>
              </FlexBetween>
            </Grid2>
          </Grid2>
          <Grid2 size={{ sm: 6, xs: 12 }} className={classes.card}>
            <Grid2 className={classes.cardItem}>
              <FlexBetween>
                <Typography variant='h2' className={classes.cardTitle}>
                  Цена:
                </Typography>
                <Typography variant='h2' className={classes.assetPrice}>
                  $ {currentAsset.current_price}
                </Typography>
              </FlexBetween>
            </Grid2>
          </Grid2>
          <Grid2 size={{ sm: 6, xs: 12 }} className={classes.card}>
            <Grid2 className={classes.cardItem}>
              <Typography variant='h2' className={classes.cardTitle}>
                Изменение цены $ :&nbsp;
              </Typography>
              <Typography
                variant='h2'
                className={
                  currentAsset.price_change_24h > 0
                    ? `${classes.assetPriceDetail} ${classes.trendUp}`
                    : `${classes.assetPriceDetail} ${classes.trendDown}`
                }
              >
                {currentAsset.price_change_24h.toFixed(4)}
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 size={{ sm: 6, xs: 12 }} className={classes.card}>
            <Grid2 className={classes.cardItem}>
              <Typography variant='h2' className={classes.cardTitle}>
                Изменение цены % :&nbsp;
              </Typography>
              <Typography
                variant='h2'
                className={
                  currentAsset.price_change_percentage_24h > 0
                    ? `${classes.assetPriceDetail} ${classes.trendUp}`
                    : `${classes.assetPriceDetail} ${classes.trendDown}`
                }
              >
                {currentAsset.price_change_percentage_24h.toFixed(2)}
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 container className={classes.cardButtonBlock}>
            <Button
              className={classes.cardButton}
              color='success'
              variant='outlined'
              onClick={() => navigate(-1)}
            >
              Назад
            </Button>
            <Button
              color='success'
              variant='outlined'
              className={classes.cardButton}
              onClick={handleCreateRecord}
            >
              Добавить в избранное
            </Button>
          </Grid2>
          <Snackbar open={open} autoHideDuration={6000}>
            <Alert severity={status} variant='filled' sx={{ width: '100%' }}>
              Success!
            </Alert>
          </Snackbar>
        </Grid2>
      )}
    </>
  );
};

export default SingleAssetPage;
