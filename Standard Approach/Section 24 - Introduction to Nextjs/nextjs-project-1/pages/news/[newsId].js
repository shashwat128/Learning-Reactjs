import { useRouter } from "next/router";

//our-domaim.com/news/something-important

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <h1>Something-Important Page.</h1>;
}

export default DetailPage;
