"use client";

import SectionWrapper from "@/components/hoc/SectionWrapper";
import { slideIn } from "@/lib/motion";
import { styles } from "@/lib/styles";
import { ContactType, contactValidator } from "@/schemas/mail";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { EarthCanvas } from "../..";

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactType>({
    resolver: zodResolver(contactValidator),
    defaultValues: { email: "", message: "", name: "" },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function sendMail(data: ContactType) {
    setIsLoading(true);
    try {
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SectionWrapper idName="contact">
      <div className="grid grid-cols-1 flex-col-reverse items-center justify-between gap-10 overflow-hidden lg:grid-cols-2 xl:mt-12">
        <motion.div
          variants={slideIn({
            direction: "left",
            type: "tween",
            delay: 0.2,
            duration: 1,
          })}
          className="order-2 rounded-2xl bg-black-100  p-8 lg:order-1 xl:max-w-lg"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <p className={styles.sectionHeadText}>Contact.</p>

          <form
            className="mt-12 flex flex-col gap-8"
            onSubmit={handleSubmit(sendMail)}
          >
            <label htmlFor="name" className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Name</span>
              <input
                type="text"
                id="name"
                {...register("name")}
                placeholder="What's your good name?"
                className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              />
              <span className="mt-2 text-sm text-red-500">
                {errors["name"]?.message}
              </span>
            </label>

            <label htmlFor="email" className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Email</span>
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="What's your web address?"
                className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              />
              <span className="mt-2 text-sm text-red-500">
                {errors["email"]?.message}
              </span>
            </label>

            <label htmlFor="message" className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Message</span>
              <textarea
                rows={7}
                id="email"
                {...register("message")}
                placeholder="What you want to say?"
                className="resize-none rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              />
              <span className="mt-2 text-sm text-red-500">
                {errors["message"]?.message}
              </span>
            </label>

            <button
              type="submit"
              className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none"
            >
              {isLoading ? "Sening..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn({
            direction: "right",
            type: "tween",
            delay: 0.2,
            duration: 1,
          })}
          className="order-1 h-[350px] md:h-[550px] lg:order-2"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
