import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

function PDFViewer({pdfFileName}) {
  const [isMobile, setIsMobile] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [allowButtonClick, setAllowButtonClick] = useState(true);
  const [inputPage, setInputPage] = useState(pageNumber);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    if (allowButtonClick) {
      setAllowButtonClick(false);
      setTimeout(() => {
        setPageNumber((prevPage) => (prevPage - 1 <= 1 ? 1 : prevPage - 1));
        setInputPage(pageNumber);
        setAllowButtonClick(true);
      }, 1000); // 1-second delay
    }
  };

  const goToNextPage = () => {
    if (allowButtonClick) {
      setAllowButtonClick(false);
      setTimeout(() => {
        setPageNumber((prevPage) =>
          prevPage + 1 >= numPages ? numPages : prevPage + 1
        );
        setInputPage(pageNumber);
        setAllowButtonClick(true);
      }, 1000); // 1-second delay
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission (if inside a form)
      goToPage();
    }
  };

  const goToPage = () => {
    if (allowButtonClick) {
      setAllowButtonClick(false);
      setTimeout(() => {
        const parsedInputPage = parseInt(inputPage, 10);
        if (!isNaN(parsedInputPage) && parsedInputPage >= 1 && parsedInputPage <= numPages) {
          setPageNumber(parsedInputPage);
        }
        setAllowButtonClick(true);
      }, 1000); // 1-second delay
    }
  };

  useEffect(() => {
    // Use CSS media queries to determine if the screen is in mobile view
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Adjust the breakpoint as needed
    setIsMobile(mediaQuery.matches);

    // Handle changes to the media query (e.g., screen resize)
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, [])

  useEffect(() => {
    setInputPage(pageNumber); // Update the input field when pageNumber changes
  }, [pageNumber]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }} className='m-auto border-black rounded border-4 w-min h-min max-w-full'>
        <Document file={pdfFileName} onLoadSuccess={onDocumentLoadSuccess} options={options}>
          <Page pageNumber={pageNumber} className='max-w-full !min-w-full !min-h-full' width={isMobile ? 300 : 612} height={isMobile ? 396 : 792} style={{ width: '100%', maxWidth: '100%', height: 'auto', maxHeight: '100%' }} />
        </Document>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }}>
          <p>
            &emsp; Page &nbsp;
            <input
              type="number"
              min="1"
              max={numPages || 1}
              value={inputPage}
              onChange={(e) => setInputPage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            &nbsp;of {numPages}
            &emsp;&emsp;
          </p>
        </div>
        <div className='flex place-content-evenly'>
          <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }}>
            <button style={{ flex: '0 0 auto', fontSize: isMobile ? '14px' : '16px', padding: isMobile ? '8px 12px' : '10px 16px' }}
              className='m-auto bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded w-36'
              onClick={goToPrevPage}
              disabled={!allowButtonClick}
            >
              Prev
            </button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }}>
            <button style={{ flex: '0 0 auto', fontSize: isMobile ? '14px' : '16px', padding: isMobile ? '8px 12px' : '10px 16px' }}
              className='m-auto bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded w-36'
              onClick={goToNextPage}
              disabled={!allowButtonClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
  }  
export default PDFViewer;
