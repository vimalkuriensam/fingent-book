# Fingent E-book Reader

This application introduces creating and updating an ebook. The main components involved in the application are:
  - Header
  - Ebook Viewing
  - Updating existing ebook
 
### Features
The app utilizes the localstorage using `redux persist` when an ebook is created. Each ebook is mapped to a unique id. Since this app is only for demonstration purpose, at present there is only the option to create a single page. But portion of the code has been updated to provide room for improvement in the future to include multiple pages, especially the action files `book.action.js`.
Each book can be updated by the user by selecting the particular book and clicking on the update button. Updates are mapped to the unique id. 
Adding or updating a book routes to an editor file which potentially can edit the file with all relevant html properties including font weight, type, style and color.

 

### Insallation
To start the application you need to first install the dependencies
```
npm install
```
This will install all the dependencies required in the project
Next you need to start the development server
```
npm run dev
```
To run the test in the application you need to type the test command
```
npm test -- --watchAll
```


### Dependencies used
Fingent E-book reader tries to use 3-rd party dependencies to a minimum and utilizes only those dependencies that are necessary to run the application smoothly. To know the dependencies used please check `package.json` file


License
----

MIT
