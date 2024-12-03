import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

// Habilitar CORS
app.use(cors());

// Endpoint simple
app.get('/api', (req: Request, res: Response) => {
  res.json({ message: "¡Hola desde la API!" });
});

app.listen(port, () => {
  console.log(`Servidor API corriendo en https://web.dragonball:${port}`);
});