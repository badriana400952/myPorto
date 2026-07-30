import React, { useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
  Tabs,
  Tab,
} from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

interface OfficeExperience {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  temporalHash: string;
}

const officeExperiences: OfficeExperience[] = [
  {
    id: "1",
    title: "Keluarga Besar TI Ganesha Operation",
    description: "Pertemuan koordinasi kuartalan seluruh jajaran divisi teknologi informasi untuk sinkronisasi target sistem informasi baru.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785381573/go-forto/a_a28hyh.jpg",
    category: "GO",
    date: "17 Apr 2025",
    temporalHash: "NODE-TI.Q1.025"
  },
  {
    id: "2",
    title: "Apresiasi Task Bulanan",
    description: "Evaluasi bulanan dan pemberian penghargaan atas performa penyelesaian backlog tercepat dalam sistem arsitektur frontend.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785381590/go-forto/b_j1rodt.jpg",
    category: "GO",
    date: "22 Jan 2025",
    temporalHash: "APPR-MGR.01.025"
  },
  {
    id: "3",
    title: "Team Frontend",
    description: "Perayaan peluncuran modul core perpustakaan ikon internal dan integrasi sistem antarmuka berbasis Next.js.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785381605/go-forto/c_hazn0t.jpg",
    category: "GO",
    date: "22 Jan 2025",
    temporalHash: "TEAM-FE.DEPL.025"
  },
  {
    id: "5",
    title: "Evaluasi Mingguan",
    description: "Sinkronisasi mingguan tim pengembang frontend untuk meninjau efisiensi rendering antarmuka pengguna.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785381506/go-forto/e_fbiiwg.jpg",
    category: "GO",
    date: "08 Apr 2025",
    temporalHash: "EVAL-FE.W14.025"
  },
  {
    id: "6",
    title: "Apresiasi Task Bulanan",
    description: "Sesi apresiasi kinerja berkala bagi tim frontend atas integrasi desain responsif premium.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785381495/go-forto/f_lzbdfj.jpg",
    category: "GO",
    date: "08 May 2025",
    temporalHash: "APPR-FE.05.025"
  },
  {
    id: "7",
    title: "Perayaan Hari Kemerdekaan RI",
    description: "Acara kemerdekaan bersama di pusat operasional untuk mempererat solidaritas antar sub-sistem organisasi.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785381506/go-forto/g_o2nwml.jpg",
    category: "GO",
    date: "17 Aug 2024",
    temporalHash: "NAT-IND.AUG.024"
  },
  {
    id: "8",
    title: "Ultah ke-40 Ganesha Operation",
    description: "Dokumentasi peringatan ulang tahun ke-40 instansi dalam menyokong pendidikan terpadu di Indonesia.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785381516/go-forto/h_gtnhqu.jpg",
    category: "GO",
    date: "02 May 2024",
    temporalHash: "ANNIV-GO.40.024"
  },
  {
    id: "9",
    title: "Apresiasi Task Bulanan",
    description: "Umpan balik bulanan bersama jajaran kepala seksi guna optimalisasi alur kerja tim engineering.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785381534/go-forto/i_scbhje.jpg",
    category: "GO",
    date: "08 Feb 2025",
    temporalHash: "APPR-KASI.02.025"
  },
  {
    id: "10",
    title: "Apresiasi Task Bulanan",
    description: "Rapat koordinasi lintas manajerial untuk sinkronisasi prioritas rilis sistem kuartal pertama.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785381543/go-forto/j_sebbiw.jpg",
    category: "GO",
    date: "08 Feb 2025",
    temporalHash: "APPR-MGRK.02.025"
  },
  {
    id: "11",
    title: "Persiapan Meeting Proyek JSM",
    description: "Momen santai bersama tim sembari menunggu jadwal meeting koordinasi dan penyelarasan alur kerja proyek.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785382073/jsm-forto/1785381124233_weycrp.jpg",
    category: "JSM",
    date: "12 Jun 2025",
    temporalHash: "JSM-INIT.06.025"
  },
  {
    id: "12",
    title: "Refleksi & Ideasi Tim",
    description: "Mengambil jeda sejenak untuk melamun dan mencari inspirasi ide arsitektur antarmuka berlatar pantulan keindahan sunset.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785382073/jsm-forto/1785381124259_coascu.jpg",
    category: "JSM",
    date: "18 Jul 2025",
    temporalHash: "JSM-DEV.07.025"
  },
  {
    id: "13",
    title: "Ultah JSM Ke-22 Tahun",
    description: "Dokumentasi kebersamaan dalam memperingati dan merayakan ulang tahun PT Jaring Synergi Mandiri yang ke-22.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785382068/jsm-forto/1785381124161_p88usm.jpg",
    category: "JSM",
    date: "05 Aug 2025",
    temporalHash: "JSM-REV.08.025"
  },
  {
    id: "14",
    title: "Sesi Coffee Break Pra-Meeting",
    description: "Kegiatan kebersamaan menikmati kopi dan berdiskusi santai bersama tim sebelum memulai agenda meeting teknis.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785382068/jsm-forto/1785381124209_qzka7n.jpg",
    category: "JSM",
    date: "20 Sep 2025",
    temporalHash: "JSM-PIPE.09.025"
  },
  {
    id: "15",
    title: "Jumat Berkah JSM",
    description: "Momen kebersamaan dan berbagi keberkahan di hari Jumat bersama rekan-rekan kerja di kantor JSM.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785382068/jsm-forto/1785381123924_zufqvk.jpg",
    category: "JSM",
    date: "14 Oct 2025",
    temporalHash: "JSM-RELE.10.025"
  },
  {
    id: "16",
    title: "Momen Keseharian Kantor JSM",
    description: "Dokumentasi kebersamaan dan suasana santai di lingkungan kerja kantor sebelum evaluasi kedisiplinan harian.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785382068/jsm-forto/1785381123957_amrfkz.jpg",
    category: "JSM",
    date: "02 Nov 2025",
    temporalHash: "JSM-IDE.11.025"
  },
  {
    id: "17",
    title: "Waktu Istirahat Tim",
    description: "Suasana santai saat jam istirahat kantor untuk melepas penat dan mempererat keakraban antar tim developer.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785382062/jsm-forto/1785381123886_n8nxsf.jpg",
    category: "JSM",
    date: "15 Dec 2025",
    temporalHash: "JSM-SHARE.12.025"
  },
  {
    id: "18",
    title: "Pengembangan Proyek ACA Asuransi",
    description: "Sesi fokus dan analisis mendalam dalam menyelesaikan tantangan logika arsitektur sistem pada proyek ACA Asuransi.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785382061/jsm-forto/1785381123858_fvyney.jpg",
    category: "JSM",
    date: "28 Dec 2025",
    temporalHash: "JSM-EOY.12.025"
  },
  {
    id: "19",
    title: "Penyambutan Tahun Baru 2026",
    description: "Momen perayaan dan pembukaan awal tahun 2026 dengan semangat baru dalam mencapai target-target teknologi mendatang.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785382064/jsm-forto/1785381124090_wlmpaq.jpg",
    category: "JSM",
    date: "10 Jan 2026",
    temporalHash: "JSM-ROAD.01.026"
  },
  {
    id: "20",
    title: "Meeting BA Proyek ORIX",
    description: "Rapat penyelarasan alur sistem dan modul aplikasi bersama Business Analyst untuk suksesnya proyek ORIX.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785382064/jsm-forto/1785381124129_duwuut.jpg",
    category: "JSM",
    date: "04 Feb 2026",
    temporalHash: "JSM-SYNC.02.026"
  },
  {
    id: "21",
    title: "Meeting Klien ACA via Zoom",
    description: "Sesi diskusi online dan koordinasi progres fitur aplikasi bersama pihak klien ACA Asuransi melalui Zoom.",
    imageUrl: "https://res.cloudinary.com/doykilt63/image/upload/v1785382061/jsm-forto/1785381123827_iniozq.jpg",
    category: "JSM",
    date: "20 Mar 2026",
    temporalHash: "JSM-AWARD.03.026"
  },
];

