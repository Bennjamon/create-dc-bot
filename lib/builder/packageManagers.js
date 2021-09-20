export const npm = {
  get executable() {
    return /^win/.test(process.platform) ? "npm.cmd" : "npm";
  },
  args: ["install"],
};

export const yarn = {
  get executable() {
    return /^win/.test(process.platform) ? "yarn.cmd" : "yarn";
  },
  args: ["install"],
};
