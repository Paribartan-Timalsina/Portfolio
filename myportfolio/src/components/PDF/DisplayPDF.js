import React, { useState, useEffect } from 'react';
import PdfViewer from './PdfViewer';

const DisplayPDF = () => {
  const [pdfFile, setPdfFile] = useState('');

const settingFunction=()=>{
    setPdfFile('/uploads/your-pdf-file.pdf');
}
  useEffect(() => {
    // Assume the PDF file is stored in the `uploads` folder
    settingFunction()
  }, []);

  return (
    <div className="App">
      <h1>PDF Viewer</h1>
      {pdfFile ? <PdfViewer file={pdfFile} /> : <p>Loading PDF...</p>}
    </div>
  );
};

export default DisplayPDF;
