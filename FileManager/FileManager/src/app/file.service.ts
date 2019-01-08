import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import{GetDrivesURL, GetFoldersURL, GetFilesURL, DeleteFileURL, CreateURL, errorMessage} from 'src/app/const.js'

@Injectable({
  providedIn: 'root'
})
export class FileService {
  target: string;
  currentPath: string;
  typeObject: string;
  error: string;
  isError = false;
  flag = true;

  constructor(private http: HttpClient) { }

  SetCurrentPath(path) {
    this.currentPath = path;
  }

  GetTarget(currentTarget, typeObject, currentPath, ) {
    this.target = currentTarget;
    this.typeObject = typeObject;
    this.SetCurrentPath(currentPath);
  }

  //gets logical drivers
  GetDrives() {
    return this.http.get(GetDrivesURL);
  }

  GetFolders(path) {
    return this.http.get(GetFoldersURL + path);
  }

  GetFiles(path) {
    return this.http.get(GetFilesURL + path);
  }

  InitializeList(pathList) {
    let list = [];
    pathList.forEach((pathElement) => {
      let tempPathArray = pathElement.split("\\");
      if (tempPathArray[tempPathArray.length - 1] == "") {
        list.push({ name: pathElement, path: pathElement });
      }
      else {
        let name = tempPathArray[tempPathArray.length - 1];
        list.push({ name: name, path: pathElement });
      }
    });
    return list;
  }

  DeleteFile() {
    return this.http.get(DeleteFileURL + this.target + "&type=" + this.typeObject);
  }

  Create(path, type) {
    return this.http.get(CreateURL + path + "&type=" + type);
  }

  SetError(error) {
    this.isError = true;
    this.error = errorMessage;
  }
}
