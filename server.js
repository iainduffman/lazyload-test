const http = require("http");
const PORT = process.env.PORT || 4000;
const axios = require("axios");
let cases = async () => {
  try {
    let casesData = await axios.get("http://localhost:8888/restapi/wp-json/wp/v2/posts");
    return casesData.data
  } catch (err) {
    console.log(err)
  }
}
const server = http.createServer(async (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/json',
    'Access-Control-Allow-Origin': '*',
    'X-Powered-By': 'nodejs'
  });
  let data = await cases();
  if (req.url === "/") {
    res.end(JSON.stringify(data));
  }
});
server.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});