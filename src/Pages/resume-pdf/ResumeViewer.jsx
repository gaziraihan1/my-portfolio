import React from 'react';

const ResumeViewer = () => {
    return (
         <div className="min-h-screen flex flex-col items-center p-4 my-10">
      <h1 className="text-2xl font-bold mb-4">My Resume</h1>

      <iframe
        src="/resume-001.pdf"
        className="w-full h-[80vh] border rounded"
        title="Resume PDF"
      />

      <a
        href="/resume-001.pdf"
        download
        className="mt-4 inline-block px-6 py-3 rounded bg-gradient-to-r from-green-500 to-indigo-500 text-white font-medium shadow-lg hover:scale-105 hover:shadow-green-400/40 transition-transform"
      >
        Download PDF
      </a>
    </div>
    );
};

export default ResumeViewer;