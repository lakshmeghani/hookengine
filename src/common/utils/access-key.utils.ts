import * as crypto from 'crypto';

// defining a type-safe medium as a DTO
export interface GeneratedKey {
  rawKey: string;
  hashedKey: string;
}

// generate the hashedKey
export const hashRawKey = (prefix = 'live-key') => {
  const token = crypto.randomBytes(32).toString('base64');
  const rawKey = `${prefix}_${token}`;
  const hashedKey = crypto
    .createHash('sha256')
    .update(rawKey)
    .digest('hex');

  return { rawKey, hashedKey };
}

// helper hasher for auth gaurds
export const hashAccessKey = (rawKey: string): string => {
  return crypto.createHash('sha256')
    .update(rawKey)
    .digest('hex');
}
