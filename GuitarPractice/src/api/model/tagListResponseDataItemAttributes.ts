/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { TagListResponseDataItemAttributesCreatedBy } from './tagListResponseDataItemAttributesCreatedBy';
import type { TagListResponseDataItemAttributesUpdatedBy } from './tagListResponseDataItemAttributesUpdatedBy';

export type TagListResponseDataItemAttributes = {
  name?: string;
  description?: string;
  info?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: TagListResponseDataItemAttributesCreatedBy;
  updatedBy?: TagListResponseDataItemAttributesUpdatedBy;
};
