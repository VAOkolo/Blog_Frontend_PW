/* <-------------------- assign elements to variables --------------------->*/

var header = document.getElementById("Header").value;
var description = document.getElementById("Description").value;
var giphyData = document.getElementById("giphy").value;
var submitButton = document.getElementById("submitButton");
var likeButton = document.getElementById("likeButton");
var loveButton = document.getElementById("loveButton");
var dislikeButton = document.getElementById("dislikeButton");

/* <-------------------- assign elements to variables --------------------->*/


/* <-------------------- load database on pageload --------------------->*/

document.addEventListener("DOMContentLoaded", function() {
    fetchDatabase();
  });

/* <-------------------- load database on pageload --------------------->*/


/* <-------------------- recieve data from server --------------------->*/

function fetchDatabase(res) {
    fetch(`http://localhost:3000/blog`)
      .then(resp => resp.json())
      .then(res => {

        try {
            for (let i = 0; i < res.items.length; i++) {

                        // spread data into relevant html elements once data is successfully fetched and html/css styling is finished.

            }
          } catch(error) {
            document.getElementById('content').innerHTML = ''
          }

      })
    }

/* <-------------------- recieve data from server --------------------->*/


/* <-------------------- Post data to server --------------------->*/

  searchButton.addEventListener('click',function(e) {
      e.preventDefault();
      fetchDatabase()


        const url = "http://localhost:3000/blog"  // The url for post req to be sent to
        let jsonData = {}
        jsonData.header = header;
        jsonData.description = description;
        jsonData.giphy = giphyData;
        jsonData.date = new Date();

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

  });

/* <-------------------- Post data to server --------------------->*/


/* <-------------------- error handling --------------------->*/

//TODO empty descripton/title alert on attempted submit

//TODO character limit 255 alert and on attempted submit


/* <-------------------- error handling --------------------->*/


/* <-------------------- exporting to jest --------------------->*/
module.exports = { fetchDatabase: fetchDatabase, newFunc: newFunc }
/* <-------------------- exporting to jest --------------------->*/
