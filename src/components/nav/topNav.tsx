"use client";

import LanguageToggle from "@/components/languageToggle/languageToggle";
import ContactFormWrapper from "@/components/forms/contactFormWrapper";
import { useScrollPosition } from "@/utilities/useScrollPosition";

const TopNav = () => {
  const position = useScrollPosition();
  console.log(position);

  return (
    <div
      className={`fixed left-0 top-0 z-10 flex w-full items-center justify-between p-4 ${
        position > 0 ? "bg-white shadow-md" : ""
      }`}
    >
      <LanguageToggle />

      <ContactFormWrapper />
    </div>
  );
};

export default TopNav;
