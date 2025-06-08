// import React from "react";
// import {
//   Card,
//   Image,
//   Button,
//   Modal,
//   ModalContent,
//   ModalBody,
//   ModalHeader,
//   ModalFooter,
//   useDisclosure,
// } from "@heroui/react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Icon } from "@iconify/react";

// // Define the office experience data structure
// interface OfficeExperience {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   date: string;
//   location: string;
// }

// // Sample office experiences data
// const officeExperiences: OfficeExperience[] = [
//   {
//     id: "1",
//     title: "Team Building Workshop",
//     description:
//       "Our quarterly team building workshop focused on improving collaboration and communication across departments. The day was filled with interactive activities, brainstorming sessions, and team challenges that helped strengthen our bonds and improve our problem-solving skills. Everyone participated enthusiastically, sharing ideas and working together to overcome obstacles.",
//     imageUrl: "https://img.heroui.chat/image/dashboard?w=800&h=600&u=office1",
//     date: "March 15, 2023",
//     location: "Main Conference Room",
//   },
//   {
//     id: "2",
//     title: "New Office Space",
//     description:
//       "The grand opening of our redesigned office space featuring collaborative zones, quiet focus areas, and state-of-the-art meeting rooms. The modern design incorporates natural light, ergonomic furniture, and technology integrations that enhance productivity and employee well-being. The open layout encourages spontaneous interactions while dedicated quiet spaces allow for focused work.",
//     imageUrl: "https://img.heroui.chat/image/dashboard?w=800&h=600&u=office2",
//     date: "June 22, 2023",
//     location: "Headquarters, 12th Floor",
//   },
//   {
//     id: "3",
//     title: "Product Launch Celebration",
//     description:
//       "Celebrating the successful launch of our flagship product after months of hard work and dedication from the entire team. The event included presentations highlighting key features, customer testimonials, and recognition of team members who made significant contributions. We enjoyed catered food, drinks, and a commemorative gift for each team member.",
//     imageUrl: "https://img.heroui.chat/image/dashboard?w=800&h=600&u=office3",
//     date: "August 5, 2023",
//     location: "Innovation Hub",
//   },
//   {
//     id: "4",
//     title: "Innovation Workshop",
//     description:
//       "A day-long workshop where team members brainstormed new ideas and innovative solutions to improve our products and services. Facilitated by industry experts, the workshop used design thinking methodologies to identify customer pain points and develop creative solutions. Cross-functional teams collaborated to prototype concepts that could be implemented in future product iterations.",
//     imageUrl: "https://img.heroui.chat/image/dashboard?w=800&h=600&u=office4",
//     date: "October 12, 2023",
//     location: "Creative Studio",
//   },
//   {
//     id: "5",
//     title: "Annual Company Retreat",
//     description:
//       "Our annual company retreat where we reflected on our achievements, set new goals, and enjoyed team-building activities in a beautiful natural setting. The three-day event included strategic planning sessions, professional development workshops, and outdoor activities designed to foster camaraderie and rejuvenate our team spirit.",
//     imageUrl: "https://img.heroui.chat/image/dashboard?w=800&h=600&u=office5",
//     date: "December 8, 2023",
//     location: "Mountain View Resort",
//   },
//   {
//     id: "6",
//     title: "Client Appreciation Day",
//     description:
//       "A special event organized to thank our clients for their continued support and to strengthen our business relationships. The day featured product demonstrations, networking opportunities, and personalized consultations. Our leadership team presented our roadmap for the coming year, and clients shared valuable feedback that will inform our future development priorities.",
//     imageUrl: "https://img.heroui.chat/image/dashboard?w=800&h=600&u=office6",
//     date: "February 18, 2024",
//     location: "Executive Lounge",
//   },
// ];

// export const OfficeExperienceCarousel: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = React.useState(0);
//   const [direction, setDirection] = React.useState(0);
//   const [isHovering, setIsHovering] = React.useState(false);
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();
//   const [selectedExperience, setSelectedExperience] =
//     React.useState<OfficeExperience | null>(null);

