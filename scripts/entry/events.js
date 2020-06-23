import API from './data.js';
import renderJournalEntries from "./entryList.js"; 
//Need to ask instructor if I can only import tha main object or an object within?






//Need to target my EntryLog container?
const entryLog = document.querySelector("#entryLog");

export default {
	registerDeleteListener() {
		entryLog.addEventListener("click", event => {
			console.log("what be this event", event.target.id); //Currently I am getting this console.log
			//Get the id from the event.target.id
			if (event.target.id.startsWith("#deleteEntry--")) {
				const timeToDelete = event.target.id.split("--")[1];
				console.log(timeToDelete);

                // Invoke the delete method, then get all recipes and render them
				API.deleteEntry(timetoDelete)
                .then((API.getJournalEntries))
                .then(renderJournalEntries)
			}
		})
	}
} 