import React from "react";

const BookPage: React.FC<{
  params: Promise<{
    id: string;
  }>;
}> = async ({ params }) => {
  const { id } = await params;
  return <div>book/[{id}] page입니다</div>;
};

export default BookPage;
