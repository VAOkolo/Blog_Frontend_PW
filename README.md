# _Blog_Frontend_README_

**Content:**

[1. Assignment title](#1)

[2. Installation & usage](#2)

[3. How to run this project](#3)

[4. Changelog](#4)

[5. Google Search JSON API](#5)

<br>

###### 1.

# Assignment title: Lap1 Futureproof searchEngine

<br>

<br>

<br>


![Search Engine](https://i.imgur.com/QeXbemh.jpg)

<br>

#### 2.

### Installation and usage:

<br>

##### pre-requisites for running this program.
- In order to run this program you must have nodejs installed and your own google search json api key which can be obtained for free from the google api library.
- Once you have your api key, navigate to server/app.js line:98 and insert your own api key in place of `<ADD-API-KEY-HERE>`.
- Optional: If you wish to have a functioning return-home button then go to client/result.html, line 14: and add the url you are running client/index.html from to the anchor tag href `<a href="<INSERT-URL-HERE>" alt="link-to-homepage">`

To install the dependencies required to run the project please navigate to the server folder and install the required dependencies (into the server folder, preferably using npm):
- expressjs
- cors
- npm
- nodemon (optional)

<br>

#### 3.


### How to run this project:

<br>

After the above, whilst still in the server folder, please run the command `npm run dev`. This command will start the server running.

<br>

To view the client side, navigate to the client folder and either open index.html in the browser or run it if you are using an IDE.

<br>

#### 4.


### Changelog:

- Dependencies installed.
- Styling & html added.
- Added paths for get requests added.
- Search engine working
- Upgrading search engine
- Search Engine Upgrade working successfully on client side. Still showing minor errors but they are not affecting usage.
- Search Engine Working with Google Search JSON API.
- Search Engine working with both Google Search JSON API & Server Database Search.

<br>

#### future ideas:
~~-> I'm feeling lucky button~~
-> Improved error handling (alert for out of range searches on database).
-> Code refactoring and optimisation.
-> jest testing.
-> additional styling and new features!

#### Bugs:

~~- multiple bugs identified. More coming soon...~~
- key issues: speed | security | flexability | scalability
- - **Currently minimal error handling**



![Search Engine](https://i.imgur.com/qRxs7kT.jpg)

<br>

![Search Engine](https://i.imgur.com/1IHKFWH.jpg)

<br>

<hr>

<br>

#### 5.


# Google Search JSON API
- Using Google Search API fetch experimental features for fast & secure server-side data collection.

<b>

![Search Engine](https://i.imgur.com/zUgmxr7.png)


<b>

Image Credits: All images used in this project belong to google, they are merely being used for the purpose of a study project.

<b>

<hr>

<br>

<b>

#  [↑ top](#readme)

<b>

<b>
