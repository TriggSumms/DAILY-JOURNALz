


const updateFormFields = (entryObject) => {
	// Get reference to input fields in the form
    const hiddenEntryForm = document.querySelector("#hiddenEntryForm");
    const entryConceptInput = document.querySelector("#concept");
    const entryDateInput = document.querySelector("#date");
    const entryMoodInput = document.querySelector("#mood");
    const entryEntryInput = document.querySelector("#entry");

//via hiddenEntry.....I still have no idea how to target id's?
    hiddenEntryForm.value = entryObject.id;
    entryConceptInput.value = entryObject.concept;
    entryDateInput.value = entryObject.date;
    entryMoodInput.value = entryObject.mood;
    entryEntryInput.value = entryObject.entry;
}

export default updateFormFields;