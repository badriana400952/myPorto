import React from "react";
import {
  Card,
  Image,
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

// Define the office experience data structure
interface OfficeExperience {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
}

// Sample office experiences data
const officeExperiences: OfficeExperience[] = [
  {
    id: "1",
    title: "Keluarga Bssar TI Ganesha Operation",
    description:
      "Our quarterly team building workshop focused on improving collaboration and communication across departments. Activities included problem-solving challenges and creative exercises.",
    imageUrl: "./galery/a.jpeg",
    category: "TI Team",
    date: "April 17, 2025",
  },
  {
    id: "2",
    title: "Apresiasi Task Bulanan",
    description:
      "The grand opening of our redesigned office space featuring collaborative zones, quiet focus areas, and state-of-the-art meeting rooms.",
    imageUrl: "./galery/b.jpeg",
    category: "Manager",
    date: "January 22, 2025",
  },
  {
    id: "3",
    title: "Team Frontend",
    description:
      "Celebrating the successful launch of our flagship product after months of hard work and dedication from the entire team.",
    imageUrl: "./galery/c.jpeg",
    category: "Team Frontend",
    date: "January 22, 2025",
  },
  {
    id: "5",
    title: "Evaluasi Mingguan",
    description:
      "Our annual company retreat where we reflected on our achievements, set new goals, and enjoyed team-building activities in a beautiful natural setting.",
    imageUrl: "./galery/e.jpeg",
    category: "Team Frontend",
    date: "April 8, 2025",
  },
  {
    id: "6",
    title: "Apresiasi Task Bulanan",
    description:
      "A special event organized to thank our clients for their continued support and to strengthen our business relationships.",
    imageUrl: "./galery/f.jpeg",
    category: "Frontrnd",
    date: "May 08, 2025",
  },
  {
    id: "7",
    title: "Perayaan Hari Kemerdekaan Republik Indonesia",
    description:
      "A special event organized to thank our clients for their continued support and to strengthen our business relationships.",
    imageUrl: "./galery/g.jpeg",
    category: "Go Pusat",
    date: "August 17, 2024",
  },
  {
    id: "8",
    title: "Ultah ke 40 Ganesha Operation",
    description:
      "A special event organized to thank our clients for their continued support and to strengthen our business relationships.",
    imageUrl: "./galery/h.jpeg",
    category: "Team Go",
    date: "May 2, 2024",
  },
  {
    id: "9",
    title: "Apresiasi Task Bulanan",
    description:
      "A special event organized to thank our clients for their continued support and to strengthen our business relationships.",
    imageUrl: "./galery/i.jpeg",
    category: "Kepala seksi",
    date: "February 08, 2025",
  },
  {
    id: "10",
    title: "Apresiasi Task Bulanan",
    description:
      "A special event organized to thank our clients for their continued support and to strengthen our business relationships.",
    imageUrl: "./galery/j.jpeg",
    category: "Kasi & Manager",
    date: "February 08, 2025",
  },
];

export const ExperienceGallery: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedExperience, setSelectedExperience] =
    React.useState<OfficeExperience | null>(null);
  //   const [activeCategory, setActiveCategory] = React.useState<string>("All");

  // Get unique categories
  //   const categories = [
  //     "All",
  //     ...new Set(officeExperiences.map((exp) => exp.category)),
  //   ];

  // Filter experiences by category
  //   const filteredExperiences =
  //     activeCategory === "All"
  //       ? officeExperiences
  //       : officeExperiences.filter((exp) => exp.category === activeCategory);

  const handleExperienceClick = (experience: OfficeExperience) => {
    setSelectedExperience(experience);
    onOpen();
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-500">
          Gallery
        </h2>
      </div>
      {/* Category Filter
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <Button
            key={category}
            size="sm"
            variant={activeCategory === category ? "solid" : "flat"}
            color={activeCategory === category ? "primary" : "default"}
            onPress={() => setActiveCategory(category)}
            className="transition-all duration-300"
          >
            {category}
          </Button>
        ))}
      </div> */}
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {officeExperiences.map((experience) => (
          <GalleryItem
            key={experience.id}
            experience={experience}
            onClick={() => handleExperienceClick(experience)}
          />
        ))}
      </div>
      {/* Detail Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) =>
            selectedExperience && (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {selectedExperience.title}
                </ModalHeader>
                <ModalBody>
                  <div className="relative m-auto rounded-lg overflow-hidden mb-4">
                    <Image
                      src={selectedExperience.imageUrl}
                      alt={selectedExperience.title}
                      className="w-full h-[300px] object-cover"
                      isZoomed
                    />
                  </div>
                  <div className="flex items-center gap-2 text-foreground-500 text-sm mb-3">
                    <Icon icon="lucide:tag" className="text-primary" />
                    <span>{selectedExperience.category}</span>
                    <span className="mx-2">•</span>
                    <Icon icon="lucide:calendar" className="text-primary" />
                    <span>{selectedExperience.date}</span>
                  </div>
                  {/* <p className="text-foreground-700">
                    {selectedExperience.description}
                  </p> */}
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )
          }
        </ModalContent>
      </Modal>
    </div>
  );
};

interface GalleryItemProps {
  experience: OfficeExperience;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ experience, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section id="gallery">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Card
          className="overflow-hidden cursor-pointer h-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPress={onClick}
          isPressable
        >
          <div className="relative overflow-hidden aspect-[4/3]">
            <motion.div
              animate={{
                scale: isHovered ? 1.05 : 1,
                filter: isHovered ? "brightness(1.1)" : "brightness(1)",
              }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              <Image
                src={experience.imageUrl}
                alt={experience.title}
                className="w-full h-full object-cover"
                removeWrapper
              />
            </motion.div>
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <p className="text-white text-sm font-medium mb-1">
                  {experience.category}
                </p>
                <h3 className="text-white text-lg font-semibold">
                  {experience.title}
                </h3>
              </motion.div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-foreground">
                {experience.title}
              </h3>
              <motion.div
                animate={{ rotate: isHovered ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Icon
                  icon="lucide:arrow-up-right"
                  className="text-primary"
                  width={18}
                  height={18}
                />
              </motion.div>
            </div>
            <p className="text-foreground-500 text-sm mt-1">
              {experience.date}
            </p>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};
