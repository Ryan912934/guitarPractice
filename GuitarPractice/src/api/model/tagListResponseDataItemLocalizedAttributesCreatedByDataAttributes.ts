/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { TagListResponseDataItemLocalizedAttributesCreatedByDataAttributesRoles } from './tagListResponseDataItemLocalizedAttributesCreatedByDataAttributesRoles';
import type { TagListResponseDataItemLocalizedAttributesCreatedByDataAttributesCreatedBy } from './tagListResponseDataItemLocalizedAttributesCreatedByDataAttributesCreatedBy';
import type { TagListResponseDataItemLocalizedAttributesCreatedByDataAttributesUpdatedBy } from './tagListResponseDataItemLocalizedAttributesCreatedByDataAttributesUpdatedBy';

export type TagListResponseDataItemLocalizedAttributesCreatedByDataAttributes = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: TagListResponseDataItemLocalizedAttributesCreatedByDataAttributesRoles;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: TagListResponseDataItemLocalizedAttributesCreatedByDataAttributesCreatedBy;
  updatedBy?: TagListResponseDataItemLocalizedAttributesCreatedByDataAttributesUpdatedBy;
};
