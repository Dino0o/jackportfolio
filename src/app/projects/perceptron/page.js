'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import PDFViewer from '../../components/PDFViewer';

export default function Page() {
 return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 text-black">
        <div className="bg-white w-5/6 rounded-lg">
          <h1 className='m-2 mt-4'><b>Neural Network Fundamentals: Manual Implementation of Perceptron</b></h1>
          <br/>
          <p className='m-2 indent-4'>This is a manual implementation I made of the popular machine learning classifier Perceptron. In my project, I create a perceptron model in python to classify positive and negative data objects based on three features. 
          In this application, the model is trained a few times to find the correct amount of iterations to correctly classify all data tuples. This is important because in order for a model to generalize, hyperparameters must be appriopiately tuned. Personally, the most interesting part of this project is that this model reflects a neuron in the human brain and how it carries a signal forward.
          Understanding this concept is one of the first steps of building a multi-faceted neural network.</p>
          <br/>
          <p className='m-2'>
            See the jupyter notebook report below:
          </p>
          <br/>
          <PDFViewer pdfFileName="/Perceptron.pdf" />
          <br/>
          <Link className="text-blue-600 m-2 flex place-content-evenly" href="/Perceptron.pdf" target="_blank">Download the PDF!</Link>
          <br/>
        </div>
      </main>
    );
  }  