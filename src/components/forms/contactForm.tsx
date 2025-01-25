"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { nunito } from "@/app/fonts";

type Inputs = {
  firstName: string;
  lastName: string;
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
    <div className={`${nunito.className} flex flex-col items-center p-8`}>
      <form onSubmit={handleSubmit(onSubmit)} className="your-form-styles">
        <div>
          <div>
            <label htmlFor="firstName">First Name</label>
          </div>
          <input
            {...register("firstName", { required: true })}
            name="firstName"
          />
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="lastName">Last Name</label>
          </div>
          <input
            {...register("lastName", { required: true })}
            name="lastName"
          />
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <input {...register("email", { required: true })} name="email" />
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="phone">Phone</label>
          </div>
          <input {...register("phoneNumber")} name="phoneNumber" />
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="message">Message</label>
          </div>
          <textarea {...register("message")} name="message" />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
