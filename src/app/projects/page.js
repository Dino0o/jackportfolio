import Image from 'next/image'
import Link from 'next/link';

export default function Document() {
    return (
      <main
        className="flex min-h-screen flex-col items-center justify-between pt-24 text-black">
        <div className="bg-white w-5/6 rounded-lg">
        
            <br/>
            <h1 className="pl-4 font-medium text-3xl">Projects:</h1>
        
  
        <ul className="w-full p-4 mt-2 flex flex-wrap">

            <Link className="w-full" href="/projects/ecommerce">
            <li className="rounded border border-white p-2 text-black bg-white hover:bg-gray-200 cursor-pointer flex items-center">
                <Image src="/Mock E-Commerce Site.png" alt="Project1Photo" width={150} height={512}/>
                <p className="flex-grow ml-4"><b>Mock E-Commerce Site:</b> Website I made for my Database Systems class</p>
            </li>
            </Link>
            <Link className="w-full" href="/projects/nflbowl">
            <li className="rounded border border-white p-2 text-black bg-white hover:bg-gray-200 cursor-pointer flex items-center">
            &emsp;<Image src="/football.png" alt="amznhist" width={100} height={412}/>
                <p className="flex-grow ml-4"><b>&emsp;&emsp;2024 NFL Big Data Bowl Submission:</b> Using Next Gen Stats to Predict Tackles</p>
            </li>
            </Link>
            <Link className="w-full" href="/projects/compas">
            <li className="rounded border border-white p-2 text-black bg-white hover:bg-gray-200 cursor-pointer flex items-center">
                <Image src="/decision_tree.png" alt="amznhist" width={150} height={512}/>
                <p className="flex-grow ml-4"><b>Decision Tree Analysis:</b> Detecting Inaccuracies in COMPAS</p>
            </li>
            </Link>
            <Link className="w-full" href="/projects/dogs">
            <li className="rounded border border-white p-2 text-black bg-white hover:bg-gray-200 cursor-pointer flex items-center">
                <Image src="/kmeanscrop.png" alt="amznhist" width={150} height={512}/>
                <p className="flex-grow ml-4"><b>The Importance of Preprocessing:</b> Predicting Intelligence in Dog Breeds</p>
            </li>
            </Link>
            <Link className="w-full" href="/projects/knn">
            <li className="rounded border border-white p-2 text-black bg-white hover:bg-gray-200 cursor-pointer flex items-center">
                <Image src="/euclid.png" alt="amznhist" width={150} height={512}/>
                <p className="flex-grow ml-4"><b>K-Nearest Neighbors:</b> Manual Implementation</p>
            </li>
            </Link>
        </ul>

        </div>
      </main>
    );
  }
