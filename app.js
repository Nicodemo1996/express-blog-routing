const express = require('express');
const app = express();


app.use(express.json());


app.use(express.static('imgs'));


const postsRouter = require('./routers/posts');
app.use('/posts', postsRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server avviato su http://localhost:${PORT}`);
});
