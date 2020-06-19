
//New method for creating objects containg functions for pass through import/export statements (ES6 Module)
//Should put the string in the DOM, will need to import data and the string and then export the objects functions (API is imported for use of "journal entries" inside)


import API from './data.js';
import entryHTMLRepresentation from './entryComponent.js';


let entriesDOM = {
renderJournalEntries (interiorEntryObject) {
    for(interiorEntryObject of API.journalEntries){
              // Convert the entry object HTML representation
              const entryHTML = entryHTMLRepresentation.entryConverter(interiorEntryObject);

              // Find the Trigg element in index.html to store information
              const triggElement = document.querySelector('.entryLog');
      
              //Now the converters info is being shoved into that entryHTML
              triggElement.innerHTML += entryHTML;  
    }
}
}

export default entriesDOM;






/* REFERENCE EXAMPLE
-----------------------------------------------------------------------
const dom = {
    printToDom (trivia) {
      const containerRef = document.querySelector("#container");
      let triviaHtml = `<p>Number Trivia: ${trivia}</p>`;
      containerRef.innerHTML = triviaHtml;
    }
  }
  export default dom
//NOTE TO SELF: Not sure how this string can be tied without the converter?
-----------------------------------------------------------------------
 */







//Will render correctly to the querried spot in ya HTML

/* const renderJournalEntries = (entries) => {
    // Iterate the collection of fish objects
    for (const currentEntryObject of entries); {

        // Convert the current fish to its HTML representation
        const entryHTML = entryConverter(currentEntryObject);

        // Find the <section> element in index.html
        const triggElement = document.querySelector(".entryLog");

        // Put the fish HTML representation inside the <article> element
        triggElement.innerHTML += entryHTML;
    }
}

renderJournalEntries(journalEntries)


 */