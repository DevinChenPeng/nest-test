import * as bcrypt from 'bcrypt';

const DEFAULT_SALT_ROUNDS = 12;

/**
 * 对明文密码进行单向哈希。
 */
export function hashPassword(
  password: string,
  saltRounds = DEFAULT_SALT_ROUNDS,
): Promise<string> {
  return bcrypt.hash(password, saltRounds);
}

/**
 * 校验明文密码是否与 bcrypt 哈希匹配。
 */
export function verifyPassword(
  password: string,
  passwordHash: string,
): Promise<boolean> {
  return bcrypt.compare(password, passwordHash);
}
