import express from 'express'
import engine from 'react-engine'
import favicon from 'serve-favicon'
import path from 'path'

const app = express()
const port = process.env.PORT || 8080
const IS_DEV = (process.env.NODE_ENV === 'development')

app.use(favicon(__dirname + '/dist/favicon.ico'))
app.use(express.static(path.join(__dirname, 'dist')))

app.engine('.jsx', engine.server.create())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.set('view', engine.expressView)

app.get('/', (req, res) => res.render('index', { title: IS_DEV ? 'Development' : 'Mi titulo' }))

app.listen(port, err => {
	if (err) { 
		return console.error(err);
	}
	
	console.log('Servidor funcionando en localhost:'+port)
})