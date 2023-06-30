class Sistema_votos{
    partidos_politicos:Partido[];
}
class Personas {
    nombres: string;
    apellidos: string;
    dni: number;
    direccion: string;
    f_nac: Date;
    
    constructor(nombre:string, apellido:string, dni:number ,direccion:string, f_nac:Date){
        this.nombres = nombre;
        this.apellidos = apellido;
        this.dni = dni;
        this.direccion = direccion;
        this.f_nac = f_nac;
    }
}

class Candidatos extends Personas{
    partidoPolitico:string
    constructor(nombre:string,apellido:string,dni:number,direccion:string,f_nac:Date){
        super(nombre,apellido,dni,direccion,f_nac)
    }
}
class Partido extends Candidatos{    
    nombre: string;
    afiliados: string;
    constructor(nombre:string,afiliados:string, partidoPolitico:string){
        super(partidoPolitico)
    }
    
}
class Partidos{}
class Listas{}
class Votantes{}
