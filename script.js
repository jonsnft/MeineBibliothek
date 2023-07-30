// Dummy-Daten für die Bibliothek
let books = [
  { title: 'Harry Potter', author: 'J.K. Rowling' },
  { title: 'Der Hobbit', author: 'J.R.R. Tolkien' }
];

// Funktion, um ein neues Buch hinzuzufügen
function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title !== '' && author !== '') {
    books.push({ title, author });
    displayBooks();
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
}

// Funktion, um die Bücherliste anzuzeigen
function displayBooks() {
  const bookList = document.getElementById('bookItems');
  bookList.innerHTML = '';

  books.forEach(book => {
    const li = document.createElement('li');
    li.innerText = `${book.title} - ${book.author}`;
    bookList.appendChild(li);
  });
}

// Funktion, um Suchvorschläge basierend auf der Benutzereingabe anzuzeigen
function searchBooks() {
  const searchInput = document.getElementById('searchInput').value;
  const searchSuggestions = document.getElementById('searchSuggestions');
  searchSuggestions.innerHTML = '';

  if (searchInput !== '') {
    const apiKey = 'AIzaSyDMqJm1gB5AJFN0jHUMu--zoKMZCxFlZ14'; // Hier fügst du deinen API-Schlüssel ein
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=${apiKey}`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
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
}

// Initialisiere die Bücherliste beim Laden der Seite
displayBooks();
