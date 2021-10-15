const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.post('/vertify-login', (req, res) => {
    res.json({
        vertify: true,
    })
})

app.post('/register', (req, res) => {
  res.json({
      register: true,
  })
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});