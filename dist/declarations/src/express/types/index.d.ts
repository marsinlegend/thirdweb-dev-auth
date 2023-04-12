import { ThirdwebAuth } from "../../core";
import { Json, User } from "../../core/schema";
import type { GenericAuthWallet } from "@thirdweb-dev/wallets";
import { Request } from "express";
import { z } from "zod";
export declare const LoginPayloadBodySchema: z.ZodObject<{
    payload: z.ZodObject<{
        signature: z.ZodString;
        payload: z.ZodObject<{
            type: z.ZodUnion<[z.ZodLiteral<"evm">, z.ZodLiteral<"solana">]>;
            domain: z.ZodString;
            address: z.ZodString;
            statement: z.ZodDefault<z.ZodString>;
            uri: z.ZodOptional<z.ZodString>;
            version: z.ZodDefault<z.ZodString>;
            chain_id: z.ZodOptional<z.ZodString>;
            nonce: z.ZodDefault<z.ZodString>;
            resources: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            issued_at: z.ZodString;
            expiration_time: z.ZodString;
            invalid_before: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "evm" | "solana";
            domain: string;
            address: string;
            statement: string;
            version: string;
            nonce: string;
            issued_at: string;
            expiration_time: string;
            invalid_before: string;
            uri?: string | undefined;
            chain_id?: string | undefined;
            resources?: string[] | undefined;
        }, {
            type: "evm" | "solana";
            domain: string;
            address: string;
            issued_at: string;
            expiration_time: string;
            invalid_before: string;
            statement?: string | undefined;
            uri?: string | undefined;
            version?: string | undefined;
            chain_id?: string | undefined;
            nonce?: string | undefined;
            resources?: string[] | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        payload: {
            type: "evm" | "solana";
            domain: string;
            address: string;
            statement: string;
            version: string;
            nonce: string;
            issued_at: string;
            expiration_time: string;
            invalid_before: string;
            uri?: string | undefined;
            chain_id?: string | undefined;
            resources?: string[] | undefined;
        };
        signature: string;
    }, {
        payload: {
            type: "evm" | "solana";
            domain: string;
            address: string;
            issued_at: string;
            expiration_time: string;
            invalid_before: string;
            statement?: string | undefined;
            uri?: string | undefined;
            version?: string | undefined;
            chain_id?: string | undefined;
            nonce?: string | undefined;
            resources?: string[] | undefined;
        };
        signature: string;
    }>;
}, "strip", z.ZodTypeAny, {
    payload: {
        payload: {
            type: "evm" | "solana";
            domain: string;
            address: string;
            statement: string;
            version: string;
            nonce: string;
            issued_at: string;
            expiration_time: string;
            invalid_before: string;
            uri?: string | undefined;
            chain_id?: string | undefined;
            resources?: string[] | undefined;
        };
        signature: string;
    };
}, {
    payload: {
        payload: {
            type: "evm" | "solana";
            domain: string;
            address: string;
            issued_at: string;
            expiration_time: string;
            invalid_before: string;
            statement?: string | undefined;
            uri?: string | undefined;
            version?: string | undefined;
            chain_id?: string | undefined;
            nonce?: string | undefined;
            resources?: string[] | undefined;
        };
        signature: string;
    };
}>;
export type ThirdwebAuthRoute = "login" | "user" | "logout";
export type ThirdwebAuthUser<TData extends Json = Json, TSession extends Json = Json> = User<TSession> & {
    data?: TData;
};
export type ThirdwebAuthConfig<TData extends Json = Json, TSession extends Json = Json> = {
    domain: string;
    wallet: GenericAuthWallet;
    authOptions?: {
        statement?: string;
        uri?: string;
        version?: string;
        chainId?: string;
        resources?: string[];
        validateNonce?: ((nonce: string) => void) | ((nonce: string) => Promise<void>);
        validateTokenId?: ((tokenId: string) => void) | ((tokenId: string) => Promise<void>);
        tokenDurationInSeconds?: number;
    };
    cookieOptions?: {
        domain?: string;
        path?: string;
        sameSite?: "lax" | "strict" | "none";
    };
    callbacks?: {
        onLogin?: ((address: string, req?: Request) => void | TSession) | ((address: string, req?: Request) => Promise<void | TSession>);
        onUser?: ((user: User<TSession>, req?: Request) => void | TData) | ((user: User<TSession>, req?: Request) => Promise<void | TData>);
        onLogout?: ((user: User, req?: Request) => void) | ((user: User, req?: Request) => Promise<void>);
    };
};
export type ThirdwebAuthContext<TData extends Json = Json, TSession extends Json = Json> = Omit<Omit<ThirdwebAuthConfig<TData, TSession>, "wallet">, "domain"> & {
    auth: ThirdwebAuth;
};
//# sourceMappingURL=index.d.ts.map