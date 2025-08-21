import { HomeData, Images } from "@/types";
import moment from "moment";

export const formatUrl = (title: string, date?: Date) => {
  const regex = /[ !"#$%&'.()*+,/:;=?@[\]\\^`{|}~]+/g;
  let formatTitle = title.toLowerCase().replace(regex, "-");

  if (!date) return formatTitle;

  formatTitle = formatTitle[0] === "-" ? formatTitle.slice(1) : formatTitle;
  formatTitle =
    formatTitle[formatTitle.length - 1] === "-"
      ? formatTitle.slice(0, -1)
      : formatTitle;

  return `${moment(date).format("YYYY-MM-DD")}-${formatTitle}`;
};

export const imgUrl = (src: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/${src}`;
};

export const formImageUrl = (tileImage?: Images[]): string | "" => {
  if (!tileImage || tileImage.length === 0) return "";

  const firstImage = tileImage[0];

  const src =
    firstImage.formats.large?.url ||
    firstImage.formats.medium?.url ||
    firstImage.formats.small?.url ||
    firstImage.formats.thumbnail?.url;
  return src ? imgUrl(src) : "";
};

export const getOgImage = (document: HomeData) => {
  const { og_image } = document;

  if (og_image && og_image.length > 0)
    return imgUrl(og_image[0].formats.small.url);

  return "";
};
