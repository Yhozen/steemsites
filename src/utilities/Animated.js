import React from 'react'

const Animated = ({children, animation = "slide-left", duration = "350", easing = "ease-in-out", offset = "200", once = false, anchor = null }) => (
    <div data-aos={animation} data-aos-offset={offset} data-aos-easing={easing} data-aos-duration={duration} data-aos-once={once}  data-aos-anchor={anchor}>
    { children }
    </div>
)
   
export default Animated