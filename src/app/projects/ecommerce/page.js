import Image from 'next/image'

export default function Document() {
    return (
      <main
        className="flex min-h-screen flex-col items-center justify-between pt-24 text-black"
        style={{ backgroundImage: `url('/mountain.jpg')` }}
      >
        <div className="bg-white w-5/6 rounded-lg">
  
            <h1 className='m-2 mt-4'><b>Mock E-Commerce Site</b></h1>
            <br/>
            <p className='m-2 indent-4'>I created this site for my Database Systems class. It is composed of HTML, CSS, PhP, and SQL code.
            For Database implementation, I used MySQL and PhpMyAdmin. My University only hosted the site & database for the brief
            duration of the class, so it is unfortunately no longer active. The site was inspired by mainstream site like Ebay, Amazon, Etsy, etc. I
            enjoyed this project in particular as it was one of the first times I worked with SQL code. After this project, I had a firm grasp on:
            </p>
            <ul className="pl-14" style={{listStyleType: 'disc'}}> 
                <li>
                Data Definition Languages
                </li>

                <li>
                Data Manipulation Languages
                </li>

                <li>
                Data Query Language
                </li>
            </ul>
            <br/>
            <p className='m-2'>
            See the development, documentation, and code dump below:
            </p>
            <br/>
            <embed src="/appdesignsql.pdf" width="100%" height="900" type="application/pdf" />
            <br/>
        </div>
      </main>
    );
  }