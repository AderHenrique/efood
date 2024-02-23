import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getHome: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetHomeQuery } = api
export default api
