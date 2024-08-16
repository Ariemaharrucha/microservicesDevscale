import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from api gateway!');
});

app.use("/threads",createProxyMiddleware({
  target: "http://localhost:8001",
}))

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})