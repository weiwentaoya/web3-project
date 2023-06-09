import Web3 from 'web3'
import { ElMessage } from 'element-plus'
declare global {
  interface Window {
    ethereum?: any
    web3?: any
  }
}
class Mm {
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
      fnSu()
      const web3 = new Web3(window.ethereum)
      this.checkNetId(web3)
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
      if (res.length > 0) {
        this.checkNetId(web3)
      } else {
        // this.initWeb3(
        //   // eslint-disable-next-line @typescript-eslint/no-empty-function
        //   () => {},
        //   // eslint-disable-next-line @typescript-eslint/no-empty-function
        //   () => {},
        // )
      }
    } else {
      this.error = 'MetaMask not found. Please install MetaMask extension.'
      console.error('MetaMask not found. Please install MetaMask extension.')
    }
  }
  // 查询钱包ETH余额
  async getBalance() {
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum)
      const userAdderss = await web3.eth.getAccounts()
      console.log('userAdderss', userAdderss)
      const res = await web3.eth.getBalance(userAdderss[0])
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
    const web3 = new Web3(window.ethereum)
    const networkId: any = await web3.eth.net.getId()
    console.log(`当前网络的 ID 为: ${Number(networkId)}`)
    if (Number(networkId) !== 1) {
      // 切换到 Ropsten 测试网
      return window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x1' }],
      })
    }
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
        to: toAddress,
        data: contract.methods.claim().encodeABI(),
      }
    } else if (type === 'free-mint') {
      // 免费mint
      transaction = {
        to: toAddress,
        data: contract.methods.freeMint().encodeABI(),
      }
    } else {
      // 付费mint
      transaction = {
        to: toAddress,
        data: contract.methods.mint().encodeABI(),
        value: amountWei,
      }
    }
    // debugger
    try {
      let userAdderss = await web3.eth.getAccounts()
      if (userAdderss.length === 0) {
        userAdderss = await window.ethereum.enable()
      }
      console.log('userAdderss', userAdderss)
      const gas = await web3.eth.estimateGas({
        ...transaction,
        from: userAdderss[0],
      })
      console.log('gas', gas)
      const gasPrice = await web3.eth.getGasPrice()
      console.log('gasPrice', gasPrice)
      const balance = web3.utils.fromWei(gas * gasPrice, 'ether')
      console.log('balance', balance)
      console.log('transaction', transaction)
      web3.eth
        .sendTransaction({ ...transaction, from: userAdderss[0], gas })
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
    } catch (error) {
      console.log('error', error)
      errorFn(error)
    }
  }
  async checkNetId(web3: { eth: { net: { getId: () => Promise<any> } } }) {
    const networkId: any = await web3.eth.net.getId()
    console.log(`当前网络的 ID 为: ${Number(networkId)}`)
    if (Number(networkId) !== 1) {
      // 切换到 Ropsten 测试网
      return window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x1' }],
      })
    }
    // if (Number(networkId) !== 1) {
    //   // 切换到 Ropsten 测试网
    //   window.ethereum.request({
    //     method: 'wallet_switchEthereumChain',
    //     params: [{ chainId: '0x1' }],
    //   })
    // }
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
