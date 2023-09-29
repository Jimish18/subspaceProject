const express = require('express');
const app = express();
const {blogStats,searchBlog} = require('./controller.js');

app.get('/', (req, res) => {
  res.send('Hello World!');
}   );

app.get('/api/blog-stats', blogStats);

app.get('/api/blog-search', searchBlog);



app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
}
);

