import { TestBed } from '@angular/core/testing';

import { ClienteServicioService } from './cliente-servicio.service';

describe('ClienteServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClienteServicioService = TestBed.get(ClienteServicioService);
    expect(service).toBeTruthy();
  });
});
