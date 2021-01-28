import bcrypt from 'bcrypt';
export function ComparePassword(actual: string, candidato:String, llamadaAtras: Function ) {
    return bcrypt.compare(candidato, actual);
} 
export function CodificarPassword(actual: String, llamadaAtras: Function) {
    bcrypt.genSalt(5, (error, salt) => {
        if(error) return llamadaAtras(error)
        bcrypt.hash(actual, salt, (error, hash) => {
            if(error) return llamadaAtras(error)
            return llamadaAtras(undefined, hash)
        });
    });
}