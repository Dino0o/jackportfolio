'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import PDFViewer from '../../components/PDFViewer';

export default function Page() {
 return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 text-black">
        <div className="bg-white w-5/6 rounded-lg">
          <h1 className='m-2 mt-4'><b>Computer Vision Fundamentals: Manual Implementation of K-Nearest Neighbors</b></h1>
          <br/>
          <p className='m-2 indent-4'>This is a manual implementation I made of the popular machine learning model K-Nearest Neighbors. In my project, I create a function that utilizes
          vectorized statements to calculate the distance between known and unknown data objects. After defining the K nearest objects to examien, we can predict the assignment of an unlabeled data entry.
          In this application, after training, we feed various measurements of different unidentified letters to classify them to their respective letter group. What I find interesting about this project is that this
          is how a computer would see and identify letters using a camera.
        </p>
          <br/>
          <p className='m-2'>
            See the jupyter notebook report below:
          </p>
          <br/>
          <PDFViewer pdfFileName="/KNN.pdf" />
          <br/>
          <Link className="text-blue-600 m-2 flex place-content-evenly" href="/KNN.pdf" target="_blank">Download the PDF!</Link>
          <br/>
        </div>
      </main>
    );
  }  