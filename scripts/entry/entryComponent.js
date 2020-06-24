
//New method for creating objects containg functions for pass through import/export statements (ES6 Module)
//Now I need to create an object to export to the string converter


const entryHTMLRepresentation = {
    entryConverter(entryObject)
 {

        return `

<article class= "entryLog">
<h2>${entryObject.concept} </h2>

<p>Todays Date: ${entryObject.date}</p>

<p> I am feeling: "${entryObject.mood}"</p>

<div>
 What I learned: "${entryObject.entry}"
<button id="editEntry--${entryObject.id}">Edit</button>
<button id="deleteEntry--${entryObject.id}">Delete</button>
<div>
</article>
    `

    }
}

export default entryHTMLRepresentation;
//exporting the string converter to the main.js for use in the DOM object/function






