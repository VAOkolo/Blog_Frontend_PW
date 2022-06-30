const helpers = require('/Users/vincent/Desktop/Futureproof/Week4/projectWeek/blogFrontendfinal/Blog_Frontend_PW/client/js/app.js');

console.log(helpers);

describe ('helper functions', () => {
    describe('item helpers', () => {
        beforeEach(() => {
            document.documentElement.innerHTML = '<ul id="food-list"><li id="item-1">tacos<span data-item-id="1">x</span></li></ul>';
            global.foodList = document.querySelector('#food-list');
        })

        test('sections added to parent section', () => {
            const newLi = helpers.createLi('hummus');
            expect(newLi.tagName).toBe('LI');
            expect(newLi.textContent).toContain('hummus');
            expect(newLi.querySelector('span').className).toBe('delete-btn');
        })

        test('addItem adds a new li to the DOM', () => {
            helpers.addItem();
            expect(foodList.querySelectorAll('li').length).toBe(2);
        })

        // test('deleteItem creates an alert and removes an li from the DOM', () => {
        //     window.alert = jest.fn();
        //     const target = foodList.querySelector('span');
        //     helpers.deleteItem({ target })
        //     expect(foodList.querySelectorAll('li').length).toBe(0);
        //     expect(window.alert).toBeCalledWith('Deleting tacos');
        // })
    })

    // describe('dark mode helpers', () => {
    //     let main, modeBtn, dark
    //     beforeEach(() => {
    //         document.documentElement.innerHTML = '<main><button id="switch-mode"></button></main>';
    //         main = document.querySelector('main');
    //         modeBtn = document.querySelector('#switch-mode');
    //     })

    //     test('switchMode returns a boolean value', () => {
    //         dark = true;
    //         expect(mode.switchMode(dark)).toEqual(false);
    //         dark = false;
    //         expect(mode.switchMode(dark)).toEqual(true);   
    //     })

    //     test('darkMode updates text color and button text', () => {
    //         helpers.darkMode();
    //         expect(main.style.color).toBe('white');
    //         expect(main.style.backgroundColor).not.toBe('white');
    //         expect(modeBtn.textContent).toBe('Switch to Light Mode');
    //     })

    //     test('lightMode updates text color and button text', () => {
    //         helpers.lightMode();
    //         expect(main.style.color).not.toBe('white');
    //         expect(main.style.backgroundColor).toBe('white');
    //         expect(modeBtn.textContent).toBe('Switch to Dark Mode');
    //     })
    // })
})
