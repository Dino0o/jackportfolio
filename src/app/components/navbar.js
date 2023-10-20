import Image from 'next/image';

export default function NavBar(){
    return(
        <nav className="w-full bg-cyan-600 h-16 flex items-center px-1	" style={{ position: "fixed", top: 0, zIndex: 100 }}>
            <div><Image src="/liph.jpg" alt="LinkedInPhoto" width={34} height={12}/></div>
            <div className="p-2 text-white font-bold">Jack DeGesero</div>
            <div class="ml-auto p-5 text-white"><a href="/">Home</a></div>
            <div class="p-5 text-white"><a href="/projects">Projects</a></div>
            <div class="p-5 text-white"><a href="https://www.linkedin.com/in/jack-degesero/" target="_blank">LinkedIn</a></div>
        </nav>
    );
};