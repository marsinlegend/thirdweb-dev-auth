import { ThirdwebAuthContext } from "../types";
import { Request, Response } from "express";
export default function handler(req: Request, res: Response, ctx: ThirdwebAuthContext): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=login.d.ts.map