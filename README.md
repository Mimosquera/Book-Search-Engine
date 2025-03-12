# Book Search Engine
  ![license badge](https://img.shields.io/badge/license-MIT-blue)

## Table of Contents
* [Description](#description)
* [License](#license)
* [Usage](#usage)
* [Deployed Site](#deployed-site)
* [Contributions](#contributions)
* [Contact Information](#contact-information)
* [Additional Notes](#additional-notes)

## Description
A saved user book list with login, powered by a googlebooks api. 

## License
This project is licensed with MIT

## Deployed Site 
[Render Deployment](https://book-search-engine-sptn.onrender.com)

## Usage
The main page will load, click on the _signup_ in the upper right hand corner to create a login.
![Home Screen](/client/assets/images/Home%20Screen.png)
Fill in all the criteria to create a login.
![Signup](/client/assets/images/SignUp.png).
You will be autmatically logged into the user you just created, now use the search bar to find books. Select _Save This Book!_ to add it to you list. 
![Save Book](/client/assets/images/SaveBook.png)
View your saved books by clicking _See Your Books_ in the upper right corner
![See Your Books](/client/assets/images/SeeYourBooks.png)
You will see the Book Images and Information.
![SavedBooks](/client/assets/images/YourSavedBooks.png)
To delete a book from your list select the _Delete this Book!_ button under the book information.
![Delete Book](/client/assets/images/DeleteThisBook.png)
In the example below all titles have been removed from the list, you can now select seach for books in the upper tight corner and start the process over. 
![all books deleted](/client/assets/images/NoSavedBooks.png)


## Contributions
EDX Starter code, myself, with some tutoring assistance (see additional notes)

## Contact Information
My GitHub account is [GitHub Account Link](https://github.com/achensen)

## Additional Notes 
 The initial code for this project was provided by EDX Engineering Services Company to complete an assignment for a Full Stack Web Development Course. My contribution was to complete the code to ensure it had full functionality similar to the mock up that was provided by setting up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API, modifying the existing authentication middleware so that it works in the context of a GraphQL API and creating a Apollo Provider so that requests can communicate with an Apollo Server. I did receive tutoring assistance to help with my understanding of this assignment, specifically with the routes, especially with deployment, making sure everything was changed over correctly. 