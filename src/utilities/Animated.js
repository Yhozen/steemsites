import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Animated = ({children, animation = "slide-left", duration = "350", easing = "ease-in-out", offset = "200", once = null, anchor = null, anchorPlacement = null }) => (
    <div data-aos={animation} data-aos-offset={offset} data-aos-easing={easing} data-aos-duration={duration} data-aos-once={once}  data-aos-anchor={anchor} data-aos-anchor-placement={anchorPlacement}>
    { children }
    </div>
)
   
export default Animated
export { AOS }