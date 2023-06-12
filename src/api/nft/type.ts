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
  data: {
    totalCount: number
    nftSetList: NftSet[]
  }
}

export interface NftToken {
  tokenId: number
  tokenURI: string
  tokenImage: string
  tokenOwnerAddress: string
  tokenMintedTime: number
}

export interface ResponseNFTTOKEN extends ResponseData {
  data: {
    totalCount: number
    nftTokenList: NftToken[]
  }
}
export interface ResponseNFTSETDETAIL extends ResponseData {
  data: {
    nftSetId: number
    nftSetName: string
    contractAddress: string
    totalSupply: number
    lastHourMintCount: number
    mintPrice: number
    nftDetail: string
  }
}
