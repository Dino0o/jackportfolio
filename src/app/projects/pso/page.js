'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import PDFViewer from '../../components/PDFViewer';

export default function Page() {
 return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 text-black">
        <div className="bg-white w-5/6 rounded-lg">
          <h1 className='m-2 mt-4'><b>Particle Swarm Optimization: Training ML Algorithms Efficiently</b></h1>
          <br/>
          <p className='m-2 indent-4'>In this presentation, I discuss the benefits and theory behind Particle Swarm Optimization. This is a meta-heuristic training algorithm to tune parameters in machine learning models.
          What makes this optimizer interesting compared to other parameter tuners (e.g. gradient descent) is that this uses multiple particles which communicate information with one another to converge. 
          <br/>
          <br/>
          Fun fact: This model is conceptually derived from how birds communicate in nature to find an updraft while flying. 
        </p>
          <br/>
          <p className='m-2'>
            See the presentation below:
          </p>
          <br/>
          <PDFViewer pdfFileName="/pso.pdf" />
          <br/>
          <Link className="text-blue-600 m-2 flex place-content-evenly" href="/pso.pdf" target="_blank">Download the PDF!</Link>
          <br/>
        </div>
      </main>
    );
  }  