import axios from './request';

// 获取文章列表
interface Pagination {
  pageNum: number;
  pageSize: number;
  ll_title?: string;
  ll_category?: string;
}
export const getArticleList = (params: Pagination) => {
  return axios.post('/api/article/getArticleList', params);
};

// 获取所有文章
export const getAllArticle = () => {
  return axios.post('admin/api/article/getAllArticle');
};

// 获取单篇文章
interface ArticleId {
  ll_id: number;
}
export const getArticleById = (params: ArticleId) => {
  return axios.post('admin/api/article/getArticleById', params);
};

export const getArticleByName = (params: { ll_titleEng: string }) => {
  return axios.post('admin/api/article/getArticleByName', params);
};
