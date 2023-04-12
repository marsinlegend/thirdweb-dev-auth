import { BigNumber } from "ethers";
import { z } from "zod";
export declare const AddressSchema: z.ZodEffects<z.ZodString, string, string>;
export declare const RawDateSchema: z.ZodEffects<z.ZodDate, BigNumber, Date>;
export declare const AccountTypeSchema: z.ZodUnion<[z.ZodLiteral<"evm">, z.ZodLiteral<"solana">]>;
declare const literalSchema: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNull]>;
type Literal = z.infer<typeof literalSchema>;
export type Json = Literal | {
    [key: string]: Json;
} | Json[];
/**
 * @internal
 */
export declare const LoginOptionsSchema: z.ZodOptional<z.ZodObject<{
    domain: z.ZodOptional<z.ZodString>;
    statement: z.ZodOptional<z.ZodString>;
    uri: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
    chainId: z.ZodOptional<z.ZodString>;
    nonce: z.ZodOptional<z.ZodString>;
    expirationTime: z.ZodOptional<z.ZodDate>;
    invalidBefore: z.ZodOptional<z.ZodDate>;
    resources: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    domain?: string | undefined;
    statement?: string | undefined;
    uri?: string | undefined;
    version?: string | undefined;
    chainId?: string | undefined;
    nonce?: string | undefined;
    expirationTime?: Date | undefined;
    invalidBefore?: Date | undefined;
    resources?: string[] | undefined;
}, {
    domain?: string | undefined;
    statement?: string | undefined;
    uri?: string | undefined;
    version?: string | undefined;
    chainId?: string | undefined;
    nonce?: string | undefined;
    expirationTime?: Date | undefined;
    invalidBefore?: Date | undefined;
    resources?: string[] | undefined;
}>>;
/**
 * @internal
 */
export declare const LoginPayloadDataSchema: z.ZodObject<{
    type: z.ZodUnion<[z.ZodLiteral<"evm">, z.ZodLiteral<"solana">]>;
    domain: z.ZodString;
    address: z.ZodString;
    statement: z.ZodDefault<z.ZodString>;
    uri: z.ZodOptional<z.ZodString>;
    version: z.ZodDefault<z.ZodString>;
    chain_id: z.ZodOptional<z.ZodString>;
    nonce: z.ZodDefault<z.ZodString>;
    issued_at: z.ZodEffects<z.ZodDefault<z.ZodDate>, string, Date | undefined>;
    expiration_time: z.ZodEffects<z.ZodDate, string, Date>;
    invalid_before: z.ZodEffects<z.ZodDefault<z.ZodDate>, string, Date | undefined>;
    resources: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
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
    expiration_time: Date;
    statement?: string | undefined;
    uri?: string | undefined;
    version?: string | undefined;
    chain_id?: string | undefined;
    nonce?: string | undefined;
    issued_at?: Date | undefined;
    invalid_before?: Date | undefined;
    resources?: string[] | undefined;
}>;
/**
 * @internal
 */
export declare const LoginPayloadSchema: z.ZodObject<{
    payload: z.ZodObject<{
        type: z.ZodUnion<[z.ZodLiteral<"evm">, z.ZodLiteral<"solana">]>;
        domain: z.ZodString;
        address: z.ZodString;
        statement: z.ZodDefault<z.ZodString>;
        uri: z.ZodOptional<z.ZodString>;
        version: z.ZodDefault<z.ZodString>;
        chain_id: z.ZodOptional<z.ZodString>;
        nonce: z.ZodDefault<z.ZodString>;
        issued_at: z.ZodEffects<z.ZodDefault<z.ZodDate>, string, Date | undefined>;
        expiration_time: z.ZodEffects<z.ZodDate, string, Date>;
        invalid_before: z.ZodEffects<z.ZodDefault<z.ZodDate>, string, Date | undefined>;
        resources: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
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
        expiration_time: Date;
        statement?: string | undefined;
        uri?: string | undefined;
        version?: string | undefined;
        chain_id?: string | undefined;
        nonce?: string | undefined;
        issued_at?: Date | undefined;
        invalid_before?: Date | undefined;
        resources?: string[] | undefined;
    }>;
    signature: z.ZodString;
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
        expiration_time: Date;
        statement?: string | undefined;
        uri?: string | undefined;
        version?: string | undefined;
        chain_id?: string | undefined;
        nonce?: string | undefined;
        issued_at?: Date | undefined;
        invalid_before?: Date | undefined;
        resources?: string[] | undefined;
    };
    signature: string;
}>;
/**
 * @internal
 */
