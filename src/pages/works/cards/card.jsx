import './card.css'


export default function Card(props){
    return <div onMouseEnter={props.handleHover} className={props.active ? 'inactive' : 'active'}>
            <div className='secondary'>
                <div className="workElement1">{props.year}</div>
                <div className="workElement2">{props.title}</div>
                <div className="workElement3">{props.category}</div>
            </div>
        </div>
}