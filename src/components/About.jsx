import React from 'react'

function About(props) {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={props.image} alt=''/>
      </div>
      <div className='about-text'>
        <h2> {props.title} </h2>
        <p>Dandole a los hater con el crossover de kobe
            Ahorrate los chistes que tu no eres de lo omi
            No tengo preocupaciones, competencia, ni enemigos
            Ni tiempo pa pensar en bolsillos que no sean los mios</p>
            <button><a href='https://www.youtube.com/@esteesmicanall'>{props.button}</a></button>
      </div>
      
    </div>
  )
}

export default About
