 //New method for creating objects containg functions for pass through import/export statements (ES6 Module)
 import API from './entry/data.js';
 import entriesDOM from './entry/entryList.js';
 import createdEntry from './entry/createEntry.js';
 import registerDeleteListener from './entry/events.js';
 
//Maybe dont use the const to hold the invoke?
 //const allEntries = () => {
    API.getJournalEntries()
    .then(()=> entriesDOM.renderJournalEntries()); 
 
//I guess I could delete entry container?
  const entryContainer = 
  document.querySelector(".entryLog")
  document.querySelector("#saveEntry")
  .addEventListener("click", event => { 
      /*
          Collect the user put by selecting the input fields, one
          at a time, and accessing the `value` property
      */

      let concept = document.querySelector("#concept").value;
      let date = document.querySelector("#date").value;
      let mood = document.querySelector("#mood").value;
      let entry = document.querySelector("#entry").value;

//6/22---> This is almost working, it looks like part of my entries are being cut off or only the first part of the entry is being acceptted 
//Lastly I am having issues with the ID value in my .json file.....might effect filtering later

if (concept !== "" && date !== "" && mood !== "" && entry !== "")
     { let createdGetEntry= createdEntry(concept, date, mood, entry)
        API.addEntry(createdGetEntry)}
  else { alert("Must complete all forms before recording your entry ya DINGUS!")}

})



//Invoking the delete listener
registerDeleteListener.registerDeleteListener();

// Invoke the method that attaches the event listener
//event.registerDeleteListener();

// Get all entries from API and render them in the DOM
//API.getJournalEntries().then(renderJournalEntries);
