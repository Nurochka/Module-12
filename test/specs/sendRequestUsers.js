const axios = require('axios').default;
const chai = require('chai');
const expect = chai.expect;

describe('Validate GET response', function(){
    let response;

    before(async () => {
        response = await axios.get('https://jsonplaceholder.typicode.com/users');
    });

    it('should validate that the content of the response body is the array of 10 users', function(){
        const size = Object.keys(response.data).length;     
        expect(size).to.eql(10);        
    });
});