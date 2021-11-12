import * as React from 'react';
import { ArrowUpward } from '@material-ui/icons'
import './ScrollTop.css'


const ScrollTop = () => {

    const [scrollTop, setScrollTop] = React.useState(false)

    const scroll = () => {
        return window.scrollY >= 560 ? setScrollTop(true) : setScrollTop(false)
    }

    window.addEventListener('scroll', scroll)

    return (
        <a href="#" className={scrollTop ? 'scrolltop show-scroll' : 'scrolltop'} id="scroll-top">
            <ArrowUpward className='scrolltop-icon' />
        </a>
    )

}



export default ScrollTop