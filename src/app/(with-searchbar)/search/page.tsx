import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { BookData } from "@/types";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search ?q=${q}`,
    {
      cache: "force-cache", // 캐시를 사용하여 검색 결과를 빠르게 가져옴
    }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다. ...</div>;
  }

  const books: BookData[] = await response.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
