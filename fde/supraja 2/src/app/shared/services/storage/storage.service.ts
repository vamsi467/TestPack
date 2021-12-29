import { Injectable } from "@angular/core";
import { Storage } from "./storage";

@Injectable()
export class StorageService extends Storage {
  constructor() {
    super();
  }
}
