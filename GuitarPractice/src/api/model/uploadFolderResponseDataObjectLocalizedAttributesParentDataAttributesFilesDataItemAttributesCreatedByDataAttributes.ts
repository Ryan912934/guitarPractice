/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UploadFolderResponseDataObjectLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles } from './uploadFolderResponseDataObjectLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles';
import type { UploadFolderResponseDataObjectLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy } from './uploadFolderResponseDataObjectLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy';
import type { UploadFolderResponseDataObjectLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy } from './uploadFolderResponseDataObjectLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy';

export type UploadFolderResponseDataObjectLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributes = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: UploadFolderResponseDataObjectLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UploadFolderResponseDataObjectLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy;
  updatedBy?: UploadFolderResponseDataObjectLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy;
};