import { ContactUsForm } from "../contact-us-form/ContactUsForm";

export const ContactUs = () => {
  return (
    <div className="bg-[#054166] p-10 flex flex-col" id="contact">
      <div className="flex flex-col">
        <div className="flex flex-row leading-none gap-4 justify-center text-white w-full">
          <p className="text-[40px] mt-4">Let’s</p>
          <p className="text-[60px] font-semibold">detect, analyze, secure</p>
          <p className="text-[40px] mt-4">your</p>
        </div>
        <p className="text-[40px] text-white self-center">
          punctures together.
        </p>
      </div>
      <ContactUsForm />
    </div>
  );
};