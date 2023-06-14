import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className="card-footer">
            <ul>
                <li><FaTwitterSquare/></li>
                <li><FaLinkedin/></li>
                <li><FaInstagram/></li>
                <li><FaFacebookSquare/></li>
            </ul>
        </div>
    )
}
export default Footer;