"use client";

import Project from "@/components/project/project";
import { useState } from "react";
import styles from "@/app/styles.module.scss";
import Modal from "@/components/modal/modal";

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
  },
];

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="min-h-screen grid place-items-center p-4">
      <div className="flex flex-col max-w-6xl w-full ">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            index={index}
            setModal={setModal}
          />
        ))}
      </div>
      <Modal
        modal={modal}
        projects={projects}
      />
    </main>
  );
}
