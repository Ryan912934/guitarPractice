/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesRelated } from './routineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesRelated';
import type { RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesFolder } from './routineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesFolder';
import type { RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedBy } from './routineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedBy';
import type { RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedBy } from './routineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedBy';

export type RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributes = {
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: unknown;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: unknown;
  related?: RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesRelated;
  folder?: RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesFolder;
  folderPath?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesCreatedBy;
  updatedBy?: RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolderDataAttributesFilesDataItemAttributesUpdatedBy;
};
