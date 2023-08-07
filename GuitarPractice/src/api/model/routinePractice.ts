/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutinePracticeRoutine } from './routinePracticeRoutine';
import type { RoutinePracticeUser } from './routinePracticeUser';
import type { RoutinePracticeCreatedBy } from './routinePracticeCreatedBy';
import type { RoutinePracticeUpdatedBy } from './routinePracticeUpdatedBy';

export interface RoutinePractice {
  time?: number;
  routine?: RoutinePracticeRoutine;
  user?: RoutinePracticeUser;
  comments?: string;
  numberOfExercises?: number;
  numberOfSkippedExercises?: number;
  expectedTime?: number;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: RoutinePracticeCreatedBy;
  updatedBy?: RoutinePracticeUpdatedBy;
}
