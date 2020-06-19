 //New method for creating objects containg functions for pass through import/export statements (ES6 Module)
 import API from './entry/data.js';
 import entriesDOM from './entry/entryList.js';
 import createdEntry from './entry/createEntry.js';
 
//Maybe dont use the const to hold the invoke?
 //const allEntries = () => {
    API.getJournalEntries()
    .then(()=> entriesDOM.renderJournalEntries()); 
 



//Maybe add the CLICKEVENT HERE and another recording manually?

/*   const entry2 = entryObj("HoobahStank","06/18/2020", "MushBrains", "Not so easy on the log");
  API.addEntry(entry2)
  .then(() => {
      //Once the new sweet has been added to the DB, go get all the data again.
      allEntries();
  }); */



  const entryContainer = document.querySelector(".entryLog")

  document.querySelector(".saveEntry")
  .addEventListener("click", clickEvent => {
      /*
          Collect the user put by selecting the input fields, one
          at a time, and accessing the `value` property
      */
      let concepts= document.querySelector(".concepts").value;
      let date = document.querySelector(".date").value;
      let mood= document.querySelector(".mood").value;
      let entry = document.querySelector(".entry").value;
     
      // Once you have collected all the values, update the DOM
      // with some HTML
  })
  //Now I need too create the logic for the window (if/else?) and invoke the functions












/* 

 REFERENCE FROM (https://github.com/nashville-software-school/client-side-mastery/blob/master/book-3-the-initiate/chapters/JS_ES6_MODULES.md)
------------------------------------------------------------------------

import data from "./data.js"
import dom from "./dom.js"

data.getNumberTrivia()
.then(triviaResponse => dom.printToDom(triviaResponse));
------------------------------------------------------------------------
 

 */