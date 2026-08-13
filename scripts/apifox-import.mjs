import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const projectId = process.env.APIFOX_PROJECT_ID;
const accessToken = process.env.APIFOX_ACCESS_TOKEN;
const filePath = resolve(process.argv[2] ?? 'openapi.json');

if (!projectId) {
  console.error('请先设置 APIFOX_PROJECT_ID 环境变量。');
  process.exit(1);
}

if (!existsSync(filePath)) {
  console.error(`找不到 OpenAPI 文件：${filePath}`);
  process.exit(1);
}

const args = [
  'import',
  '--project',
  projectId,
  '--format',
  'openapi',
  '--file',
  filePath,
];

if (accessToken) {
  args.push('--access-token', accessToken);
}

const result = spawnSync('apifox', args, {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

process.exit(result.status ?? 1);
