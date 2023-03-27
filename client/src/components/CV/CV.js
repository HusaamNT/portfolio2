import React from 'react';
import pdf from '../../assets/pdf/HusaamNTCV.pdf';

function DownloadPDFButton() {
  const downloadPDF = () => {
    window.open(pdf);
  };
  return (
    <li>
    <button className="text-base font-normal text-gray-400 tracking-wide cursor-pointer bg-transparent hover:bg-designColor text-designColor hover:text-white rounded-lg py-2 px-4 border border-designColor hover:border-transparent duration-300" onClick={downloadPDF}>CV↓</button>
    </li>
  );
}

export default DownloadPDFButton;
