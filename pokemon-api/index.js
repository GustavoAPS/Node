const express = require('express');
const { readFile } = require('fs').promises;

const app = express();

app.get('/', async (request, response) => {
    try {
        const html = await readFile('./home.html', 'utf8');
        response.send(html);
    } catch (err) {
        response.status(500).send("Error loading the page");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is available at http://localhost:${PORT}`));
