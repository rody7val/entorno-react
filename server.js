import express from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || 8080
const IS_DEV = (process.env.NODE_ENV === 'development')

app.get('/', (req, res) => res.send('Hello word'))

app.listen(port, err => {
	if (err) { 
		return console.error(err);
	}
	
	console.log('Servidor funcionando en localhost:'+port)
})