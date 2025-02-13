const assert = require('assert')

describe('Delete User', function () {
    it('Delete user should be success', async function () {
        this.timeout(10000)
        const userId = 95
        const url = 'https://reqres.in/api/users/${userId}'
        const response = await fetch(url, {
            method: "DELETE"
        });

        assert.strictEqual(response.status, 204)
        // console.log("User deleted successfully.")
    });
});
