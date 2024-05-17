import React from 'react';

const Certifications = () => {
  const certifications = [
    'Certified Kubernetes Administrator (CKA)',
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Data Engineer',
    'Microsoft Certified: Azure Developer Associate',
    // Add more certifications here
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Certifications</h1>
      <ul className="list-disc list-inside">
        {certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
