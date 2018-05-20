var expect = require("expect")

var {generateMessage}=require('./message');


describe('generateMessage',()=>{
    it('should generate correct message object',()=>{
        var from='gen';
        var text='some message';
        var message=generateMessage(from,text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toInclude({from,text})

    })
})

