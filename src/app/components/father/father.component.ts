import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  usuarios: any[]=[]

  constructor() { }

  ngOnInit(): void {
  }
  agregarUsuario($event: any) : void {
    this.usuarios.push($event)
  }
}
