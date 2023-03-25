import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';


const slice = createSlice({
  name: 'home',
  initialState: { loc: null, homeData: null } as any,
  reducers: {
    setLocation: (
      state,
      { payload: loc }: PayloadAction<{ loc: any }>,
    ) => {
      state.loc = loc;
    },
    setHomeData: (
      state,
      { payload: homeData }: PayloadAction<{ homeData: any }>,
    ) => {
      state.homeData = homeData;
    },
  },
});

export const { setLocation, setHomeData } =
  slice.actions;

export default slice.reducer;


export const homeData = (state: RootState) => state.home.homeData;
