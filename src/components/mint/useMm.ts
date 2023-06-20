import Web3 from 'web3'
import { ElMessage } from 'element-plus'
declare global {
  interface Window {
    ethereum?: any
    web3?: any
  }
}
class Mm {
  web3: any = null // web3实例
  userAdderss: string | undefined // 用户地址
  error: string | undefined // 错误信息

  constructor() {
    this.init()
  }
  restart() {
    Mm.getInstance()
  }
  async init() {
    this.error = undefined
    if (typeof window.ethereum !== 'undefined') {
      const res = await window.ethereum.enable()
      this.userAdderss = res[0]

      this.web3 = new Web3(window.ethereum)
      // alert('当前钱包地址:' + res[0])
      this.web3.eth.getAccounts(function (error: any, result: any) {
        if (!error) console.log(result) //授权成功后result能正常获取到账号了
      })
    } else {
      this.error = 'MetaMask not found. Please install MetaMask extension.'
      console.error('MetaMask not found. Please install MetaMask extension.')
    }
  }
  // 查询钱包ETH余额
  async getBalance() {
    if (this.userAdderss === undefined) {
      return
    }
    const res = await this.web3.eth.getBalance(this.userAdderss)
    const balance = this.web3.utils.fromWei(res, 'ether')
    ElMessage.success('当前钱包余额:' + balance)
  }
  // 查询代币余额
  async getEth(nft: any) {
    const web3: any = new Web3(window.web3.currentProvider)
    const fromAddress = web3.eth.accounts[0]
    // '代币合约Abi'
    const ethContract = web3.eth.contract(nft.contractABI)
    // '代币合约地址'
    const functionInstance = ethContract.at(nft.contractAddress)
    functionInstance.balanceOf(fromAddress, (err: any, res: any) => {
      if (!err) {
        //代币精度根据所发行的代币合约精度换算
        console.log('代币余额==', res.toNumber() / Math.pow(10, 18))
      }
    })
    // ElMessage.success('当前钱包余额:' + balance)
  }
  async sendTransaction(nft: any) {
    console.log(nft)
    if (this.userAdderss === undefined) {
      return
    }
    // const amountWei = this.web3.utils.toWei(nft.mintPrice, 'ether')
    // const toAddress = nft.contractAddress
    const amountWei = this.web3.utils.toWei('0.00001', 'ether')
    const toAddress = '0x818DF62ff0bE3B28AE8be25e2e848E10138018B7'
    this.web3.eth
      .sendTransaction({
        from: this.userAdderss,
        to: toAddress,
        value: amountWei,
      })
      .on('transactionHash', function (hash: any) {
        console.info(hash)
      })
      .on('receipt', function (receipt: any) {
        console.info(receipt)
      })
      .on('confirmation', function (confirmationNumber: any, receipt: any) {
        console.info(confirmationNumber)

        console.info(receipt)
      })
      .on('error', console.error)
  }
  static instance: Mm
  static getInstance() {
    if (!Mm.instance) {
      Mm.instance = new Mm()
    }
    return Mm.instance
  }
}

export default Mm
