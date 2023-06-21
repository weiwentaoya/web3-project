import request from '@/utils/request'
import * as types from './type'
enum API {
  nft_set_list = '/v1/nft_set_list',
  nft_token_list = '/v1/nft_token_list',
  nft_set_detail = '/v1/nft_set_detail',
  nft_mint_price = '/v1/nft_mint_price',
  air_drop_contract = '/v1/air_drop_contract',
}

export const getNftSetList = (params?: any) =>
  request.post<types.ResponseNFTSETLIST>(API.nft_set_list, { ...params })

export const getNftTokenList = (params: any) =>
  request.post<types.ResponseNFTTOKEN>(API.nft_token_list, { ...params })

export const getNftDetail = (params: any) =>
  request.post<types.ResponseNFTSETDETAIL>(API.nft_set_detail, { ...params })

export const getMintPrice = (params: any) =>
  request.post<types.ResponseMINTPRICE>(API.nft_mint_price, { ...params })

export const airDropContract = (params?: any) =>
  request.post<types.airDropContractResponse>(API.air_drop_contract, {
    ...params,
  })
