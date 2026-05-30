import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import './styles/styles.css'

import Personal from './components/personal.jsx';
import Education from './components/education.jsx';
import Experience from './components/experience.jsx';
/*
Componets:
1. Header
2. Personal
3. Education
4. Experience
5. Edit and Submit buttons
*/

/*
States:
1. Mode: Edit or Submit
2. Objects: Personal, Education, Experience
*/


function Buttons({handleClick}) {
  return (
    <div className="buttons">
      <button className="edit" onClick={() => handleClick(true)}> Edit </button>
      <button className="submit" onClick={() => handleClick(false)}> Submit </button>
    </div>
  )
}

function Preview({personal, education, experience}) {
  return (
    <div className="preview">
      <h2> Your Personalized CV </h2>
      <div className="personal">
        <h3> Personal Information </h3>
        <p> Name: {personal.name} </p>
        <p> Email: {personal.email} </p>
        <p> Phone: {personal.phone} </p>
      </div>
      <div className="education">
        <h3> Education Information </h3>
        <p> School Name: {education.schoolname} </p>
        <p> Title of Study: {education.title} </p>
        <p> Year: {education.year} </p>
        </div>
        <div className="experience">
        <h3> Experience Information </h3>
        <p> Company Name: {experience.company} </p>
        <p> Title: {experience.worktitle} </p>
        <p> Date From: {experience.datefrom} </p>
        <p> Date Until: {experience.dateuntil} </p>
      </div>
    </div>
  )
}

function App() {

  // default is Edit mode (true)
  const [mode, setMode] = useState(true);

  // can pass literal objects shape here as well
  const [personal, setPersonal] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [education, setEducation] = useState({
    schoolname: '',
    title: '',
    year: '',
  });
  const [experience, setExperience] = useState({
    company: '',
    worktitle: '',
    datefrom: '1970-05-30',
    dateuntil: '1970-05-30',
  });

  console.log(mode);

  function handleClick(newMode) {
    console.log(`Clicked button, current mode is: ${mode ? 'Edit' : 'Submit'}, new mode is: ${newMode ? 'Edit' : 'Submit'}`);
    if (newMode === mode) {
      return;
    }
    setMode(newMode);
  }

  function handlePersonalInput(e) {
    const {name, value} = e.target;
    setPersonal(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }


    function handleEducationInput(e) {
    const {name, value} = e.target;
    setEducation(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

    function handleExperienceInput(e) {
    const {name, value} = e.target;
    setExperience(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }


  let middleBox;
  if (mode) {
    middleBox = (
      <>
      <h1> CV Creator </h1>
      <Personal personal={personal} handlePersonalInput={handlePersonalInput}/>
      <Education education={education} handleEducationInput={handleEducationInput}/>
      <Experience experience={experience} handleExperienceInput={handleExperienceInput}/>
    </>
    )
    } else {
        middleBox = (
        <Preview personal={personal} education={education} experience={experience}/>
        )
    };


  return (
    <div className="App">
      {middleBox}
      <Buttons handleClick={handleClick}/>
    </div>
  )
}

export default App
