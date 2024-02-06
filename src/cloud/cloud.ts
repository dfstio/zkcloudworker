import { Cache, PrivateKey } from "o1js";

export abstract class Cloud {
  cache: Cache;
  constructor(cache: Cache) {
    this.cache = cache;
  }
  abstract getDeployer(): Promise<PrivateKey>;
  abstract log(msg: string): void;
}
