import React from 'react';
import './Project.css';

function Project() {
  return (
    <div className='project-container'>
        <div className='project-wrapper'>
            <div className='project-leftPane'>
                <img src="fitlogo.png" alt='fitnessity logo'></img>
            </div>
            <div className='project-rightPane'>
                <h1>Fitnessity</h1>
                <p>(Contributing to the development of an at-home fitness/health application with the goal of making working out more accessible to everyone. Implemented using Javascript/Typescript.)</p>
            </div>
        </div>
        <div className='project-wrapper'>
            <div className='project-leftPane'>
                <img src="discordlogo.png" alt='discord logo'></img>
            </div>
            <div className='project-rightPane'>
                <h1>Fitnessity Discord Companion</h1>
                <p>(Creating a bot that allows users to utilize some functionality of Fitnessity while in a Discord voice call. This bot tracks attendance and “hot streaks” of users. Implemented using Python.)</p>
            </div>
        </div>
        <div className='project-wrapper'>
            <div className='project-leftPane'>
                <img src="tmr.png" alt="tmr logo"></img>
            </div>
            <div className='project-rightPane'>
                <h1>The Medical Rinse</h1>
                <p>(Helping to manage and maintain. Future development planned.)</p>
            </div>
        </div>
    </div>
    
  );
}

export default Project;