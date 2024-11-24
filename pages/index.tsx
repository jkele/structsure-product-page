import { ContactUs } from "@/src/components/contact-us/ContactUs";
import { Navbar } from "@/src/components/navbar/Navbar";
import { Services } from "@/src/components/services/Services";
import { Testimonials } from "@/src/components/testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#F3FAFF] w-full" id="home">
      <Navbar />
      <div className="w-full h-[700px] relative">
        <div className="w-full h-full z-10 bg-[#0B0C3A61] absolute"></div>
        <Image
          src={"/images/homepage.jpg"}
          fill
          alt=""
          className="object-cover object-center"
        />
      </div>

      <div className="absolute z-10 leading-none text-white text-[50px] left-6 top-[250px] lg:text-[90px] lg:left-[84px] lg:top-[300px] font-black">
        <p>Ensuring safety</p>
        <p>from the ground up.</p>
      </div>
      <div className="absolute z-10 top-[500px] lg:top-[550px] py-4 px-10 bg-white/80 leading-tight">
        <p className="text-[24px] lg:text-[40px]">
          Platform that helps organize, manage and resolve punctures in civil
          engineering projects, precisely and efficiently.
        </p>
      </div>
      <div
        id="aboutUs"
        className="flex flex-col text-center text-[18px] px-4 lg:px-0 lg:text-[24px] gap-10 lg:w-[700px] self-center py-[60px] lg:py-[100px]"
      >
        <p>
          &quot;At StructSure, we specialize in advanced management of puncture
          analysis for civil engineering projects.
        </p>
        <p>
          Our technology ensures the highest level of structural integrity,
          helping you detect and address potential issues before they become
          costly problems.
        </p>
        <p>
          Partnering with our precise and reliable solutions, you can build with
          confidence, knowing your structures are safe and secure.”
        </p>
      </div>

      <div className="w-full h-[300px ] lg:h-[700px] relative">
        <Image src={"/images/app.png"} fill alt="" className="object-contain" />
      </div>
      <div>
        <Services />
      </div>
      <Testimonials />
      <div id="contactUs">
        <ContactUs />
      </div>
      <div className="w-full h-[150px] lg:h-[400px] relative">
        <Image
          src={"/images/skyline.png"}
          fill
          alt=""
          className="object-contain"
        />
      </div>
    </div>
  );
}
