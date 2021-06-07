const Web3 = require("web3")
import {OpenSeaPort, Network} from 'opensea-js'

interface CustomNodeJsGlobal extends NodeJS.Global {
  seaport: OpenSeaPort;
}

//prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal;

const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')

const seaport = global.seaport || new OpenSeaPort(provider, {
  networkName: Network.Main
});

if(process.env.NODE_ENV === 'development'){
  global.seaport = seaport;
} 

export default seaport