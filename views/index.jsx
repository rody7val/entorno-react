import React from 'react'

export default class Index extends React.Component{
 
  render(){
    return (
      <html lang='es'>
         <head>
           <meta charser='utf-8' />
           <title>{this.props.title}</title>
           <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
           <link rel='stylesheet' href='css/style.css' />
         </head>
         <body id='app'>
           <img src='/img/logo.png' />
           <p>Codigo del servidor.</p>
         </body>
       </html>
    )
  }

}