import React from 'react';
import './card.css'

/*
  card component to display title,suthor and summary info
*/
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