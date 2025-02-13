const assert = require('assert')

describe('Update User', function (){
    it('Update user should be success', async function () {
        this.timeout(10000)
        const url = 'https://reqres.in/api/users/2'
        const requestData = {
                "name": "Nabila",
                "job": "QA",
                "updatedAt": "2025-02-13T05:57:20.058Z"
        };

        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const dataResponse = await response.json();
        assert.strictEqual(response.status, 200);
        assert.strictEqual(requestData.name, "Nabila");
        // console.log("User updated successfully.")
        // console.log("Response API: " + JSON.stringify(dataResponse, null, 1));
    })
    
})