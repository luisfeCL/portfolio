import './moreProjects.css'

export default function MoreProjects(props){
    return <div className='more__projects' style={{ backgroundColor: `${props.color}` }}>
    <h4 className='more__name'>{props.name}</h4>
    <div className="more__icons">
        <div className="more__icon"><img className='more__icon--single' src={props.moreImage1} alt="" /></div>
        <div className="more__icon"><img className='more__icon--single' src={props.moreImage2} alt="" /></div>
        <div className="more__icon"><img className='more__icon--single' src={props.moreImage3} alt="" /></div>
        <div className="more__icon"><img className='more__icon--single' src={props.moreImage4} alt="" /></div>
    </div>
</div>
}