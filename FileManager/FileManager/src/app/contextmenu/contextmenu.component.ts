import { Component, OnInit, Input } from '@angular/core';
import { FileService } from 'src/app/file.service';

@Component({
  selector: 'app-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.css']
})
export class ContextmenuComponent implements OnInit {


  constructor(private fileService: FileService) { }

  @Input() x = 0;
  @Input() y = 0;

  Delete() {
    this.fileService.DeleteFile().subscribe((data: string) => this.fileService.flag = true);
  }
  ngOnInit() {
  }
}
