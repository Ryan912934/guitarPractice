/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { TagResponseDataObjectLocalizedAttributesCreatedByDataAttributesRoles } from './tagResponseDataObjectLocalizedAttributesCreatedByDataAttributesRoles';
import type { TagResponseDataObjectLocalizedAttributesCreatedByDataAttributesCreatedBy } from './tagResponseDataObjectLocalizedAttributesCreatedByDataAttributesCreatedBy';
import type { TagResponseDataObjectLocalizedAttributesCreatedByDataAttributesUpdatedBy } from './tagResponseDataObjectLocalizedAttributesCreatedByDataAttributesUpdatedBy';

export type TagResponseDataObjectLocalizedAttributesCreatedByDataAttributes = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: TagResponseDataObjectLocalizedAttributesCreatedByDataAttributesRoles;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: TagResponseDataObjectLocalizedAttributesCreatedByDataAttributesCreatedBy;
  updatedBy?: TagResponseDataObjectLocalizedAttributesCreatedByDataAttributesUpdatedBy;
};
