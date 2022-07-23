import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '26ff656741mshb7b8b1092e6cdc1p14f0dajsn45527f223602',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    //'X-RapidAPI-Key': '26ff656741mshb7b8b1092e6cdc1p14f0dajsn45527f223602',
    //'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;


/*const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
    params: {textFormat: 'Raw', safeSearch: 'Off'},
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': '26ff656741mshb7b8b1092e6cdc1p14f0dajsn45527f223602',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };*/