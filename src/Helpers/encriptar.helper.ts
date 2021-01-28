import bcrypt from 'bcrypt';
export async function ComparePassword(actual: string, candidato:string) {
    return await bcrypt.compare(candidato, actual);
} 
export async function CodificarPassword(actual: String, llamadaAtras: Function) {
    bcrypt.genSalt(5, (error, salt) => {
        if(error) return llamadaAtras(error)
        bcrypt.hash(actual, salt, async (error, hash) => {
            if(error) return llamadaAtras(error)
            return await llamadaAtras(undefined, hash)
        });
    });
}