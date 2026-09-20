const images = import.meta.glob("../assets/images/*.{jpg,png,webp,mp4}", {
  eager: true,
});
const video = import.meta.glob("../assets/video/*.{webp,mp4}", {
  eager: true,
});
const icons = import.meta.glob("../assets/icons/*.svg", { eager: true });

const imagePaths = Object.fromEntries(
  Object.entries(images).map(([path, module]) => [
    path.split("/").pop().split(".")[0],
    module.default,
  ]),
);
const videoPath = Object.fromEntries(
  Object.entries(video).map(([path, module]) => [
    path.split("/").pop().split(".")[0],
    module.default,
  ]),
);

const iconPaths = Object.fromEntries(
  Object.entries(icons).map(([path, module]) => [
    path.split("/").pop().split(".")[0],
    module.default,
  ]),
);

export { imagePaths, iconPaths, videoPath };
