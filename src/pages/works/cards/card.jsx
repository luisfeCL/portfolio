import './card.css'


export default function Card(props){
    return <>
                <div className="workElement1">{props.year}</div>
                <div className="workElement2">{props.title}</div>
                <div className="workElement3">{props.category}</div>
            </>
}