//   const visibleExperiences = React.useMemo(() => {
//     const visibleCount = 3;
//     const result = [];

//     for (let i = 0; i < visibleCount; i++) {
//       const index = (currentIndex + i) % officeExperiences.length;
//       result.push({
//         ...officeExperiences[index],
//         position: i,
//       });
//     }

//     return result;
//   }, [currentIndex]);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % officeExperiences.length);
//   };

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrentIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + officeExperiences.length) % officeExperiences.length
//     );
//   };

//   const handleExperienceClick = (experience: OfficeExperience) => {
//     setSelectedExperience(experience);
//     onOpen();
//   };

//   React.useEffect(() => {
//     let interval: NodeJS.Timeout;

//     if (isHovering) {
//       // When hovering, clear any existing interval
//       clearInterval(interval);
//     } else {
//       // When not hovering, auto-advance every 4 seconds
//       interval = setInterval(() => {
//         handleNext();
//       }, 4000);
//     }

//     return () => clearInterval(interval);
//   }, [isHovering]);

//   return (
//     <div className="space-y-12">
//       <div className="flex flex-col items-center">
//         <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2 text-center">
//           Office Experiences
//         </h2>
//         <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
//       </div>

//       <div
//         className="relative h-[500px] md:h-[600px]"
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//       >
//         <AnimatePresence initial={false} mode="popLayout">
//           {visibleExperiences.map(({ id, title, imageUrl, date, position }) => {
//             // Calculate position-based styles
//             let zIndex = 30 - position * 10;
//             let opacity = 1 - position * 0.2;
//             let scale = 1 - position * 0.1;
//             let translateX = position * 5;

//             return (
//               <motion.div
//                 key={id}
//                 className="absolute top-0 left-0 w-full h-full cursor-pointer"
//                 style={{ zIndex }}
//                 initial={{
//                   opacity: direction > 0 ? 0 : 1,
//                   x: direction > 0 ? 100 : -100,
//                   scale: direction > 0 ? 0.8 : 1,
//                 }}
//                 animate={{
//                   opacity,
//                   scale,
//                   x: `${translateX}%`,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: direction < 0 ? 0 : 1,
//                   x: direction < 0 ? 100 : -100,
//                   scale: direction < 0 ? 0.8 : 1,
//                 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 onClick={() =>
//                   position === 0 &&
//                   handleExperienceClick(
//                     officeExperiences[
//                       (currentIndex + position) % officeExperiences.length
//                     ]
//                   )
//                 }
//               >
//                 <Card className="w-full h-full overflow-hidden">
//                   <div className="relative w-full h-full">
//                     <motion.div
//                       whileHover={position === 0 ? { scale: 1.05 } : {}}
//                       transition={{ duration: 0.4 }}
//                       className="w-full h-full"
//                     >
//                       <Image
//                         src={imageUrl}
//                         alt={title}
//                         className="w-full h-full object-cover"
//                         removeWrapper
//                       />
//                     </motion.div>

//                     {position === 0 && (
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
//                         <motion.div
//                           initial={{ y: 20, opacity: 0 }}
//                           animate={{ y: 0, opacity: 1 }}
//                           transition={{ delay: 0.2, duration: 0.5 }}
//                         >
//                           <p className="text-primary-200 mb-2">{date}</p>
//                           <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">
//                             {title}
//                           </h3>
//                           <Button
//                             color="primary"
//                             endContent={<Icon icon="lucide:arrow-right" />}
//                             onPress={() =>
//                               handleExperienceClick(
//                                 officeExperiences[currentIndex]
//                               )
//                             }
//                           >
//                             View Details
//                           </Button>
//                         </motion.div>
//                       </div>
//                     )}
//                   </div>
//                 </Card>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>

