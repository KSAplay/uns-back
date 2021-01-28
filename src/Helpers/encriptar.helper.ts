import bcrypt from 'bcrypt';
export function ComparePassword(actual: string, candidato:string) {
    return new Promise((resolve,reject)=>{
    try {
        return resolve (bcrypt.compare(candidato, actual))
    } catch (error) {
        return reject (error)
    }})
    
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