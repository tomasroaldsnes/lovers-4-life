pragma solidity ^0.4.0;

contract LoversForLife {
    struct Lovers {
        string lover1;
        string lover2;
        string whyDoYouLove;
        
        
    }
    
    uint AmountInWei = 9000000000000000;
    address creator = 0xF9B5AD3010AA48931918d41279F79FD4F4D5b124;
    Lovers[] public loverList;
    uint public amountOfLovers = 0;
    mapping(address => uint) loverNumber;
    
    function createLover(string l1, string l2, string message) public payable{
        require(msg.value == AmountInWei);
        Lovers memory newLover = Lovers ({
            lover1: l1,
            lover2: l2,
            whyDoYouLove: message
            
            
        });
        
        loverList.push(newLover);
        loverNumber[msg.sender] = amountOfLovers;
        amountOfLovers++;
       
        creator.transfer(msg.value);
    }
    
    function findLover(address user) public view returns (uint){
        return loverNumber[user];
    }
    
    
    
    
}