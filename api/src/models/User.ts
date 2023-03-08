const getByRut : any = async(rut:string)=>{
    return "Este es el Rut Que consultaste: " + rut;
}

const getByName : any = async(name:string)=>{
    return "Este es el Nombre Que consultaste: " + name;
}

export {getByRut , getByName}