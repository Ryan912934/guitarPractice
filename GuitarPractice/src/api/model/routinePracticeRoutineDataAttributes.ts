/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutinePracticeRoutineDataAttributesUser } from './routinePracticeRoutineDataAttributesUser';
import type { RoutinePracticeRoutineDataAttributesCreatedBy } from './routinePracticeRoutineDataAttributesCreatedBy';
import type { RoutinePracticeRoutineDataAttributesUpdatedBy } from './routinePracticeRoutineDataAttributesUpdatedBy';

export type RoutinePracticeRoutineDataAttributes = {
  name?: string;
  user?: RoutinePracticeRoutineDataAttributesUser;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: RoutinePracticeRoutineDataAttributesCreatedBy;
  updatedBy?: RoutinePracticeRoutineDataAttributesUpdatedBy;
};