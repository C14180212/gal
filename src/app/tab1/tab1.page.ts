import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs/internal/Observable';
import { FotoServiceService } from '../service/foto-service.service';


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
    this.isidataColl.doc(this.judul).set({
      judul : this.judul, 
      isi : this.isi,
      tanggal : this.tanggal,
      nilai : this.nilai
    })
  }
  hapus(){
    
  }
}


interface data {
  judul : string,
  isi : string,
  tanggal : string,
  nilai : string
}