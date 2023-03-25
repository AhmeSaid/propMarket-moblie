import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { Auth_URL, Google_URL } from '../utils/constants';

export const googleService = createApi({
  reducerPath: 'googleService',
  tagTypes: ['GoogleTag'],
  baseQuery: fetchBaseQuery({
    baseUrl: Google_URL,

  }),
  endpoints: builder => ({

    googleSearch: builder.mutation<any, any>({
      query: param => ({
        url: '/autocomplete/json?key=AIzaSyD0B8-n46-E1i3YELNDLvABYrsH23qL3VM&input=' + param,
        method: 'GET',
      }),
    }),
    googleSearchPlaceID: builder.mutation<any, any>({
      query: param => ({
        url: '/details/json?key=AIzaSyD0B8-n46-E1i3YELNDLvABYrsH23qL3VM&placeid=' + param,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGoogleSearchMutation, useGoogleSearchPlaceIDMutation } = googleService;
