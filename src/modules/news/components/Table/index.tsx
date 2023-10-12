import { ConfigProvider, Empty, Table } from "antd";
import { ModifiedArticle, returnColumns } from "./data";
import styles from "./styles.module.css";
import { useAppDispatch } from "../../../../redux/hooks";
import { setDetails, toggleModal } from "../../../../redux/features/modalSlice";
import { SingleNewsDetailsModal } from "../SingleNewsDetailsModal";

type Props = {
  isLoading: boolean;
  articles: ModifiedArticle[];
};

export const TableWithNews = ({ isLoading, articles }: Props) => {
  const dispatch = useAppDispatch();

  const openModalWithDetails = (article: ModifiedArticle) => {
    dispatch(setDetails(article));
    dispatch(toggleModal(true));
  };

  const columns = returnColumns({ articles, openModalWithDetails });
  return (
    <>
      <ConfigProvider
        renderEmpty={() => (
          <Empty
            description={
              isLoading
                ? "Searching for articles..."
                : "We couldn't find any articles."
            }
          />
        )}
      >
        <Table
          className={styles.table}
          columns={columns}
          dataSource={articles}
          pagination={{ defaultPageSize: 20 }}
          loading={isLoading}
          rowKey={(data) => data.title}
        />
        <SingleNewsDetailsModal />
      </ConfigProvider>
    </>
  );
};
