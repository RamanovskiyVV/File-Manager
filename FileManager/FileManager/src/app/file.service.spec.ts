import { TestBed } from '@angular/core/testing';

import { FileService } from './file.service';
import { HttpClientModule } from '@angular/common/http'

describe('FileService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: FileService = TestBed.get(FileService);
    expect(service).toBeTruthy();
  });
});
