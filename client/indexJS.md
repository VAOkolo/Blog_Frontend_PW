//post comment to backend and print comment on site on submission
function submitComment(e){

    e.preventDefault();
    //get key variables
    let submitButton = e.path[0].id;
    let postid = submitButton.slice(0, submitButton.indexOf('-'))
    let comment = e.path[1].childNodes[0].value;

    //logic for running post request and site update
    if(submitButton != "" && postid != "" && comment != "" && submitButton != undefined && postid != undefined && comment != undefined){

        const url = `http://localhost:5000/posts/${postid}/comment` 
        let jsonData = {}
        jsonData.content = comment;
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

      // update site with comment
    //   if(comment != ""){}
      let section = document.getElementById(`${postid}-commentcontainer`);
      let ul = document.getElementById(`${postid}-commentul`);
      let li = document.createElement('li');
    //   section.setAttribute('class', "commentList");
      ul.setAttribute('class', 'commentListDisplay');
      li.setAttribute('class','elementCommentsList');
      li.textContent = comment;
      ul.appendChild(li);
      section.appendChild(ul);
    }
  }

//fetch data from database
async function fetchData() {
  let response = await fetch(`http://localhost:5000/posts/`);
  let data = await response.json();
      appendResults(data);
  }
//loop through fetched posts and append each post to site
function appendResults(data) {
  data.forEach(appendResult);
}
//logic for building out a post container
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



function submitPost(e) {
  e.preventDefault();
  console.log("test");

  let description = document.getElementById('postText').value;
  let giphyURL = document.getElementsByClassName('giphyAppend')[0].outerText;

    const url = "http://localhost:5000/posts/post"  // The url for post req to be sent to
    let jsonData = {}
    jsonData.content = description;
    jsonData.giphy = giphyURL;
 
    // jsonData.comments = [];
  
    console.log(jsonData);
if(description != ""){
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

  //make jdsonData object to pass as argument of appendResult
  jsonData.id = "temporary"
  jsonData.reactions = {
        "love": 0,
        "like": 0,
        "dislike": 0
  }
  jsonData.comments = [];

  appendResult(jsonData);
}

};

//submit reactions
function updateReaction(e){

  e.preventDefault();
    // console.log(e);
    //get relevant emoji count idname and className from event target
    let reaction = e.target.className;;
    let count = parseInt(e.target.parentElement.childNodes[0].textContent);
    let idname = e.target.id;
    let id = idname.slice(0,idname.indexOf('-'));

    //increment count to display on site
    count++;
    
      //send put request to server
      const url = `http://localhost:5000/posts/${id}/reactions/${reaction}`;

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch( url, options )
      .then( response => response.json() )
      .catch((err) => {
        console.log(err);
      });

      //update count on site
      let likeButton = e.target.parentElement.childNodes[0];
      console.log(likeButton);
      likeButton.textContent = count.toString();

}

module.exports = {updateReaction, submitPost, submitComment, fetchData, appendResults, appendResult}
