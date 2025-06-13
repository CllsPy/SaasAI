// src/index.ts
import { config } from "dotenv";
config(); // 🔑 carrega o .env antes de qualquer uso de process.env

import app from "./app.js"; // ✅ usar extensão se module=NodeNext
import { connectToDatabase } from "./db/connection.js";

// connections and listeners
const PORT = process.env.PORT || 5000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar com o banco de dados:");
    console.error(err);
  });
