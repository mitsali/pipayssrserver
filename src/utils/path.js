import { fileURLToPath } from 'url'
import path from 'path'

export function resolvePath(relativePath) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  return path.resolve(__dirname, '../', relativePath).replace(/\\/g, '/')
}