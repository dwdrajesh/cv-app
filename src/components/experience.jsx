import '../styles/styles.css'

function Experience({experience, handleExperienceInput}) {
  return (
    <div className="personalBox">
        <h2> Experience </h2>
        <div className="experienceinfo">
        <label for="company">Company Name: </label>
        <input type="text" id="company" name="company"
        value={experience.company}
        onChange={handleExperienceInput}
        placeholder="Enter Fullname"/>
        </div>
        <div className="experienceinfo">
        <label for="worktitle">Title: </label>
        <input type="text" id="worktitle" name="worktitle"
        value={experience.worktitle}
        onChange={handleExperienceInput}
        placeholder="Enter job title"/>
        </div>
        <div className="experienceinfo">
        <label for="datefrom">Date From: </label>
        <input type="date" id="datefrom" name="datefrom"
        value={experience.datefrom}
        onChange={handleExperienceInput}
        />
        </div>

        <div className="experienceinfo">
        <label for="dateuntil">Date To: </label>
        <input type="date" id="dateuntil" name="dateuntil"
        value={experience.dateuntil}
        onChange={handleExperienceInput}
        />
        </div>

    </div>
  );
}


export default Experience;
