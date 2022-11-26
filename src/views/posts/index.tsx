import { Link, useParams } from 'react-router-dom';
import { getArticleByName } from '@/api';
import { useEffect } from 'react';
import { useState } from 'react';
import marked from '@/utils/markdown';
import { ArticleContainer } from './style';
import MarkDownStyle from '@/components/themeProvider/MarkDownStyle';

const Posts = () => {
  const { ll_titleEng } = useParams();
  const [article, setArticle] = useState<string>();

  const getArticle = async () => {
    const res = ll_titleEng && (await getArticleByName({ ll_titleEng }));
    if (res) {
      console.log(res);
      const article = marked(res.data.ll_content);
      setArticle(article);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <ArticleContainer>
      <MarkDownStyle />
      <article
        className="font-sans"
        dangerouslySetInnerHTML={{
          __html: article!
        }}
      ></article>
      <Link to="/blog">cd..</Link>
    </ArticleContainer>
  );
};
export default Posts;
