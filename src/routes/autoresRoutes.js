import express from 'express';
import AutoresController from '../controllers/autoresController.js';

const router = express.Router();

router
  .get('/autores', AutoresController.listarAutores)
  .get('/autores/:id/livros', AutoresController.listaLivrosPorAutor)
  .get('/autores/:id', AutoresController.listarAutorPorId)
  .post('/autores', AutoresController.cadastrarAutor)
  .put('/autores/:id', AutoresController.atualizarAutor)
  .delete('/autores/:id', AutoresController.excluirAutor);

export default router;
