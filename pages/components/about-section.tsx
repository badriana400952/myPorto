import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-500 mb-4">
          About Me
        </h2>
        <p className="text-foreground-500 max-w-2xl mx-auto">
          Im a passionate developer with a strong focus on creating beautiful,
          functional, and user-friendly applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-500">My Journey</h3>
          <p className="text-foreground-500">
            With over 2 years of experience in web development, Ive worked with
            a diverse range of clients from startups to large corporations. My
            approach combines technical expertise with creative problem-solving
            to deliver exceptional digital experiences.
          </p>
          <p className="text-foreground-500">
            Im passionate about staying on the cutting edge of technology,
            continuously learning new tools and techniques to enhance my skills
            and deliver better solutions.
          </p>

          <div className="pt-4">
            <h4 className="font-semibold text-foreground-700 mb-3">
              What I bring to the table:
            </h4>
            <ul className="space-y-2">
              {[
                "Clean, efficient code that follows best practices",
                "Responsive designs that work on all devices",
                "Strong problem-solving abilities",
                "Excellent communication and collaboration skills",
                "A passion for creating exceptional user experiences",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Icon icon="lucide:check" className="text-primary mt-1" />
                  <span className="text-foreground-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border border-divider">
            <CardBody>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Experience</h4>
                  <div className="space-y-4">
                    {[
                      {
                        role: "Web Developer",
                        company: "Digital Solutions Agency",
                        period: "June 2025 - Present",
                      },
                      {
                        role: "Frontend Developer",
                        company: "Ganesha Operations",
                        period: "February 2024 - May 2025",
                      },
                    ].map((job, index, array) => (
                      <React.Fragment key={index}>
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{job.role}</p>
                            <p className="text-foreground-500 text-sm">
                              {job.company}
                            </p>
                          </div>
                          <span className="text-sm bg-content2 px-2 py-1 rounded-md">
                            {job.period}
                          </span>
                        </div>
                        {index < array.length - 1 && (
                          <Divider className="my-3" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <Divider />

                <div>
                  <h4 className="text-lg font-semibold mb-2">Education</h4>
                  <div className="space-y-4">
                    {[
                      {
                        degree: "Graduate of a Fullstack Developer Bootcamp",
                        school: "Dumbways Technology Indonesia",
                        period: "August 2024 - January 2025",
                      },
                      {
                        degree:
                          "Bachelor of Engineering in Informatics Engineering",
                        school: "University Pamulang",
                        period: "2017 - 2022",
                      },
                    ].map((edu, index, array) => (
                      <React.Fragment key={index}>
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{edu.degree}</p>
                            <p className="text-foreground-500 text-sm">
                              {edu.school}
                            </p>
                          </div>
                          <span className="text-sm bg-content2 px-2 py-1 rounded-md">
                            {edu.period}
                          </span>
                        </div>
                        {index < array.length - 1 && (
                          <Divider className="my-3" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
