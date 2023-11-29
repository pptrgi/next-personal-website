"use client";

import { useEffect } from "react";

const useClickOutsideClose = (domNodeRef, menuCloseHandler) => {
  useEffect(() => {
    // click outside event handler
    const clickEventHandler = (event) => {
      if (!domNodeRef.current?.contains(event.target)) {
        menuCloseHandler();
      }
    };

    // click event listener
    document.addEventListener("mousedown", clickEventHandler);

    // remove the event listener when menu was opened and the handler closes it
    return () => document.removeEventListener("mousedown", clickEventHandler);
  }, []);

  return domNodeRef;
};

export default useClickOutsideClose;
