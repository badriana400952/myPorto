import React from "react";
import { Card, CardBody, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";

interface Testimonial {
  id: string;
  content: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      content:
        "Badri adalah sosok yang baik, tidak mudah mengeluh, tidak malu untuk bertanya, dan cepat dalam memahami serta mempelajari hal-hal baru.",
      author: "Andy Siahaan",
      position: "Manager IT",
      company: "Ganesha Operation.",
      avatar: "./pakandi.png",
    },
    {
      id: "2",
      content:
        "Badri adalah pribadi yang asik dan mudah diajak berkomunikasi. Ia bekerja dengan cepat dan selalu bisa diandalkan, terutama saat menghadapi banyak tugas sekaligus.",
      author: "Fajri",
      position: "Kepala Bagian IT",
      company: "Ganesha Operation.",
      avatar: "./pajri.png",
    },
    {
      id: "3",
      content:
        "yang saya suka dari Badri adalah dia selalu berusaha untuk memahami apa yang saya inginkan. Ia juga sangat responsif dan cepat dalam menyelesaikan tugas-tugasnya.",
      author: "Calvin Satria",
      position: "Kasi IT",
      company: "Ganesha Operation.",
      avatar: "./calvin.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl text-gray-500 font-bold mb-4">
          Client Testimonials
        </h2>
        <p className="text-foreground-500 max-w-2xl mx-auto">
          Don`t just take my word for it. Here`s what my clients have to say
          about working with me.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="border border-divider">
            <CardBody className="p-6">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon
                    key={star}
                    icon="lucide:star"
                    className="text-warning"
                    width={18}
                  />
                ))}
              </div>
              <div className="mb-6">
                <Icon
                  icon="lucide:quote"
                  className="text-primary/20"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-foreground-600 mb-6 italic">
                `{testimonial.content}`
              </p>
              <div className="flex items-center gap-4">
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  size="md"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-foreground-500">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 bg-content2 px-4 py-2 rounded-full">
          <Icon icon="lucide:briefcase" className="text-primary" />
          <span className="font-medium">Available for new projects</span>
        </div>
      </div>
    </section>
  );
};
