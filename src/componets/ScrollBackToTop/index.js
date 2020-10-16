import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollBackToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollBackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div className="scroll-to-top cursor-pointer" onClick={scrollBackToTop}>
      <AiOutlineArrowUp className="icon" />
    </div>
  );
};

export default ScrollBackToTop;
