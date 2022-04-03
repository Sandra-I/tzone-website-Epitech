export class APIError {
    public readonly msg: string;
    public readonly code: number;

    constructor(body: { msg: string, code: number }) {
        this.msg = body.msg;
        this.code = body.code;
    }
}