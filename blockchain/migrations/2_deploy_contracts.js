const Vidas = artifacts.require("Vidas");

module.exports=function(deployer){
    deployer.deploy(Vidas);
}