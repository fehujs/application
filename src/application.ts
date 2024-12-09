import { Container } from "@fehujs/ioc"
import { loadConfig } from "./internals"


export class Application {
    #appRoot: URL

    #config: Record<string, any>

    #container: Container = new Container()

    private constructor(appRoot: URL, config: Record<string, any>) {
        this.#appRoot = appRoot
        this.#config = config
    }

    public static async init(appRoot: URL) {
        const config = await loadConfig(appRoot)
        return new Application(appRoot, config)
    }

    get container() {
        return this.#container
    }

    get appRoot() {
        return this.#appRoot
    }

    get config() {
        return this.#config
    }
}
