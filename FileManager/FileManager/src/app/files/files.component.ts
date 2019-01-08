import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { FileService } from 'src/app/file.service';
import{OpenURL,Message} from 'src/app/const.js'
@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  listOfDirectories: object[];
  listOfFiles: object[];
  currentPath: string;
  contextmenu = false;
  contextmenuX = 0;
  contextmenuY = 0;
  constCreateFolder = "Create new Folder";
  constCreateFile = "Create new File";

  constructor(private http: HttpClient, private fileService: FileService) {
    this.GetDrives();
  }

  GetDrives() {
    this.fileService.isError = false;

    this.fileService.GetDrives().subscribe((
      data: string[]) => this.listOfDirectories = this.fileService.InitializeList(data),
      error => this.fileService.SetError(error)
      );

    this.SetButtonHiddenAttr(false);
    this.fileService.SetCurrentPath("Root");
  }

  ViewFileSystem(path) {
    this.fileService.isError = false;

    this.fileService.GetFolders(path).subscribe((
      data: string[]) => this.listOfDirectories = this.fileService.InitializeList(data), 
      error => this.fileService.SetError(error)
      );

    this.fileService.GetFiles(path).subscribe((
      data: string[]) => this.listOfFiles = this.fileService.InitializeList(data),
      error => this.fileService.SetError(error)
      );

    this.currentPath = this.fileService.isError ? this.currentPath : path;
    this.SetButtonHiddenAttr(true);
    this.fileService.SetCurrentPath(this.currentPath);
  };

  SetButtonHiddenAttr(hidden) {
    let bttn = document.getElementById('buttons');
    if (bttn) {
      if (hidden) {
        bttn.removeAttribute("hidden");
      }
      else {
        bttn.setAttribute("hidden", "true");
      }
    }
  }

  GetBack() {
    let path = this.currentPath;
    let tempPathArray = path.split("\\");

    if (tempPathArray[tempPathArray.length - 1] == "") {
      this.GetDrives();
      this.currentPath = "";
      this.listOfFiles = [];
    }
    else {
      let offset = tempPathArray.length == 2 ? 0 : 1; // return to drive
      let dirName = tempPathArray[tempPathArray.length - 1];
      this.currentPath = path.substring(0, path.length - dirName.length - offset);
      this.ViewFileSystem(this.currentPath);
    }
  }

  Open(path) {
    this.http.get(OpenURL + path).subscribe();
  }


  //activates the menu with the coordinates
  onrightClick(event, typeObject) {
    this.contextmenuX = event.clientX
    this.contextmenuY = event.clientY
    this.contextmenu = true;

    this.fileService.GetTarget(event.currentTarget.id, typeObject, this.currentPath);
  }

  //disables the menu
  disableContextMenu(event) {
    this.contextmenu = false;
    setTimeout(() => this.Update(), 1000);

  }

  //Update list aftar delete
  Update() {
    if (this.fileService.flag) {
      this.ViewFileSystem(this.currentPath)
      this.fileService.flag = false
    }
  }

  CreateDirectory(event) {
    this.fileService.isError = false;
    let name = prompt(Message)
    let type = event.currentTarget.id;
    if (name && this.currentPath) {
      this.fileService.Create(this.currentPath + "\\"+ name, type).subscribe(
        () => this.ViewFileSystem(this.currentPath), 
        error => this.fileService.SetError(error)
        );
    }
  }

  ngOnInit() {
  }

}
