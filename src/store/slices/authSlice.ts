import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

const intialState = {
  returned: { user: null, token: null } as any
}

const slice = createSlice({
  name: 'auth',
  initialState: intialState,
  reducers: {
    logout: () => intialState,
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: any; token: string }>,
    ) => {
      state.user = user;
      state.token = token;
    },
    setUser: (state, { payload: user }: PayloadAction<any>) => {
      state.user = user;
    },
    setToken: (state, { payload: token }: PayloadAction<string>) => {
      state.token = token;
    },
    resetCredentials: state => {
      state.user = null;
      state.token = null;
    },
    setNotFirst: state => {
      state.notFirst = true
    }
  },
});

export const { setCredentials, setUser, resetCredentials, setToken,logout, setNotFirst } =
  slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectUserToken = (state: RootState) => state.auth.token;
export const selectNotFirst = (state: RootState) => state.auth.notFirst;