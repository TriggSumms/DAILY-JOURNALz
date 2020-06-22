 //New method for creating objects containg functions for pass through import/export statements (ES6 Module)
 import API from './entry/data.js';
 import entriesDOM from './entry/entryList.js';
 import createdEntry from './entry/createEntry.js';
 
//Maybe dont use the const to hold the invoke?
 //const allEntries = () => {
    API.getJournalEntries()
    .then(()=> entriesDOM.renderJournalEntries()); 
 

  const entryContainer = 
  document.querySelector(".entryLog")
  document.querySelector("#saveEntry")
  .addEventListener("click", event => { 
      /*
          Collect the user put by selecting the input fields, one
          at a time, and accessing the `value` property
      */

      let concept = document.querySelector("#concepts").value;
      let date = document.querySelector("#date").value;
      let mood = document.querySelector("#mood").value;
      let entry = document.querySelector("#entry").value;




 if (concept ==="" & date ==="" & mood ==="" & entry ==="")
    {alert("Must complete all forms before recording your entry!")}
        //pass the entry as an invoked object? alert?
else {
       let createdGetEntry= createdEntry(concept, date, mood, entry)
      API.addEntry(createdGetEntry);

        }})
     




