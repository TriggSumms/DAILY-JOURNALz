// Pulls the info from my database to put in the above array
const getEntryData = () => {
    return fetch("http://localhost:3000/entryCollection").then(
        (triggResponse) => {
            return triggResponse.json()
        }
    )
        .then(
            (entries) => {
                // 100 percent sure the data is back
                entryCollection = entries
            }
        )
}
getEntryData()


/* 

// Converts the info into HTML

const entryConverter = (entryObject) => {

            const entryHTMLRepresentation = `
            <article class= "entryLog">
        <h2>${entryObject.concepts} </h2>
        <div>
        Todays Date: ${entryObject.date}
        </div>
        <div>
        I am feeling: ${entryObject.mood}
        </div>
        <div>
        What I learned ${entryObject.entry}
        </div>
        </article>
            `

return entryHTMLRepresentation

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