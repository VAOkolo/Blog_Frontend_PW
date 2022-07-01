

const appFile = require('../js/app');
// const fs = require('fs');
// const path = require('path');
// const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

//for fetch calls
global.fetch = require('jest-fetch-mock');

const functions = require('../js/app.js');

jest.mock('../js/app.js');

beforeEach(() => { fetch.resetMocks() })

//TESTING

describe('testing forEach in appendResults', () => {
    test('accepts json', () => {
        functions.appendResults = jest.fn()
        // const testArray = ['this', 'that', 'the other'];
        // functions.appendResults(testArray);
        expect(functions.appendResults([1,2,3,4,5])).toHaveBeenCalledTimes(5);
        })
    })


global.fetch = require('jest-fetch-mock');
// let app;

describe('testing fetch requst', () => {
    test("testing fetch data", () => {
        appFile.fetchData;
        expect(fetch).toHaveBeenCalledWith('http://localhost:5000/posts/');
    })
})


// describe('app', () => {
//     beforeEach(() => {
//        document.documentElement.innerHTML = html.toString();
//         app = require('../js/app')
//     })

//     afterEach(() => {
//         fetch.resetMocks();
//     })

//     describe('requests', () => {
//         describe('getAllPostss', () => {
//             test('it makes a get request to /posts', () => {
//                 app.fetchData();
//                 // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
//                 expect(fetch.mock.calls[0][0]).toMatch(/posts$/)
//             })
//         });
//     })
// })

// describe('appendPost', () => {
//     test('it renders a new post on the page with post data', () => {
//         const sectionCount = document.querySelectorAll('section').length;
//         app.submitPost({ name: 'Testy', age: 42 });
//         const newLiCount = document.querySelectorAll('li').length;
//         expect(newLiCount).toEqual(liCount + 1)
//         expect(document.querySelector('section#cats').textContent).toContain("Testy");
//         expect(document.querySelector('section#cats').textContent).toContain(42);
//     })
// })




