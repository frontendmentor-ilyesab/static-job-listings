import Box from "./Layout/Box";
import RemoveButton from "./Low Level/RemoveButton";
import ClearButton from "./Low Level/ClearButton";
import Tablet from "./Low Level/Tablet";

import "../CSS/JobFilter.css";

interface JobFilterProps {
  tags: string[];
  onDeleteTag: (tagToDelete: string) => void;
  onClearTags: () => void;
}

function JobFilter({ tags, onDeleteTag, onClearTags }: JobFilterProps) {
  const filterableTags = tags.map((tag) => {
    return (
      <li>
        <Tablet text={tag} asLabel={true} />
        <RemoveButton onClick={() => onDeleteTag(tag)} />
      </li>
    );
  });
  return (
    <Box filter={true}>
      <ul className="tags">{filterableTags}</ul>
      <ClearButton onClick={onClearTags} />
    </Box>
  );
}

export default JobFilter;
