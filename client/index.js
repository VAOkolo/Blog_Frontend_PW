/* <-------------------- assign elements to variables --------------------->*/


// var header = document.getElementById("Header").value;
let description = document.getElementById('postText').value;
// var giphyData = document.getElementById("giphy").value;
// var likeButton = document.getElementById("likeButton");
// var loveButton = document.getElementById("loveButton");
// var dislikeButton = document.getElementById("dislikeButton");
/* <-------------------- assign elements to variables --------------------->*/



/* <-------------------- load database on pageload --------------------->*/

document.addEventListener("DOMContentLoaded", function() {
     fetchData();
    });





/* <-------------------- load database on pageload --------------------->*/


/* <-------------------- Post comments --------------------->*/

function submitComments(e) {
  e.preventDefault();
  console.log("test");
  // fetchDatabase();


  let comments = document.getElementsByClassName('comments').value;


    const url = "http://localhost:5000/posts/${postid}/comment";  // The url for post req to be sent to
    let jsonData = {}

    jsonData.comments = comments;
    // jsonData.date = new Date();
    console.log(jsonData)


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

  // fetchData();
};

/* <--------------------  Post comments  --------------------->*/
  let parentSection = document.querySelector('.parentsection')
  
  parentSection.addEventListener('click', printComment)
  
function printComment(e){

  //get id for clicked submit button
    e.preventDefault();
    console.log(e);
    let submitButton = e.path[0].id;
    console.log(submitButton);

    let comment = document.getElementById('postText').value;

        const url = "http://localhost:5001/posts/post"  // The url for post req to be sent to
        let jsonData = {}
        jsonData.description = description;
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

  }


/* <--------------------  get comments --------------------->*/



/* <--------------------  get comments --------------------->*/


/* <-------------------- recieve data from server --------------------->*/


    //fetch data from database
    async function fetchData() {

      let response = await fetch(`http://localhost:5001/posts/`);
      let data = await response.json();

      // console.log(data);
      appendResults(data);
  }

  function appendResults(data) {
    data.forEach(appendResult)
}

function appendResult(itemData) {

  // console.log(itemData.header);
  const postContainer = document.querySelector('.parentsection');

  const container = document.createElement('section');
  const content = document.createElement('p');
  const img = document.createElement('img');
  const textAreaSection = document.createElement('section');
  const textArea = document.createElement('TEXTAREA');
  const submitButton = document.createElement('button');

  // container.setAttribute('class', 'searchresult');
container.setAttribute('id', itemData.id)
textArea.setAttribute('class', "comments")
submitButton.setAttribute('id', `${itemData.id}-submitcomment`)
submitButton.setAttribute('type', 'submit');

  // console.log(itemData.id)
  content.textContent = itemData.content;
  // console.log(itemData)
  img.src = itemData.giphy[0].source;
  submitButton.textContent = "Submit";

  textAreaSection.appendChild(textArea);
  textAreaSection.appendChild(submitButton);

  // headerLink.href = itemData.url;
  // headerLink.textContent = itemData.header;
  // header.appendChild(headerLink);



  // console.log(header, link, text);
  container.appendChild(content);
  container.appendChild(img);
  container.appendChild(textAreaSection);
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
        const url = "http://localhost:5001/posts/post"  // The url for post req to be sent to
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

      fetchData();
  };

/* <-------------------- Post data to server --------------------->*/


/* <-------------------- error handling --------------------->*/

//TODO empty descripton/title alert on attempted submit

//TODO character limit 255 alert and on attempted submit


/* <-------------------- error handling --------------------->*/


/* <-------------------- exporting to jest --------------------->*/



// module.exports = { fetchDatabase: fetchDatabase, newFunc: newFunc }


/* <-------------------- exporting to jest --------------------->*/
