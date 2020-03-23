var udp = require('dgram');

// Creating a udp server
var server = udp.createSocket('udp4');
var ipAddress = "192.168.178.94"
var port = 2222

server.bind(port, ipAddress);
// server.connect(port, ipAddress);

// Emits errors
server.on('error', function(error) {
    console.log('Error: ' + error);
    server.close();
});

// Message
var data = Buffer.from('New Android message');

// Emits message
server.on('message', function(msg, info) {
    console.log('Data received from server: ' + msg.toString());
    console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port);

    if (msg.toString() === 'Android') {
      
    }

    // Sending message
    server.send(data, info.port, info.address, function(error) {
        if(error) {
            client.close();
        }else {
            console.log('Data sent !!');  
        }
    });
});

//Sending message

// server.send(data, port, ipAddress, function(error) {
//         if(error) {
//             client.close();
//         }else {
//             console.log('Data sent !!');
//         }
// });

setTimeout(function(){
  server.send(data, port, ipAddress, function(error) {
    if(error) {
        client.close();
    }else {
        console.log('Data sent !!');
    }
});
},8000);

// Emits when socket is ready and listening for datagram msgs
server.on('listening',function(){
    var address = server.address();
    var port = address.port;
    var family = address.family;
    var ipaddr = address.address;
    console.log('Server is listening at port: ' + port);
    console.log('Server ip: ' + ipaddr);
    console.log('Server is IP4/IP6: ' + family);
  });
  
  //emits after the socket is closed using socket.close();
  server.on('close',function(){
    console.log('Socket is closed !');
  });
  
  setTimeout(function(){
  server.close();
  },998000);
  
  // -------------------- udp client ----------------
  
//   var buffer = require('buffer');
  
//   // creating a client socket
//   var client = udp.createSocket('udp4');
  
//   //buffer msg
//   var data = Buffer.from('Android message');
//     //sending msg
//     client.send(data,port,ipAddress,function(error){
//         if(error){
//           client.close();
//         }else{
//           console.log('Data sent.');
//         }
//     });

//   client.on('message',function(msg,info){
//     console.log('Data received from server : ' + msg.toString());
//     console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
//   });
  
//   var data1 = Buffer.from('hello');
//   var data2 = Buffer.from('world');
  
//   //sending multiple msg
//   client.send([data1,data2],2222,'localhost',function(error){
//     if(error){
//       client.close();
//     }else{
//       console.log('Data sent !!!');
//     }
//   });