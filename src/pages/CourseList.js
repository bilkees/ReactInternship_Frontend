import React from 'react';

const CourseList = () => {
  const items = ['Six-month Programs', 'Long-term Training ', 'Microskill Programs', 'Short-term Programs'];

  return (
    <div>
      <h2>List Example</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
