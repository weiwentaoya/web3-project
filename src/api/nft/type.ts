//分类相关的数据ts类型
export interface ResponseData {
  code: number
  message: string
}

export interface NftSet {
  nftSetId: number
  nftSetName: string
  totalSupply: number
  lastHourMintCount: number
}

export interface ResponseNFTSETLIST extends ResponseData {
  totalCount: number
  nftSetList: NftSet[]
}

export interface NftToken {
  tokenId: number
  tokenURI: string
  tokenImage: string
  tokenOwnerAddress: string
  tokenMintedTime: number
}

export interface ResponseNFTTOKEN extends ResponseData {
  totalCount?: number
  nftTokenList: NftToken[]
}
export interface ResponseNFTSETDETAIL extends ResponseData {
  nftSetId: number
  nftSetName: string
  contractAddress: string
  totalSupply: number
  lastHourMintCount: number
  mintPrice: number
  nftDetail: string
}

export interface NFTDETAIL extends ResponseNFTSETDETAIL, ResponseNFTTOKEN {}

export interface ResponseMINTPRICE {
  allowMint: boolean
  mintPrice: number
}
export interface airDropContractResponse {
  contractAddress: number
  contractABI: number
  saleEndTime: number
  totalClaim: number
}
