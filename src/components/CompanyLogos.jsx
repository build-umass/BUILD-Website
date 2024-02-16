import React from "react";

export default function CompanyLogos() {

  const logoPath = "img/logo/";

  const logos = [
    {
      name: 'Microsoft',
      src: 'msft.svg',
    },
    {
      name: 'Meta',
      src: 'meta.png',
    },
    {
      name: 'Google',
      src: 'google.svg',
    },
    {
      name: 'Amazon',
      src: 'Amazon_logo.svg',
    },
    {
      name: 'Uber',
      src: 'uber.svg',
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
      name: 'Tanium',
      src: 'tanium.png',
    },
    {
      name: 'Fidelity',
      src: 'fidelity.svg',
    },
    {
      name: 'Pratt and Whitney',
      src: 'pratt-whitney.svg',
    },
    {
      name: 'Dell',
      src: 'dell.png',
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
      gap: "100px"
    }}>
      {logos.map((logo, index) => {
        return (
          <img key={index} src={logoPath + logo.src} alt={logo.name} style={{
            width: "300px",
            height: "150px",
            objectFit: "contain",
          }} />
        )
      })}
    </div>
  );
}