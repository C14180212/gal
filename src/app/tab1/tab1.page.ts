import { getLocaleNumberFormat } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs/internal/Observable';
import { FotoServiceService, Photo } from '../service/foto-service.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isidata : Observable<data[]>;
  isidataColl : AngularFirestoreCollection<data>
  judul : string;
  isi : string;
  tanggal : string; 
  nilai : string;

  urlImageStorage : string[] = [];
  po : string;
  constructor(afs : AngularFirestore, public fotoSer : FotoServiceService, private afStorage : AngularFireStorage) {
    this.isidataColl = afs.collection('datacoba');
    this.isidata = this.isidataColl.valueChanges();
  }

  async ngOnInit(){
    await this.fotoSer.loadFoto();
  }

  TambahFoto(){
    this.fotoSer.tambahFoto();
  }

  simpan(){
    for (var index in this.fotoSer.dataPhoto)
    {
      const imagePath = `imgStorage/${this.fotoSer.dataPhoto[index].filePath}`;
      this.afStorage.upload(imagePath, this.fotoSer.dataPhoto[index].dataImage).then(() => {
       this.afStorage.storage.ref().child(imagePath).getDownloadURL().then((url)=>
       {this.urlImageStorage.unshift(url)});
      });
    }   
    
    this.isidataColl.doc(this.judul).set({
      judul : this.judul, 
      isi : this.isi,
      tanggal : this.tanggal,
      nilai : this.nilai
    })
  }
}

interface data {
  judul : string,
  isi : string,
  tanggal : string,
  nilai : string,
}