import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';


const slice = createSlice({
  name: 'filter',
  initialState: { filterDate: null, paramFilter: null, filterNumber: null, searchName: null, sortName: null } as any,
  reducers: {
    setFilter: (
      state,
      { payload: filterDate }: PayloadAction<{ filterDate: any }>,
    ) => {
      state.filterDate = filterDate;
    },
    setParamFilter: (
      state,
      { payload: paramFilter }: PayloadAction<{ paramFilter: any }>,
    ) => {
      state.paramFilter = paramFilter;
    },
    setNumberFilter: (
      state,
      { payload: filterNumber }: PayloadAction<{ filterNumber: any }>,
    ) => {
      state.filterNumber = filterNumber;
    },
    setSearchName: (
      state,
      { payload: searchName }: PayloadAction<{ searchName: any }>,
    ) => {
      state.searchName = searchName;
    },
    setSortName: (
      state,
      { payload: sortName }: PayloadAction<{ sortName: any }>,
    ) => {
      state.sortName = sortName;
    },
  },
});

export const { setFilter, setParamFilter, setNumberFilter, setSearchName, setSortName } =
  slice.actions;

export default slice.reducer;


export const selectFilter = (state: RootState) => state.filter.filterDate;
export const selectParamFilter = (state: RootState) => state.filter.paramFilter;
