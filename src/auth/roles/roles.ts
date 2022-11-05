export const ROLES = {
  ADMIN: 'ADMIN',
} as const;
export type ROLES = typeof ROLES[keyof typeof ROLES];
