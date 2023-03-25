import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { Auth_URL } from '../utils/constants';

export const authService = createApi({
  reducerPath: 'authService',
  tagTypes: ['AuthTag'],
  baseQuery: fetchBaseQuery({
    baseUrl: Auth_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    signup: builder.mutation<any, any>({
      query: body => ({
        url: 'signUp',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation<any, any>({
      query: body => ({
        url: 'login',
        method: 'POST',
        body,
      }),
    }),
    generateOtp: builder.mutation<any, any>({
      query: body => ({
        url: 'generateOtp',
        method: 'POST',
        body,
      }),
    }),
    verifyOtp: builder.mutation<any, any>({
      query: body => ({
        url: 'verifyOtp',
        method: 'POST',
        body,
      }),
    }),
    resetPassword: builder.mutation<any, any>({
      query: body => ({
        url: 'resetPassword',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useResetPasswordMutation, useGenerateOtpMutation, useVerifyOtpMutation } = authService;
