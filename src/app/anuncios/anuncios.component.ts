import { AnunciosService } from './../anuncios.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Anuncio } from '../anuncios';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {

  anuncios: Anuncio[] = [];
  formGroupAnuncio : FormGroup;

  constructor(private service: AnunciosService, private FormBuilder: FormBuilder) {
    this.formGroupAnuncio = FormBuilder.group({
      id : [''],
      titulo : [''],
      image : [''],
      info : [''],
      data : [''],
      contato : ['']
    });
  }
    ngOnInit(): void {
      this.loadAnuncios();
    }
    loadAnuncios() {
    }

    saveAnuncios(){
      this.service.saveAnuncios(this.formGroupAnuncio.value).subscribe(
        {
          next: dados =>
          {
            this.anuncios.push(dados);
            this.formGroupAnuncio.reset();
          }
        }
      )
    }




  }
