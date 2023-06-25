import Web3 from 'web3'
import { ElMessage } from 'element-plus'
declare global {
  interface Window {
    ethereum?: any
    web3?: any
  }
}
class Mm {
  userAdderss = '' // 用户地址
  error: string | undefined // 错误信息

  constructor() {
    this.init()
  }
  restart() {
    Mm.getInstance()
  }
  async initWeb3(fnSu: () => void, fnEr: (str: string) => void) {
    if (typeof window.ethereum !== 'undefined') {
      const res = await window.ethereum.enable()
      console.log('userAdderss', res)
      this.userAdderss = res[0]
      fnSu()
    } else {
      this.error = 'MetaMask not found. Please install MetaMask extension.'
      console.error('MetaMask not found. Please install MetaMask extension.')
      fnEr('MetaMask not found. Please install MetaMask extension.')
    }
  }
  async init() {
    this.error = undefined
    if (typeof window.ethereum !== 'undefined') {
      // alert('当前钱包地址:' + res[0])
      const web3 = new Web3(window.ethereum)
      const res = await web3.eth.getAccounts()
      console.log('userAdderss', res)
      this.userAdderss = res[0]
    } else {
      this.error = 'MetaMask not found. Please install MetaMask extension.'
      console.error('MetaMask not found. Please install MetaMask extension.')
    }
  }
  // 查询钱包ETH余额
  async getBalance() {
    if (typeof window.ethereum !== 'undefined') {
      if (this.userAdderss === undefined) {
        return
      }
      const web3 = new Web3(window.ethereum)
      const res = await web3.eth.getBalance(this.userAdderss)
      const balance = web3.utils.fromWei(res, 'ether')
      ElMessage.success('当前钱包余额:' + balance)
    } else {
      this.error = 'MetaMask not found. Please install MetaMask extension.'
      console.error('MetaMask not found. Please install MetaMask extension.')
    }
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
  async sendTransaction(
    nft: any,
    successFn: (arg0: any) => void,
    processFn: (arg0: any) => void,
    errorFn: (arg0: any) => void,
    type: any,
  ) {
    if (typeof window.ethereum === 'undefined') {
      this.error = 'MetaMask not found. Please install MetaMask extension.'
      errorFn('MetaMask not found. Please install MetaMask extension.')
      return
    }
    if (this.userAdderss === undefined) {
      return
    }
    const web3 = new Web3(window.ethereum)
    const toAddress = nft.contractAddress
    const amountWei = nft.mintPrice
      ? web3.utils.toWei(nft.mintPrice * 0.0001, 'ether')
      : 0
    const contractABI = JSON.parse(atob(nft.contractABI))
    const contract = new web3.eth.Contract(contractABI, toAddress)
    let transaction = {}
    if (type === 'claim') {
      // 空投合约
      transaction = {
        from: this.userAdderss,
        to: toAddress,
        data: contract.methods.claim().encodeABI(),
      }
    } else if (type === 'free-mint') {
      // 免费mint
      transaction = {
        from: this.userAdderss,
        to: toAddress,
        data: contract.methods.freeMint().encodeABI(),
      }
    } else {
      // 付费mint
      transaction = {
        from: this.userAdderss,
        to: toAddress,
        data: contract.methods.mint().encodeABI(),
        value: amountWei,
      }
    }
    const res = await web3.eth.getGasPrice()
    const balance = web3.utils.fromWei(res, 'ether')
    console.log('gasPrice', balance)
    console.log('transaction', transaction)
    web3.eth
      .sendTransaction(transaction)
      .on('sending', () => {
        processFn(Object.assign({}, nft, { gasPrice: balance }))
      })
      .on('transactionHash', successFn)
      // .on('receipt', function (receipt: any) {
      //   console.info('receipt', receipt)
      // })
      // .on('confirmation', function (confirmationNumber: any, receipt: any) {
      //   console.info('confirmation', confirmationNumber)
      //   console.info('confirmation', receipt) // undefined
      // })
      .on('error', errorFn)

      .catch(errorFn)
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
