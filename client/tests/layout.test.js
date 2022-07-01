const fs = require('fs');
const path = require('path');

// const html = fs.readFileSync(path.resolve(__dirname, '/Users/vincent/Desktop/Futureproof/Week4/projectWeek/blogFrontendfinal/Blog_Frontend_PW/client/index.html'), 'utf8');
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

const { title } = require('process');
const html = fs.readFileSync(path.resolve(__dirname, 'C:/Users/Elliot Heath/LAPTESTS-FUTUREPROOF/1LAPTEST/blog-site/front-end/Blog_Frontend_PW/client/index.html'), 'utf8');


const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); //

console.log(html)

describe('index.html', () => {
    afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
  });

    describe('HTML elements', () => {
        test('it has a body', () => {
            const body = document.querySelector('body')
            expect(body).toBeTruthy();

        });

        test('it has a div', () => {
            const div = document.getElementsByTagName('div')
            expect(div).toBeTruthy();
        });
        test('it has a section', () => {
            const section = document.getElementsByTagName('section')
            expect(section).toBeTruthy();
        });
        test('it has a form', () => {
            const form = document.getElementsByTagName('form')
            expect(form).toBeTruthy();
        });
        test('it has a header tag', () => {
            let h2 = document.getElementsByTagName('h2');
            expect(h2).toBeTruthy();
        })
        test('it has a span tag', () => {
            let span = document.getElementsByTagName('span');
            expect(span).toBeTruthy();
        });
        test('it has a paragraph tag', () => {
            let p = document.getElementsByTagName('p');
            expect(p).toBeTruthy();
        });
        test('it has a textarea tag', () => {
            let textarea = document.getElementsByTagName('textarea');
            expect(textarea).toBeTruthy();
        });
        test('it has an img tag', () => {
            let img = document.getElementsByTagName('img');
            expect(img).toBeTruthy();
        });
        test('it has a button', () => {
            let button = document.getElementsByTagName('button');
            expect(button).toBeTruthy();
        });
        test('it has an input', () => {
            let input = document.getElementsByTagName('input');
            expect(input).toBeTruthy();
        });
        test('it has a comments list', () => {
            let ul = document.getElementsByTagName('ul');
            expect(ul).toBeTruthy();
        });
        test('The comments list has list items', () => {
            let li = document.getElementsByTagName('li');
            expect(li).toBeTruthy();
        });
        test('it has a script', () => {
            const script = document.getElementsByTagName('script')
            expect(script).toBeTruthy();
        });
        test('The script contains code', () => {
            const script = document.getElementsByTagName('script')
            expect(script).not.toBe(null)
        });


        test('it has a title', () => {
            const title = document.querySelector('title')
            expect(title.innerText).toBe("Homepage")
        });
        test('it has a section', () => {
            const section = document.querySelector('section')
            expect(section).toBeTruthy();
        });

    })

    // describe('body', () => {
    //     test('header exists', () => {
    //         expect(document.querySelector('header')).toBeTruthy();
    //     });

    //     test('it has a header title', () => {
    //         let header = document.querySelector('header');
    //         expect(header.textContent).toContain('JavaScript in the Browser');
    //     })

    //     test('it has a dark/light mode switch button', () => {
    //         let switchBtn = document.querySelector('#switch-mode');
    //         expect(switchBtn).toBeTruthy();
    //     })

    //     test('it has an add item button', () => {
    //         let addItemBtn = document.querySelector('#add-item');
    //         expect(addItemBtn).toBeTruthy();
    //         expect(addItemBtn.textContent).toContain('Add Item');
    //     })
    // })
})
