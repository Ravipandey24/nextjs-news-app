"use client";

import { ArticleType } from "@/types/api";
import { FC, useEffect, useState } from "react";
import { useDataContext } from "../providers/DataContext";
import { getRequestedArticles, getTopUSArticles } from "@/lib/api/queries";
import ArticleSkeleton from "../ui/ArticleSkeleton";
import ErrorCard from "../cards/ErrorCard";
import ArticleCard from "../cards/ArticleCard";

const ArticleSection = () => {
  const { state, dispatch } = useDataContext()!;
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      if (!state.query) {
        const articles = await getTopUSArticles(state.date);
        setArticles(articles);
      } else {
        const articles = await getRequestedArticles(state.query, state.date);
        setArticles(articles);
      }
      setLoading(false);
    }
    fetchData();
  }, [state.date, state.query]);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {!isLoading
        ? articles.map((articleData, i) => (
            <ArticleCard
              key={i + articleData.title}
              articleData={articleData}
            ></ArticleCard>
          ))
        : Array(9)
            .fill(0)
            .map((_, i) => (
              <ArticleSkeleton key={"skeleton" + i}></ArticleSkeleton>
            ))}
    </div>
  );
};

export default ArticleSection;
