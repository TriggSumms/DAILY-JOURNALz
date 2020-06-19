let createdEntry = (concepts, date, mood, entry) => {
	const entryObjectParam = {
		concepts: concepts,
        date: date,
        mood: mood,
        entry: entry
	}

	return entryObjectParam;
}

export default createdEntry;
