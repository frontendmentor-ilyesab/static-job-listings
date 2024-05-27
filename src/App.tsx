import { jobData } from "./data.ts";
import MobileIllustration from "../images/bg-header-mobile.svg?react";
import DesktopIllustration from "../images/bg-header-desktop.svg?react";

import Job from "./Components/Job.tsx";
import JobFilter from "./Components/JobFilter.tsx";

import { useState } from "react";

function App() {
  const [tags, setTags] = useState<string[]>([]);

  function handleAddTag(tag: string) {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  }

  function handleRemoveTag(tagToDelete: string) {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  }

  function handleClearTags() {
    setTags([]);
  }

  const jobs = jobData;

  // Filter Jobs based on tags provided
  const jobsToDisplay =
    tags.length > 0
      ? jobs.filter((job) => {
          return tags.every((tag) =>
            [job.role, job.level, ...job.languages, ...job.tools].includes(tag)
          );
        })
      : jobs;

  const jobsJsx = jobsToDisplay.map((job) => {
    return <Job key={job.id} job={job} onAddTag={handleAddTag} />;
  });

  return (
    <>
      <header className="site-header">
        <MobileIllustration className="mobile-image" />
        <DesktopIllustration className="desktop-image" />
      </header>
      {tags.length > 0 && (
        <section className="categories">
          <JobFilter
            tags={tags}
            onDeleteTag={handleRemoveTag}
            onClearTags={handleClearTags}
          />
        </section>
      )}
      <main className={`site-main ${tags.length > 0 && " push-up"}`}>
        {jobsJsx}
      </main>
    </>
  );
}

export default App;
