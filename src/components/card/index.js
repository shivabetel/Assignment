import React from 'react';
import './card.css'

const Card = ({title= '', author='', summary = ''}) => {
  return (
      <div className="card">
          <div className="titleCon">
              <span className="titleText">{title}</span>
          </div>
          <div className="summaryCon">
              <span className="summaryText">{summary.substr(0,100).concat("...")}</span>
          </div>
          <div className="authorCon">
              <span className="authorText">{author}</span>
          </div>
      </div>
  )
}

export default Card