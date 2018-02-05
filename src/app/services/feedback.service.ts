import { Injectable } from '@angular/core';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) { }
  submittedFeedback = null;
  submitFeedback(feedback) :any{
    return this.restangular.all('feedback').post(feedback);
  }

}
