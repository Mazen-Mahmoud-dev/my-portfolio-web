import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Phone, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { sendEmail } from "../utils/sendEmail";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: null });
  const [error,setError] = useState("")
  const rootRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".contact-hero", {
        autoAlpha: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      });

      const cards = gsap.utils.toArray(".contact-card");


      cards.forEach((card, i) => {
        gsap.to(card, {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
                delay: 0.3 + i * 0.2,
                ease: "power3.out",
              });
            });
    },
    { scope: rootRef } 
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null });
    if(formData.name.trim() == "" || formData.email.trim() == "" ||formData.message.trim() == ""){
      setStatus({loading:false,success:false})
      setError("❌ All Inputs Are Required.");
      return;
    }
    const res = await sendEmail(formData);

    if (res.success) {
      setStatus({ loading: false, success: true });
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus({ loading: false, success: false });
      setError("❌ Something went wrong. Try again.")
    }
  };

  return (
    <main ref={rootRef} className="min-h-screen pt-24 md:px-8 max-w-7xl mx-auto md:ml-28 mb-12">
      <section className="contact-hero text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 mb-4">
          Let’s Get in Touch 🤝
        </h1>
        <p className="text-gray-500 dark:text-gray-400  text-base md:text-lg max-w-2xl mx-auto p-3">
          Have a project idea, collaboration, or just want to say hi? Reach out through any of the options below!
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[80%] md:w-full mx-auto">
        <div
          className="contact-card  mx-auto md:mx-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 opacity-0"
        >
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-6">Contact Information</h2>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <Phone className="text-gray-500 w-6 h-6" />
              <a href="tel:+201148824619" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-slate-50 transition-colors">
                +20 114 882 4619
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-gray-500 w-6 h-6" />
              <a href="https://wa.me/+201148824619" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-slate-50  transition-colors">
                +20 114 882 4619
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Linkedin className="text-gray-500 w-6 h-6" />
              <a
                href="https://www.linkedin.com/in/mazen-mahmoud-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-slate-50 transition-colors"
              >
                Linkedin Profile
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div
          className="contact-card  bg-white dark:bg-slate-800 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 opacity-0"
        >
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-6">Send a Message</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-transparent text-gray-700 dark:text-gray-200 focus:border-cyan-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">Email</label>
              <input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-transparent text-gray-700 dark:text-gray-200 focus:border-cyan-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-transparent text-gray-700 dark:text-gray-200 focus:border-cyan-500 outline-none transition-colors placeholder:text-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full bg-gray-800 text-white dark:bg-slate-100 dark:text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-900 dark:hover:bg-slate-300  transition-colors cursor-pointer"
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {status.success === true && (
              <p className="text-green-500 mt-2">✅ Message sent successfully!</p>
            )}
            {status.success === false && (
              <p className="text-red-500 mt-2">{error}</p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
