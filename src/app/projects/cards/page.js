'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import PDFViewer from '../../components/PDFViewer';

export default function Page() {
 return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 text-black">
        <div className="bg-white w-5/6 rounded-lg">
          <h1 className='m-2 mt-4'><b>Game Theory: Using Expected Values to Count Cards in Blackjack</b></h1>
          <br/>
          <p className='m-2 indent-4'>In this project, I develop a model to automatically play blackjack inside a simulation. The agent which is playing will, at every turn,
          calulate the expected value to determine if drawing another card is statistically favorable. A hyperparameter, memory, is defined to demonstrate how many previous hands the agent will remember in its probability matrix 
          (assuming the cards are appended to the end of the dealing deck after being shuffled). What I love about this project is how it highlights the many variables that need to be considered when developing an agent to make well-informed decisions. I also love the probability estimates it uses!
           The source code will not be provided as to avoid nefarious use of the script.
        </p>
          <br/>
          <p className='m-2'>
            See the presentation below:
          </p>
          <br/>
          <PDFViewer pdfFileName="/cards.pdf" />
          <br/>
          <Link className="text-blue-600 m-2 flex place-content-evenly" href="/cards.pdf" target="_blank">Download the PDF!</Link>
          <br/>
        </div>
      </main>
    );
  }  