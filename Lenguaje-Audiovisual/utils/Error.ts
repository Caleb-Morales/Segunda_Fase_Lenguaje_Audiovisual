//import { LibroRepository } from "../Repositories/LibroRepository";

export class CustomError extends Error {
    public constructor(
        public readonly statusCode: number,
        public readonly message: string,
        public readonly data?: any,
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = data;
    }
}
