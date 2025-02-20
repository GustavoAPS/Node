const express = require('express');
const app = express();

app.use(express.json());

let mockData = [
    { id:1, name: "Bulbasaur", type: ["grass", "poison"], hp: 45, attack: 49, defense: 49, spAttack: 65, spDefence: 65, speed: 45 },
    { id:12, name: "Butterfree", type: ["bug", "flying"], hp: 60, attack: 45, defense: 50, spAttack: 90, spDefence: 80, speed: 70 }
];


app.get('/', async (request, response) => {
    try {
        const html = await readFile('./home.html', 'utf8');
        response.send(html);
    } catch (err) {
        response.status(500).send("Error loading the page");
    }
});


app.get('/pokemon',  (req, res) => {
    res.json(mockData);
});


app.get('/pokemon/:id',  (req, res) => {

    console.log("I am here")

    const pokemonId = parseInt(req.params.id); //converting string to number
    const pokemon = mockData.find((p) => p.id === pokemonId);

    if (!pokemon){
        return res.status(404).json({message: "Pokemon not found"});
    }

    res.json(pokemon);
});


app.post("/pokemon", (req, res) => {
    const { id, name, type, hp, attack, defense, spAttack, spDefence, speed } = req.body;
    
    const newPokemon = {
        id, 
        name, 
        type, 
        hp, 
        attack, 
        defense, 
        spAttack, 
        spDefence, 
        speed 
    };

    mockData.push(newPokemon)

    res.status(201).json(newPokemon);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is available at http://localhost:${PORT}`));
