const fs = require('fs');
const path = require('path');
const { title } = require('process');
const html = fs.readFileSync(path.resolve(__dirname, 'C:/Users/Elliot Heath/LAPTESTS-FUTUREPROOF/1LAPTEST/blog-site/front-end/Blog_Frontend_PW/client/index.html'), 'utf8');

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
