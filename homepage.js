/* <-------------------- assign elements to variables --------------------->*/

// var header = document.getElementById("Header").value;
let description = document.getElementById("postText").value;
// var giphyData = document.getElementById("giphy").value;
// var likeButton = document.getElementById("likeButton");
// var loveButton = document.getElementById("loveButton");
// var dislikeButton = document.getElementById("dislikeButton");
/* <-------------------- assign elements to variables --------------------->*/

/* <-------------------- load database on pageload --------------------->*/

document.addEventListener("DOMContentLoaded", function () {
  fetchData();

});

/* <-------------------- load database on pageload --------------------->*/



/* <-------------------- load database on pageload --------------------->*/


/* <-------------------- Post comments --------------------->*/


/* <--------------------  Post comments  --------------------->*/
  let parentSection = document.querySelector('.parentsection')

  // parentSection.addEventListener('click', printComment)
  // parentSection.addEventListener('click', updateReaction)
  parentSection.addEventListener('click', (e) => {
      // if x printComment
      // else if y updateReaction
      // else do nothing
      e.preventDefault();
      // console.log(e);

      if(e.target.innerText.includes('Submit')){
        console.log('running printComment');
        printComment(e);
      } else if(e.target.parentElement.className.includes('emojicontainer')) {
        console.log('running updateReaction');
        updateReaction(e);
      }

    // printComment
    // updateReaction
  })

  // working with flo

  // let submitButton = document.querySelector('.submitbuttonpost')
  // console.log(submitButton);
  // submitButton.addEventListener('click', printComment);



