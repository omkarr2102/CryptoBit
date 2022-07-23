import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '26ff656741mshb7b8b1092e6cdc1p14f0dajsn45527f223602',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin?${coinId}`), // `/coins?${coinId}`
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi;



/*const options = {
    method: 'GET',
    url: '',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      limit: '50',
      offset: '0',
      orderBy: '24hVolume',
      orderDirection: 'desc'
    },
    headers: {
      'X-RapidAPI-Key': '26ff656741mshb7b8b1092e6cdc1p14f0dajsn45527f223602',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };*/