/* <-------------------- assign elements to variables --------------------->*/


// var header = document.getElementById("Header").value;
// var description = document.getElementById("description").value;
// var giphyData = document.getElementById("giphy").value;
var submitButton = document.getElementById('submitButton');
var form = document.querySelector('.form');
// var likeButton = document.getElementById("likeButton");
// var loveButton = document.getElementById("loveButton");
// var dislikeButton = document.getElementById("dislikeButton");
/* <-------------------- assign elements to variables --------------------->*/



/* <-------------------- load database on pageload --------------------->*/

// document.addEventListener("DOMContentLoaded", function() {
//     fetchDatabase();
//   });

/* <-------------------- GIPHY --------------------->*/




/* <-------------------- recieve data from server --------------------->*/


// function fetchDatabase(res) {
//     fetch(`http://localhost:5001/posts`)
//       .then(resp => resp.json())
//       .then(res => {

//         try {
//             for (let i = 0; i < res.items.length; i++) {

//                         // spread data into relevant html elements once data is successfully fetched and html/css styling is finished.

//                         // TODO example


//                         document.getElementById('content').innerHTML
//                         += `<br><a style="color: grey; font-size: 12px; text-decoration: none;" href=${res.items[i].link} target="_blank">
//                 ${res.items[i].T}
//                 </a>
//                 <a target="_blank" href=${res.items[i].link} style="text-decoration: none;">
//                 <h2 style="font-family: Poppins; margin-top: -1px;" >
//                 ${res.items[i].title}
//                 </h2>
//                 </a>
//                 <div style="margin-top: -15px; margin-bottom: 15px;">
//                 ${res.items[i].htmlSnippet}</div>`
//                     }
//                         // TODO example

//           } catch(error) {
//             document.getElementById('content').innerHTML = ''
//           }

//       })
//     }


/* <-------------------- recieve data from server --------------------->*/


/* <-------------------- Post data to server --------------------->*/

      submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.target);
        // fetchDatabase();
        const url = "http://localhost:5000/posts"  // The url for post req to be sent to


        const postData = {
          name: e.target.postTitle.value,
          age: e.target.postText.value
      };

      console.log(postData);

        // let jsonData = {}
        // jsonData.header = header;
        // jsonData.description = description;
        // jsonData.giphy = giphyData;
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
      })

  //   submitButton.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     console.log("test");
  //     fetchDatabase();


  //       const url = "http://localhost:5000/posts"  // The url for post req to be sent to
  //       let jsonData = {}
  //       jsonData.header = header;
  //       jsonData.description = description;
  //       jsonData.giphy = giphyData;
  //       console.log(jsonData)
  //       // jsonData.date = new Date();

  //     const options = {
  //       method: "POST",
  //       body: JSON.stringify(jsonData),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     fetch( url, options )
  //     .then( response => response.json() )
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // });


/* <-------------------- Post data to server --------------------->*/


/* <-------------------- error handling --------------------->*/

//TODO empty descripton/title alert on attempted submit

//TODO character limit 255 alert and on attempted submit


/* <-------------------- error handling --------------------->*/


/* <-------------------- exporting to jest --------------------->*/

// module.exports = { fetchDatabase: fetchDatabase, newFunc: newFunc }


// module.exports = { fetchDatabase: fetchDatabase, newFunc: newFunc }


/* <-------------------- exporting to jest --------------------->*/
