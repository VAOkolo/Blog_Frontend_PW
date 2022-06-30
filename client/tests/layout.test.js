const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '/Users/vincent/Desktop/Futureproof/Week4/projectWeek/blogFrontendfinal/Blog_Frontend_PW/client/index.html'), 'utf8');

console.log(html)


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('body', () => {
        test('it has a body', () => {
            const body = document.querySelector('body')
            expect(body).toBeTruthy();
        });
    })

    describe('body', () => {
        test('header exists', () => {
            expect(document.querySelector('header')).toBeTruthy();
        });
    
        test('it has a header title', () => {
            let header = document.querySelector('header');
            expect(header.textContent).toContain('JavaScript in the Browser');
        })

        test('it has a dark/light mode switch button', () => {
            let switchBtn = document.querySelector('#switch-mode');
            expect(switchBtn).toBeTruthy();
        })

        test('it has an add item button', () => {
            let addItemBtn = document.querySelector('#add-item');
            expect(addItemBtn).toBeTruthy();
            expect(addItemBtn.textContent).toContain('Add Item');
        })
    })
})
