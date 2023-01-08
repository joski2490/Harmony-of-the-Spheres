import { useStaticQuery, graphql } from "gatsby";

export default (): {
  title: string;
  authur: string;
  lang: string;
  description: string;
} => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            title
            lang
          }
        }
      }
    `
  );

  return site.siteMetadata;
};
