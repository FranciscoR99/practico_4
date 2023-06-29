class Sistema_votos{
    partidos_politicos:Partidos[]
}

class Persona{
    nombre:string
    apellido:string
    dni:number
    direccion:string
    f_nac:Date
    constructor(nombre,apellido,dni,direccion,f_nac){
        nombre=this.nombre
        apellido=this.apellido
        dni=this.dni
        direccion=this.direccion
        f_nac=this.f_nac
    }
}
class Candidatos extends Persona{
    puesto
    constructor(nombre,apellido,dni,direccion,f_nac){
        super(nombre,apellido,dni,direccion,f_nac)
    }
}
class Partidos{}
class Listas{}
class Votantes{}
