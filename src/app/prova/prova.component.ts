import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit {

  constructor() { }

  cani = [
     {nome: 'roger',
      razza: 'golden'
    }
  ]

  isDisabled = false;
  subTitle = 'Start';
  toggle = true;
  status = 'Enable';
  shareButton = 'SHARE';
  enableDisableRule() {
      this.toggle = !this.toggle;
      this.status = this.toggle ? 'Enable' : 'Disable';
  }

  immagine = ''
  immagine1 = 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000'
  immagine2 = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  ngOnInit(): void {
    let counter = 0
    setInterval(()=>{

      if(counter%2 == 0)
      {
        this.immagine = this.immagine1
      } else
      {
        this.immagine = this.immagine2
      }
      counter++;
    }, 1000)
  }

}
