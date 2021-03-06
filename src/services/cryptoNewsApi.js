import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
    'Accept-Language': 'en',
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_BING_NEWS_SEARCH_API_KEY
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