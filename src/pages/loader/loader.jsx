import './loader.css'
import { useSpring, animated } from "react-spring"



export default function Loader(){

    const props = useSpring({ to: { opacity: 1,
                                    y:0,
                            }, 
                            from: { opacity: 0,
                                    y:-10
                            }, 
                            config: {duration:500}})

const secondprops = useSpring({ to: { opacity: 1,
                                y:0,
                                }, 
                                from: { opacity: 0,
                                        y:-10
                                }, 
                                config: {duration:500},
                                delay:250
                            })
                            
    return <div className='loader'> 
        <div className='loader__container'>
                <animated.h1 className='luisfe' style={props}>Luisfe</animated.h1>
                <span className='separator'>|</span>
                <animated.h1 className='portfolio' style={secondprops}>Portfolio</animated.h1>
            </div>
        </div>
}