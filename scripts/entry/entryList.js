const entryList = () => {
    // Iterate the collection of fish objects
    for (const currentEntryObject of entryCollection) {

        // Convert the current fish to its HTML representation
        const entryHTML = entryConverter(currentEntryObject)

        // Find the <section> element in index.html
        const entryArticleElement = document.querySelector(".entryList")

        // Put the fish HTML representation inside the <article> element
        entryArticleElement.innerHTML += entryHTML
    }
}