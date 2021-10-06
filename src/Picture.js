import React from 'react';
const Picture = props => {
    // 🔥 Make sure the parent of Post is passing the right props!
    const { picUrl, picTitle, picDesc } = props;
  
    return (
      <div className='content'>
        <h1>{picTitle}</h1>
        <div className='image-wrapper'>
            <img
                alt={picTitle}
                className='image'
                src={picUrl}
            />
        </div>
        <p>{picDesc}</p>
      </div>
    );
  };
  
  export default Picture;
  