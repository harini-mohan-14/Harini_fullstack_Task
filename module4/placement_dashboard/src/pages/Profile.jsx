import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user, register } = useAuth();

  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [course, setCourse] = useState(user?.course || "");

  const handleSave = () => {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      course.trim() === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    const updatedStudent = {
      ...user,
      name: name,
      email: email,
      course: course
    };

    register(updatedStudent);

    setIsEditing(false);

    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">

      <div className="profile-header">
        <h1>Student Profile</h1>

        <p>
          View and manage your student information.
        </p>
      </div>


      {/* Personal Information */}

      <div className="profile-card">

        <h2>Personal Information</h2>

        {isEditing ? (
          <div className="profile-form">

            <div className="profile-form-group">
              <label>Name</label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />
            </div>


            <div className="profile-form-group">
              <label>Email</label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </div>


            <div className="profile-form-group">
              <label>Course</label>

              <input
                type="text"
                value={course}
                onChange={(e) =>
                  setCourse(e.target.value)
                }
              />
            </div>


            <div className="profile-buttons">

              <button
                className="profile-save-button"
                onClick={handleSave}
              >
                Save Profile
              </button>


              <button
                className="profile-cancel-button"
                onClick={() =>
                  setIsEditing(false)
                }
              >
                Cancel
              </button>

            </div>

          </div>
        ) : (
          <div className="profile-details">

            <p>
              <strong>Name:</strong>{" "}
              {user?.name || "Student"}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {user?.email || "Not available"}
            </p>

            <p>
              <strong>Course:</strong>{" "}
              {user?.course || "Not available"}
            </p>

            <p>
              <strong>College:</strong>{" "}
              DMI College of Engineering
            </p>

            <p>
              <strong>Year:</strong>{" "}
              Final Year
            </p>

          </div>
        )}

      </div>


      {/* Skills */}

      <div className="profile-card">

        <h2>Skills</h2>

        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>

      </div>


      {/* Edit Profile Button */}

      {!isEditing && (
        <button
          className="profile-edit-button"
          onClick={() =>
            setIsEditing(true)
          }
        >
          Edit Profile
        </button>
      )}

    </div>
  );
}

export default Profile;