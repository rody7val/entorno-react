import express from 'express'
import favicon from 'serve-favicon'
import path from 'path'

const app = express()
const port = process.env.PORT || 8080
const IS_DEV = (process.env.NODE_ENV === 'development')

app.use(favicon(__dirname + '/dist/favicon.ico'))
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => res.send('Hello word'))

app.listen(port, err => {
	if (err) { 
		return console.error(err);
	}
	
	console.log('Servidor funcionando en localhost:'+port)
})