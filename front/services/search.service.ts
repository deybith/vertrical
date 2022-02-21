import { axiosBaseInstance } from "./base.service"
import { ISearchResponse } from "./interfaces/search-response.interface"

export const searchService = async (textToFind: string): Promise<ISearchResponse[]> => {
  const result = await axiosBaseInstance.get(`search/${textToFind}`)
  return result.data as ISearchResponse[]
}


export const searchByIdService = async (id: string) => {
  const result = await axiosBaseInstance.get(`search/byId/${id}`)
  return result.data as ISearchResponse
}