export default function YourForm() {
  return (
    <>
      <h4>Student Profile</h4>

      <h5>Basic Info</h5>
      <label htmlFor="wd-your-form-first-name">First name: </label>
      <input
        type="text"
        placeholder="Ruben"
        defaultValue="Ruben"
        id="wd-your-form-first-name"
      />
      <br />
      <label htmlFor="wd-your-form-last-name">Last name: </label>
      <input
        type="text"
        placeholder="Posadas"
        defaultValue="Posadas"
        id="wd-your-form-last-name"
      />
      <br />
      <label htmlFor="wd-your-form-student-id">Student ID: </label>
      <input
        type="password"
        placeholder="444ET"
        defaultValue="444ET"
        id="wd-your-form-student-id"
      />

      <h5>About Me</h5>
      <label htmlFor="wd-your-form-bio">
        About Me:
      </label>
      <br />
      <textarea
        id="wd-your-form-bio"
        cols={40}
        rows={5}
        defaultValue="I love developing web applications and designing them with great user experience in mind."
      />

      <h5>Class Standing</h5>
      <input
        type="radio"
        name="wd-radio-standing"
        id="wd-radio-standing-freshman"
      />
      <label htmlFor="wd-radio-standing-freshman">Freshman</label>
      <br />
      <input
        type="radio"
        name="wd-radio-standing"
        id="wd-radio-standing-sophomore"
      />
      <label htmlFor="wd-radio-standing-sophomore">Sophomore</label>
      <br />
      <input
        type="radio"
        name="wd-radio-standing"
        id="wd-radio-standing-junior"
        defaultChecked
      />
      <label htmlFor="wd-radio-standing-junior">Junior</label>
      <br />
      <input
        type="radio"
        name="wd-radio-standing"
        id="wd-radio-standing-senior"
      />
      <label htmlFor="wd-radio-standing-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="wd-radio-standing"
        id="wd-radio-standing-graduate"
      />
      <label htmlFor="wd-radio-standing-graduate">Graduate</label>

      <h5>Enrollment</h5>
      <input
        type="radio"
        name="wd-radio-enrollment"
        id="wd-radio-enrollment-full-time"
        defaultChecked
      />
      <label htmlFor="wd-radio-enrollment-full-time">Full-time</label>
      <br />
      <input
        type="radio"
        name="wd-radio-enrollment"
        id="wd-radio-enrollment-part-time"
      />
      <label htmlFor="wd-radio-enrollment-part-time">Part-time</label>

      <h5>Interests</h5>
      <input
        type="checkbox"
        name="wd-chkbox-interests"
        id="wd-chkbox-interests-javascript"
        defaultChecked
      />
      <label htmlFor="wd-chkbox-interests-javascript">JavaScript</label>
      <br />
      <input
        type="checkbox"
        name="wd-chkbox-interests"
        id="wd-chkbox-interests-react"
        defaultChecked
      />
      <label htmlFor="wd-chkbox-interests-react">React</label>
      <br />
      <input
        type="checkbox"
        name="wd-chkbox-interests"
        id="wd-chkbox-interests-c"
      />
      <label htmlFor="wd-chkbox-interests-c">C</label>

      <h5>Major</h5>
      <label htmlFor="wd-your-form-major">Major: </label>
      <br />
      <select id="wd-your-form-major" defaultValue="CS">
        <option value="BI">Biology</option>
        <option value="CS">Computer Science</option>
        <option value="CYBER">Cybersecurity</option>
      </select>

      <h5>Topics to Deepen This Term</h5>
      <label htmlFor="wd-your-form-topics">Topics: </label>
      <br />
      <select
        multiple
        id="wd-your-form-topics"
        defaultValue={["REACT", "BACKEND"]}
      >
        <option value="DESIGN">Design</option>
        <option value="REACT">React</option>
        <option value="DATABASES">Databases</option>
        <option value="ML">Machine Learning</option>
      </select>

      <h5>Other Details</h5>
      <label htmlFor="wd-your-form-email">School email: </label>
      <input
        type="email"
        placeholder="posadas.r@northeastern.edu"
        defaultValue="posadas.r@northeastern.edu"
        id="wd-your-form-email"
      />
      <br />
      <label htmlFor="wd-your-form-grad-year">Expected graduation year: </label>
      <input
        type="number"
        defaultValue={2027}
        min={2024}
        max={2032}
        id="wd-your-form-grad-year"
      />
      <br />
      <label htmlFor="wd-your-form-start-date">Program start date: </label>
      <input
        type="date"
        defaultValue="2023-09-01"
        min="2000-01-01"
        max="2032-12-31"
        id="wd-your-form-start-date"
      />
      <br />
      <label htmlFor="wd-your-form-excitement">
        Course Exitment:{" "}
      </label>
      <input
        type="range"
        defaultValue={8}
        min={0}
        max={10}
        id="wd-your-form-excitement"
      />

      <br/>
      <button id="wd-your-form-save" type="submit">
        Save
      </button>{" "}
      <button id="wd-your-form-cancel" type="button">
        Cancel
      </button>
    </>
  );
}
