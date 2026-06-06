export type ImageAsset = {
  src: string;
  alt: string;
  title: string;
};

const projectImageModules = import.meta.glob(
  "../assets/{Taskomon,While Play TD,Kingdom of Gluttony,Jumpy Beaw,Finzen}/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
) as Record<string, string>;

const designImageModules = import.meta.glob("../assets/GD/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const photographyImageModules = import.meta.glob("../assets/Photography/*.{png,jpg,jpeg,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const projectFolders = {
  finzen: "Finzen",
  "jumpy-beaw": "Jumpy Beaw",
  "kingdom-of-gluttony-alpha": "Kingdom of Gluttony",
  taskomon: "Taskomon",
  "while-play-tower-defense": "While Play TD",
};

export const projectImages = Object.fromEntries(
  Object.entries(projectFolders).map(([slug, folder]) => [
    slug,
    filesFromFolder(projectImageModules, folder).map((asset) => ({
      ...asset,
      alt: `${asset.title} screenshot for ${folder}`,
    })),
  ]),
) as Record<string, ImageAsset[]>;

export const graphicDesignGallery = filesFromFolder(designImageModules, "GD");
export const photographyGallery = filesFromFolder(photographyImageModules, "Photography").map((asset) => ({
  ...asset,
  alt: `${asset.title} photography work by Syamil Asyraf Bin Mohd Ali Jaafar`,
}));

export const downloads = {
  holowedApk: new URL("../downloadable/HaloWedDownload.apk", import.meta.url).href,
  resume: new URL("../downloadable/RESUME SYAMIL ASYRAF BIN MOHD ALI JAAFAR (2).pdf", import.meta.url).href,
};

function filesFromFolder(modules: Record<string, string>, folder: string) {
  return Object.entries(modules)
    .filter(([path]) => path.includes(`/assets/${folder}/`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
    .map(([path, src]) => {
      const fileName = path.split("/").at(-1) ?? "Design asset";
      const title = titleFromFileName(fileName);

      return {
        src,
        title,
        alt: title,
      };
    });
}

function titleFromFileName(fileName: string) {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
