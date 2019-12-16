pragma solidity^0.5.0;

contract Vidas{
    uint public vidaCount = 0;

    struct Vida {
        uint id;
        string userId;
        int vida;
    }
    mapping(uint => Vida) public vidas;

    event VidaCreada(
        uint id,
        string userId,
        int vida
    );

    event VidaModificada(
        uint id,
        int vida
    );

    function crearVida(string memory _userId, int _vida) public{
        vidaCount++;
        vidas[vidaCount] = Vida(vidaCount, _userId, _vida);
        emit VidaCreada(vidaCount, _userId, _vida);
    }

    function modificarVida(uint _id, int _vida)public{
        Vida memory _Vida = vidas[_id];
        _Vida.vida = _vida;
        vidas[_id] = _Vida;
        emit VidaModificada(_id, _Vida.vida);
    }

    function getVida(uint _id) public view returns (int){
        return vidas[_id].vida;
    }
}