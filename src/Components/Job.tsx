import Box from "./Layout/Box.tsx";
import Badge from "./Low Level/Badge.tsx";
import Tablet from "./Low Level/Tablet.tsx";
import type { Job } from "../data.ts";
import "../CSS/Job.css";

interface jobProps {
  job: Job;
  onAddTag: (tag: string) => void;
}

function Job({ job, onAddTag }: jobProps) {
  return (
    <Box featured={job.featured || undefined}>
      <img className="job__image" src={job.logo} alt="Company Logo Image" />
      <header className="job__header">
        <h3 className="job__company-name">{job.company}</h3>
        <ul className="job__badges">
          {job.new && <Badge type="new" />}
          {job.featured && <Badge type="featured" />}
        </ul>
      </header>
      <section className="job__content">
        <h2 className="job__role">{job.position}</h2>
        <ul className="job__info">
          <li className="job__info-item">{job.postedAt}</li>
          <li className="job__info-item dot"></li>
          <li className="job__info-item">{job.contract}</li>
          <li className="job__info-item dot"></li>
          <li className="job__info-item">{job.location}</li>
        </ul>
      </section>
      <hr className="job__separator" />
      <footer className="job__tablets">
        <Tablet text={job.role} onClick={onAddTag} />
        <Tablet text={job.level} onClick={onAddTag} />
        {[...job.languages, ...job.tools].map((text, index) => {
          return <Tablet key={index} text={text} onClick={onAddTag} />;
        })}
      </footer>
    </Box>
  );
}

export default Job;
