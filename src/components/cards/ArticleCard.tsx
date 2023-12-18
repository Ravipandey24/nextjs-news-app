'use client'

import { FC } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import { ArticleType } from "@/types/api";
import { Link } from "@chakra-ui/next-js";
import { formatISODate } from "@/lib/uitls";

interface CardProps {
  articleData: ArticleType;
}

const ArticleCard: FC<CardProps> = ({ articleData }) => {
  return (
    <Card maxW="lg">
      <CardBody>
        <Image
          src={articleData.urlToImage}
          alt="image"
          borderRadius="lg"
          loading="lazy"
        />
        <Stack mt="6" spacing="3">
          <Link href={articleData.url} size="md" target="_blank">
            <h3 className="text-lg teal.500 font-semibold">{articleData.title}</h3>
          </Link>
          <Text>{articleData.description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <div className="w-full flex justify-between">
          <Text color="teal.600" fontSize="medium">
            {articleData.source.name}
          </Text>
          <Text fontSize="medium">{formatISODate(articleData.publishedAt)}</Text>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
