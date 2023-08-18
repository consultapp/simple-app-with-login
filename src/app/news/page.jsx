import Link from "next/link";

export const metadata = {
  title: "Новости",
};

export default async function NewsPage() {
  const url = "https://jsonplaceholder.typicode.com/posts/";
  const news = await (await fetch(url)).json();

  return (
    <>
      <h1>Новости</h1>
      <ul>
        {news.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/news/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
