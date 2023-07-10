import { Component} from '@angular/core';
import { Heroe,HeroesService } from 'src/app/services/heroes.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {  
  heroe: number=0;
   ngOnInit(): void {}
    constructor(private _heroesService:HeroesService,private router:Router){}
  searchs(nom: string) {    
    console.log(nom);
    this.heroe = this._heroesService.buscador(nom); 
    if (this.heroe >= 0) {
      this.VerHeroe(this.heroe);
    } else console.log("No se encuentra el personaje que busca");    
  }
  VerHeroe(idx: number){
      console.log(idx);
      this.router.navigate(['/heroe',idx]);
    }
}
