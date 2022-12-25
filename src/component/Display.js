import React from "react";
import ReactMarkdown from 'react-markdown'

function Display({textarea}) {
  return (
    <>
      <ReactMarkdown>{textarea}</ReactMarkdown>
    </>
  );
}

export default Display;
