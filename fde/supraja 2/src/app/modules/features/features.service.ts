import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FeaturesService {
  baseUrl = environment.baseURl;
  constructor(protected _httpClient: HttpClient) {}
  submitReg(payload) {
    return this._httpClient.post(
      this.baseUrl + "audit/triggerDataFeedRegistration",
      payload
    );
  }

  submitDelivery(payload) {
    return this._httpClient.post(this.baseUrl + "audit/triggerDataFeedDelivery", payload);
  }

  submitResource(payload) {
    return this._httpClient.post(this.baseUrl + "audit/triggerDataFeedResourceRegistry", payload);
  }
}
