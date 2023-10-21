import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FootBar(){
    return(
        <nav className="w-full bg-cyan-600 h-24 flex items-center pl-2" style={{ position: "static", bottom: 0, zIndex: 100 }}>
            <div className="p-2 text-white">Contact: </div>
            <div className="p-4 text-white underline"><a href="mailto:degeserojd@gmail.com">Send me an email</a></div>
            <div className="p-4 text-white underline"><a href="https://github.com/Dino0o" target="_blank">Check out my Git</a></div>
            <div className="p-4 text-white underline"><a href="https://www.linkedin.com/in/jack-degesero/" target="_blank">Connect on LinkedIn</a></div>
        </nav>
    );
};