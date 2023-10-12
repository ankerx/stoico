import { Modal } from "antd";
import {
  selectDetailsOfArticle,
  selectIsModalOpen,
  toggleModal,
} from "../../../../redux/features/modalSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import styles from "./styles.module.css";
export const SingleNewsDetailsModal = () => {
  const dispatch = useAppDispatch();
  const details = useAppSelector(selectDetailsOfArticle);
  const isModalOpen = useAppSelector(selectIsModalOpen);

  const closeModal = () => {
    dispatch(toggleModal(false));
  };
  return (
    <Modal
      title="Article details"
      open={isModalOpen}
      footer={null}
      onCancel={closeModal}
    >
      <div className={styles["text-wrapper"]}>
        <p>{details.author ?? "Author not known"}</p>
        <p>{details.publishedAt}</p>
      </div>

      <p className={styles.title}> {details.title}</p>

      {details.urlToImage && (
        <div className={styles["img-wrapper"]}>
          <img src={details.urlToImage} alt={details.title} />
        </div>
      )}

      <p>{details.content}</p>
      <a href={details.url} target="_blank" rel="noopener noreferrer">
        See full article
      </a>
    </Modal>
  );
};
