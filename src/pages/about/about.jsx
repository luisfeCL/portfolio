import "./about.css";
import { Link } from "react-router-dom";



export default function About() {

    document.body.style.setProperty('--container-bgcolor', 'linear-gradient(1.67deg, #11875D -24.41%, rgba(125, 114, 196, 0) 119.89%)')


return (<main className="container">
    <section className="aboutContainer">
    <h1 className="aboutTitle">About</h1>
    <article className="infoContainer">
        <button className="mailButton">Mail</button>
        <ul className="socialNetworks">
            <ul className="socialNetwork"><Link className="socialNetworkLink" to="twitter.com">LinkedIn</Link></ul>
            <ul className="socialNetwork"><Link className="socialNetworkLink" to="twitter.com">Twitter</Link></ul>
            <ul className="socialNetwork"><Link className="socialNetworkLink" to="twitter.com">Github</Link></ul>
        </ul>
        <p className="aboutPresentation">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        suscipit laudantium accusantium mollitia quod earum similique sint
        ratione nisi dignissimos quae, hic nihil ipsa, odio doloribus, quos
        commodi excepturi! Tempora.
        </p>
    </article>
    <h1 className="aboutTitle">Previous experiences</h1>
    <article className="infocontainer">
        <div className="resume">
            <div className="resume__data1">2020-2021</div>
            <div className="resume__data2">video & motion graphic designer</div>
            <div className="resume__data3">freelance</div>
        </div>
        <div className="resume">
            <div className="resume__data1">2020-2021</div>
            <div className="resume__data2">video & motion graphic designer</div>
            <div className="resume__data3">freelance</div>
        </div>
        <div className="resume">
            <div className="resume__data1">2020-2021</div>
            <div className="resume__data2">video & motion graphic designer</div>
            <div className="resume__data3">freelance</div>
        </div>
    </article>
    </section>
    </main>
);
}
