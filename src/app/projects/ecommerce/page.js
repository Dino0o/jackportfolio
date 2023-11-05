'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import PDFViewer from '../../components/PDFViewer';

export default function Page() {
 return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 text-black">
        <div className="bg-white w-5/6 rounded-lg">
          <h1 className='m-2 mt-4'><b>Mock E-Commerce Site</b></h1>
          <br/>
          <p className='m-2 indent-4'>I created this site for my Database Systems class. It is composed of HTML, CSS, PhP, and SQL code.
          For Database implementation, I used MySQL and PhpMyAdmin. My University only hosted the site & database for the brief
          duration of the class, so it is unfortunately no longer active. The site was inspired by mainstream sites like Ebay, Amazon, Etsy, etc. I
          enjoyed this project in particular as it was one of the first times I worked with SQL code. After this project, I had a firm grasp on:
          </p>
          <ul className="pl-14" style={{listStyleType: 'disc'}}> 
            <li>Data Definition Languages</li>
            <li>Data Manipulation Languages</li>
            <li>Data Query Languages</li>
          </ul>
          <br/>
          <p className='m-2'>
            See the development, documentation, and code dump below:
          </p>
          <br/>
          <PDFViewer pdfFileName="/appdesignJD.pdf" />
          <br/>
          <Link className="text-blue-600 m-2 flex place-content-evenly" href="/appdesignJD.pdf" target="_blank">Download the PDF!</Link>
          <br/>
        </div>
      </main>
    );
  }  