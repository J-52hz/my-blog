import Plum from '@/components/plum';
import { getAllArticle } from '@/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Article } from '@/types';

const BlogListContainer = styled.article`
  max-width: 65ch;
  margin: 0 auto;
  .tag {
    font-size: 1.875rem;
    margin: 0 auto;
  }
  .article {
    font-size: 1.125rem;
    margin: 0px auto 0;
    .tag {
      margin-bottom: 2rem;
    }
    .article_item {
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;

      .title {
        opacity: 0.6;
        transition: 0.2s;
        line-height: 1.75;
      }
      .time {
        font-size: 0.75rem;
        opacity: 0.5;
      }
      .title:hover {
        opacity: 1;
      }
    }
  }
`;

const Blog = () => {
  const [articleList, setArticleList] = useState<Article[]>();

  // 获取文章
  const getArticle = async () => {
    const res = await getAllArticle();
    if (res) {
      const list = res.data.map((i: Article) => {
        const data = new Date(i.ll_createdTime);
        i.ll_createdTime = data.toDateString();
        return i;
      });
      console.log(list[1].ll_createdTime);
      setArticleList(list);
    }
  };
  useEffect(() => {
    getArticle();
  }, []);

  const jumpToArticle = () => {
    console.log('111');
  };

  return (
    <BlogListContainer>
      <div className="article">
        <div className="tag">
          <span>Blog</span>
        </div>
        {articleList &&
          articleList.map((i) => (
            <div className="article_item" key={i.ll_id} onClick={jumpToArticle}>
              <Link to={`/posts/${i.ll_titleEng}`} state={{ ll_id: i.ll_id }}>
                <span className="title">{i.ll_title}</span>
                <div className="time">{i.ll_createdTime}</div>
              </Link>
            </div>
          ))}
      </div>
      <Plum></Plum>
    </BlogListContainer>
  );
};

export default Blog;
