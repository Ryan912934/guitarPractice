/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UploadFileListResponseDataItemLocalizedAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles } from './uploadFileListResponseDataItemLocalizedAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles';
import type { UploadFileListResponseDataItemLocalizedAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy } from './uploadFileListResponseDataItemLocalizedAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy';
import type { UploadFileListResponseDataItemLocalizedAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy } from './uploadFileListResponseDataItemLocalizedAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy';

export type UploadFileListResponseDataItemLocalizedAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributes = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: UploadFileListResponseDataItemLocalizedAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UploadFileListResponseDataItemLocalizedAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy;
  updatedBy?: UploadFileListResponseDataItemLocalizedAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy;
};
