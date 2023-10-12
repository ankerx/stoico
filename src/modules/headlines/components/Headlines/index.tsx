import Title from "antd/es/typography/Title";
import {
  categories,
  countries,
  useGetHeadlinesQuery,
} from "../../../../redux/api/news/newsApi";
import { Col, Row } from "antd";
import styles from "./styles.module.css";
import { CardWithData } from "../CardWithData";
export const Headlines = () => {
  const { data, isLoading, isError } = useGetHeadlinesQuery();

  if (isError) return <p>Some error has occured.</p>;

  return (
    <div className={styles.wrapper}>
      <Title>Top Headlines</Title>

      <p className={styles.text}>Number of articles from 3 categories:</p>
      <Row align="middle" gutter={[20, 15]}>
        {categories.map((category, idx) => {
          return (
            <CardWithData
              title={category}
              isLoading={isLoading}
              key={idx}
              value={
                data?.[0].categories && data?.[0].categories[idx]?.totalResults
              }
            />
          );
        })}
      </Row>
      <Col span={24}>
        <p className={styles.text}>Number of articles from 3 countries:</p>
      </Col>
      <Row align="middle" gutter={[20, 15]}>
        {countries.map((country, idx) => {
          return (
            <CardWithData
              title={country}
              isLoading={isLoading}
              key={idx}
              value={
                data?.[1].countries && data?.[1].countries[idx]?.totalResults
              }
            />
          );
        })}
      </Row>
    </div>
  );
};
