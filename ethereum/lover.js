import web3 from './web3';

const address = '0xE5bb212f0141e1B9664B449F45588B942E0927Be';

const abi = [{"constant":true,"inputs":[],"name":"amountOfLovers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"l1","type":"string"},{"name":"l2","type":"string"},{"name":"message","type":"string"}],"name":"createLover","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"price","type":"uint256"}],"name":"setPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"loverList","outputs":[{"name":"lover1","type":"string"},{"name":"lover2","type":"string"},{"name":"whyDoYouLove","type":"string"},{"name":"worth","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"findLover","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]

const instance = new web3.eth.Contract(abi, address);

export default instance;