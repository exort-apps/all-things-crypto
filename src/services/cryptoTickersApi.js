import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoTickersApiHeaders = {
    'X-RapidAPI-Host': 'coinlore-cryptocurrency.p.rapidapi.com',
    'X-RapidAPI-Key': 'f2e5e3b4efmsh454f529d222575bp110753jsn858033462674'
}

const baseUrl = 'https://coinlore-cryptocurrency.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoTickersApiHeaders})

export const cryptoTickersApi = createApi({
    reducerPath: 'cryptoTickerApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getTickers: builder.query({
            query: (tickers) => createRequest(`/api${tickers}`),
        }),
    })
})

export const {
    useGetTickersQuery,
} = cryptoTickersApi;
