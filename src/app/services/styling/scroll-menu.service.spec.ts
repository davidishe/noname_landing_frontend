/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScrollMenuService } from './scroll-menu.service';

describe('Service: ScrollMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollMenuService]
    });
  });

  it('should ...', inject([ScrollMenuService], (service: ScrollMenuService) => {
    expect(service).toBeTruthy();
  }));
});
