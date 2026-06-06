export type ImageAsset = {
  src: string;
  alt: string;
  title: string;
};

const projectImageModules = import.meta.glob("../assets/{Taskomon,While Play TD,Kingdom of Gluttony,Jumpy Beaw}/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const designImageModules = import.meta.glob("../assets/GD/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const projectFolders = {
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
