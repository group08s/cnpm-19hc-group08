import { Injectable } from '@angular/core';
import { ReceptionistService } from '@app/core/services';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistPageService {

  constructor(
    private serviceReceptionist: ReceptionistService
  ) { }
  getAllRoom() {
    return this.serviceReceptionist.getAll();
  }
}
