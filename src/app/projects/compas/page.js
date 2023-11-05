'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import PDFViewer from '../../components/PDFViewer';

export default function Page() {
 return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 text-black">
        <div className="bg-white w-5/6 rounded-lg">
          <h1 className='m-2 mt-4'><b>Detecting Inaccuracies in the COMPAS Prediction Model</b></h1>
          <br/>
          <p className='m-2 indent-4'>This is a project about detecting inaccuracies in the Correctional Offender Management Profiling for Alternative Sanctions (a.k.a. COMPAS). 
          This system is used to determine if a defendant will be a recidivist, meaning that they&apos;ll reoffend if not provided with appropriate interventions. This model is trained on a database of defendants and is used to predict, based on symptoms it identifies, if someone will be a recidivist or not in a two-year window.
        Depending on the data its fed, which is arguably biased by their distributions alone, the COMPAS model produces inaccurate predictions respective to different demographic groups. In my report, using the equation for information gain:<br/> 
        
        <div className='text-center' style={{ whiteSpace: 'nowrap' }}>
        <span className='italic' style={{ display: 'inline' }}>H</span>(x) =  -Σ<span className='italic' style={{ display: 'inline' }}>p(x)</span>log<sub>b</sub><span className='italic' style={{ display: 'inline' }}>p(x)</span>
        </div>        
        <br/>to determine how much each attribute (sex, age, decile score [0-10]) holds relevancy in determining recidivism, I
        create models using decision tree analysis to reflect how COMPAS works. I&apos;ll take a look at the accuracy of the overall model and disparities between Caucasians and African Amercians.
        This is a report originally lead by <a style={{color:'blue'}} href="https://www.propublica.org/article/how-we-analyzed-the-compas-recidivism-algorithm">Propublica</a>.
          </p>
          <br/>
          <p className='m-2'>
            See the jupyter notebook report below:
          </p>
          <br/>
          <PDFViewer pdfFileName="/COMPASAnalysis.pdf" />
          <br/>
          <Link className="text-blue-600 m-2 flex place-content-evenly" href="/COMPASAnalysis.pdf" target="_blank">Download the PDF!</Link>
          <br/>
        </div>
      </main>
    );
  }  