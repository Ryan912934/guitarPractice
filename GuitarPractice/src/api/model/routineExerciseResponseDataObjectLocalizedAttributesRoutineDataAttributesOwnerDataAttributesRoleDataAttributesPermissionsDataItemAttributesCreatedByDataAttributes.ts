/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles } from './routineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles';
import type { RoutineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy } from './routineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy';
import type { RoutineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy } from './routineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy';

export type RoutineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributes = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: RoutineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: RoutineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy;
  updatedBy?: RoutineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy;
};