 //New method for creating objects containg functions for pass through import/export statements (ES6 Module)
 import API from "./data.js";
 import entriesDOM from "./entryList.js";
 
 API.getJournalEntries()
 .then(()=> entriesDOM.renderJournalEntries()); 




//Maybe add the CLICKEVENT HERE




/* REFERENCE FROM (https://github.com/nashville-software-school/client-side-mastery/blob/master/book-3-the-initiate/chapters/JS_ES6_MODULES.md)
------------------------------------------------------------------------

import data from "./data.js"
import dom from "./dom.js"

data.getNumberTrivia()
.then(triviaResponse => dom.printToDom(triviaResponse));
------------------------------------------------------------------------
 */













/* 
//Pulls the info from my database to put in the above array
const getEntryData = () => {
    return fetch("http://localhost:3000/entries").then(
        (triggResponse) => {
            return triggResponse.json()
        }
    )
        .then(
            (entries) => {
                // 100 percent sure the data is back
                entryLog = entries
            }
        )
}

  getEntryData() */
 






/*







//REMOVE BELOW INFO


{
    getJournalEntries: function () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    }
}



// Render all entries

const renderJournalEntries = () => {
    // Iterate the collection of fish objects
    for (const currentEntryObject of entryCollection) {

        // Convert the current fish to its HTML representation
        const entryHTML = entryConverter(currentEntryObject)

        // Find the <section> element in index.html
        const fieldsetElement = document.querySelector(".entryLog")

        // Put the fish HTML representation inside the <article> element
        fieldsetElement.innerHTML += entryHTML
    }
}


// INVOKE
renderJournalEntries();



*/