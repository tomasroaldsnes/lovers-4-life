import web3 from './web3';

const address = '0x14A8B67ae05379308eD21FcBa4bbbcF6fD418840';

const abi = [{"constant":true,"inputs":[],"name":"amountOfLovers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"l1","type":"string"},{"name":"l2","type":"string"},{"name":"message","type":"string"}],"name":"createLover","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"price","type":"uint256"}],"name":"setPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"loverList","outputs":[{"name":"lover1","type":"string"},{"name":"lover2","type":"string"},{"name":"whyDoYouLove","type":"string"},{"name":"worth","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"findLover","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]

const instance = new web3.eth.Contract(abi, address);

export default instance;