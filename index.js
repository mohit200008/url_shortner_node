const express = require('express')

const app = express();
const PORT = 8002

app.listen(PORT, () => console.log(`server listening at port ${PORT}`))