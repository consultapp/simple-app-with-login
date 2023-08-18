import { notFound } from "next/navigation";

async function getNewsById(id) {
  const url = "https://jsonplaceholder.typicode.com/posts/?id=" + id;
  const data = await fetch(url);
  const json = await data.json();

  return json;
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const news = await getNewsById(id);

  console.log("news", news);
  if (!news || !news.length) return notFound();

  const { title } = news[0];

  return {
    title: title,
  };
}

export default async function NewsPageById({ params }) {
  const { id } = params;
  const news = await getNewsById(id);

  if (!news || !news.length) return notFound();

  const { title, body } = news[0];
  return (
    <>
      <h1>{title}</h1>
      {body}
    </>
  );
}
