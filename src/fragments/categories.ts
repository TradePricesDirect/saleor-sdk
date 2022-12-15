import gql from "graphql-tag";

export const baseCategoryFragment = gql`
  fragment BaseCategory on Category {
    id
    name
    slug
    seoDescription
    seoTitle
    metafield("featured")
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
