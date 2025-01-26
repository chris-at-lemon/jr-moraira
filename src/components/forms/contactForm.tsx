"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLanguageContext } from "@/context/languageContext";

import { nunito } from "@/app/fonts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faArrowRight } from "@fortawesome/free-solid-svg-icons";

type Inputs = {
  fullName: string;
  partnerFullName: string;
  childrenNumber: number;
  email: string;
  phoneNumber: string;
  message: string;
};

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};

export default function ContactForm({ setIsOpen }: Props) {
  const { language } = useLanguageContext();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  console.log({ errors });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Message sent successfully");
        setSubmitSuccess(true);
        setSubmitting(false);
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      } else {
        setSubmitting(false);
        console.error("Error sending message");
      }
    } catch (error) {
      setSubmitting(false);
      console.error("Error:", error);
    }
  };

  return (
    <div
      className={`${nunito.className} flex flex-col items-center text-neutral-900`}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div>
          <div>
            <label
              htmlFor="fullName"
              className={`${errors.fullName ? "text-red-500" : "text-neutral-900"}`}
            >
              {language === "en" && "Full Name"}
              {language === "fr" && "Nom complet"}
              {language === "de" && "Vollständiger Name"}
            </label>
          </div>
          <input
            {...register("fullName", { required: true })}
            name="fullName"
            className={`${errors.fullName ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""} w-full`}
          />
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="partnerFullName">
              {language === "en" && "Partner Full Name"}
              {language === "fr" && "Nom complet du partenaire"}
              {language === "de" && "Vollständiger Name des Partners"}
            </label>
          </div>
          <input
            {...register("partnerFullName")}
            name="partnerFullName"
            className={`w-full`}
          />
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="childrenNumber">
              {language === "en" && "Number of children"}
              {language === "fr" && "Nombre d'enfants"}
              {language === "de" && "Anzahl der Kinder"}
            </label>
          </div>
          <input
            {...register("childrenNumber")}
            name="childrenNumber"
            className={`w-full`}
            type="number"
          />
        </div>

        <div className="mt-4">
          <div>
            <label
              htmlFor="email"
              className={`${errors.email ? "text-red-500" : "text-neutral-900"}`}
            >
              {language === "en" && "Email"}
              {language === "fr" && "Email"}
              {language === "de" && "E-Mail"}
            </label>
          </div>
          <input
            {...register("email", { required: true })}
            name="email"
            className={`${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""} w-full`}
          />
        </div>

        <div className="mt-4">
          <div>
            <label
              htmlFor="phone"
              className={`${errors.phoneNumber ? "text-red-500" : "text-neutral-900"}`}
            >
              {language === "en" && "Phone"}
              {language === "fr" && "Téléphone"}
              {language === "de" && "Telefon"}
            </label>
          </div>
          <input
            {...register("phoneNumber", { required: true })}
            name="phoneNumber"
            className={`${errors.phoneNumber ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""} w-full`}
          />
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="message">
              {language === "en" && "Message"}
              {language === "fr" && "Message"}
              {language === "de" && "Nachricht"}
            </label>
          </div>
          <textarea
            {...register("message")}
            name="message"
            className="w-full"
          />
        </div>
        <div>
          {submitSuccess && (
            <div
              className="mt-2 rounded-b border-t-4 border-teal-500 bg-teal-100 px-4 py-3 text-teal-900 shadow-md"
              role="alert"
            >
              <div className="flex">
                <div className="py-1">
                  <svg
                    className="mr-4 h-6 w-6 fill-current text-teal-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">
                    {language === "en" && "Message delivered successfully!"}
                    {language === "fr" && "Message livré avec succès!"}
                    {language === "de" && "Nachricht erfolgreich zugestellt!"}
                  </p>
                  <p className="text-sm">
                    {language === "en" &&
                      "Thank you for your message. We will get back to you soon."}
                    {language === "fr" &&
                      "Merci pour votre message. Nous vous répondrons bientôt."}
                    {language === "de" &&
                      "Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden."}
                  </p>
                </div>
              </div>
            </div>
          )}

          {}
          <div className={`mt-4 ${submitSuccess ? "hidden" : ""}`}>
            <button
              type="submit"
              className="flex items-center justify-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              {language === "en" && "Send message"}
              {language === "fr" && "Envoyer le message"}
              {language === "de" && "Nachricht senden"}
              <div className="flex h-6 w-6 items-center justify-center">
                {submitting ? (
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                ) : (
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                )}
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
