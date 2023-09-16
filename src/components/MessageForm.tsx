import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function MessageForm({}) {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsLoading(true);

    const InputsTemplate = {
      first_name: formData.firstName,
      last_name: formData.lastName,
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
        (res: any) => {
          console.log("enviou", res.status, res.text);
          reset();
          setIsLoading(false);
        },
        (err: any) => {
          console.log("Um erro aconteceu", err);
          setIsLoading(false);
          reset();
        }
      );
  };

  return (
    <div className="flex items-center justify-center h-fit min-h-[80vh] text-[#090909] max-w-xl w-full">
      <div className="bg-white w-full">
        <h2 className="text-3xl font-medium mb-2">Contact Me</h2>
        <p className="text-gray-500 mb-6">
          Fill out the form below, and i get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="first-name"
                className="block font-semibold text-gray-800"
              >
                First name
              </label>
              <input
                {...register("firstName", { required: true, maxLength: 50 })}
                id="first-name"
                placeholder="Enter your first name"
                className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="last-name"
                className="block font-semibold text-gray-800"
              >
                Last name
              </label>
              <input
                {...register("lastName", { required: true, maxLength: 50 })}
                id="last-name"
                placeholder="Enter your last name"
                className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-500 "
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              {...register("email", { required: true, maxLength: 50 })}
              id="email"
              placeholder="Enter your email"
              type="email"
              className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block font-semibold text-gray-800"
            >
              Message
            </label>
            <textarea
              {...register("message", { required: true, maxLength: 500 })}
              id="message"
              placeholder="Enter your message"
              className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-500 min-h-[200px]"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-800 text-white py-3 px-9 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500 max-md:w-full"
          >
            {isLoading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
}
