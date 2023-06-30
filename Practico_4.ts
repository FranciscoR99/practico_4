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

class Candidatos extends Personas {
    partidoPolitico: string;
    partido: Partido | null;

    constructor(nombre: string, apellido: string, dni: number, direccion: string, f_nac: Date, partidoPolitico: string) {
        super(nombre, apellido, dni, direccion, f_nac);
        this.partidoPolitico = partidoPolitico;
        this.partido = null;
    }

    crearPartido(nombre: string, afiliados: string) {
        this.partido = new Partido(nombre, afiliados, this.partidoPolitico);
    }
}

class Partido {
    nombre: string;
    afiliados: string;

    constructor(nombre: string, afiliados: string, partidoPolitico: string) {
        this.nombre = nombre;
        this.afiliados = afiliados;
    }
}

    
    

class Partidos{}
class Listas{}
class Votantes{}
