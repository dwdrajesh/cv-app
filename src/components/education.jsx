import '../styles/styles.css'

function Education({education, handleEducationInput}) {
  return (
    <div className="personalBox">
        <h2> Education Information </h2>
        <div className="educationinfo">
        <label for="name">Name of school: </label>
        <input type="text" id="schoolname" name="schoolname"
            value={education.schoolname}
            onChange={handleEducationInput}
            placeholder="Enter Fullname"/>
        </div>
        <div className="educationinfo">
        <label for="email">Title of Study: </label>
        <input type="text" id="title" name="title"
        value={education.title}
        onChange={handleEducationInput}
        placeholder="Enter title of study"/>
        </div>
        <div className="educationinfo">
        <label for="phone">Year of Completion: </label>
        <input type="text" id="year" name="year"
        value={education.year}
        onChange={handleEducationInput}
        placeholder="Enter year of graduation"/>
        </div>

    </div>
  );
}


export default Education;
