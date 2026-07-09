import { useState } from "react";
import { ReferenceReveal } from "../ReferenceReveal/ReferenceReveal.jsx";

const filters = ["Celebration", "Wedding"];

export function DesignFilterBar() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <ReferenceReveal as="section" className="reference-filter" aria-label="Design categories" preset="fade" amount={0.34}>
      <div className="reference-filter__tabs">
        {filters.map((filter) => (
          <button
            className={filter === activeFilter ? "is-active" : ""}
            type="button"
            key={filter}
            aria-pressed={filter === activeFilter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </ReferenceReveal>
  );
}
