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
  
  parentSection.addEventListener('click', printComment)
  
function printComment(e){

  //get id for clicked submit button
    e.preventDefault();
    // console.log(e);
    let submitButton = e.path[0].id;
    console.log(typeof submitButton);
    let postid = submitButton.slice(0, submitButton.indexOf('-'))
    let comment = e.path[1].childNodes[0].value;
    console.log(postid)

    if(submitButton != "" && postid != "" && comment != ""){
    // console.log(postid);

        const url = `http://localhost:5000/posts/${postid}/comment`  // The url for post req to be sent to
        console.log(url);
        let jsonData = {}
        jsonData.content = comment;
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

      // populate section with dummy data
      let ul = document.getElementById(`${postid}-commentul`);
      console.log(ul);
      let li = document.createElement('li');
      console.log(comment);
      li.textContent = comment;
      console.log(li);
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

  // loop through comment array populating uls
  for(i = 0; i < commentArray.length; i++){
    let li = document.createElement('li');
    li.textContent = commentArray[i].content;
    ul.appendChild(li);
  }
  //append ul full of li comments as child element of comment container
  console.log(ul);
  commentContainer.appendChild(ul);

  // container.setAttribute('class', 'searchresult');
container.setAttribute('id', itemData.id)
textArea.setAttribute('class', "comments")
submitButton.setAttribute('id', `${itemData.id}-submitcomment`)
submitButton.setAttribute('type', 'submit');

  // console.log(itemData.id)
  content.textContent = itemData.content;
  const emojiDiv = document.createElement("div");
  const likeBtn = document.createElement("button");
  const likes = document.createElement("p");

  // container.setAttribute('class', 'searchresult');
  container.setAttribute("id", itemData.id);
  textArea.setAttribute("class", "comments");

  console.log(itemData.comments[0].content)
  // console.log(itemData.reactions)
  // console.log(itemData.reactions.like)


  content.textContent = itemData.content;
  likeBtn.textContent = "👍";
  likes.textContent = itemData.reactions.like
  // console.log(itemData)
  img.src = itemData.giphy[0].source;
  submitButton.textContent = "Submit";

  textAreaSection.appendChild(textArea);
  textAreaSection.appendChild(submitButton);

  // headerLink.href = itemData.url;
  // headerLink.textContent = itemData.header;
  // header.appendChild(headerLink);
  likes.setAttribute("id", `${itemData.id}-post-likes`);
  likeBtn.setAttribute("id", `${itemData.id}-like-btn`);
  emojiDiv.setAttribute("class", "emojiDiv");
  emojiDiv.appendChild(likes);
  emojiDiv.appendChild(likeBtn);

  //applying borders to the sections
  container.style.border = "2px dotted red"

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
    jsonData.description = description;
    jsonData.giphyURL = giphyURL;
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

  htmlContent.textContent = description;
  img.textContent = giphyURL;

  container.appendChild(htmlContent);
  container.appendChild(img);

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

  ul.appendChild(li);
  commentContainer.appendChild(ul);
  
  //add to parent container
  parentContainer.appendChild(container);

};
/* <-------------------- Post data to server --------------------->*/

/* <-------------------- error handling --------------------->*/

// TODO empty descripton/title alert on attempted submit

// TODO character limit 255 alert and on attempted submit

/* <-------------------- error handling --------------------->*/

/* <-------------------- exporting to jest --------------------->*/

// module.exports = { fetchDatabase: fetchDatabase, newFunc: newFunc }

/* <-------------------- exporting to jest --------------------->*/
