import React from "react";
import { DraggableCard } from "./draggable";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-500">
          My Skills
        </h2>
        <p className="text-foreground-500 max-w-2xl mx-auto">
          I`ve worked with a variety of technologies and tools throughout my
          career. Here`s an overview of my technical expertise.
        </p>
      </div>
      <DraggableCard />
    </section>
  );
};
