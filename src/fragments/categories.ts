import gql from "graphql-tag";

export const baseCategoryFragment = gql`
  fragment BaseCategory on Category {
    id
    name
    slug
    seoDescription
    seoTitle
    featured: metafield(key: "featured")
  }
`;

export const categoryFragment = gql`
  ${baseCategoryFragment}
  fragment CategoryDetails on Category {
    ...BaseCategory
    backgroundImage {
      alt
      url
    }
    description
  }
`;
