/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles } from './routineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles';
import type { RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy } from './routineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy';
import type { RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy } from './routineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy';

export type RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributes = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy;
  updatedBy?: RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy;
};