"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { nunito } from "@/app/fonts";

type Inputs = {
  fullName: string;
  partnerFullName: string;
  children: number;
  email: string;
  phoneNumber: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  console.log({ errors });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
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
      } else {
        console.error("Error sending message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={`${nunito.className} flex flex-col items-center`}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div>
          <div>
            <label htmlFor="fullName">Full Name</label>
          </div>
          <input
            {...register("fullName", { required: true })}
            name="fullName"
            className={`${errors.fullName ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""} w-full`}
          />
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="partnerFullName">Partner Full Name</label>
          </div>
          <input
            {...register("partnerFullName")}
            name="partnerFullName"
            className={`w-full`}
          />
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="children">Number of children</label>
          </div>
          <input
            {...register("children")}
            name="children"
            className={`w-full`}
            type="number"
          />
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <input
            {...register("email", { required: true })}
            name="email"
            className={`${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""} w-full`}
          />
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="phone">Phone</label>
          </div>
          <input
            {...register("phoneNumber", { required: true })}
            name="phoneNumber"
            className={`${errors.phoneNumber ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""} w-full`}
          />
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="message">Message</label>
          </div>
          <textarea
            {...register("message")}
            name="message"
            className="w-full"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
