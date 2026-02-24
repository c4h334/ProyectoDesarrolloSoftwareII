// Estructura base de un cliente en la aplicacion
export interface Client {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    // Campo opcional para una breve descripcion personal
    bio?: string;
}
