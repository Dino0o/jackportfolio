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
                <Image src="/Mock E-Commerce Site.png" alt="projphoto" width={150} height={512}/>
                <p className="flex-grow ml-4"><b>Mock E-Commerce Site:</b> Website I made for my Database Systems class</p>
            </li>
            </Link>
            <Link className="w-full" href="/projects/knn">
            <li className="rounded border border-white p-2 text-black bg-white hover:bg-gray-200 cursor-pointer flex items-center">
                <Image src="/euclid.png" alt="euclid" width={150} height={512}/>
                <p className="flex-grow ml-4"><b>Computer Vision Fundamentals:</b> Manual Implementation of K-Nearest Neighbors</p>
            </li>
            </Link>
            <Link className="w-full" href="/projects/perceptron">
            <li className="rounded border border-white p-2 text-black bg-white hover:bg-gray-200 cursor-pointer flex items-center">
                <Image src="/Neuron.png" alt="neuron" width={150} height={512}/>
                <p className="flex-grow ml-4"><b>Neural Network Fundamentals: </b> Manual Implementation of Perceptron</p>
            </li>
            </Link>
            <Link className="w-full" href="/projects/convo">
            <li className="rounded border border-white p-2 text-black bg-white hover:bg-gray-200 cursor-pointer flex items-center">
                <Image src="/car.png" alt="car" width={75} height={256}/>
                <p className="flex-grow ml-4"><b>Convolutional Neural Network: </b> How a Computer Identifies Objects</p>
            </li>
            </Link>
            <Link className="w-full" href="/projects/cards">
            <li className="rounded border border-white p-2 text-black bg-white hover:bg-gray-200 cursor-pointer flex items-center">
                <Image src="/bj.png" alt="cards" width={75} height={256}/>
                <p className="flex-grow ml-4"><b>Game Theory: </b> Using Expected Values to Count Cards in Blackjack</p>
            </li>
            </Link>
            <Link className="w-full" href="/projects/pso">
            <li className="rounded border border-white p-2 text-black bg-white hover:bg-gray-200 cursor-pointer flex items-center">
                <Image src="/bird.png" alt="birds" width={150} height={512}/>
                <p className="flex-grow ml-4"><b>Particle Swarm Optimization: </b> Training ML Algorithms Efficiently [PRESENTATION]</p>
            </li>
            </Link>
        </ul>

        </div>
      </main>
    );
  }
