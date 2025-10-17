"use client";

import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { heroSection } from "@/config/data";
import { FaGithub, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export function CallToAction() {
  function getSocialIcon(title: string) {
    switch (title) {
      case "GitHub":
        return <FaGithub className="w-10 h-10 text-gray-200 hover:text-gray-500" />;
      case "Twitter":
        return (
          <FaSquareXTwitter className="w-10 h-10 text-gray-200 hover:text-gray-500" />
        );
      case "Telegram":
        return (
          <FaTelegram className="w-10 h-10 text-gray-200 hover:text-gray-500" />
        );
      default:
        return (
          <FaLinkedinIn className="w-10 h-10 text-blue-500 hover:text-blue-700" />
        );
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center pb-16 bg-gray-900/20 rounded-2xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-12 p-6"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30"
          >
            <FaRocket className="w-6 h-6 text-blue-400" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
        </div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent max-w-md mx-auto"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
      >
        Ready to bring your ideas to life? I'm always excited to collaborate on
        innovative projects and help transform your vision into reality.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-row gap-4 justify-center"
      >
        {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            className="flex items-center border border-blue-700/50 text-blue-300 hover:bg-blue-900/30 transition-all duration-300 py-2 px-4 rounded-sm"
            href={`mailto:${personalInfo.email}`}
          >
            <FiMail className="w-5 h-5 mr-2" />
            <span>{personalInfo.email}</span>
          </a>
        </motion.div> */}
        <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  className="flex w-full items-center gap-10 justify-center"
                >
                  {heroSection.socialLinks.map(({ title, url }, index) => (
                    <motion.a
                      key={title}
                      title={title}
                      initial={{ x: 5, scale: 0.2 }}
                      animate={{ x: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {getSocialIcon(title)}
                    </motion.a>
                  ))}
                </motion.div>
      </motion.div>
    </motion.div>
  );
}
