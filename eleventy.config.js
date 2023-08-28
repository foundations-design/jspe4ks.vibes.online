module.exports = (eleventyConfig) => {
   eleventyConfig.addPassthroughCopy({
      "node_modules/@fontsource-variable/fraunces": "assets/fonts/fraunces",
      "src/static": ".",
   });

   return {
      dir: {
         input: "./src",
         output: "./dist",
      },
   };
};
