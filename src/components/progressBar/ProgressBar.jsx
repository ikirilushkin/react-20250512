"use client";

import { useEffect, useState } from "react";
import styles from "./progressBar.module.css";

export const ProgressBar = () => {
  const [progressWidth, setProgressWidth] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setProgressWidth(
        (window.pageYOffset /
          (document.body.scrollHeight - window.innerHeight)) *
          100
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.progress}
        style={{
          width: progressWidth + "%",
        }}
      />
    </div>
  );
};
