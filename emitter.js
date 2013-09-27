
 //   A simple Pub sub implementation in javascript (Also called the Event Emitter pattern).

 //   An 'emitter' object, can subscribe to events using the 'on' function. The events are published using the 'emit' function.


var emitter = {
    
    handlers : {},

    emit : function(event , data){ 
            if(this.handlers.hasOwnProperty(event)){
                this.handlers["event"].forEach(function(handler){
                    (handler(data));
                })
            }
        } ,

    on : function(event, callback){
        if (this.handlers.hasOwnProperty(event)){
                this.handlers["event"].push(callback);
        }
        else{
                this.handlers["event"] = [callback];
        }
    } 


}
// --------------- Sample usage for the above Event Emitter -------------------

var pubSub = Object.create(emitter);

pubSub.on("init" , function(data){ // subscribing for an init event, the callback is triggered when an 'init' event occours
    console.log("init event was raised by core! Data: " + data);
});

pubSub.on("msg" , function(data){ // subscribing for a msg event
    console.log("the msg event was raised by core and has to be handled here!  Data: " + data );
})

pubSub.emit("init" , "Intialisation related data!"); // publishing an init event

pubSub.emit("msg", "this is a sample msg!")  // publishing a msg event 