'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import PDFViewer from '../../components/PDFViewer';

export default function Page() {
 return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 text-black">
        <div className="bg-white w-5/6 rounded-lg">
          <h1 className='m-2 mt-4'><b>The Importance of Preprocessing - Predicting Intelligence in Dog Breeds</b></h1>
          <br/>
          <p className='m-2 indent-4'>In this project, I'm using decision tree analysis with entropy to predict intelligence in different dog breeds. By adjusting preprocessing techniques, we can track how the model's accuracy changes.
           Trying out various methods helps us find the best way to preprocess data for this specific dataset. It's important to remember that what works best here might not work as well for other datasets. Each dataset is unique and requires its own exploration.</p>
          <br/>
          <p className='m-2'>
            See the jupyter notebook report below:
          </p>
          <br/>
          <PDFViewer pdfFileName="/JackD-FinalProject.pdf" />
          <br/>
          <Link className="text-blue-600 m-2 flex place-content-evenly" href="/JackD-FinalProject.pdf" target="_blank">Download the PDF!</Link>
          <br/>
          <p className='m-2'>
          Note: The plotly.express graph on [23] is unable to export into PDF via LaTeX. Find the graph here:

          </p>
          <img src="/kmeansclust.png" alt="K Means"></img>
          <br/>
          <br/>
        </div>
      </main>
    );
  }  