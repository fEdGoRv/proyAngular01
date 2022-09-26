import { Component } from "@angular/core";
import { Persona } from "../persona/persona";

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})

export class StudentComponent {
    public STUDENTS : Array<Persona> = [
        {
            nombre: 'Enrique',
            apellido: 'Garcia',
            edad: 28,
            img: 'https://i.pinimg.com/474x/2e/ee/06/2eee0661f0f9f06a95a8fd35269f2b0e--kung-fu-panda-animation.jpg',
            email: 'enrique****@gmail.com',
            contraseña: 'asd147'
        }, {
            nombre: 'Pablo',
            apellido: 'Armando',
            edad: 32,
            img: 'https://i.pinimg.com/originals/91/9a/cf/919acf23833d02bf647dccf7cf177eae.png',
            email: 'pablin@gmail.com',
            contraseña: 'asd123'
        }, {
            nombre: 'Julio',
            apellido: 'Blanco',
            edad: 34,
            img: 'https://i.pinimg.com/236x/97/15/0e/97150e0166fc22a4557efcbc3fe479cc--kung-fu-panda--pandas.jpg',
            email: 'julioasd2@gmail.com',
            contraseña: 'asd789'
        }, {
            nombre: 'Omar',
            apellido: 'Salvadot',
            edad: 48,
            img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=210x1024:format=png/path/s39145781b4b2fa7a/image/i8e80b058a09cb1e3/version/1474202594/image.png',
            email: 'Omarsito@gmail.com',
            contraseña: 'asd456'
        }
    ]; 
}

