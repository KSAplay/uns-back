import { pool } from './_database';
import { Request, Response } from 'express';

// OBTENER SECCIONES
export async function getSecciones(req: Request, res: Response): Promise<Response>{
    const response = await pool.query('SELECT * FROM secciones;');
    return res.send(response.rows);
}

// OBTENER ORDEN



// ACTUALIZAR ORDEN