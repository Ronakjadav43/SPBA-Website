export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large: ImageFormats;
    small: ImageFormats;
    medium: ImageFormats;
    thumbnail: ImageFormats;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface SectionItem {
  multipleMedia: string | null;
  id: number;
  documentId: string;
  title: string;
  subTitle: string | null;
  date: string | null;
  details: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
  uploadDocument: string | null;
  URL: string | null;
}

export interface SectionType {
  id: number;
  documentId: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Section {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  section_items: SectionItem[];
  type: SectionType;
}

export interface Page {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  sections: Section[];
}

export interface HomeData {
  sections: Section[];
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  page: Page;
  og_title: string;
  og_description: string;
  og_image: Images[];
  og_url: string;
  og_type: string;
}

export interface Menutype {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  sub_menus: SubMenuItem[];
  slug: string;
}

export interface SubMenuItem {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  page: Page | null;
  menu: Menutype;
}

// ogTag
export type Images = {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null | object; // Assuming provider_metadata can be an object or null
  created_at: string; // or Date if you plan to parse it later
  updated_at: string; // or Date if you plan to parse it later
  created_by: null | string; // Assuming it can be null or a string
  updated_by: null | string; // Assuming it can be null or a string
};

export type ImageFormats = {
  url: string;
  small: ImageFormatDetails;
  medium: ImageFormatDetails;
  large: ImageFormatDetails;
  thumbnail: ImageFormatDetails;
};

export type ImageFormatDetails = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
};

export interface StrapiSEO {
  og_title: string;
  og_description: string;
  og_image: Image;
  og_url: string;
  og_type: string;
}

export interface StrapiArticle {
  id: number;
  attributes: StrapiSEO & {
    title: string;
    content: string;
  };
}
