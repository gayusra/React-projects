import React, { useState } from 'react'

function Resumeform({resumeData,setResumeData}) {
     const [skillInput, setSkillInput] = useState("");

    const handleChange = (e) =>{
         const {name,value} = e.target

          setResumeData({
      ...resumeData,
      [name]: value
    });
    }

      // Add Skill
  const addSkill = () => {
    if (skillInput.trim() !== "") {
      setResumeData({
        ...resumeData,
        skills: [...resumeData.skills, skillInput]
      });
      setSkillInput("");
    }
  };

  
  // Remove Skill
  const removeSkill = (index) => {
    const updatedSkills = resumeData.skills.filter(
      (_, i) => i !== index
    );

    setResumeData({
      ...resumeData,
      skills: updatedSkills
    });
  };

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('resume data',formData)
        setFormData({
            fullname:'',
            email:'',
            phone:'',
            summary:'',
            
        })
        
    }


  return (
       <div className="form-section">
      <h2>Resume Form</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={resumeData.fullName}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={resumeData.email}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={resumeData.phone}
        onChange={handleChange}
      />

      <textarea
        name="summary"
        placeholder="Professional Summary"
        value={resumeData.summary}
        onChange={handleChange}
      />

      <textarea
        name="education"
        placeholder="Education (e.g., B.Tech - 2024)"
        value={resumeData.education}
        onChange={handleChange}
      />

      <div className="skills-input">
        <input
          type="text"
          placeholder="Add Skill"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
        />
        <button onClick={addSkill}>Add</button>
      </div>

      <div className="skills-list">
        {resumeData.skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
            <button onClick={() => removeSkill(index)}>×</button>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Resumeform
