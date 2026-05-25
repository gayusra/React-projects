import React from 'react'

function ResumePreview({resumeData}) {
  return (
    <div className="preview-section">
      <h1>{resumeData.fullName || "Your Name"}</h1>

      <p className="contact">
        {resumeData.email || "email@example.com"} |{" "}
        {resumeData.phone || "1234567890"}
      </p>

      <hr />

      <h3>Professional Summary</h3>
      <p>
        {resumeData.summary ||
          "Write a short professional summary about yourself."}
      </p>

      <h3>Education</h3>
      <p>
        {resumeData.education ||
          "Your degree, university, graduation year"}
      </p>

      <h3>Skills</h3>
      <div className="skills-preview">
        {resumeData.skills.length > 0 ? (
          resumeData.skills.map((skill, index) => (
            <span key={index} className="skill-preview">
              {skill}
            </span>
          ))
        ) : (
          <p>Add your skills</p>
        )}
      </div>
    </div>
  )
}

export default ResumePreview
