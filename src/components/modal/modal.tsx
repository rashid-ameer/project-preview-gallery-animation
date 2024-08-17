import Image from "next/image";
import styles from "@/components/modal/style.module.scss";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type ModalProps = {
  modal: { active: boolean; index: number };
  projects: { title: string; src: string; color: string }[];
};

const variants = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
  close: { x: "-50%", y: "-50%", scale: 0 },
};

function Modal({ modal, projects }: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerX = gsap.quickTo(containerRef.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const containerY = gsap.quickTo(containerRef.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const cursorX = gsap.quickTo(cursorRef.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const cursorY = gsap.quickTo(cursorRef.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const cursorLabelX = gsap.quickTo(cursorLabelRef.current, "left", {
      duration: 0.4,
      ease: "power3",
    });
    const cursorLabelY = gsap.quickTo(cursorLabelRef.current, "top", {
      duration: 0.4,
      ease: "power3",
    });

    function setMouseDimension(e: MouseEvent) {
      const { clientX, clientY } = e;
      containerX(clientX);
      containerY(clientY);
      cursorX(clientX);
      cursorY(clientY);
      cursorLabelX(clientX);
      cursorLabelY(clientY);
    }

    window.addEventListener("mousemove", setMouseDimension);

    return () => window.removeEventListener("mousemove", setMouseDimension);
  }, []);

  return (
    <>
      <motion.div
        variants={variants}
        initial="initial"
        animate={modal.active ? "open" : "close"}
        className={styles.modalContainer}
        ref={containerRef}>
        <div
          className={styles.modalSlider}
          style={{ top: modal.index * -100 + "%" }}>
          {projects.map((project) => {
            const { src, color } = project;

            return (
              <div
                className={styles.modal}
                key={src}
                style={{ backgroundColor: color }}>
                <Image
                  src={`/images/${src}`}
                  alt="image"
                  width={300}
                  height={0}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        animate={modal.active ? "open" : "close"}
        className={styles.cursor}
        ref={cursorRef}
      />
      <motion.div
        variants={variants}
        initial="initial"
        animate={modal.active ? "open" : "close"}
        className={styles.cursorLabel}
        ref={cursorLabelRef}>
        View
      </motion.div>
    </>
  );
}
export default Modal;
