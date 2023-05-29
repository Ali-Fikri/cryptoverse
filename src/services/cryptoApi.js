import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "bbdc09286amsh287ae01fd5d7e66p129729jsnaaa02c0c67c3",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins')
    })
  })
})

export const { useGetCryptosQuery } = cryptoApi;