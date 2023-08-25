import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function MessageForm({}: Inputs) {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsLoading(true);
    const InputsTemplate = {
      from_name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_fchfmmd",
        "template_zrowh3b",
        InputsTemplate,
        "NPHwQIcNMSD-9jIPq"
      )
      .then(
        (res) => {
          console.log("enviou", res.status, res.text);
          reset();
          setIsLoading(false);
        },
        (err) => {
          console.log("Um erro aconteceu", err);
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="w-full gap-10 flex flex-col rounded-md shadow-md ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col gap-10 w-full mx-auto"
      >
        <div className="flex max-md:flex-col gap-10 w-full ">
          <input
            {...register("name", { required: true, maxLength: 50 })}
            placeholder="Enter your name..."
            className="contactInput caret-white"
            type="text"
          />
          <input
            {...register("email", { required: true, maxLength: 50 })}
            placeholder="Enter your email..."
            className="contactInput"
            type="email"
          />
        </div>

        <textarea
          {...register("message", { required: true, maxLength: 500 })}
          placeholder="Enter your message..."
          className="contactInput min-h-[400px] "
        />
      </form>

      <button
        className="bg-gray-850 py-5 px-32 shadow hover:bg-gray-850/70 rounded w-fit uppercase border border-gray-850
        text-black font-semibold text-[1.4rem]  leading-[1.2]  text-[#fff] hover:underline hover:border-white transition-all"
      >
        {isLoading ? (
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 "
            viewBox="0 0 100 101"
            fill="none"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        ) : (
          "Send "
        )}
      </button>
    </div>
  );
}
