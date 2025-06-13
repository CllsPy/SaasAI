import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    const mongoUrl = process.env.MONGODB_URL;
    if (!mongoUrl) {
        throw new Error("MONGODB_URL não definida no arquivo .env");
    }
    try {
        await connect(mongoUrl);
        console.log("✅ Conectado ao MongoDB");
    }
    catch (error) {
        console.error("❌ Erro ao conectar com o MongoDB:", error);
        throw new Error("Erro ao conectar com o MongoDB");
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
        console.log("🔌 Desconectado do MongoDB");
    }
    catch (error) {
        console.error("❌ Erro ao desconectar do MongoDB:", error);
        throw new Error("Erro ao desconectar do MongoDB");
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map