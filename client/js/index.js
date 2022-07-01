/*key variables 
- 1. parentsection, which is called to read emoji or comment submit button interaction
- 2. btn, which is called to read post submit button interaction (could be included in parentSection)
*/
const parentSection = document.querySelector('.parentsection')
const btn = document.getElementById("submitButton");

/*Event listeners 1.load content from DB on DOM load 
- 2. submit post on click
- 3. run printComment or updateReaction on event */
document.addEventListener("DOMContentLoaded",  () => {
  fetchData();
});

btn.addEventListener("click", submitPost);

parentSection.addEventListener('click', (e) => {
      e.preventDefault();

      if(e.target.innerText.includes('Submit')){
        console.log('running printComment');
        submitComment(e);
      } else if(e.target.parentElement.className.includes('emojicontainer')) {
        console.log('running updateReaction');
        updateReaction(e);
      }
  })
