import { fileURLToPath } from "node:url"

export async function loadConfig(appRoot: URL) {
    return await import(`${fileURLToPath(appRoot)}/app/config.ts`)
}
