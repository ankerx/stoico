import { Col, Card, Statistic } from "antd";

type Props = {
  title: string;
  value: number | undefined;
  isLoading: boolean;
};
export const CardWithData = ({ title, value, isLoading }: Props) => {
  return (
    <Col span={24} xl={8}>
      <Card bordered={true}>
        <Statistic
          title={title.toLocaleUpperCase()}
          value={value ?? "Failed to fetch data"}
          loading={isLoading}
        />
      </Card>
    </Col>
  );
};
