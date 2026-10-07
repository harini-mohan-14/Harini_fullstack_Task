import { useState } from "react";

function Applications() {
  const [applications, setApplications] = useState(
    JSON.parse(localStorage.getItem("applications")) || []
  );

  const updateStatus = (jobId, newStatus) => {
    const updatedApplications = applications.map(
      (application) => {
        if (application.jobId === jobId) {
          return {
            ...application,
            status: newStatus
          };
        }

        return application;
      }
    );

    setApplications(updatedApplications);

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );
  };

  return (
    <div>
      <h1>My Applications</h1>

      {applications.length === 0 ? (
        <div className="application-card">
          <p>No applications yet.</p>
        </div>
      ) : (
        <div className="applications-table-container">

          <table className="applications-table">

            <thead>
              <tr>
                <th>Job Role</th>
                <th>Company</th>
                <th>Location</th>
                <th>Package</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {applications.map((application) => (

                <tr key={application.jobId}>

                  <td>
                    <strong>
                      {application.role}
                    </strong>
                  </td>

                  <td>
                    {application.company}
                  </td>

                  <td>
                    {application.location}
                  </td>

                  <td>
                    {application.package}
                  </td>

                  <td>
                    <span
                      className={
                        application.status === "Selected"
                          ? "status-badge selected"
                          : application.status === "Interview"
                          ? "status-badge interview"
                          : "status-badge review"
                      }
                    >
                      {application.status}
                    </span>
                  </td>

                  <td>

                    {application.status === "Applied" && (
                      <button
                        onClick={() =>
                          updateStatus(
                            application.jobId,
                            "Under Review"
                          )
                        }
                      >
                        Under Review
                      </button>
                    )}

                    {application.status === "Under Review" && (
                      <button
                        onClick={() =>
                          updateStatus(
                            application.jobId,
                            "Interview"
                          )
                        }
                      >
                        Interview
                      </button>
                    )}

                    {application.status === "Interview" && (
                      <button
                        onClick={() =>
                          updateStatus(
                            application.jobId,
                            "Selected"
                          )
                        }
                      >
                        Select
                      </button>
                    )}

                    {application.status === "Selected" && (
                      <span>
                        Completed
                      </span>
                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}

export default Applications;