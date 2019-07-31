
//array
var rooms = [];

//object
var rooms1= {
    roomName: "room1"

    
   

};

//multidimensonal object
var obj = {
    roomDescr:{},
    players:{}


};

function checkRoom(roomName) {


    for (let index = 0; index < array.length; index++) {
        

        if (roomName == index.roomName) {
            
        }
        
        
    }
};


function createRoom(roomName) {
  
    rooms.push(roomName);

};



function Room(roomName) {
    this.roomName = roomName;
  }
  
  User.prototype.sayHi = function() {
    alert(this.name);
  }
  
  let user = new User("John");
  user.sayHi();