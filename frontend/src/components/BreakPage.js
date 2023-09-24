import React from 'react';
import Navbar from './Navbar';
import './BreakPage.css';

function BreakPage() {
  const shortBreakIdeas = [
    'Stretch like a sleepy hobbit',
    'Sip some Elven herbal tea',
    'Listen to the Song of the Ents (nature sounds)',
    'Recite some Elvish poetry',
    'Tend to your mini herb garden'
  ];

  const longBreakIdeas = [
    'Bake Lembas bread or seed cakes',
    'Go on an "Unexpected Journey" around your home (aka tidy up a bit)',
    'Practice your Elvish calligraphy',
    'Engage in some Gollum-esque riddles',
    'Meditate in the style of Galadriel',
    'Play with your "Shadowfax" (if you have a pet)',
    'Sketch a map of your "Shire"'
  ];

  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="break-container">
        <div className="break-column">
          <div className="break-title">Short Break Ideas (Hobbit-Style)</div>
          {shortBreakIdeas.map((idea, index) => (
            <div className="break-item" key={index}>
              {idea}
            </div>
          ))}
        </div>
        <div className="break-column">
          <div className="break-title">Long Break Ideas (Elf-Inspired)</div>
          {longBreakIdeas.map((idea, index) => (
            <div className="break-item" key={index}>
              {idea}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BreakPage;


