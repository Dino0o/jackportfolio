import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
export default function FootBar() {
    const getWindowWidth = () => {
      if (typeof window !== 'undefined') {
        return window.innerWidth;
      }
      return 0;
    };
  
    const windowWidth = getWindowWidth();
  
    const getIconSize = () => {
      if (windowWidth < 768) {
        return { height: '48px', width: '48px' };
      } else {
        return { height: '88px', width: '96px' };
      }
    };
  
    return (
      <nav className="w-full bg-cyan-600 h-34 flex items-center pl-2" style={{ position: 'static', bottom: 0, zIndex: 100 }}>
        <div className="p-2 text-white text-xl">Contact: </div>
        <div className="p-4 text-white underline">
          <Link href="mailto:degeserojd@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} className="fa_icon p-2" style={getIconSize()} />
          </Link>
        </div>
        <div className="p-4 text-white underline">
          <Link href="https://github.com/Dino0o" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="fa_icon p-2" style={getIconSize()} />
          </Link>
        </div>
        <div className="p-4 text-white underline">
          <Link href="https://www.linkedin.com/in/jack-degesero/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="fa_icon p-2" style={getIconSize()} />
          </Link>
        </div>
      </nav>
    );
  }