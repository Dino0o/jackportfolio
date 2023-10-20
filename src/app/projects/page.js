import Image from 'next/image'
import Link from 'next/link';

export default function Document() {
    return (
      <main
        className="flex min-h-screen flex-col items-center justify-between pt-24"
        style={{ backgroundImage: `url('/mountain.jpg')` }}
      >
        <div className="bg-white w-5/6 rounded-lg">
        
            <br/>
            <h1 className="pl-4 font-medium text-3xl">Projects:</h1>
        
  
        <ul className="w-full p-4 mt-2 flex flex-wrap">

            <Link className="w-full" href="/projects/ecommerce">
            <li className="rounded border border-white p-2 text-black bg-white hover:bg-gray-200 cursor-pointer flex items-center">
                <Image src="/Mock E-Commerce Site.png" alt="Project1Photo" width={150} height={512}/>
                <p className="flex-grow ml-4"><b>Mock E-Commerce Site:</b> Website I made for my Database Systems class</p>
            </li>
            <br/>
            </Link>
            <Link className="w-full" href="/projects/arima">
            <li className="rounded border border-white p-2 text-black bg-white hover:bg-gray-200 cursor-pointer flex items-center">
                <Image src="/amznhist.png" alt="amznhist" width={150} height={512}/>
                <p className="flex-grow ml-4"><b>ARIMA Analysis:</b> Forecasting future stock values</p>
            </li>
            </Link>
        </ul>

        </div>
      </main>
    );
  }
