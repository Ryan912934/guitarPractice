/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UploadFolderListResponseDataItemLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles } from './uploadFolderListResponseDataItemLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles';
import type { UploadFolderListResponseDataItemLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy } from './uploadFolderListResponseDataItemLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy';
import type { UploadFolderListResponseDataItemLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy } from './uploadFolderListResponseDataItemLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy';

export type UploadFolderListResponseDataItemLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributes = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: UploadFolderListResponseDataItemLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UploadFolderListResponseDataItemLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy;
  updatedBy?: UploadFolderListResponseDataItemLocalizedAttributesParentDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy;
};
