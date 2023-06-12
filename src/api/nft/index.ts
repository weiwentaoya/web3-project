import request from '@/utils/request'
import * as types from './type'
enum API {
  NFTSETLIST = '/v1/nft_set_list',
  TOKENLIST = '/v1/nft_token_list',
  NFTSETDETAIL = '/v1/nft_set_detail',
}

export const getNftSetList = (params?: any) =>
  request.post<types.ResponseNFTSETLIST>(API.NFTSETLIST, { ...params })

export const getNftTokenList = (params: any) =>
  request.post<types.ResponseNFTTOKEN>(API.TOKENLIST, { ...params })

export const getNftDetail = (params: any) =>
  request.post<types.ResponseNFTSETDETAIL>(API.NFTSETDETAIL, { ...params })
