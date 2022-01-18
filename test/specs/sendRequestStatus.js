const axios = require('axios').default;
const chai = require('chai');
const expect = chai.expect;

describe('Validate GET response', function(){
    let response;

    before(async () => {
        response = await axios.get('https://jsonplaceholder.typicode.com/users');
    });

    it('should validate that the content-type header exists and is "application/json; charset=utf-8"', function(){
        expect(response.headers['content-type']).to.exist;     
        expect(response.headers['content-type']).to.eql('application/json; charset=utf-8');        
    });
    
});