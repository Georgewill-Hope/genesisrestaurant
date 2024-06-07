"use client";

import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_KEY);

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center my-10">
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-[#8D8D8D]/5 w-[90%] h-12 rounded-lg px-5 border-slate-200 border-2 outline-none font-semibold"
        />
        <ValidationError prefix="name" field="name" errors={state.errors} />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
          className="bg-[#8D8D8D]/5 w-[90%] h-12 rounded-lg px-5 border-slate-200 border-2 outline-none font-semibold"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="w-[90%] lg:w-[95%] mx-auto flex justify-center flex-col gap-10">
        <textarea
          id="message"
          name="message"
          placeholder="Your Message:"
          className="bg-[#8D8D8D]/5 w-full h-56 rounded-lg px-5 border-slate-200 border-2 outline-none resize-none font-semibold p-5"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          className=" bg-gradient-to-tr from-genesis-red via-black to-genesis-red px-5 py-3 text-white text-sm outline-none font-semibold tracking-wide rounded-lg w-fit mx-auto"
          disabled={state.submitting}
        >
          SEND MESSAGE
        </button>
      </div>
    </form>
  );
};

export default Form;
