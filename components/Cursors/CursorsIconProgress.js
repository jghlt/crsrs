import React from 'react';

function CusrorsIconProgress() {
  return (
    <div className="aspect-ratio aspect-ratio--1x1">
      <div className="aspect-ratio--object">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <defs>
            <path id="cursorprogresssmaller-a" d="M0.614285714,10.4285714 C0.614285714,12.7010286 2.45657143,14.5428571 4.72857143,14.5428571 L4.72857143,14.5428571 C7.00057143,14.5428571 8.84285714,12.7010286 8.84285714,10.4285714 L8.84285714,10.4285714 C8.84285714,8.15611429 7.00057143,6.31428571 4.72857143,6.31428571 L4.72857143,6.31428571 C2.45657143,6.31428571 0.614285714,8.15611429 0.614285714,10.4285714 L0.614285714,10.4285714 Z"/>
            <linearGradient id="cursorprogresssmaller-d" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#4AB4EF"/>
              <stop offset="100%" stopColor="#3582E5"/>
            </linearGradient>
            <path id="cursorprogresssmaller-c" d="M0 0L4.114 0 4.114 4.114 0 4.114z"/>
            <linearGradient id="cursorprogresssmaller-e" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#3481E4"/>
              <stop offset="100%" stopColor="#2051DB"/>
            </linearGradient>
            <linearGradient id="cursorprogresssmaller-f" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#6BDCFC"/>
              <stop offset="100%" stopColor="#4DC6FA"/>
            </linearGradient>
            <linearGradient id="cursorprogresssmaller-g" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#4BC5F9"/>
              <stop offset="100%" stopColor="#2FB0F8"/>
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <path fill="#FFF" d="M0 0H32V32H0z" opacity=".01"/>
            <g transform="translate(12 9)">
              <path fill="#FFF" d="M0.157 7.421L0.157 0.1 5.456 5.412 2.237 5.412 2.168 5.469z"/>
              <path fill="#000" d="M0.614 1.201L0.614 6.315 1.972 5.005 2.045 4.941 4.347 4.941z"/>
              <mask id="cursorprogresssmaller-b" fill="#fff">
                <use xlinkHref="#cursorprogresssmaller-a"/>
              </mask>
              <g mask="url(#cursorprogresssmaller-b)">
                <g transform="translate(.614 6.314)">
                  <use fill="url(#cursorprogresssmaller-d)" xlinkHref="#cursorprogresssmaller-c"/>
                  <path fill="url(#cursorprogresssmaller-e)" d="M4.114 4.114L8.229 4.114 8.229 8.229 4.114 8.229z"/>
                  <path fill="url(#cursorprogresssmaller-f)" d="M4.114 0L8.229 0 8.229 4.114 4.114 4.114z"/>
                  <path fill="url(#cursorprogresssmaller-g)" d="M0 4.114L4.114 4.114 4.114 8.229 0 8.229z"/>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default CusrorsIconProgress;
