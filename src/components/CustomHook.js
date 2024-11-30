import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CustomHook = (refTab = null, refDivs = null) => {
  const activeTab = useSelector((state) => state.activeTab);

  useEffect(() => {
    // التحقق من refTab
    if (refTab && refTab.current) {
      if (refTab.current.classList.contains(activeTab)) {
        refTab.current.scrollIntoView({ behavior: "smooth" });
      }
    }

    // التحقق من refDivs
    if (refDivs && refDivs.current) {
      // إضافة تأثير التحريك للعناصر
      refDivs.current.forEach((div) => {
        if (div instanceof HTMLElement) {
          div.classList.add("animation");
        }
      });

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        refDivs.current.forEach((div) => {
          if (div instanceof HTMLElement) {
            const offsetTop = div.getBoundingClientRect().top + scrollPosition;
            
            if (scrollPosition >= offsetTop - (window.innerHeight / 4*3)) {
              div.classList.add("active");
            } else {
              div.classList.remove("active");
            }
          }
        });
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [activeTab, refTab, refDivs]);
};

export default CustomHook;
