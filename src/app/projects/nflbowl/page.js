'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import PDFViewer from '../../components/PDFViewer';

export default function Page() {
 return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 text-black">
        <div className="bg-white w-5/6 rounded-lg">
          <h1 className='m-2 mt-4'><b>2024 NFL Big Data Bowl Submission: Using Next Gen Stats to Predict Tackles</b></h1>
          <br/>
          <p className='m-2 indent-4'>Football is a sport sprawling with data. Thanks to the NFL, most data from game scores to positioning data is tracked for sports analysts.
           Ever since the NFL partnered up with AWS, they&apos;ve began to utilize machine learning (referred to as next gen stats) to find key insights on the field. Part of this initiative is their NFL Big Data Bowl,
           which is a public competition to use machine learning to find hidden insights in NFL Data. I participated in the 2024 competition which required participants to find out the key variables which result in tackling.
           In my report, by using the equation for entropy, I assign information values to determine what are the most relevant factors resulting in a tackle. </p>
          <br/>
          <p className='m-2'>
            See the jupyter notebook report below:
          </p>
          <br/>
          <PDFViewer pdfFileName="/nfldatabowl2024-jack-degesero.pdf" />
          <br/>
          <Link className="text-blue-600 m-2 flex place-content-evenly" href="/nfldatabowl2024-jack-degesero.pdf" target="_blank">Download the PDF!</Link>
          <br/>
        </div>
      </main>
    );
  }  