import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FotoServiceService } from '../service/foto-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(public fotoSer : FotoServiceService, private afStorage : AngularFireStorage) {}


/*   async ngOnInit(){
    await this.fotoSer.loadFoto();
  }

  uploadFoto(){
    for (var index in this.fotoSer.dataPhoto)
    {
      const imgFilep =  `imgStorage/${this.fotoSer.dataPhoto[index].filePath}`;
      this.afStorage.upload(imgFilep, this.fotoSer.dataPhoto[index].dataImage)
    }
    console.log("uploadberhasil")
  } */
}