export const ExperienceGallery: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedExperience, setSelectedExperience] = useState<OfficeExperience | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(officeExperiences.map((exp) => exp.category)))];

  const filteredExperiences = activeCategory === "all"
    ? officeExperiences
    : officeExperiences.filter((exp) => exp.category === activeCategory);

  const handleExperienceClick = (experience: OfficeExperience) => {
    setSelectedExperience(experience);
    onOpen();
  };

  return (
    <div id="gallery" className="py-20 md:py-32 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          Holographic Memory Matrix
        </h2>
        <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full mb-6" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Arsip kronik visual dan rekaman jejak kerja sama tim (Era Orbit 2024).
        </p>
      </div>

      {/* Cyber Category Filter Tabs */}
      <div className="flex justify-center mb-12 relative z-10">
        <Tabs
          aria-label="Gallery categories"
          variant="underlined"
          selectedKey={activeCategory}
          onSelectionChange={(key) => setActiveCategory(key as string)}
          classNames={{
            tabList: "gap-4 md:gap-6 border-b border-slate-200 dark:border-slate-800 flex-wrap justify-center",
            cursor: "w-full bg-cyan-500",
            tab: "max-w-fit px-2 h-12 text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-400 font-medium tracking-wide transition-all",
            tabContent: "group-data-[selected=true]:text-cyan-500 group-data-[selected=true]:font-bold text-xs md:text-sm uppercase font-mono"
          }}
        >
          {categories.map((cat) => (
            <Tab key={cat} title={cat === "all" ? "ALL_CELLS" : cat.toUpperCase().replace(" ", "_")} />
          ))}
        </Tabs>
      </div>

      {/* Futuristic Grid Layout */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredExperiences.map((exp) => (
            <motion.div
              key={exp.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <GalleryItem
                experience={exp}
                onClick={() => handleExperienceClick(exp)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Memory Decryption Terminal Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        backdrop="blur"
        classNames={{
          wrapper: "z-50",
          backdrop: "bg-slate-950/60 backdrop-blur-md",
          base: "border border-slate-200/50 dark:border-slate-800/60 bg-white/90 dark:bg-slate-950/80 backdrop-blur-xl max-w-2xl rounded-2xl shadow-2xl",
          header: "border-b border-slate-100 dark:border-slate-900 pb-4 font-mono font-bold text-lg dark:text-white",
          body: "py-6",
          footer: "border-t border-slate-100 dark:border-slate-900 pt-4",
        }}
      >
        <ModalContent>
          {(onClose) =>
            selectedExperience && (
              <>
                <ModalHeader className="flex justify-between items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>SYSTEM_DECRYPT: [ {selectedExperience.title.toUpperCase()} ]</span>
                  </div>
                </ModalHeader>
                <ModalBody className="space-y-6">
                  {/* Cyber Hologram Image wrapper */}
                  <div className="relative rounded-xl overflow-hidden border border-slate-200/30 dark:border-slate-800/40 bg-slate-900 aspect-video shadow-inner flex items-center justify-center">
                    {/* Futuristic Crosshairs in corners */}
                    <div className="absolute top-3 left-3 text-[10px] font-mono text-cyan-500/40 select-none pointer-events-none">+ L_UP</div>
                    <div className="absolute top-3 right-3 text-[10px] font-mono text-cyan-500/40 select-none pointer-events-none">+ R_UP</div>
                    <div className="absolute bottom-3 left-3 text-[10px] font-mono text-cyan-500/40 select-none pointer-events-none">+ L_DN</div>
                    <div className="absolute bottom-3 right-3 text-[10px] font-mono text-cyan-500/40 select-none pointer-events-none">+ R_DN</div>
                    
                    <Image
                      src={selectedExperience.imageUrl}
                      alt={selectedExperience.title}
                      className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                      isZoomed
                    />
                  </div>

                  {/* Terminal Metadata Readout */}
                  <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40 rounded-xl p-5 space-y-4 font-mono">
                    <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs md:text-sm">
                      <div className="text-slate-400 dark:text-slate-500">INDEX_ID:</div>
                      <div className="text-slate-800 dark:text-slate-200 font-semibold">{selectedExperience.temporalHash}</div>
                      
                      <div className="text-slate-400 dark:text-slate-500">SECTOR_CAT:</div>
                      <div className="text-cyan-500 font-semibold">{selectedExperience.category.toUpperCase()}</div>
                      
                      <div className="text-slate-400 dark:text-slate-500">KRONOS_TIME:</div>
                      <div className="text-slate-800 dark:text-slate-200">{selectedExperience.date.toUpperCase()}</div>

                      <div className="text-slate-400 dark:text-slate-500">SECURITY:</div>
                      <div className="text-emerald-500 font-semibold">[VERIFIED_ACCESS]</div>
                    </div>

                    <div className="border-t border-slate-200/40 dark:border-slate-800/40 pt-4">
                      <div className="text-xs text-slate-400 dark:text-slate-500 mb-1.5 uppercase tracking-wide">Log Description:</div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                        {selectedExperience.description}
                      </p>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button 
                    className="font-mono text-xs uppercase border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900"
                    variant="light" 
                    onPress={onClose}
                  >
                    Close Deck
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Glow shadow backdrop */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur opacity-0 group-hover:opacity-100 transition duration-500" />
      
      <Card
        isPressable
        onPress={onClick}
        className="relative overflow-hidden h-full border border-slate-200/50 dark:border-slate-800/60 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md transition-all duration-300 p-2.5 rounded-2xl"
      >
        <CardBody className="p-0 space-y-3 flex flex-col h-full justify-between">
          
          {/* Cyber Image Deck */}
          <div className="relative overflow-hidden rounded-xl aspect-[4/3] w-full bg-slate-950">
            {/* Holographic Scan Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-black/80 z-10 pointer-events-none" />
            
            {/* Scanning line animation */}
            <div className="absolute inset-x-0 h-0.5 bg-cyan-400/30 top-0 group-hover:animate-[scan_1.5s_infinite_linear] z-20 pointer-events-none" />

            <motion.div
              animate={{
                scale: isHovered ? 1.06 : 1,
              }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              <Image
                src={experience.imageUrl}
                alt={experience.title}
                className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity"
                removeWrapper
              />
            </motion.div>

            {/* Access overlay badge */}
            <div className="absolute top-2 left-2 z-20 bg-slate-950/80 border border-slate-800 backdrop-blur-md rounded px-1.5 py-0.5 font-mono text-[8px] text-cyan-400">
              SYS_STABLE: {experience.temporalHash.split(".")[0]}
            </div>
          </div>

          {/* Metadata & Title */}
          <div className="px-1.5 pb-1 space-y-1.5 flex flex-col justify-between flex-grow">
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-cyan-500 uppercase">{experience.category}</span>
              <span className="text-slate-400 dark:text-slate-500">{experience.date}</span>
            </div>
            
            <div className="flex justify-between items-start gap-2">
              <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200 line-clamp-1 group-hover:text-cyan-500 transition-colors">
                {experience.title}
              </h3>
              <motion.div
                animate={{ rotate: isHovered ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0"
              >
                <Icon
                  icon="lucide:arrow-up-right"
                  className="text-cyan-500 dark:text-cyan-400"
                  width={14}
                  height={14}
                />
              </motion.div>
            </div>
          </div>

        </CardBody>
      </Card>

      {/* Cyber Scanning Animation rules */}
      <style jsx global>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};
