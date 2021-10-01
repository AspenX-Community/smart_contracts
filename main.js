const ganache = require("ganache-cli");

const options = {};
const server = ganache.server(options);
const provider = server.provider;

const PORT = 8545;

server.listen(PORT, async (err, blockchain) => {
    
    if (err){
       console.log(`[ FAIL ] Load Ganache on ${PORT}`);
       throw err;  
    }
  
    console.log(`[ OK ] Load Ganache on ${PORT}`);
    

});