/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UsersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesUsersDataItemAttributesRole } from './usersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesUsersDataItemAttributesRole';
import type { UsersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesUsersDataItemAttributesCreatedBy } from './usersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesUsersDataItemAttributesCreatedBy';
import type { UsersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesUsersDataItemAttributesUpdatedBy } from './usersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesUsersDataItemAttributesUpdatedBy';

export type UsersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesUsersDataItemAttributes = {
  username?: string;
  email?: string;
  provider?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: UsersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesUsersDataItemAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UsersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesUsersDataItemAttributesCreatedBy;
  updatedBy?: UsersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesUsersDataItemAttributesUpdatedBy;
};
