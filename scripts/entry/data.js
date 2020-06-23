 import entriesDOM from "./entryList.js";


const url = "http://localhost:3000/entries"

const API = {
    journalEntries : [], 
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json()).then((journalEntriesArray)=> {
                API.journalEntries= journalEntriesArray;
            })
},
//Added Entries, Went through this step with Tyler and Im still trying to wrap my head around it. I guess were invoking the response so that it works with the renderJournalEntries to clear lists?
    addEntry: (createdEntry) => {
    return fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createdEntry)
 

    }) .then(() => API.getJournalEntries()).then((response)=>{
    
        entriesDOM.renderJournalEntries(response) 
    })
},

//Trying my hand at the delete properties, not sure if I should pass the createdEntry or the "id"
	deleteEntry: (createdEntry) => {
		return fetch(`${url}/entries/${createdEntry}`, {
			method: "DELETE"
	}).then(() => API.getJournalEntries()).then((response)=>{
    
            entriesDOM.renderJournalEntries(response) 
    })}
    //Gotta add back all of the entries? Such in the recipes example?

}




export default API;
//you have to export the object (API) so that it gets to main.js....."Default is for one object and {a,b} are for more than one object"