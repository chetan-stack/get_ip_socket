const express = require('express');
const app = express();
const requestIp = require('request-ip');
const cors = require('cors'); // Import the cors package

app.use(cors()); // Enable CORS for all routes

app.use(requestIp.mw());

app.get('/api/ip', (req, res) => {
    console.log(req)
  const clientIp = req.clientIp;
  res.json({ ip: clientIp });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
