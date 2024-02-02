import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { BACKEND_URL } from '../constants';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL
  }),
  endpoints: (build) => ({
    getProducts: build.mutation({
      query: () => ({
        url: '/products',
      })
    }),
  }),
});
