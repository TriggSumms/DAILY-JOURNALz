 import entriesDOM from "./entryList.js";


const url = "http://localhost:3000/entries"

const API = {
    journalEntries : [], 
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json()).then((journalEntriesArray)=> {
                API.journalEntries= journalEntriesArray;
            })
//Dropping that second ".then(journalEntriesArray) allowed me to post my current database"
     },
//Bel
    addEntry: (createdEntry) => {
    return fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createdEntry)
 
    //Went through this step with Tyler and Im still trying to wrap my head around it. I guess were invoking the response so that it works with the renderJournalEntries to clear lists?
    }) .then(() => API.getJournalEntries()).then((response)=>{
    
        entriesDOM.renderJournalEntries(response) 
    })
}}


export default API;
//you have to export the object (API) so that it gets to main.js....."Default is for one object and {a,b} are for more than one object"