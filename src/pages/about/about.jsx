import "./about.css";
import { Link } from "react-router-dom";

export default function About() {
return (
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
    </section>
);
}
