"use client";
import { useState } from "react";
import { useLanguageContext } from "@/context/languageContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import ContactForm from "@/components/forms/contactForm";

const ContactFormWrapper = () => {
  const { language } = useLanguageContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="submit"
        className="rounded bg-blue-500 px-2 py-1 text-xs font-bold text-white hover:bg-blue-700"
        onClick={() => setIsOpen(true)}
      >
        {language === "de" && "Anmeldung"}
        {language === "fr" && "RSVP"}
        {language === "en" && "RSVP"}
      </button>
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-0 bg-white">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="mx-auto mt-16 max-w-lg p-4">
            <ContactForm setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </>
  );
};

export default ContactFormWrapper;
