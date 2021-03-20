import './footer.css'
import React from 'react'
import Typewriter from 'typewriter-effect'

function Footer() {
  return (
    <footer className="footer">
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `<i class="text-danger">Const</i> &ensp;<i class="text-white">truth =<i/>&ensp;<i class="fa fa-code text-white">&ensp; {...This_is_the_Way}</i> &ensp; <i class="fa fa-code text-white"></i>`
            )
            .pauseFor(4000)
            .changeDeleteSpeed(2000)
            .deleteAll()
            .typeString(
              `<i class="text-white">We</i> &ensp; <i class="fa fa-heart text-danger"></i> &ensp;<i class="text-white"> Coding...</i></i>`
            )
            .pauseFor(4000)
            .changeDeleteSpeed(2000)
            .start()
        }}
      ></Typewriter>
    </footer>
  )
}

export default Footer
