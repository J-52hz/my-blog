export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

export interface Article {
  ll_id: number;
  ll_title: string;
  ll_titleEng: string;
  ll_introduce: string;
  ll_content: string;
  ll_content_html: string;
  ll_category: number;
  ll_tags: string;
  ll_createdTime: string;
}
