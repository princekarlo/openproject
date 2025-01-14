import { HTTPClientHeaders, HTTPClientParamMap } from "core-app/features/hal/http/http.interfaces";
import { BcfResourcePath } from "core-app/features/bim/bcf/api/bcf-path-resources";
import { BcfApiRequestService } from "core-app/features/bim/bcf/api/bcf-api-request.service";
import { BcfViewpointInterface } from "core-app/features/bim/bcf/api/viewpoints/bcf-viewpoint.interface";

export class BcfViewpointPaths extends BcfResourcePath {
  readonly bcfTopicService = new BcfApiRequestService<BcfViewpointInterface>(this.injector);

  get(params:HTTPClientParamMap = {}, headers:HTTPClientHeaders = {}) {
    return this.bcfTopicService.get(this.toPath(), params, headers);
  }

  delete(headers:HTTPClientHeaders = {}) {
    return this.bcfTopicService.request('delete', this.toPath(), {}, headers);
  }
}