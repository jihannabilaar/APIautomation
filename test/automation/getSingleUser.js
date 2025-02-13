const assert = require('assert')

describe('Get Single User', function (){
    it('Get single user should be success', async function (){
        this.timeout(5000)
        const response = await fetch('https://reqres.in/api/users/2')
        const dataResponse = await response.json()
        assert.strictEqual(response.status, 200)
        assert.strictEqual(dataResponse.data.first_name, 'Janet')
        // console.log("Response API: " + JSON.stringify(dataResponse, null, 1));

    })

    it('Get invalid user should be error', async function (){
        this.timeout(5000)
        const response = await fetch('https://reqres.in/api/users/5000')

        assert.strictEqual(response.status, 404)
    })

})