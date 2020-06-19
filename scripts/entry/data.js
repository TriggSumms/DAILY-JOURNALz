/* import getEntryData from "../journal";

export default getEntryData;
 
 */


 


/*  const getEntryData = () => {
     return fetch(" http://localhost:3000/entries").then(
         (triggResponse) => {
             return triggResponse.json()
         }
     )
         .then(
             (arrayOfEntry) => {
                 // 100 percent sure the data is back
                 entryCollection = arrayOfEntry;
             }
         )
 }
 getEntryData()
  */

//New method for creating objects containg functions for pass through import/export statements (ES6 Module)
//created a function outta journal entries so that it can be passed


//import entryObj from './createEntry.js';

const url = "http://localhost:3000/entries"

const API = {
    journalEntries : [], 
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json());

     },

    addEntry: (createdEntry) => {
    return fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createdEntry)
  //  }).then(response => response.json());
    
    })
}}


export default API;

//you have to export the object (API) so that it gets to main.js....."Default is for one object and {a,b} are for more than one object"