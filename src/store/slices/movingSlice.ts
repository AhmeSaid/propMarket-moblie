import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';


const slice = createSlice({
  name: 'moving',
  initialState: { movingData: null } as any,
  reducers: {
    setMoving: (
      state,
      { payload: movingData }: PayloadAction<{ movingData: any }>,
    ) => {
      state.movingData = {...state.movingData, ...movingData};
    },
    
  },
});

export const { setMoving } =
  slice.actions;

export default slice.reducer;


export const selectMovingData = (state: RootState) => state.moving.movingData;
