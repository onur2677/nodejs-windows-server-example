const app = require('express')()
const port = 3000

app.get('/', (req, res) => {
  res.send('Service is running')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
