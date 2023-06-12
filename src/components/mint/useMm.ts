import Web3 from 'web3'
import { ElMessage } from 'element-plus'

class Mm {
  userAdderss: string | undefined // 用户地址
  recipientAddress: string | undefined // 收款人地址
  error: string | undefined // 错误信息

  constructor() {
    this.init()
  }
  restart() {
    Mm.getInstance()
  }
  init() {
    this.error = undefined
    if (typeof window.ethereum !== 'undefined') {
      // 您的应用请求MetaMask连接权限
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((accounts: any) => {
          // 成功连接后，获取用户地址
          this.userAdderss = accounts[0]
        })
        .catch((error: any) => {
          console.error('Failed to connect to MetaMask:', error)
          this.error = error
        })
    } else {
      this.error = 'MetaMask not found. Please install MetaMask extension.'
      console.error('MetaMask not found. Please install MetaMask extension.')
    }
  }
  initWeb3(nft: any) {
    if (this.userAdderss === undefined) {
      return
    }
    // 初始化Web3实例
    const web3 = new Web3(window.ethereum)
    this.recipientAddress = nft.contractAddress // 收款人地址
    const amountEther = nft.mintPrice // 要发送的以太币数量 (以 Ether 为单位)
    // 将以太币数量从 Ether 转换为 Wei
    const amountWei = web3.utils.toWei(amountEther.toString(), 'ether')
    const transaction = {
      from: this.userAdderss,
      to: this.recipientAddress,
      value: amountWei,
    }
    web3.eth
      .sendTransaction(transaction)
      .then((transactionHash) => {
        console.log('Payment sent, transaction hash:', transactionHash)
        ElMessage.error('Payment sent, transaction hash:')
      })
      .catch((error) => {
        console.log('Payment error:', error)
        // debugger
        ElMessage.error(error.message)
      })
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
