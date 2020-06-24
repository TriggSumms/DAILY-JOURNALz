 //New method for creating objects containg functions for pass through import/export statements (ES6 Module)
 import API from './entry/data.js';
 import entriesDOM from './entry/entryList.js';
 import createdEntry from './entry/createEntry.js';
 import registerListeners from './entry/events.js';


 
//Maybe dont use the const to hold the invoke?
 //const allEntries = () => {
    API.getJournalEntries()
    .then(()=> entriesDOM.renderJournalEntries()); 
 
//I guess I could delete entry container?
  //const entryLogContainer = 
  document.querySelector("#entryLog")
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
//Finished RADIO for Moods Above





//Beginning LilDebbie Form Refactoring, with a clearInputs and listener for my save button


const clearInputs = () => {
	document.querySelector("#hiddenEntryForm").value = "";
	document.querySelector("#concept").value = "";
	document.querySelector("#date").value = "";
	document.querySelector("#mood").value = "";
	document.querySelector("#entry").value = "";
}
//Would I want to target the edit or save ID?
const saveEntry = document.querySelector("#editEntry")
saveEntry.addEventListener("click", event => {
console.log("yeet")
    const hiddenEntryForm = document.querySelector("#hiddenEntryForm");

    if (hiddenEntryForm.value !== "") {
		const entryConceptInput = document.querySelector("#concept").value;
		const entryDateInput = document.querySelector("#date").value;
		const entryMoodInput = document.querySelector("#mood").value;
		const entryEntryInput = document.querySelector("#entry").value;
		//(concept, date, mood, entry)
		API.updateEntry(hiddenEntryForm.value, entryObject(entryConceptInput, entryDateInput, entryMoodInput, entryEntryInput))
		.then(() => {
            clearInputs();
            entriesDOM.renderJournalEntries()
		});
    } else {
		// Save functionality goes here
		console.log("should be able tp see the save a new one functionality");
    }

});







//Invoking the delete and Edit listener
registerListeners.registerListeners();

// Invoke the method that attaches the event listener
//event.registerListeners();

// Get all entries from API and render them in the DOM
//API.getJournalEntries().then(renderJournalEntries);

