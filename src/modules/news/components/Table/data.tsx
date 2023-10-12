import { Button } from "antd";
import { Article } from "../../../../redux/api/news/types";
import { ColumnsType } from "antd/es/table";

export type ModifiedArticle = Omit<Article, "source"> & { source: string };
type Params = {
  articles: ModifiedArticle[];
  openModalWithDetails: (data: ModifiedArticle) => void;
};
const dateFilters = [
  { text: "Last 7 Days", value: "7" },
  { text: "Last 30 Days", value: "30" },
  { text: "Last 90 Days", value: "90" },
];
export const returnColumns = ({ articles, openModalWithDetails }: Params) => {
  const uniqueOrigins = new Set();
  const filterOptions = articles
    .filter((article) => {
      if (!uniqueOrigins.has(article.source)) {
        uniqueOrigins.add(article.source);
        return true;
      }
      return false;
    })
    .map((article) => ({ text: article.source, value: article.source }));

  const columns: ColumnsType<ModifiedArticle> = [
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
      filters: filterOptions,
      onFilter: (value, record) =>
        record.source.indexOf(value.toLocaleString()) === 0,

      render: (data, record) => (
        <a href={record.url} target="_blank" rel="noopener noreferrer">
          {data}
        </a>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Publication Date",
      dataIndex: "publishedAt",
      key: "date",
      filters: dateFilters,
      onFilter: (value, record) => {
        const today = new Date();
        const dateToCompare = new Date(record.publishedAt);

        if (value === "7") {
          const sevenDaysAgo = new Date();
          sevenDaysAgo.setDate(today.getDate() - 7);
          return dateToCompare >= sevenDaysAgo && dateToCompare <= today;
        } else if (value === "30") {
          const thirtyDaysAgo = new Date();
          thirtyDaysAgo.setDate(today.getDate() - 30);
          return dateToCompare >= thirtyDaysAgo && dateToCompare <= today;
        } else if (value === "90") {
          const ninetyDaysAgo = new Date();
          ninetyDaysAgo.setDate(today.getDate() - 90);
          return dateToCompare >= ninetyDaysAgo && dateToCompare <= today;
        } else {
          return true;
        }
      },
    },

    {
      title: "Details",
      dataIndex: "details",
      key: "details",
      render: (_, record) => (
        <Button onClick={() => openModalWithDetails(record)}>See more</Button>
      ),
    },
  ];
  return columns;
};
