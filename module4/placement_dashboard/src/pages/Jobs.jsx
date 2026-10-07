import { useState } from "react";
import { getJobs } from "../services/jobService";

function Jobs() {
  const [search, setSearch] = useState("");
  const [company, setCompany] = useState("All");

  const jobs = getJobs();

  const companies = [
    "All",
    ...new Set(jobs.map((job) => job.company))
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.role
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      job.company
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCompany =
      company === "All" ||
      company === job.company;

    return matchesSearch && matchesCompany;
  });

  const handleApply = (job) => {
    const existingApplications =
      JSON.parse(
        localStorage.getItem("applications")
      ) || [];

    const alreadyApplied =
      existingApplications.some(
        (application) =>
          application.jobId === job.id
      );

    if (alreadyApplied) {
      alert(
        "You have already applied for this job."
      );
      return;
    }

    const newApplication = {
      jobId: job.id,
      company: job.company,
      role: job.role,
      location: job.location,
      package: job.package,
      status: "Applied"
    };

    existingApplications.push(newApplication);

    localStorage.setItem(
      "applications",
      JSON.stringify(existingApplications)
    );

    alert("Successfully applied!");
  };

  return (
    <div className="jobs-page">

      {/* Page Header */}

      <div className="jobs-header">
        <h1>Job Openings</h1>

        <p>
          Explore the latest placement opportunities
          and apply for suitable jobs.
        </p>
      </div>

      {/* Search and Filter */}

      <div className="jobs-filters">

        <input
          className="jobs-search"
          type="text"
          placeholder="Search job or company"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          className="jobs-company-filter"
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
        >
          {companies.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

      </div>

      {/* Jobs */}

      {filteredJobs.length > 0 ? (
        <div className="jobs-grid">

          {filteredJobs.map((job) => (
            <div
              className="job-card"
              key={job.id}
            >

              <h2>{job.role}</h2>

              <p className="job-company">
                {job.company}
              </p>

              <p className="job-info">
                📍 {job.location}
              </p>

              <p className="job-info">
                💰 {job.package}
              </p>

              <button
                className="job-apply-button"
                onClick={() =>
                  handleApply(job)
                }
              >
                Apply
              </button>

            </div>
          ))}

        </div>
      ) : (
        <div className="no-jobs">
          <p>No jobs found.</p>
        </div>
      )}

    </div>
  );
}

export default Jobs;