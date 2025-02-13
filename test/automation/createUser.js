const assert = require('assert')

describe('Create User', function (){
    it('Create user should be success', async function () {
        this.timeout(10000)
        const url = 'https://reqres.in/api/users'
        const requestData = {
                "name": "Jihan",
                "job": "Nabila",
                "id": "95",
                "createdAt": "2025-02-13T05:52:02.299Z"
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const dataResponse = await response.json()
        assert.strictEqual(response.status, 201)
        assert.strictEqual(requestData.name, "Jihan")
        // console.log("User created successfully.")
        // console.log("Response API: " + JSON.stringify(dataResponse, null, 1))
        
    })

})