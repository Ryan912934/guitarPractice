/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UsersPermissionsRoleListResponseDataItemAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesRole } from './usersPermissionsRoleListResponseDataItemAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesRole';
import type { UsersPermissionsRoleListResponseDataItemAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedBy } from './usersPermissionsRoleListResponseDataItemAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedBy';
import type { UsersPermissionsRoleListResponseDataItemAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesUpdatedBy } from './usersPermissionsRoleListResponseDataItemAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesUpdatedBy';

export type UsersPermissionsRoleListResponseDataItemAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributes = {
  username?: string;
  email?: string;
  provider?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: UsersPermissionsRoleListResponseDataItemAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UsersPermissionsRoleListResponseDataItemAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedBy;
  updatedBy?: UsersPermissionsRoleListResponseDataItemAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesUpdatedBy;
};
