import { pool } from './_database';
import { Request, Response } from 'express';

// OBTENER SECCIONES
export async function getSecciones(req: Request, res: Response): Promise<Response>{
    const response = await pool.query('SELECT * FROM secciones;');
    return res.send(response.rows);
}

// OBTENER ORDEN
export async function getSeccionesOrden(req: Request, res: Response): Promise<Response>{
    const response = await pool.query('SELECT frontend_id FROM secciones WHERE visible=true ORDER BY posicion ASC;');
    return res.send(response.rows);
}

// ACTUALIZAR ORDEN