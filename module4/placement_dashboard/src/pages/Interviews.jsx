import { useState } from "react";
import interviews from "../data/interviews";

function Interviews() {
  const [selectedInterview, setSelectedInterview] =
    useState(null);

  return (
    <div className="interviews-page">

      <div className="interviews-header">
        <h1>Interview Schedule</h1>

        <p>
          View your upcoming placement interviews
          and interview details.
        </p>
      </div>

      {interviews.length > 0 ? (
        <div className="interviews-grid">

          {interviews.map((interview) => (
            <div
              className="interview-card"
              key={interview.id}
            >

              <div className="interview-card-header">

                <div>
                  <h2>{interview.role}</h2>

                  <p className="interview-company">
                    {interview.company}
                  </p>
                </div>

                <span className="interview-status">
                  {interview.status}
                </span>

              </div>

              <div className="interview-details">

                <p>
                  📅 <strong>Date:</strong>{" "}
                  {interview.date}
                </p>

                <p>
                  🕒 <strong>Time:</strong>{" "}
                  {interview.time}
                </p>

                <p>
                  💻 <strong>Mode:</strong>{" "}
                  {interview.mode}
                </p>

              </div>

              <button
                type="button"
                className="view-interview-button"
                onClick={() =>
                  setSelectedInterview(interview)
                }
              >
                View Interview
              </button>

            </div>
          ))}

        </div>
      ) : (
        <div className="no-interviews">
          <p>No interviews scheduled.</p>
        </div>
      )}

      {/* Interview Details Modal */}

      {selectedInterview && (
        <div
          className="interview-modal-overlay"
          onClick={() =>
            setSelectedInterview(null)
          }
        >

          <div
            className="interview-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="interview-modal-header">
              <h2>Interview Details</h2>

              <button
                type="button"
                className="modal-close-button"
                onClick={() =>
                  setSelectedInterview(null)
                }
              >
                ×
              </button>
            </div>

            <div className="interview-modal-body">

              <div className="modal-status">
                {selectedInterview.status}
              </div>

              <div className="modal-detail">
                <span>Role</span>
                <strong>
                  {selectedInterview.role}
                </strong>
              </div>

              <div className="modal-detail">
                <span>Company</span>
                <strong>
                  {selectedInterview.company}
                </strong>
              </div>

              <div className="modal-detail">
                <span>📅 Date</span>
                <strong>
                  {selectedInterview.date}
                </strong>
              </div>

              <div className="modal-detail">
                <span>🕒 Time</span>
                <strong>
                  {selectedInterview.time}
                </strong>
              </div>

              <div className="modal-detail">
                <span>💻 Mode</span>
                <strong>
                  {selectedInterview.mode}
                </strong>
              </div>

            </div>

            <div className="interview-modal-footer">

              <button
                type="button"
                onClick={() =>
                  setSelectedInterview(null)
                }
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Interviews;