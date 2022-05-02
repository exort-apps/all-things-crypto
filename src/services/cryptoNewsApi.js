import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
    'Accept-Language': 'en',
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'f2e5e3b4efmsh454f529d222575bp110753jsn858033462674'
  }

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;