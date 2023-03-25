import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../store';
import {Prop_URL, USER_DATA_NAME} from '../utils/constants';
import {_retrieveData} from '../utils/storageController';

export const propService = createApi({
  reducerPath: 'propService',
  tagTypes: ['propServiceTag'],
  baseQuery: fetchBaseQuery({
    baseUrl: Prop_URL,
    prepareHeaders: async (headers, {getState}) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.token;
      const savedUserData = await _retrieveData(USER_DATA_NAME);

      if (token || savedUserData?.token) {
        headers.set('authorization', token || savedUserData?.token);
      }

      return headers;
    },
  }),
  endpoints: builder => ({
    getAllProperties: builder.mutation<any, any>({
      query: () => ({
        url: 'property/searchProperties',
        method: 'GET',
      }),
    }),
    getAllPropertiesquery: builder.query<any, any>({
      query: () => ({
        url: '/property/searchProperties',
        method: 'GET',
      }),
    }),
    getPropertyDetails: builder.mutation<any, any>({
      query: id => ({
        url: 'property/getPropertyDetails?id=' + id,
        method: 'GET',
      }),
    }),
    addAndRemoveFav: builder.mutation<any, any>({
      query: ({id}) => ({
        url: '/property/toggleLikeProperty',
        method: 'POST',
        body: id,
      }),
    }),
    getAllStates: builder.mutation<any, any>({
      query: (id) => ({
        url: '/generic/find',
        method: 'POST',
        body: {
          model: 'District',
          no_count: true,
          where: {
            city_id: id,
          },
        },
      }),
    }),
    getAllCities: builder.mutation<any, any>({
      query: () => ({
        url: '/generic/find?model=City&no_count=true',
        method: 'GET',
      }),
    }),
    getAllPropeOnMap: builder.query<any, any>({
      query: () => ({
        url: '/property/getAllProperties',
        method: 'GET',
      }),
    }),
    getMySavedProperties: builder.query<any, any>({
      query: () => ({
        url: '/property/getMySavedProperties',
        method: 'GET',
      }),
    }),
    getMySavedPropertiesmutation: builder.mutation<any, any>({
      query: () => ({
        url: '/property/getMySavedProperties',
        method: 'GET',
      }),
    }),
    searchProperties: builder.mutation<any, any>({
      query: param => ({
        url: `property/searchProperties?` + param,
        method: 'POST',
      }),
    }),
    reserveProperty: builder.mutation<any, any>({
      query: body => ({
        url: `property/reserveProperty` ,
        method: 'POST',
        body
      }),
    }),
    getPropertyDetailsquery: builder.query<any, any>({
      query: id => ({
        url: 'property/getPropertyDetails?id=' + id,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetAllPropertiesMutation,
  useGetPropertyDetailsMutation,
  useGetPropertyDetailsqueryQuery,
  useGetAllPropertiesqueryQuery,
  useAddAndRemoveFavMutation,
  useGetAllPropeOnMapQuery,
  useGetAllCitiesMutation,
  useGetMySavedPropertiesQuery,
  useSearchPropertiesMutation,
  useReservePropertyMutation,
  useGetAllStatesMutation,
  useGetMySavedPropertiesmutationMutation,
} = propService;
