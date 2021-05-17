import './App.css';
import React, { Fragment } from 'react';
import Hobby from './components/Hobby';
import User from './components/User';

function Avatar () {
  return <img src="https://www.ganador.com.mx/FileExplorerContent/ImagenesArticulos/shutterstock_367523456-min.jpg" 
              alt="Pug Avatar"/>
}

let hobbies = [{
  name: 'Fencing',
  description: 'Is a group of three related combat sports. The three disciplines in modern fencing are the foil, the épée, and the sabre (also saber); winning points are made through the weapons contact with an opponent.',
  isActive: false,
},
{
  name: 'Basketball',
  description: 'Is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter).',
  isActive: false,
},
{
  name: 'Walk my dog',
  description: 'I like to go outside and walk my pug.',
  isActive: true,
},
];
class App extends React.Component {
  render() {
      return (
      <Fragment>
      <div className="App">        
        <User 
        name="Diana" 
        age={26} 
        description="Software Developer" 
        avatar={Avatar()} />
        <Hobby 
        hobbies={hobbies} 
        showHobbies={true}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
