import { SearchResponse, Show } from './interfaces'

const baseUrl = 'https://api.tvmaze.com'
const searchPath = '/search/shows?q='
const showPath = '/shows/'

type Response<T> = {
  success: boolean
  data?: T
}

export const getShowsFromSearch = async (
  query: string
): Promise<Response<SearchResponse[]>> => {
  try {
    const queryUrl = `${baseUrl}${searchPath}${query}`
    const response = await fetch(queryUrl)
    return { data: (await response.json()) as SearchResponse[], success: true }
  } catch (e) {
    return { success: false }
  }
}

export const getShow = async (id: string): Promise<Response<Show>> => {
  try {
    const queryUrl = `${baseUrl}${showPath}${id}`
    const response = await fetch(queryUrl)
    return { data: (await response.json()) as Show, success: true }
  } catch (e) {
    return { success: false }
  }
}
