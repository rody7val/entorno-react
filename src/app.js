import React from 'react'
import ReactDom from 'react-dom'
import MyComponent from './components/my_component'

window.onload = () => {
	ReactDom.render(<MyComponent />, document.getElementById('app'))
}