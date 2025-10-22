const express = require('express');
const app = express();
const posts = require('./posts');



app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

app.get('/bacheca', (req, res) => {
  res.json(posts);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server del mio blog avviato su http://localhost:${PORT}`);
});
