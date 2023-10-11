import { useGetNewsQuery } from "./redux/api/news/newsApi";

function App() {
  const { data, isLoading, isError } = useGetNewsQuery({
    sortBy: "popularity",
    lng: "en",
    searchQuery: "USA",
  });

  if (isLoading) return <p>Loading..</p>;
  if (isError) return <p>Some error has occured.</p>;
  if (!data) return <p>We couldn't find any articles</p>;

  return (
    <>
      {data.articles.map((news, idx) => {
        return <p key={idx}>{news.title}</p>;
      })}
    </>
  );
}

export default App;
