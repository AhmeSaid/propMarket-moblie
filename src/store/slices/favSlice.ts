import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';


const slice = createSlice({
  name: 'Favourites',
  initialState: { FavouritesData: [] } as any,
  reducers: {
    setFavourites: (
      state,
      { payload: FavouritesData }: PayloadAction<{ FavouritesData: any }>,
    ) => {
      state.FavouritesData = FavouritesData;
    },

  },
});

export const { setFavourites } =
  slice.actions;

export default slice.reducer;


export const selectFavourites = (state: RootState) => state.Favourites.FavouritesData;
