import React from 'react';

function CusrorsIconCell() {
  return (
    <div className="aspect-ratio aspect-ratio--1x1">
      <div className="aspect-ratio--object">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <g fill="none" fillRule="evenodd">
            <path fill="#FFF" d="M0 0H32V32H0z" opacity=".01"/>
            <path fill="#000" d="M17.364 21.943L13.725 21.943 13.725 9.143 17.364 9.143z"/>
            <path fill="#000" d="M9.143 13.719L21.929 13.719 21.929 17.358 9.143 17.358z"/>
            <path fill="#FFF" d="M16.429 21.029L14.629 21.029 14.629 10.07 16.429 10.07z"/>
            <path fill="#FFF" d="M10.072 14.657L21.013 14.657 21.013 16.457 10.072 16.457z"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default CusrorsIconCell;
