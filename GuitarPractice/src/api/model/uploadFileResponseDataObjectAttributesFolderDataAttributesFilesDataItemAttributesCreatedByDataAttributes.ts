/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UploadFileResponseDataObjectAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles } from './uploadFileResponseDataObjectAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles';
import type { UploadFileResponseDataObjectAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy } from './uploadFileResponseDataObjectAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy';
import type { UploadFileResponseDataObjectAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy } from './uploadFileResponseDataObjectAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy';

export type UploadFileResponseDataObjectAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributes = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: UploadFileResponseDataObjectAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesRoles;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UploadFileResponseDataObjectAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesCreatedBy;
  updatedBy?: UploadFileResponseDataObjectAttributesFolderDataAttributesFilesDataItemAttributesCreatedByDataAttributesUpdatedBy;
};
