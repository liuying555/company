import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() {
  }

  loginInfor(name, age) {
    console.log(name + age);
  }

}
