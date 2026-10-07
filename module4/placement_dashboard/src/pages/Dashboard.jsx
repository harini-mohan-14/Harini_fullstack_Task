import { useAuth } from "../context/AuthContext";
import useLocalStorage from "../hooks/useLocalStorage";
import StatCard from "../components/StatCard";
import interviews from "../data/interviews";

function Dashboard() {
  const { user } = useAuth();

  const [applications] = useLocalStorage(
    "applications",
    []
  );

  const totalApplied = applications.length;

  const underReview = applications.filter(
    (application) =>
      application.status === "Under Review"
  ).length;

  const selected = applications.filter(
    (application) =>
      application.status === "Selected"
  ).length;

  const interviewCount = interviews.length;

  return (
    <div className="dashboard">

      {/* Welcome Section */}

      <div className="welcome-section">

        <div>
          <h1>
            Welcome back, {user?.name || "Student"} 👋
          </h1>

          <p>
            Track your placement journey and stay updated
            with your applications.
          </p>
        </div>

        <div className="dashboard-date">

          <p>
            Placement Dashboard
          </p>

          <strong>
            2026 - 2027
          </strong>

        </div>

      </div>


      {/* Statistics */}

      <div className="stats-container">

        <StatCard
          title="Total Applied"
          value={totalApplied}
        />

        <StatCard
          title="Under Review"
          value={underReview}
        />

        <StatCard
          title="Interviews"
          value={interviewCount}
        />

        <StatCard
          title="Selected"
          value={selected}
        />

      </div>


      {/* Dashboard Panels */}

      <div className="dashboard-grid">


        {/* Application Overview */}

        <div className="dashboard-card">

          <h2>
            Application Overview
          </h2>

          <p className="card-subtitle">
            Your current placement application status
          </p>


          {/* Applied */}

          <div className="progress-section">

            <div className="progress-item">

              <span>
                Applied
              </span>

              <strong>
                {totalApplied}
              </strong>

            </div>

            <div className="progress-bar">

              <div
                className="progress-applied"
                style={{
                  width:
                    totalApplied > 0
                      ? "100%"
                      : "0%"
                }}
              ></div>

            </div>


            {/* Under Review */}

            <div className="progress-item">

              <span>
                Under Review
              </span>

              <strong>
                {underReview}
              </strong>

            </div>

            <div className="progress-bar">

              <div
                className="progress-review"
                style={{
                  width:
                    totalApplied > 0
                      ? `${(underReview / totalApplied) * 100}%`
                      : "0%"
                }}
              ></div>

            </div>


            {/* Selected */}

            <div className="progress-item">

              <span>
                Selected
              </span>

              <strong>
                {selected}
              </strong>

            </div>

            <div className="progress-bar">

              <div
                className="progress-selected"
                style={{
                  width:
                    totalApplied > 0
                      ? `${(selected / totalApplied) * 100}%`
                      : "0%"
                }}
              ></div>

            </div>

          </div>

        </div>


        {/* Upcoming Interviews */}

        <div className="dashboard-card">

          <h2>
            Upcoming Interviews
          </h2>

          <p className="card-subtitle">
            Your scheduled placement interviews
          </p>


          {interviews.map((interview) => (

            <div
              className="interview-item"
              key={interview.id}
            >

              <div>

                <h3>
                  {interview.company}
                </h3>

                <p>
                  {interview.role}
                </p>

              </div>


              <div className="interview-date">

                <strong>
                  {interview.date}
                </strong>

                <span>
                  {interview.time}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* Recent Applications */}

      <div className="dashboard-card recent-section">

        <div className="section-header">

          <div>

            <h2>
              Recent Applications
            </h2>

            <p className="card-subtitle">
              Latest placement applications
            </p>

          </div>

        </div>


        {applications.length === 0 ? (

          <p>
            No applications yet.
          </p>

        ) : (

          applications.map((application) => (

            <div
              className="application-row"
              key={application.jobId}
            >

              <div>

                <h3>
                  {application.role}
                </h3>

                <p>
                  {application.company} •{" "}
                  {application.location}
                </p>

              </div>


              {/* Application Status */}

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

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Dashboard;