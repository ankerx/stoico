import { ConfigProvider, Empty, Table } from "antd";
import { ModifiedArticle, returnColumns } from "./data";
import styles from "./styles.module.css";
type Props = {
  isLoading: boolean;
  articles: ModifiedArticle[];
};
export const TableWithNews = ({ isLoading, articles }: Props) => {
  const columns = returnColumns(articles);
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
      </ConfigProvider>
    </>
  );
};
