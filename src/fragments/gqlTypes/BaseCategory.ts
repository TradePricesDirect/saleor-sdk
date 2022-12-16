/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BaseCategory
// ====================================================

import { MetadataFilter } from "src";
export interface BaseCategory {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  seoDescription: string | null;
  seoTitle: string | null;
  metadata?: (MetadataFilter | null)[] | null
}
