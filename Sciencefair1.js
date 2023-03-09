// Dictionary data structure
var dictionary = [
	{
		word: "apple",
		definition: "a round fruit with red or green skin and a white inside"
	},
	{
		word: "banana",
		definition: "a long curved fruit with yellow skin"
	},
	{
		word: "cherry",
		definition: "a small round fruit with a red or black skin"
	}
];

// Search function
function search() {
	varsearchTerm = document.getElementById("search").value;
	varresultsDiv = document.getElementById("results");
	var found = false;

	// Loop through dictionary to find matches
	for (vari = 0; i<dictionary.length; i++) {
		if (dictionary[i].word === searchTerm.toLowerCase()) {
			found = true;
			resultsDiv.innerHTML = "<h2>" + dictionary[i].word + "</h2><p>" + dictionary[i].definition + "</p>";
			break;
		}
	}

	// If no matches found, display error message
	if (!found) {
		resultsDiv.innerHTML = "<p>No results found.</p>";
	}
	console.log(dictionary)
}
