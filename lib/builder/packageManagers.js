export const npm = {
  get executable() {
    return /^win/.test(process.platform) ? "npm.cmd" : "npm";
  },
  args: ["install"],
};

export const yarn = {
  executable: "yarn",
  args: ["add"],
};
