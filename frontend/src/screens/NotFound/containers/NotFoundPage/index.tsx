/* eslint-disable max-len */
import React from 'react';
import styles from './styles.module.scss';

export interface IPageNotFoundProps extends IState, IActions {
}

interface IState {
}

interface IActions {
}

export const NotFoundPage: React.FC = () => (
  <div className={styles.main_container}>
    <div className={styles.error}>404</div>
    <div className={styles.image}>
      <svg width="256" height="247" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="122.5" cy="124.5" r="122.5" fill="#F8F8F8" />
        <rect x="29" y="45" width="187" height="26" rx="6.14286" fill="#F3F9FE" />
        <rect x="28.5143" y="68.9854" width="187.357" height="137.6" rx="6.14286" fill="white" />
        <rect x="27.4429" y="42.7285" width="190.114" height="164.929" rx="10.2857" stroke="#646464" strokeWidth="4" />
        <line x1="25.4429" y1="71.2861" x2="219.557" y2="71.2861" stroke="#646464" strokeWidth="4" />
        <line x1="113.286" y1="162.972" x2="131.714" y2="162.972" stroke="#646464" strokeWidth="6.14286" strokeLinecap="round" />
        <path d="M43.3596 62.4847C45.3385 62.4847 46.9428 60.8805 46.9428 58.9016C46.9428 56.9226 45.3385 55.3184 43.3596 55.3184C41.3806 55.3184 39.7764 56.9226 39.7764 58.9016C39.7764 60.8805 41.3806 62.4847 43.3596 62.4847Z" fill="#646464" />
        <path d="M57.6928 62.4847C59.6718 62.4847 61.276 60.8805 61.276 58.9016C61.276 56.9226 59.6718 55.3184 57.6928 55.3184C55.7139 55.3184 54.1096 56.9226 54.1096 58.9016C54.1096 60.8805 55.7139 62.4847 57.6928 62.4847Z" fill="#646464" />
        <path d="M72.0261 62.4847C74.005 62.4847 75.6093 60.8805 75.6093 58.9016C75.6093 56.9226 74.005 55.3184 72.0261 55.3184C70.0471 55.3184 68.4429 56.9226 68.4429 58.9016C68.4429 60.8805 70.0471 62.4847 72.0261 62.4847Z" fill="#646464" />
        <path d="M84.7214 127.343C89.3015 127.343 93.0143 123.63 93.0143 119.05C93.0143 114.47 89.3015 110.757 84.7214 110.757C80.1414 110.757 76.4286 114.47 76.4286 119.05C76.4286 123.63 80.1414 127.343 84.7214 127.343Z" fill="#646464" />
        <path d="M160.893 127.343C165.473 127.343 169.186 123.63 169.186 119.05C169.186 114.47 165.473 110.757 160.893 110.757C156.313 110.757 152.6 114.47 152.6 119.05C152.6 123.63 156.313 127.343 160.893 127.343Z" fill="#646464" />
        <line x1="190.713" y1="2.79809" x2="200.798" y2="21.2865" stroke="#646464" strokeWidth="4" strokeLinecap="round" />
        <line x1="230.921" y1="3.62607" x2="222.626" y2="22.9837" stroke="#646464" strokeWidth="4" strokeLinecap="round" />
        <line x1="252.884" y1="37.4142" x2="232.414" y2="42.3667" stroke="#646464" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
    <div className={styles.text}>No results were found for your request</div>
  </div>
);

export default NotFoundPage;
