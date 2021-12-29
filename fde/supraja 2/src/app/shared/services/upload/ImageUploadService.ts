import { Injectable } from "@angular/core";

@Injectable()
export class ImageUploadService {
  constructor() {}

  uploadImage(fileToUpload) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader(); //HTML5 filereader api
      const file = fileToUpload;
      if (file) {
        fileReader.readAsDataURL(file);
      }
    });
  }
}
