/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesRelated } from './routineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesRelated';
import type { RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolder } from './routineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolder';
import type { RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesCreatedBy } from './routineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesCreatedBy';
import type { RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesUpdatedBy } from './routineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesUpdatedBy';

export type RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributes = {
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
  related?: RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesRelated;
  folder?: RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesFolder;
  folderPath?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesCreatedBy;
  updatedBy?: RoutineExerciseResponseDataObjectLocalizedAttributesExerciseDataAttributesTabDataAttributesUpdatedBy;
};