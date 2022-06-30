
/* section navigation */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
   --navigation-color: #50b7f5;
   --navigation-background : #e6ecf0;
}

.sidebar {
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
}

.sidebarOption {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.sidebarOption .material-icons {
    padding: 15px;
}

/* doesn't work */
/* .material-icons {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
} */


.sidebarOption h2{
    font-weight: 800;
    font-size: 16px;
    margin-right: 20px;
}

.sidebarOption:hover {
    background-color: var(--navigation-background);
    color: var(--navigation-color);
    border-radius: 30px;
    transition:  color 100ms ease-out;
}

.sidebarOption.active {
    color: var(--navigation-color);
}

.addPost{
    width: 100%;
    background-color: var(--navigation-color);
    border: none;
    color: white;
    font-weight: 900;
    border-radius: 30px;
    height: 50px;
    margin-top: 20px;
}

body{
    display: flex;
    height: 100vh;
    max-width: 1300px;
    /* margin-left: auto;
    margin-right: auto;
    padding: 0 10px; */
}

.sidebar{
    border-right: 1px solid var(--navigation-background);
    flex: 0.2;
}

/* postPopup */
/* .postPopUp {
    position: absolute;
    min-width: 100%;
    min-height: 100vh;
    background-color:rgba(0, 0, 0, 0.7);
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
}

.postPopUpContent{
    display: flex;
    width: 500px;
    height: 300px;
    background-color: white;
    border-radius: 20px;
}

.closePopUp{
    background-color: white;
    border: none;
    color: gray;
    height: 50px;
    width: 50px;
    font-size: 14px;
    margin-left: 32%;
    margin-top: 5px;
} */

.searchGif {
    display: flex;
    align-items: center;
    background-color: var(--navigation-background);
    padding: 10px;
    border-radius: 20px;
    margin-top: 10px;
    margin-left: 20px;
    width: 260px;
    height: 35px;
}

.searchGifButton{
    background-color: white;
    border: none;
    color: gray;
    height: 30px;
    width: 80px;
    font-size: 16px;
    margin-left: 30%;
}

.searchGifButton:hover {
    color: gray;
    background-color: var(--navigation-background);
    border-radius: 10px;
}



/* main section */
.mainSection {
    flex: 0.5;
    border-right: 1px solid var(--navigation-background);
    min-width: fit-content;
    overflow-y: scroll;
}

.mainSectionHeader {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 100;
    border: 1px solid var(--navigation-background);
    padding: 15px 20px;
}

.mainSectionHeader h2{
    font-size: 20px;
    font-weight: 800;
}

.mainSection::-webkit-scrollbar {
    display: none;
}

.mainSection {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* postContainer */
.postInput img{
    border-radius: 50%;
    height: 40px;
}

.postContainer{
    padding-bottom: 10px;
    border-bottom: 8px solid var(--navigation-background);
    padding-right: 10px;
}

.postContainer form{
    display: flex;
    flex-direction: column;
}

.postInput {
    display: flex;
    padding: 20px;
}

.postInput input {
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    color: gray;
    border: none;
    outline: none;
}

.postInput input {
    font-size: 20px;
    color: gray;
}

.postText {
    display: flex;
    margin-left: 60px;
    margin-right: 60px;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    color: gray;
    min-width: 640px;
    max-width: 640px;
    min-height: 140px;
    max-height: 140px;
    height: 100px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    border: none;
    outline: none;
}

::placeholder {
    align-content: flex-start;
}

.charCount {
    color: gray;
    font-size: 18px;
    margin-left: 10px;
}

.postButton {
    background-color: var(--navigation-color);
    border: none;
    color: white;
    font-weight: 900;
    border-radius: 30px;
    width: 90px;
    height: 35px;
}

.addGifButton{
    background-color: white;
    /* border: 1px solid gray; */
    border: none;
    color: gray;
    height: 30px;
    width: 30px;
    font-size: 14px;
    margin-left: 60%;
    /* margin-right: 10px;  */
}

.createPostFooter {
    display: block;
    margin-top: 20px;
    margin-left: 60px;
    margin-right: 40px;
    padding-left: 10px;
    padding-right: 10px;
}

/* posts list */
.postAvatar img {
    border-radius: 50%;
    height: 40px;
}

/* changed from post to parentsection */
.parentsection {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    /* align-items: left; */
    border-bottom: 1px solid var(--navigation-background);
    padding-bottom: 10px;
    margin-left: 65px;
}

.postHeaderText {
    display: block;
    align-items: flex-start;
    margin-bottom: 10px;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: gray;
}

.postBody img {
    width: 610px;
    object-fit: contain;
    border-radius: 20px;
}

/* changed from postFooter */
.emojiDiv {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin-right: 30px;
}

/* emojiDiv to emojicontainer */
.emojicontainer {
    display: flex;
    align-items: center;
}

.emojicontainer p{
    font-size: 18px;
}

.emojicontainer button {
    background-color: white;
    border: none;
    padding-left: 7px;
}


.addComment textarea{
    display: block;
    margin-top: 10px;
    min-width: 610px;
    min-height: 70px;
    max-width: 610px;
    max-height: 70px;
    border-radius: 10px;
    border-color: lightgrey;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: gray;
    padding-top: 10px;
    outline: none;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
}

.addComment button{
    display: block;
    margin-top: 10px;
    background-color: var(--navigation-color);
    border: none;
    color: white;
    font-weight: 900;
    border-radius: 30px;
    width: 90px;
    height: 35px;
    margin-left: 520px;
}

.commentsList{
    display: block;
    margin-top: 10px;
    max-width: 610px;
}

.commentsListDisplay{
    font-size: 18px;
    list-style-type: none;
}

.elementCommentsList {
    margin-top: 10px;
    border: 1px solid lightgray;
    border-radius: 10px;
    height: fit-content;
    padding-top: 5px;
    padding-left: 20px;
    color: gray;
}

/* .postHeaderBadge {
    font-weight: 600;
    font-size: 12px;
    color: gray;
} */

/* .postHeaderText h3{
    font-size: 18px;
    margin-bottom: 5px;
} */


.postMainText {
    margin-bottom: 10px;
    font-size: 16px;
}

.postBody {
    flex: 1;
    padding: 10px ;
    border: 2px dotted blue;
}

.postAvatar{
    padding: 20px;
}

/* special posts */
.specialPosts {
    flex: 0.3;
}

.specialPostInput {
    display: flex;
    align-items: center;
    background-color: var(--navigation-background);
    padding: 10px;
    border-radius: 20px;
    margin-top: 10px;
    margin-left: 20px;
}

.specialPostInput input, .searchGif input {
    border: none;
    background-color: var(--navigation-background);
    outline: none;
}

.specialPostContainer {
    margin-top: 15px;
    margin-left: 20px;
    padding: 20px;
    background-color: #f5f8fa;
    border-radius: 20px;
}
.specialPostContainer h2{
    font-size: 18px;
    font-weight: 800;
}



    .emojiDiv {
        display: flex;
    }

    .emojicontainer {
        display: flex;
    }


    #results {
        display: flex;
        width: 500px;
        overflow: scroll;
        flex-direction: row;
    }

    .giphyContainer {
        margin: auto;
        width: 500px;
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
    }