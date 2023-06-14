import { FaRegEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
    return (
<div className="card--header">
<img src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=Tx3nGQfxaI781gi97Siw7DIEBbKg1oBxl8n0JEwMQ6s=" alt="Person Portrait" />
<div className="card-intro">
    <h1 className="card-fullName">Laura Smith</h1>
    <h4 className="card-job-title">Frontend Developer</h4>
    <small className="card-personal-website">laurasmith.com</small>

    <div className="card-profile-buttons">
        <button className="card-email-button"><FaRegEnvelope/> <span className="mail-text">Email</span></button>
        <button className="card-linked-button"><FaLinkedin/><span className="linked-text">LinkedIn</span></button>
    </div>
</div>
</div>
    )
}

export default Header;