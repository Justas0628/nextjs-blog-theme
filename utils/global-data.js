export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : '"AtlasToby.fun - Geriausias Minecraft serveris';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'AtlasToby.fun - Geriausias Minecraft serveris';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Pijus daunas. (atsiprasau plz nemusk manes)';

  return {
    name,
    blogTitle,
    footerText,
  };
};
