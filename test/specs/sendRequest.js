const axios = require('axios').default;
const chai = require('chai');
const expect = chai.expect;

describe('Validate GET response', function(){
    let response;

    before(async () => {
        response = await axios.get('https://jsonplaceholder.typicode.com/users');
    });

    it('should validate that status code of the obtained response is 200 OK', function(){
        expect(response.status+' '+ response.statusText).to.eql('200 OK');        
    });

    it('should validate that the content-type header exists and is "application/json; charset=utf-8"', function(){
        expect(response.headers['content-type']).to.exist;     
        expect(response.headers['content-type']).to.eql('application/json; charset=utf-8');        
    });

    it('should validate that the content of the response body is the array of 10 users', function(){
        const size = Object.keys(response.data).length;     
        expect(size).to.eql(10);        
    });
});