//         {/* Navigation Controls */}
//         <div className="absolute bottom-6 right-6 flex items-center gap-2 z-50">
//           <Button
//             isIconOnly
//             variant="flat"
//             className="bg-black/30 backdrop-blur-md text-white hover:bg-black/50"
//             onPress={handlePrev}
//           >
//             <Icon icon="lucide:chevron-left" width={20} height={20} />
//           </Button>
//           <Button
//             isIconOnly
//             variant="flat"
//             className="bg-black/30 backdrop-blur-md text-white hover:bg-black/50"
//             onPress={handleNext}
//           >
//             <Icon icon="lucide:chevron-right" width={20} height={20} />
//           </Button>
//         </div>

//         {/* Indicators */}
//         <div className="absolute bottom-6 left-6 flex items-center gap-2 z-50">
//           {officeExperiences.map((_, index) => (
//             <button
//               key={index}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 index === currentIndex ? "bg-primary w-6" : "bg-white/50"
//               }`}
//               onClick={() => {
//                 setDirection(index > currentIndex ? 1 : -1);
//                 setCurrentIndex(index);
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Experience Details */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {[0, 1, 2].map((offset) => {
//           const index = (currentIndex + offset) % officeExperiences.length;
//           const experience = officeExperiences[index];

//           return (
//             <motion.div
//               key={experience.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: offset * 0.1, duration: 0.5 }}
//             >
//               <Card
//                 className="h-full"
//                 isPressable
//                 onPress={() => handleExperienceClick(experience)}
//               >
//                 <div className="p-5">
//                   <div className="flex items-center gap-2 mb-3">
//                     <Icon icon="lucide:calendar" className="text-primary" />
//                     <span className="text-foreground-500 text-sm">
//                       {experience.date}
//                     </span>
//                   </div>
//                   <h3 className="text-lg font-medium mb-2">
//                     {experience.title}
//                   </h3>
//                   <p className="text-foreground-500 line-clamp-2 text-sm">
//                     {experience.description}
//                   </p>
//                   <div className="flex items-center gap-2 mt-4 text-primary">
//                     <Icon icon="lucide:map-pin" width={16} height={16} />
//                     <span className="text-sm">{experience.location}</span>
//                   </div>
//                 </div>
//               </Card>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Detail Modal */}
//       <Modal
//         isOpen={isOpen}
//         onOpenChange={onOpenChange}
//         size="3xl"
//         backdrop="blur"
//       >
//         <ModalContent>
//           {(onClose) =>
//             selectedExperience && (
//               <>
//                 <ModalHeader className="flex flex-col gap-1">
//                   <h2 className="text-xl font-semibold">
//                     {selectedExperience.title}
//                   </h2>
//                   <div className="flex items-center gap-2 text-foreground-500 text-sm">
//                     <Icon
//                       icon="lucide:calendar"
//                       className="text-primary"
//                       width={16}
//                       height={16}
//                     />
//                     <span>{selectedExperience.date}</span>
//                     <span className="mx-1">•</span>
//                     <Icon
//                       icon="lucide:map-pin"
//                       className="text-primary"
//                       width={16}
//                       height={16}
//                     />
//                     <span>{selectedExperience.location}</span>
//                   </div>
//                 </ModalHeader>
//                 <ModalBody>
//                   <div className="relative rounded-lg overflow-hidden mb-6">
//                     <Image
//                       src={selectedExperience.imageUrl}
//                       alt={selectedExperience.title}
//                       className="w-full h-[350px] object-cover"
//                       isZoomed
//                     />
//                   </div>
//                   <p className="text-foreground-700 leading-relaxed">
//                     {selectedExperience.description}
//                   </p>
//                 </ModalBody>
//                 <ModalFooter>
//                   <Button color="primary" variant="light" onPress={onClose}>
//                     Close
//                   </Button>
//                   <Button color="primary" onPress={onClose}>
//                     <Icon icon="lucide:share" className="mr-1" />
//                     Share
//                   </Button>
//                 </ModalFooter>
//               </>
//             )
//           }
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// };
