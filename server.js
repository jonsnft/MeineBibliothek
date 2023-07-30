const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/search-books', async (req, res) => {
  const { q } = req.query;
  const fetch = await import('node-fetch');
  const apiKey = 'AIzaSyDMqJm1gB5AJFN0jHUMu--zoKMZCxFlZ14'; // Hier fügst du deinen API-Schlüssel ein
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${q}&key=AIzaSyDMqJm1gB5AJFN0jHUMu--zoKMZCxFlZ14`;

  try {
    const response = await fetch.default(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Fehler beim Abrufen der Bücher:', error);
    res.status(500).json({ error: 'Fehler beim Abrufen der Bücher' });
  }
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
