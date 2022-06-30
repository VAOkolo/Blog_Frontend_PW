//for fetch calls
global.fetch = require('jest-fetch-mock');

const functions = require('/Users/vincent/Desktop/Futureproof/Week4/projectWeek/blogFrontendfinal/Blog_Frontend_PW/client/js/app.js');

jest.mock('/Users/vincent/Desktop/Futureproof/Week4/projectWeek/blogFrontendfinal/Blog_Frontend_PW/client/js/app.js');

beforeEach(() => { fetch.resetMocks() })

//TESTING

describe('testing forEach in appendResults', () => {
    test('accepts json', () => {
        const fakeCallback = jest.fn(functions.appendResults([1,2,3,4,5])); // create a mock function
        // const testArray = ['this', 'that', 'the other'];
        // functions.appendResults(testArray);
        expect(fakeCallback).toHaveBeenCalledTimes(3);
        })    
    })


describe('testing fetch requests', () => {
    test('test if fetch is successful', async () => {
        // await githubHelpers.getGitHubUserInfo('gingertonic')
        await functions.fetchData()
        expect(fetch).toHaveBeenCalled()
    })
})



