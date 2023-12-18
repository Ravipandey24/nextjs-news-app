import HeadingCard from "@/components/cards/HeadingCard";
import ArticleSection from "@/components/layout/article-section";


const page = async ({}) => {
  return (
    <div className="my-4 mx-auto container">
        <HeadingCard></HeadingCard>
      <ArticleSection></ArticleSection>
    </div>
  );
};


export default page;
