/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UsersPermissionsRoleListResponseDataItemLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesRoles } from './usersPermissionsRoleListResponseDataItemLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesRoles';
import type { UsersPermissionsRoleListResponseDataItemLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesCreatedBy } from './usersPermissionsRoleListResponseDataItemLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesCreatedBy';
import type { UsersPermissionsRoleListResponseDataItemLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesUpdatedBy } from './usersPermissionsRoleListResponseDataItemLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesUpdatedBy';

export type UsersPermissionsRoleListResponseDataItemLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributes = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: UsersPermissionsRoleListResponseDataItemLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesRoles;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UsersPermissionsRoleListResponseDataItemLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesCreatedBy;
  updatedBy?: UsersPermissionsRoleListResponseDataItemLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesUpdatedBy;
};
