import React from 'react';
import { Stack, Autocomplete, TextField } from '@mui/material';

import { useAppSelector } from '../../utils/hook';
import { ISingleAsset } from '../../common/types/assets';
import { useNavigate } from 'react-router-dom';

const SearchBarComponent = () => {
  const navigate = useNavigate();
  const assetsArray: ISingleAsset[] = useAppSelector(
    (state) => state.assets.assets
  );
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        disableClearable
        onChange={(e: any, value: string | null) => navigate(`single/${value}`)}
        renderInput={(element) => (
          <TextField
            {...element}
            label='Поиск'
            slotProps={{
              input: {
                ...element.InputProps,
                type: 'search',
              },
            }}
          />
        )}
        options={assetsArray.map((element: { name: string }) => element.name)}
      />
    </Stack>
  );
};

export default SearchBarComponent;
