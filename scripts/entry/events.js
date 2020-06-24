import API from './data.js';
import renderJournalEntries from "./entryList.js"; 
import updateFormFields from "./FormFields.js"
//Need to ask instructor if I can only import tha main object or an object within?

//Do i need to bring in the converted object or my factory object?





//Need to target my EntryLog container?
const entryLogContainer = document.querySelector("#entryLogContainer");

export default {
    
    registerListeners() {
		entryLog.addEventListener("click", event => {
            console.log("what be this event", event.target.id);
        //Currently I am getting this console.log
		//Get the id from the event.target.id
			if (event.target.id.startsWith("deleteEntry--")) {
				const timeToDelete = event.target.id.split("--")[1];
				console.log(timeToDelete);
        // Invoke the delete method, then get all recipes and render them
				API.deleteEntry(timeToDelete)
                .then((API.getJournalEntries))
                .then(renderJournalEntries)
            }
        //Time to try and create a similar event Listener for EDIT button
            else if (event.target.id.startsWith("editEntry--")) {
            const timeToEdit = event.target.id.split("--")[1];
            console.log(timeToEdit);
        //EditEntry might need to change *
          
           updateFormFields(timeToEdit);
            }
    })
    }
}








/* 
recipeList.addEventListener("click", event => {
        if (event.target.id.startsWith("editRecipe--")) {
            const recipeIdToEdit = event.target.id.split("--")[1]
    
          
            updateFormFields(recipeIdToEdit)
        }
    }) 
*/