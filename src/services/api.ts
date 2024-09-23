import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
<<<<<<< HEAD
import { Restaurantes } from '../pages/Home'

=======
import { Restaurante } from '../pages/Home'
>>>>>>> ef65e7dd95d9e76145152e5bc1657510f6f5ea05
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
<<<<<<< HEAD
    getHome: builder.query<Restaurantes[], void>({
=======
    getHome: builder.query<Restaurante[], void>({
>>>>>>> ef65e7dd95d9e76145152e5bc1657510f6f5ea05
      query: () => 'restaurantes'
    })
  })
})

export const { useGetHomeQuery } = api
export default api
