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
      title: "Email",
      value: "badriana0402@gmail.com",
      link: "mailto:contact@badriana0402@gmail.com",
    },
    {
      icon: "lucide:phone",
      title: "Phone",
      value: "+62 85887537612",
      link: "https://wa.me/6285887535612?text=halo%20Badriana%20",
    },
    {
      icon: "lucide:map-pin",
      title: "Location",
      value: "Jakarta Barat, Indonesia",
      link: "https://maps.google.com/",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl text-gray-500 md:text-4xl font-bold mb-4">
          Get In Touch
        </h2>
        <p className="text-foreground-500 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out
          and Ill get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border border-divider">
            <CardBody className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
                    <Icon
                      icon="lucide:check"
                      className="text-success"
                      width={32}
                      height={32}
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Message Sent!</h4>
                  <p className="text-foreground-500 text-center">
                    Thank you for reaching out. I`ll get back to you as soon as
                    possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Name"
                      placeholder="Your name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      variant="bordered"
                      isRequired
                    />
                    <Input
                      label="Email"
                      placeholder="Your email address"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      variant="bordered"
                      isRequired
                    />
                  </div>
                  <Input
                    label="Subject"
                    placeholder="What's this about?"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    variant="bordered"
                    isRequired
                  />
                  <Textarea
                    label="Message"
                    placeholder="Tell me about your project..."
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    variant="bordered"
                    minRows={5}
                    isRequired
                  />
                  <Button
                    type="submit"
                    color="primary"
                    className="w-full md:w-auto"
                    size="lg"
                    isLoading={isSubmitting}
                    startContent={!isSubmitting && <Icon icon="lucide:send" />}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardBody>
          </Card>
        </div>

        <div>
          <Card className="border border-divider mb-6">
            <CardBody className="p-6">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
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
                    <div className="p-3 bg-primary/10 rounded-md text-primary">
                      <Icon icon={item.icon} width={20} height={20} />
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-foreground-500 group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card className="border border-divider">
            <CardBody className="p-6">
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
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
                    className="flex items-center gap-2 p-3 rounded-md border border-divider hover:border-primary/50 hover:bg-primary/5 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon={social.icon} width={20} height={20} />
                    <span>{social.name}</span>
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
