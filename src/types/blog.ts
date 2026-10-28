export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogTableOfContentsItem {
  id: string;
  title: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  author: BlogAuthor;
  coverImage: string;
  tableOfContents: BlogTableOfContentsItem[];
  keyTakeaways: string[];
  content: {
    sectionId: string;
    heading: string;
    subheading?: string;
    paragraphs: string[];
    callout?: {
      type: 'quote' | 'highlight' | 'insight';
      text: string;
      citation?: string;
    };
    bulletPoints?: string[];
  }[];
}