function printComment(e){

  //get id for clicked submit button
    e.preventDefault();
    // console.log(e);
    let submitButton = e.path[0].id;
    // console.log(submitButton);
    let postid = submitButton.slice(0, submitButton.indexOf('-'))
    let comment = e.path[1].childNodes[0].value;
    // console.log(comment);
    // console.log(postid)

    //add undefined after ""
    if(submitButton != "" && postid != "" && comment != "" && submitButton != undefined && postid != undefined && comment != undefined){
    // console.log(postid);

        const url = `http://localhost:5000/posts/${postid}/comment`  // The url for post req to be sent to
        // console.log(url);
        let jsonData = {}
        jsonData.content = comment;
        // console.log(jsonData)
        // jsonData.date = new Date();

      const options = {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch( url, options )
      .then( response => response.json() )
      .catch((err) => {
        console.log(err);
      });

      // populate section with dummy data
      if(comment != ""){}
      let ul = document.getElementById(`${postid}-commentul`);
      // console.log(ul);
      let li = document.createElement('li');
      // console.log(comment);
      li.textContent = comment;
      // console.log(li);
      ul.appendChild(li);


    }
    //trying to reload page


  }


/* <--------------------  get comments --------------------->*/

/* <--------------------  get comments --------------------->*/

/* <-------------------- recieve data from server --------------------->*/

//fetch data from database
async function fetchData() {
  let response = await fetch(`http://localhost:5000/posts/`);
  let data = await response.json();

      // console.log(data);
      appendResults(data);
  }

function appendResults(data) {
  data.forEach(appendResult);
}

function appendResult(itemData) {
  // console.log(itemData.header);
  //postContainer is where all posts will sit
  const postContainer = document.querySelector('.parentsection');
  //container is where all post elements will sit
  const container = document.createElement('section');
  const content = document.createElement('p');
  const img = document.createElement('img');
  const textAreaSection = document.createElement('section');
  const textArea = document.createElement('TEXTAREA');
  const submitButton = document.createElement('button');

  //comment parts and build
  const commentContainer = document.createElement('section');
  commentContainer.setAttribute('id', `${itemData.id}-commentcontainer`);
  const ul = document.createElement('ul');
  ul.setAttribute('id', `${itemData.id}-commentul`);
  const commentArray = itemData.comments;
  console.log(commentArray);

  // loop through comment array populating uls
  for(i = 0; i < commentArray.length; i++){
    let li = document.createElement('li');
    li.textContent = commentArray[i].content;
    ul.appendChild(li);
    li.setAttribute('class','elementCommentsList');
  }
  //append ul full of li comments as child element of comment container
  // console.log(ul);
  commentContainer.appendChild(ul);

  // container.setAttribute('class', 'searchresult');
container.setAttribute('id', itemData.id)

//updating dating classes to merge with Daiana's styling
container.setAttribute('class','postBody');
content.setAttribute('class','postHeaderText');
textAreaSection.setAttribute('class','addComment');
commentContainer.setAttribute('class','commentList');
ul.setAttribute('class','commentsListDisplay');


textArea.setAttribute('class', "comments")
submitButton.setAttribute('id', `${itemData.id}-submitcomment`)
submitButton.setAttribute('type', 'submit');

  // console.log(itemData.id)
  content.textContent = itemData.content;

  const emojiDiv = document.createElement("section");
  const likeBtn = document.createElement("button");
  const likes = document.createElement("p");
  const dislikeBtn = document.createElement('button');
  const dislikes = document.createElement("p");
  const loveBtn = document.createElement('button');
  const love = document.createElement("p");
  const likeDiv = document.createElement('div');
  const dislikeDiv = document.createElement('div');
  const loveDiv = document.createElement('div');

  // container.setAttribute('class', 'searchresult');
  container.setAttribute("id", itemData.id);
  textArea.setAttribute("class", "comments");

  // console.log(itemData);
  // console.log(itemData.reactions)
  // console.log(itemData.reactions.like)


  content.textContent = itemData.content;
  likeBtn.textContent = "👍";
  likes.textContent = itemData.reactions.like
  dislikeBtn.textContent = "👎";
  dislikes.textContent = itemData.reactions.dislike
  loveBtn.textContent = "❤️";
  love.textContent = itemData.reactions.love

  //throw emoji content into respective divs
  likeDiv.appendChild(likes)
  likeDiv.appendChild(likeBtn)
  dislikeDiv.appendChild(dislikes)
  dislikeDiv.appendChild(dislikeBtn)
  loveDiv.appendChild(love)
  loveDiv.appendChild(loveBtn)

  //give divs all same class to flex emoji and count
  likeDiv.setAttribute('class',"emojicontainer")
  dislikeDiv.setAttribute('class',"emojicontainer")
  loveDiv.setAttribute('class',"emojicontainer")
  // console.log(itemData)
  img.src = itemData.giphy;
  submitButton.textContent = "Submit";
  submitButton.setAttribute('class', 'submitbuttonpost');

  textAreaSection.appendChild(textArea);
  textAreaSection.appendChild(submitButton);

  // headerLink.href = itemData.url;
  // headerLink.textContent = itemData.header;
  // header.appendChild(headerLink);
  likes.setAttribute("id", `${itemData.id}-post-likes`);
  likeBtn.setAttribute("id", `${itemData.id}-like-btn`);
  dislikes.setAttribute("id", `${itemData.id}-post-dislikes`);
  dislikeBtn.setAttribute("id", `${itemData.id}-dislike-btn`);
  love.setAttribute("id", `${itemData.id}-post-love`);
  loveBtn.setAttribute("id", `${itemData.id}-love-btn`);
  likeBtn.setAttribute('class','like');
  dislikeBtn.setAttribute('class','dislike');
  loveBtn.setAttribute('class','love');
  emojiDiv.setAttribute("class", "emojiDiv");
  emojiDiv.appendChild(likeDiv);
  emojiDiv.appendChild(dislikeDiv);
  emojiDiv.appendChild(loveDiv);


  //applying borders to the sections
  // container.style.border = "2px dotted red"

  //push list items which are comments into ul

  //create a complete post involving all necessary elements
  // console.log(header, link, text);
  container.appendChild(content);
  container.appendChild(img);
  container.appendChild(emojiDiv);
  container.appendChild(textAreaSection);
  container.appendChild(commentContainer);
  postContainer.appendChild(container);
}

/* <-------------------- recieve data from server --------------------->*/

/* <-------------------- Post data to server --------------------->*/

const btn = document.getElementById("submitButton");
btn.addEventListener("click", submitFunction);

function submitFunction(e) {
  e.preventDefault();
  console.log("test");
  // fetchDatabase();

  let description = document.getElementById('postText').value;
  let giphyURL = document.getElementsByClassName('giphyAppend')[0].outerText;
  console.log(giphyURL);
    const url = "http://localhost:5000/posts/post"  // The url for post req to be sent to
    let jsonData = {}
    // jsonData.header = header;
    jsonData.content = description;
    jsonData.giphy = giphyURL;
    // jsonData.giphy = giphyData;
    console.log(jsonData)
    // jsonData.date = new Date();

  const options = {
    method: "POST",
    body: JSON.stringify(jsonData),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch( url, options )
  .then( response => response.json() )
  .catch((err) => {
    console.log(err);
  });

  //parent container
  const parentContainer = document.querySelector('.parentsection');
  //container
  const container = document.createElement('section');
  const htmlContent = document.createElement('p');
  const img = document.createElement('img');

  //emoji Div
  const emojiDiv = document.createElement("section");
  const likeBtn = document.createElement("button");
  const likes = document.createElement("p");
  const dislikeBtn = document.createElement('button');
  const dislikes = document.createElement("p");
  const loveBtn = document.createElement('button');
  const love = document.createElement("p");
  const likeDiv = document.createElement('div');
  const dislikeDiv = document.createElement('div');
  const loveDiv = document.createElement('div');
  //set newly created emoji counts to 0
  likeBtn.textContent = "👍"
  dislikeBtn.textContent = "👎"
  loveBtn.textContent = "❤️"
  likes.textContent = 0;
  dislikes.textContent = 0;
  love.textContent = 0;


  //adding classes to emoji divs
  likeBtn.setAttribute('class','like');
  dislikeBtn.setAttribute('class','dislike');
  loveBtn.setAttribute('class','love');
  emojiDiv.setAttribute("class", "emojiDiv");
  //appending emoji and count to respective parent div
  likeDiv.appendChild(likes)
  likeDiv.appendChild(likeBtn)
  dislikeDiv.appendChild(dislikes)
  dislikeDiv.appendChild(dislikeBtn)
  loveDiv.appendChild(love)
  loveDiv.appendChild(loveBtn)
  //appending individual emoji divs to parent div
  emojiDiv.appendChild(likeDiv);
  emojiDiv.appendChild(dislikeDiv);
  emojiDiv.appendChild(loveDiv);



  htmlContent.textContent = description;
  img.textContent = giphyURL;
  img.src = giphyURL;

  container.appendChild(htmlContent);
  container.appendChild(img);
  container.appendChild(emojiDiv)

  //textAreaContainer - where you input comments
  const textAreaContainer = document.createElement('section');
  const textArea = document.createElement('textarea');
  const button = document.createElement('button');

  submitButton.textContent = "Submit";
  submitButton.setAttribute('type', 'submit');

  textAreaContainer.appendChild(textArea);
  textAreaContainer.appendChild(button);
  container.appendChild(textAreaContainer);

  //commentContainer = where comments are handled
  const commentContainer = document.createElement('section')
  const ul = document.createElement('ul');
  const li = document.createElement('li');

  //add same class to all emoji divs for styling
  likeDiv.setAttribute('class',"emojicontainer")
  dislikeDiv.setAttribute('class',"emojicontainer")
  loveDiv.setAttribute('class',"emojicontainer")

  ul.appendChild(li);
  commentContainer.appendChild(ul);

  //add to parent container
  parentContainer.appendChild(container);

};

//submit reactions
function updateReaction(e){
  //get the like count from frontend

  //append it
  //write to backend

  e.preventDefault();
  // let likes = 0;
    console.log(e);
    let reaction = "";
    // let likeCount = parseInt(e.path[2].childNodes[2].childNodes[0].textContent);
    // let idname = e.path[2].childNodes[2].childNodes[0].id;
    // let id = idname.slice(0, idname.indexOf('-'));
    // reaction = e.path[2].childNodes[2].childNodes[1].className;

    let count = parseInt(e.target.parentElement.childNodes[0].textContent);
    let idname = e.target.id;
    let id = idname.slice(0,idname.indexOf('-'));
    reaction = e.target.className;

    console.log(idname, id, reaction);
    count++;
    // console.log(likeCount);

    // if(id != "" &&  id != undefined){

        const url = `http://localhost:5000/posts/${id}/reactions/${reaction}`  // The url for post req to be sent to
        // console.log(url);
        let jsonData = {}
        jsonData.amount = 1;
        // console.log(jsonData)
        // jsonData.date = new Date();

      const options = {
        method: "PUT",
        // body: JSON.stringify(jsonData),
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch( url, options )
      .then( response => response.json() )
      .catch((err) => {
        console.log(err);
      });

      let likeButton = e.target.parentElement.childNodes[0];
      console.log(likeButton);
      likeButton.textContent = count.toString();
    // }

}
/* <-------------------- Post data to server --------------------->*/

/* <-------------------- error handling --------------------->*/

// TODO empty descripton/title alert on attempted submit

// TODO character limit 255 alert and on attempted submit

/* <-------------------- error handling --------------------->*/

/* <-------------------- exporting to jest --------------------->*/

// module.exports = { fetchDatabase: fetchDatabase, newFunc: newFunc }

/* <-------------------- exporting to jest --------------------->*/
