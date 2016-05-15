import express from 'express'
import engine from 'react-engine'
import favicon from 'serve-favicon'
import path from 'path'

const app = express()
const port = process.env.PORT || 8080

app.use(favicon(__dirname + '/dist/production/favicon.ico'))
app.use(express.static(path.join(__dirname, 'dist/production')))

app.engine('.jsx', engine.server.create())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.set('view', engine.expressView)

app.get('/', function(req, res) {
	res.render('index', { title: 'Mi titulo' })
})

app.listen(port, err => {
	if (err) { 
		return console.error(err);
	}

	console.log('Servidor funcionando en http://'+require('os').hostname()+':'+port)
})