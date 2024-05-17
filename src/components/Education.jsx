import React from 'react';

const Education = () => {
  const courses = [
    {
      semester: 'Fall 2020',
      details: [
        { code: 'CL117', name: 'Intro to Info. and Comm. Technologies', credits: 1, grade: 'A+', type: 'Core' },
        { code: 'CL118', name: 'Programming Fundamentals - Lab', credits: 1, grade: 'B', type: 'Core' },
        { code: 'CS118', name: 'Programming Fundamentals', credits: 3, grade: 'B', type: 'Core' },
        { code: 'EE117', name: 'Applied Physics', credits: 3, grade: 'C-', type: 'Core' },
        { code: 'MT119', name: 'Calculus and Analytical Geometry', credits: 3, grade: 'A-', type: 'Core' },
        { code: 'SL150', name: 'English Composition and Comprehension - Lab', credits: 1, grade: 'A', type: 'Core' },
        { code: 'SS113', name: 'Pakistan Studies', credits: 3, grade: 'A', type: 'Core' },
        { code: 'SS150', name: 'English Composition and Comprehension', credits: 2, grade: 'A', type: 'Core' },
      ],
    },
    {
      semester: 'Spring 2021',
      details: [
        { code: 'CL217', name: 'Object Oriented Programming - Lab', credits: 1, grade: 'B+', type: 'Core' },
        { code: 'CS211', name: 'Discrete Structures', credits: 3, grade: 'B-', type: 'Core' },
        { code: 'CS217', name: 'Object Oriented Programming', credits: 3, grade: 'A+', type: 'Core' },
        { code: 'SE110', name: 'Intro to Software Engineering', credits: 3, grade: 'B', type: 'Core' },
        { code: 'SL152', name: 'Communication & Presentation Skills - Lab', credits: 1, grade: 'A-', type: 'Core' },
        { code: 'SS111', name: 'Islamic and Religious Studies', credits: 3, grade: 'A-', type: 'Core' },
        { code: 'SS152', name: 'Communication & Presentation Skills', credits: 2, grade: 'B+', type: 'Core' },
      ],
    },
    {
      semester: 'Fall 2021',
      details: [
        { code: 'CL2001', name: 'Data Structures - Lab', credits: 1, grade: 'D+', type: 'Core' },
        { code: 'CS2001', name: 'Data Structures', credits: 3, grade: 'B', type: 'Core' },
        { code: 'CS2007', name: 'Human Computer Interaction', credits: 3, grade: 'B', type: 'Core' },
        { code: 'MG1001', name: 'Fundamentals of Management', credits: 3, grade: 'B+', type: 'Elective' },
        { code: 'MT1004', name: 'Linear Algebra', credits: 3, grade: 'B', type: 'Core' },
        { code: 'SE2001', name: 'Software Requirements Engineering', credits: 3, grade: 'B+', type: 'Core' },
      ],
    },
    {
      semester: 'Spring 2022',
      details: [
        { code: 'CL2006', name: 'Operating Systems - Lab', credits: 1, grade: 'A+', type: 'Core' },
        { code: 'CS2006', name: 'Operating Systems', credits: 3, grade: 'A-', type: 'Core' },
        { code: 'MT2005', name: 'Probability and Statistics', credits: 3, grade: 'A-', type: 'Core' },
        { code: 'MT4031', name: 'Operations Research', credits: 3, grade: 'B+', type: 'Elective' },
        { code: 'SE2002', name: 'Software Design and Architecture', credits: 3, grade: 'A+', type: 'Core' },
        { code: 'SL2002', name: 'Software Design and Architecture - Lab', credits: 1, grade: 'A-', type: 'Core' },
        { code: 'SS2003', name: 'Psychology', credits: 3, grade: 'A', type: 'Elective' },
      ],
    },
    {
      semester: 'Fall 2022',
      details: [
        { code: 'CL2005', name: 'Database Systems - Lab', credits: 1, grade: 'A', type: 'Core' },
        { code: 'CS2005', name: 'Database Systems', credits: 3, grade: 'A', type: 'Core' },
        { code: 'CS2009', name: 'Design and Analysis of Algorithms', credits: 3, grade: 'A-', type: 'Core' },
        { code: 'SE3001', name: 'Software Construction and Development', credits: 3, grade: 'A+', type: 'Core' },
        { code: 'SE3002', name: 'Software Quality Engineering', credits: 3, grade: 'B', type: 'Core' },
        { code: 'SL3001', name: 'Software Construction and Development - Lab', credits: 1, grade: 'A+', type: 'Core' },
        { code: 'SS2007', name: 'Technical and Business Writing', credits: 3, grade: 'A', type: 'Core' },
      ],
    },
    {
      semester: 'Spring 2023',
      details: [
        { code: 'CL3001', name: 'Computer Networks - Lab', credits: 1, grade: 'B+', type: 'Core' },
        { code: 'CS3001', name: 'Computer Networks', credits: 3, grade: 'B', type: 'Core' },
        { code: 'CS4053', name: 'Recommender Systems', credits: 3, grade: 'A-', type: 'Elective' },
        { code: 'CS4056', name: 'Simulation and Modeling', credits: 3, grade: 'B+', type: 'Core' },
        { code: 'SE3003', name: 'Web Engineering', credits: 3, grade: 'B', type: 'Core' },
        { code: 'SE4032', name: 'Business Process Engineering', credits: 3, grade: 'B+', type: 'Elective' },
        { code: 'SL3003', name: 'Web Engineering - Lab', credits: 1, grade: 'A+', type: 'Core' },
      ],
    },
    {
      semester: 'Fall 2023',
      details: [
        { code: 'CS3002', name: 'Information Security', credits: 3, grade: 'A-', type: 'Core' },
        { code: 'CS4001', name: 'Professional Practices in IT', credits: 3, grade: 'A-', type: 'Core' },
        { code: 'SE4002', name: 'Fundamentals of Software Project Management', credits: 3, grade: 'B+', type: 'Core' },
        { code: 'SE4010', name: 'Digital Transformation: Tools and Techniques', credits: 3, grade: 'B+', type: 'Elective' },
        { code: 'SE4091', name: 'Final Year Project – I', credits: 3, grade: 'A+', type: 'Core' },
      ],
    },
    {
      semester: 'Spring 2024',
      details: [
        { code: 'CS4054', name: 'Bioinformatics', credits: 3, grade: 'I', type: 'Elective' },
        { code: 'MG4032', name: 'Advertising', credits: 3, grade: 'I', type: 'Elective' },
        { code: 'SE4001', name: 'Software Re-Engineering', credits: 3, grade: 'I', type: 'Core' },
        { code: 'SE4007', name: 'Applied DevOps', credits: 3, grade: 'I', type: 'Elective' },
        { code: 'SE4092', name: 'Final Year Project – II', credits: 3, grade: 'I', type: 'Core' },
      ],
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Education</h1>
      {courses.map((semester, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{semester.semester}</h2>
          <ul className="list-disc list-inside">
            {semester.details.map((course, i) => (
              <li key={i}>
                {course.code}: {course.name} ({course.credits} credits) - {course.grade} [{course.type}]
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Education;
