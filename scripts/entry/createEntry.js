let createdEntry = (concept, date, mood, entry) => {
	const entryObjectParam = {
		concept: concept,
        date: date,
        mood: mood,
		entry: entry
	}

	return entryObjectParam;
}

export default createdEntry;
