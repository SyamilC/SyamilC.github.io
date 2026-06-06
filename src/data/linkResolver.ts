import { downloads } from "./assetManifest";
import type { LinkItem } from "./portfolio";

export function resolveLink(link?: LinkItem) {
  if (!link) {
    return undefined;
  }

  if (link.downloadKey) {
    return downloads[link.downloadKey];
  }

  return link.href;
}

export function isDownloadLink(link?: LinkItem) {
  return Boolean(link?.downloadKey);
}
