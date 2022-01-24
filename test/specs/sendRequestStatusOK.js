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
});