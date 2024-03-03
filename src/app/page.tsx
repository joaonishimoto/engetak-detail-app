'use client'
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { useState } from 'react';

export default function HomePage(){
  const [leftColumnVisible, setLeftColumnVisible] = useState(true);
  const [rightColumnVisible, setRightColumnVisible] = useState(true);

  const toggleLeftColumn = () => setLeftColumnVisible(!leftColumnVisible);
  const toggleRightColumn = () => setRightColumnVisible(!rightColumnVisible);

  const iconColor = '#14b8a6'
  const iconSize = "30"

  return (
    <div className="flex min-h-screen">
      {/* Left Column */}
      <div className={`
        w-1/3 border-teal-300 border-r flex items-center justify-center
        ${leftColumnVisible ? '' : 'hidden'}`}
      >
        <button onClick={toggleLeftColumn}>Hide</button>
      </div>

      {/* Middle Column */}
      <div className=
        {`
          bg-teal-100
          ${(!leftColumnVisible && !rightColumnVisible) ? '' : 'w-1/3'}
          ${(leftColumnVisible && rightColumnVisible)   ? '' : 'w-screen'} 
          ${(!leftColumnVisible && rightColumnVisible)  ? '' : 'w-2/3'} 
          ${(leftColumnVisible && !rightColumnVisible)  ? '' : 'w-2/3'}
        `}
      >
        <div className='flex justify-between'>
          <button
            className=''
            onClick={toggleLeftColumn}>
            {leftColumnVisible ? <ArrowLeftCircle color={iconColor} size={iconSize}/> : <ArrowRightCircle  color={iconColor} size={iconSize}/>}
          </button>
          <button 
            className=''
            onClick={toggleRightColumn}>
            {rightColumnVisible ? <ArrowRightCircle color={iconColor} size={iconSize}/> : <ArrowLeftCircle  color={iconColor} size={iconSize}/>}
          </button>
        </div>
      </div>
      
      {/* Right Column */}
      <div className={`
        w-1/3 border-teal-300 border-l flex items-center justify-center
        ${rightColumnVisible ? '' : 'hidden'}`}
      >
        <button onClick={toggleRightColumn}>Hide</button>
      </div>
    </div>
  );
};
