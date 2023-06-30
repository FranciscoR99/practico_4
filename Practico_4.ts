class Sistema_votos{
    partidos_politicos:partido[];
}
Class Personas {
    nombres: string;
    apellidos: string;
    dni: number;
    direccion: string;
    f_nac: Date;
    
    constructor(nombre:string, apellido:string, dni:number ,direccion:string, f_nac:Date){
        nombre.this = nombre;
        apellido.this = apellido;
        dni.this = dni;
        direccion.this = direccion;
        f_nac.this = f_nac;
    }
}

class Candidatos extends Personas{
    partidoPolitico:string
    constructor(nombre:string,apellido:string,dni:number,direccion:string,f_nac:date){
        super(nombre,apellido,dni,direccion,f_nac)
    }
}
class Partido{    
    nombre: string;
    afiliados: string;
    constructor(nombre:string,afiliados:string){
        super(partidoPolitico)
    
}
class Partidos{}
class Listas{}
class Votantes{}