export declare const VerifyOptionsSchema: z.ZodOptional<z.ZodObject<{
    domain: z.ZodOptional<z.ZodString>;
    statement: z.ZodOptional<z.ZodString>;
    uri: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
    chainId: z.ZodOptional<z.ZodString>;
    validateNonce: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodUnknown>>;
    resources: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    domain?: string | undefined;
    statement?: string | undefined;
    uri?: string | undefined;
    version?: string | undefined;
    chainId?: string | undefined;
    validateNonce?: ((args_0: string, ...args_1: unknown[]) => unknown) | undefined;
    resources?: string[] | undefined;
}, {
    domain?: string | undefined;
    statement?: string | undefined;
    uri?: string | undefined;
    version?: string | undefined;
    chainId?: string | undefined;
    validateNonce?: ((args_0: string, ...args_1: unknown[]) => unknown) | undefined;
    resources?: string[] | undefined;
}>>;
/**
 * @internal
 */
export declare const GenerateOptionsSchema: z.ZodOptional<z.ZodObject<{
    domain: z.ZodOptional<z.ZodString>;
    tokenId: z.ZodOptional<z.ZodString>;
    expirationTime: z.ZodOptional<z.ZodDate>;
    invalidBefore: z.ZodOptional<z.ZodDate>;
    session: z.ZodOptional<z.ZodUnion<[z.ZodType<Json, z.ZodTypeDef, Json>, z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodUnknown>]>>;
    verifyOptions: z.ZodOptional<z.ZodObject<Omit<{
        domain: z.ZodOptional<z.ZodString>;
        statement: z.ZodOptional<z.ZodString>;
        uri: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
        chainId: z.ZodOptional<z.ZodString>;
        validateNonce: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodUnknown>>;
        resources: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "domain">, "strip", z.ZodTypeAny, {
        statement?: string | undefined;
        uri?: string | undefined;
        version?: string | undefined;
        resources?: string[] | undefined;
        chainId?: string | undefined;
        validateNonce?: ((args_0: string, ...args_1: unknown[]) => unknown) | undefined;
    }, {
        statement?: string | undefined;
        uri?: string | undefined;
        version?: string | undefined;
        resources?: string[] | undefined;
        chainId?: string | undefined;
        validateNonce?: ((args_0: string, ...args_1: unknown[]) => unknown) | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    domain?: string | undefined;
    tokenId?: string | undefined;
    expirationTime?: Date | undefined;
    invalidBefore?: Date | undefined;
    session?: ((args_0: string, ...args_1: unknown[]) => unknown) | Json | undefined;
    verifyOptions?: {
        statement?: string | undefined;
        uri?: string | undefined;
        version?: string | undefined;
        resources?: string[] | undefined;
        chainId?: string | undefined;
        validateNonce?: ((args_0: string, ...args_1: unknown[]) => unknown) | undefined;
    } | undefined;
}, {
    domain?: string | undefined;
    tokenId?: string | undefined;
    expirationTime?: Date | undefined;
    invalidBefore?: Date | undefined;
    session?: ((args_0: string, ...args_1: unknown[]) => unknown) | Json | undefined;
    verifyOptions?: {
        statement?: string | undefined;
        uri?: string | undefined;
        version?: string | undefined;
        resources?: string[] | undefined;
        chainId?: string | undefined;
        validateNonce?: ((args_0: string, ...args_1: unknown[]) => unknown) | undefined;
    } | undefined;
}>>;
/**
 * @internal
 */
export declare const AuthenticationPayloadDataSchema: z.ZodObject<{
    iss: z.ZodString;
    sub: z.ZodString;
    aud: z.ZodString;
    exp: z.ZodEffects<z.ZodEffects<z.ZodDate, BigNumber, Date>, number, Date>;
    nbf: z.ZodEffects<z.ZodEffects<z.ZodDate, BigNumber, Date>, number, Date>;
    iat: z.ZodEffects<z.ZodEffects<z.ZodDate, BigNumber, Date>, number, Date>;
    jti: z.ZodDefault<z.ZodString>;
    ctx: z.ZodOptional<z.ZodType<Json, z.ZodTypeDef, Json>>;
}, "strip", z.ZodTypeAny, {
    iss: string;
    sub: string;
    aud: string;
    exp: number;
    nbf: number;
    iat: number;
    jti: string;
    ctx?: Json | undefined;
}, {
    iss: string;
    sub: string;
    aud: string;
    exp: Date;
    nbf: Date;
    iat: Date;
    jti?: string | undefined;
    ctx?: Json | undefined;
}>;
/**
 * @internal
 */
export declare const AuthenticationPayloadSchema: z.ZodObject<{
    payload: z.ZodObject<{
        iss: z.ZodString;
        sub: z.ZodString;
        aud: z.ZodString;
        exp: z.ZodEffects<z.ZodEffects<z.ZodDate, BigNumber, Date>, number, Date>;
        nbf: z.ZodEffects<z.ZodEffects<z.ZodDate, BigNumber, Date>, number, Date>;
        iat: z.ZodEffects<z.ZodEffects<z.ZodDate, BigNumber, Date>, number, Date>;
        jti: z.ZodDefault<z.ZodString>;
        ctx: z.ZodOptional<z.ZodType<Json, z.ZodTypeDef, Json>>;
    }, "strip", z.ZodTypeAny, {
        iss: string;
        sub: string;
        aud: string;
        exp: number;
        nbf: number;
        iat: number;
        jti: string;
        ctx?: Json | undefined;
    }, {
        iss: string;
        sub: string;
        aud: string;
        exp: Date;
        nbf: Date;
        iat: Date;
        jti?: string | undefined;
        ctx?: Json | undefined;
    }>;
    signature: z.ZodString;
}, "strip", z.ZodTypeAny, {
    payload: {
        iss: string;
        sub: string;
        aud: string;
        exp: number;
        nbf: number;
        iat: number;
        jti: string;
        ctx?: Json | undefined;
    };
    signature: string;
}, {
    payload: {
        iss: string;
        sub: string;
        aud: string;
        exp: Date;
        nbf: Date;
        iat: Date;
        jti?: string | undefined;
        ctx?: Json | undefined;
    };
    signature: string;
}>;
/**
 * @internal
 */
export declare const AuthenticateOptionsSchema: z.ZodOptional<z.ZodObject<{
    domain: z.ZodOptional<z.ZodString>;
    validateTokenId: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    domain?: string | undefined;
    validateTokenId?: ((args_0: string, ...args_1: unknown[]) => unknown) | undefined;
}, {
    domain?: string | undefined;
    validateTokenId?: ((args_0: string, ...args_1: unknown[]) => unknown) | undefined;
}>>;
/**
 * @public
 */
export type LoginOptions = z.input<typeof LoginOptionsSchema>;
/**
 * @public
 */
export type LoginPayloadData = z.output<typeof LoginPayloadDataSchema>;
/**
 * @public
 */
export type LoginPayload = z.output<typeof LoginPayloadSchema>;
/**
 * @public
 */
export type VerifyOptions = z.input<typeof VerifyOptionsSchema>;
/**
 * @public
 */
export type GenerateOptions = z.input<typeof GenerateOptionsSchema>;
/**
 * @public
 */
export type AuthenticationPayloadData = z.output<typeof AuthenticationPayloadDataSchema>;
/**
 * @public
 */
export type AuthenticationPayload = z.output<typeof AuthenticationPayloadSchema>;
/**
 * @public
 */
export type AuthenticateOptions = z.output<typeof AuthenticateOptionsSchema>;
/**
 * @public
 */
export type User<TContext extends Json = Json> = {
    address: string;
    session?: TContext;
};
export declare const LoginPayloadOutputSchema: z.ZodObject<{
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
export {};
//# sourceMappingURL=schema.d.ts.map