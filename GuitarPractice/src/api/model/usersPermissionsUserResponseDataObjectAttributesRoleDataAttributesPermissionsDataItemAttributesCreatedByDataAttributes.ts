/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UsersPermissionsUserResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles } from './usersPermissionsUserResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles';
import type { UsersPermissionsUserResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy } from './usersPermissionsUserResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy';
import type { UsersPermissionsUserResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy } from './usersPermissionsUserResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy';

export type UsersPermissionsUserResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributes = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: UsersPermissionsUserResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UsersPermissionsUserResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy;
  updatedBy?: UsersPermissionsUserResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy;
};
