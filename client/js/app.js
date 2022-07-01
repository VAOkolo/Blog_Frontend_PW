// const path = 'http://localhost:5000';
const path = 'https://museapp-backend.herokuapp.com'
//fetch data from database
async function fetchData() {
   try{ 
    fetch(`${path}/posts/`)
        .then(response => response.json())
        .then(data => appendResults(data));
   } catch (error) {
       console.log(error);
   }
 }

//loop through fetched posts and append each post to site
function appendResults(data) {
  data.forEach(appendResult);
}

//logic for building out a post container and inserting it into the parent
function appendResult(itemData) {
  
  //postContainer is where all posts will sit
  const postsContainer = document.querySelector('.parentsection');
  //container is where all post elements will sit
  const container = document.createElement('section');
  const content = document.createElement('p');
  const img = document.createElement('img');
  //textarea section and variables - textAreaSection is child of container
  const textAreaSection = document.createElement('section');
  const textArea = document.createElement('TEXTAREA');
  const submitButton = document.createElement('button');
  //comment section and variables
  const commentContainer = document.createElement('section');
  const ul = document.createElement('ul');
  const commentArray = itemData.comments;
  //emoji container variables
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

  //setting key class and id attributes across post container elements
  container.setAttribute('class','postBody');
  container.setAttribute('id', itemData.id);
//   container.setAttribute("id", itemData.id);
  content.setAttribute('class','postHeaderText');
  textAreaSection.setAttribute('class','addComment');
  textArea.setAttribute('class', "comments")
//   textArea.setAttribute("class", "comments");
  submitButton.setAttribute('id', `${itemData.id}-submitcomment`)
  submitButton.setAttribute('type', 'submit');
  commentContainer.setAttribute('class','commentList');
  ul.setAttribute('class','commentsListDisplay');
  commentContainer.setAttribute('id', `${itemData.id}-commentcontainer`);
  ul.setAttribute('id', `${itemData.id}-commentul`);
  likes.setAttribute("id", `${itemData.id}-post-likes`);
  likeBtn.setAttribute("id", `${itemData.id}-like-btn`);
  dislikes.setAttribute("id", `${itemData.id}-post-dislikes`);
  dislikeBtn.setAttribute("id", `${itemData.id}-dislike-btn`);
  love.setAttribute("id", `${itemData.id}-post-love`);
  loveBtn.setAttribute("id", `${itemData.id}-love-btn`);
  likeBtn.setAttribute('class','like');
  dislikeBtn.setAttribute('class','dislike');
  loveBtn.setAttribute('class','love');
  //give divs all same class to flex emoji and count elements
  likeDiv.setAttribute('class',"emojicontainer")
  dislikeDiv.setAttribute('class',"emojicontainer")
  loveDiv.setAttribute('class',"emojicontainer")
  emojiDiv.setAttribute("class", "emojiDiv");
  
  // loop through comment array populating ul with lis each with text content from commentArray
  for(i = 0; i < commentArray.length; i++){
    let li = document.createElement('li');
    li.textContent = commentArray[i].content;
    ul.appendChild(li);
    li.setAttribute('class','elementCommentsList');
  }
  
  //assign necessary content and other attributes to dom elements
  img.src = itemData.giphy;
  submitButton.textContent = "Submit";
  submitButton.setAttribute('class', 'submitbuttonpost');
  content.textContent = itemData.content;
//   content.textContent = itemData.content;
  likeBtn.textContent = "👍";
  likes.textContent = itemData.reactions.like
  dislikeBtn.textContent = "👎";
  dislikes.textContent = itemData.reactions.dislike
  loveBtn.textContent = "❤️";
  love.textContent = itemData.reactions.love
  
  //build necessary child divs, and parent post
  //emoji div
  emojiDiv.appendChild(likeDiv);
  emojiDiv.appendChild(dislikeDiv);
  emojiDiv.appendChild(loveDiv);
  
  likeDiv.appendChild(likes)
  likeDiv.appendChild(likeBtn)
  dislikeDiv.appendChild(dislikes)
  dislikeDiv.appendChild(dislikeBtn)
  loveDiv.appendChild(love)
  loveDiv.appendChild(loveBtn)
  //text container
  textAreaSection.appendChild(textArea);
  textAreaSection.appendChild(submitButton);
  //comment container
  commentContainer.appendChild(ul);
  //append to parent post
  container.appendChild(content);
  container.appendChild(img);
  container.appendChild(emojiDiv);
  container.appendChild(textAreaSection);
  container.appendChild(commentContainer);
  //append to parent section
  postsContainer.appendChild(container);
  
}

//post comment to backend and print comment on site on submission
function submitComment(e){

    e.preventDefault();
    console.log(e);
    //get key variables
    let submitButton = e.path[0].id;
    let postid = submitButton.slice(0, submitButton.indexOf('-'))
    let comment = e.path[1].childNodes[0].value;

    //logic for running post request and site update - requires editing - all outlined elements aren't necessary
    if(submitButton != "" && postid != "" && comment != "" && submitButton != undefined && postid != undefined && comment != undefined){

        const url = `${path}/posts/${postid}/comment` 
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

function submitPost(e) {
  e.preventDefault();
  console.log("test");

  let description = document.getElementById('postText').value;
  let giphyURL = document.getElementsByClassName('giphyAppend')[0].outerText;

    const url = `${path}/posts/post`  // The url for post req to be sent to
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
      const url = `${path}/posts/${id}/reactions/${reaction}`;
      console.log(url);

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
