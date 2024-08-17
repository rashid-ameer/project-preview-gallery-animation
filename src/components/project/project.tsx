import styles from "@/components/project/styles.module.scss";

type ProjectProps = {
  title: string;
  index: number;
  setModal: (modal: { active: boolean; index: number }) => void;
};
function Project({ title, index, setModal }: ProjectProps) {
  return (
    <div
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className={styles.project}>
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
}
export default Project;
