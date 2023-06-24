/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UsersPermissionsUserResponseDataObjectAttributesRole } from './usersPermissionsUserResponseDataObjectAttributesRole';
import type { UsersPermissionsUserResponseDataObjectAttributesCreatedBy } from './usersPermissionsUserResponseDataObjectAttributesCreatedBy';
import type { UsersPermissionsUserResponseDataObjectAttributesUpdatedBy } from './usersPermissionsUserResponseDataObjectAttributesUpdatedBy';

export type UsersPermissionsUserResponseDataObjectAttributes = {
  username?: string;
  email?: string;
  provider?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: UsersPermissionsUserResponseDataObjectAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UsersPermissionsUserResponseDataObjectAttributesCreatedBy;
  updatedBy?: UsersPermissionsUserResponseDataObjectAttributesUpdatedBy;
};
