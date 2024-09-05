'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import PDFViewer from '../../components/PDFViewer';

export default function Page() {
 return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 text-black">
        <div className="bg-white w-5/6 rounded-lg">
          <h1 className='m-2 mt-4'><b>Convolutional Neural Network: How a Computer Identifies Objects</b></h1>
          <br/>
          <p className='m-2 indent-4'> This is a recreation of Jay &apos;Coding Lane&apos; Patel&apos;s convolutional neural network. The goal of this network is to identify whether an image contains a cat or a dog.
          The model will be trained on 2,000 images of cats & dogs and tested on 400. The model is created by utilizing the tensorflow package.
        </p>
          <br/>
          <p className='m-2'>
            A slideshow examining the model:
          </p>
          <br/>
          <PDFViewer pdfFileName="/covonet.pdf" />
          <br/>
          <p className='m-2'>
            See the jupyter notebook report below:
          </p>
          <br/>
          <PDFViewer pdfFileName="/animalclassification.pdf" />
          <br/>
          <Link className="text-blue-600 m-2 flex place-content-evenly" href="/covonet.pdf" target="_blank">Download the PDF!</Link>
          <br/>
        </div>
      </main>
    );
  }  