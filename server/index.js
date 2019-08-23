const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database');
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/favorites', (req, res) => {
	db.fetchFavorite((err, data) => {
		if (err) {
			res.status(500).send();
		} else {
			res.status(200).send(data);
		}
	});
});

app.post('/favorites', (req, res) => {
	db.addFavorite(req.body, (err, data) => {
		if (err) {
			res.status(500).send();
		} else {
			res.status(201).send(data);
		}
	});
});

app.delete('/favorites', (req, res) => {
	db.deleteFavorite(req.body, (err, data) => {
		if (err) {
			res.status(500).send();
		} else {
			res.status(202).send();
		}
	});
});

app.listen(PORT, () => {
	console.log(`Connected to http://localhost:${PORT}`);
});