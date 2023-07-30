// Funktion, um Suchvorschläge basierend auf der Benutzereingabe anzuzeigen
function searchBooks() {
  const searchInput = document.getElementById('searchInput').value;
  const apiKey = 'AIzaSyDMqJm1gB5AJFN0jHUMu--zoKMZCxFlZ14'; // Hier fügst du deinen API-Schlüssel ein
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const searchSuggestions = document.getElementById('searchSuggestions');
      searchSuggestions.innerHTML = '';

      if (data.items) {
        data.items.slice(0, 5).forEach(item => {
          const suggestion = item.volumeInfo.title;
          const li = document.createElement('li');
          li.innerText = suggestion;
          searchSuggestions.appendChild(li);
        });
      }
    })
    .catch(error => console.error('Fehler beim Abrufen der Suchvorschläge:', error));
}
