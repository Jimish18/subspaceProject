import express from 'express';
import { blogStats , searchBlog} from './controller.js';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
}   );

app.get('/api/blog-stats', blogStats);

app.get('/api/blog-search', searchBlog);



app.listen(4000, () => {
  console.log('Example app listening on port 3000!');
}
);

