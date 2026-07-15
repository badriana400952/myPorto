import React from "react";
import { Card, CardBody, Input, Textarea, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import emailjs from "emailjs-com";

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: "lucide:mail",
      title: "Direct Comm-Link (Email)",
      value: "badriana0402@gmail.com",
      link: "mailto:badriana0402@gmail.com",
      color: "text-cyan-500 bg-cyan-500/10"
    },
    {
      icon: "lucide:phone",
      title: "Secure Frequency (WhatsApp)",
      value: "+62 858-8753-7612",
      link: "https://wa.me/6285887537612?text=Halo%20Badriana",
      color: "text-emerald-500 bg-emerald-500/10"
    },
    {
      icon: "lucide:map-pin",
      title: "Earth Coordinates (Location)",
      value: "Jakarta Barat, Indonesia",
      link: "https://maps.google.com/",
      color: "text-purple-500 bg-purple-500/10"
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Background glowing sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full mb-4" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Initiate a transmission sequence. I will respond to your signal as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Transmission Input Deck */}
        <div className="lg:col-span-2">
          <Card className="border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/40 backdrop-blur-md shadow-xl rounded-2xl">
            <CardBody className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
                <Icon icon="lucide:terminal" className="text-cyan-500" />
                <span>Send Transmission</span>
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    <Icon
                      icon="lucide:check"
                      className="text-emerald-500"
                      width={38}
                      height={38}
                    />
                  </div>
                  <div className="text-center space-y-1">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">Signal Dispatched</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md">
                      Thank you for contacting. Your transmission has been successfully routed.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Name"
                      placeholder="Ident Name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      variant="bordered"
                      isRequired
                      classNames={{
                        inputWrapper: "border-slate-200 dark:border-slate-800 focus-within:!border-cyan-500/70"
                      }}
                    />
                    <Input
                      label="Email"
                      placeholder="Signal Address"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      variant="bordered"
                      isRequired
                      classNames={{
                        inputWrapper: "border-slate-200 dark:border-slate-800 focus-within:!border-cyan-500/70"
                      }}
                    />
                  </div>
                  <Input
                    label="Subject"
                    placeholder="Transmission Header"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    variant="bordered"
                    isRequired
                    classNames={{
                      inputWrapper: "border-slate-200 dark:border-slate-800 focus-within:!border-cyan-500/70"
                    }}
                  />
                  <Textarea
                    label="Message"
                    placeholder="Construct payload body here..."
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    variant="bordered"
                    minRows={5}
                    isRequired
                    classNames={{
                      inputWrapper: "border-slate-200 dark:border-slate-800 focus-within:!border-cyan-500/70"
                    }}
                  />
                  <Button
                    type="submit"
                    color="primary"
                    className="w-full md:w-auto bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 font-semibold text-white px-8 h-12 shadow-lg shadow-cyan-500/20"
                    size="lg"
                    isLoading={isSubmitting}
                    startContent={!isSubmitting && <Icon icon="lucide:send" />}
                  >
                    {isSubmitting ? "Routing Signal..." : "Deploy Signal"}
                  </Button>
                </form>
              )}
            </CardBody>
          </Card>
        </div>

        {/* Channels Column */}
        <div className="space-y-6">
          {/* Info Card */}
          <Card className="border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/40 backdrop-blur-md shadow-xl rounded-2xl">
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
                <Icon icon="lucide:radio" className="text-cyan-500" />
                <span>Active Frequencies</span>
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-start gap-4 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={`p-3 rounded-xl ${item.color} shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                      <Icon icon={item.icon} width={20} height={20} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.title}</p>
                      <p className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-cyan-500 transition-colors duration-200 truncate max-w-[200px] sm:max-w-xs md:max-w-none">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Socials Card */}
          <Card className="border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/40 backdrop-blur-md shadow-xl rounded-2xl">
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
                <Icon icon="lucide:share-2" className="text-purple-500" />
                <span>Node Grid</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: "logos:github-icon",
                    name: "GitHub",
                    link: "https://github.com/badriana400952/",
                  },
                  {
                    icon: "logos:linkedin-icon",
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/in/badriana-badrian?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appC",
                  },
                  {
                    icon: "skill-icons:instagram",
                    name: "Instagram",
                    link: "https://www.instagram.com/badrian____?igsh=MTYybHRnZHY4dGIzMA==",
                  },
                  {
                    icon: "logos:twitter",
                    name: "Twitter",
                    link: "https://x.com/badrun952",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="flex items-center gap-2 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800/80 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 bg-white/50 dark:bg-slate-900/40 hover:bg-cyan-500/5 dark:hover:bg-cyan-500/5 transition-all duration-200 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon={social.icon} width={18} height={18} className="shrink-0 transition-transform group-hover:scale-110" />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{social.name}</span>
                  </a>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
