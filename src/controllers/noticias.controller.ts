import { pool } from './_database';
import { Request, Response } from 'express';

// OBTENER NOTICIA
export async function getNoticia(req: Request, res: Response): Promise<Response>{
    const response = await pool.query('SELECT * FROM noticias;');
    return res.send(response.rows);
}

// OBTENER IMAGEN DE NOTICIA



// -------