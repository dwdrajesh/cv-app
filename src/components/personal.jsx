import '../styles/styles.css'

function Personal({personal, handlePersonalInput}) {
  return (
    <div className="personalBox">
        <h2> Personal Information </h2>
        <div className="personalInfo">
        <label for="name">Name: </label>
        <input type="text" id="name" name="name"
            value={personal.name}
            onChange={handlePersonalInput}
        placeholder="Enter Fullname"/>
        </div>
        <div className="personalInfo">
        <label for="email">Email: </label>
        <input type="text" id="email" name="email"
            value={personal.email}
            onChange={handlePersonalInput}
        placeholder="Enter email"/>
        </div>
        <div className="personalInfo">
        <label for="phone">Phone: </label>
        <input type="text" id="phone" name="phone"
            value={personal.phone}
            onChange={handlePersonalInput}
        placeholder="Enter phone"/>
        </div>

    </div>
  );
}


export default Personal;
