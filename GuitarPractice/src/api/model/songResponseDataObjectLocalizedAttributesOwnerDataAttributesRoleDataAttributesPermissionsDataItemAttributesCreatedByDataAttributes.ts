/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles } from './songResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles';
import type { SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy } from './songResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy';
import type { SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy } from './songResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy';

export type SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributes = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy;
  updatedBy?: SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy;
};