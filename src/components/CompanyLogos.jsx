import React from "react";

export default function CompanyLogos() {

  const logoPath = "img/logo/";

  const logos = [
    {
      name: 'Amazon',
      src: 'Amazon_logo.svg',
    },
    {
      name: 'Google',
      src: 'google.svg',
    },
    {
      name: 'Meta',
      src: 'meta.png',
    },
    {
      name: 'Microsoft',
      src: 'msft.svg',
    },
    {
      name: 'Nasdaq',
      src: 'nasdaq.png'
    },
    {
      name: 'Credit Karma',
      src: 'credit-karma.png'
    },
    {
      name: 'Uber',
      src: 'uber.svg',
    },
    {
      name: 'Dell',
      src: 'dell.png',
    },
    {
      name: 'Cisco',
      src: 'cisco.svg',
    },
    {
      name: 'Visa',
      src: 'visa.png',
    },
    {
      name: 'Mastercard',
      src: 'mastercard.svg',
    },
    {
      name: 'Fidelity',
      src: 'fidelity.svg',
    },
    {
      name: 'Tanium',
      src: 'tanium.png',
    },
    {
      name: 'Pratt and Whitney',
      src: 'pratt-whitney.svg',
    },
    {
      name: 'MassMutual',
      src: 'massmutual.svg',
    },
    {
      name: 'Liberty Mutual',
      src: 'liberty-mutual.png',
    },
    {
      name: 'Blue Cross Blue Shield',
      src: 'blue-cross-blue-shield.png',
    },
  ];

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "40px",
      paddingTop: "20px"
    }}>
      {logos.map((logo, index) => {
        return (
                <img 
                    key={index} 
                    src={logoPath + logo.src} 
                    alt={logo.name} 
                    style={{
                        width: "250px",
                        height: "150px",
                        padding: "40px",
                        objectFit: "contain",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                        borderRadius: "8px"
                    }} 
                />
            );
      })}
    </div>
  );
}