/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: t8OJ9q22abDCL1ZFUzCjL00/hn78FngEkVnSpY2nmuGtYCbrRamuggen2KTLmDJd7u2MiHdYAQbx4jo1fVfhCA==
 */

// eslint:disable
// tslint:disable

import User from './users';

interface Photo {
  caption: string | null;
  cdn_url: string & {__brand?: 'url'};
  id: number & {readonly __brand?: 'photos_id'};
  metadata: unknown;
  owner_user_id: User['id'];
}
export default Photo;

interface Photos_InsertParameters {
  caption?: string | null;
  cdn_url: string & {__brand?: 'url'};
  id?: number & {readonly __brand?: 'photos_id'};
  metadata: unknown;
  owner_user_id: User['id'];
}
export {Photos_InsertParameters};
