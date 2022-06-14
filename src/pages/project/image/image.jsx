import "./image.css"

export default function Image(props){
    document.body.style.setProperty('--image-bgcolor', props.color)
    return <article className="details__container">
            <button className="project__card">
                    <h2 className='project__card--title'>{props.name}</h2>
                    <div className='icons'>
                        <img className="icon" src={props.techImage1} alt="" />
                        <img className="icon" src={props.techImage2} alt="" />
                        <img className="icon" src={props.techImage3} alt="" />
                        <img className="icon" src={props.techImage4} alt="" />
                    </div>
            </button>
        </article>
}