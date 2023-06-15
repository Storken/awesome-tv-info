// src/mocks/handlers.js
import { rest } from 'msw'
import { mockSearchResponse } from './search-response'
import { mockShowResponse } from './show-response'

export const handlers = [
  rest.get('https://api.tvmaze.com/search/shows', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockSearchResponse))
  }),
  rest.get('https://api.tvmaze.com/shows/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockShowResponse))
  })
]
