module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/images');

  eleventyConfig.addFilter("bust", (url) => {
    const [urlPart, paramPart] = url.split("?");
    const params = new URLSearchParams(paramPart || "");
    params.set("v", new Date().toISOString());
    return `${urlPart}?${params}`;
  });

  return {
    dir: { input: 'src', output: 'dist' }
  };
};