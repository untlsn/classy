declare module '@prisma/client' {

  /**
   * Client
   **/

  import * as runtime from '@prisma/client/runtime/index';
  declare const prisma: unique symbol;
  export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
  type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
  type UnwrapTuple<Tuple extends readonly unknown[]> = {
    [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
  };


  /**
   * Model Class
   *
   */
  export type Class = {
    id: number
    name: string
    tutorId: number
  }

  /**
   * Model User
   *
   */
  export type User = {
    id: number
    role: Role
    firstName: string
    lastName: string
    birth: Date
    email: string
    password: string
  }

  /**
   * Model Student
   *
   */
  export type Student = {
    id: number
    userId: number
    classId: number
  }

  /**
   * Model Teacher
   *
   */
  export type Teacher = {
    id: number
    userId: number
  }


  /**
   * Enums
   */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Role: {
    STUDENT: 'STUDENT',
    TEACHER: 'TEACHER',
    ADMIN: 'ADMIN'
  };

  export type Role = (typeof Role)[keyof typeof Role]


  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Classes
   * const classes = await prisma.class.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
  export class PrismaClient<
    T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
    U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
    GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
      ? T['rejectOnNotFound']
      : false
  > {
    /**
     * ##  Prisma Client ʲˢ
     *
     * Type-safe database client for TypeScript & Node.js
     * @example
     * ```
     * const prisma = new PrismaClient()
     * // Fetch zero or more Classes
     * const classes = await prisma.class.findMany()
     * ```
     *
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
     */

    constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
    $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

    /**
     * Connect with the database
     */
    $connect(): Promise<void>;

    /**
     * Disconnect from the database
     */
    $disconnect(): Promise<void>;

    /**
     * Add a middleware
     */
    $use(cb: Prisma.Middleware): void

    /**
     * Executes a prepared raw query and returns the number of affected rows.
     * @example
     * ```
     * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
     */
    $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

    $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

    /**
     * `prisma.class`: Exposes CRUD operations for the **Class** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Classes
     * const classes = await prisma.class.findMany()
     * ```
     */
    get class(): Prisma.ClassDelegate<GlobalReject>;

    /**
     * `prisma.user`: Exposes CRUD operations for the **User** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Users
     * const users = await prisma.user.findMany()
     * ```
     */
    get user(): Prisma.UserDelegate<GlobalReject>;

    /**
     * `prisma.student`: Exposes CRUD operations for the **Student** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Students
     * const students = await prisma.student.findMany()
     * ```
     */
    get student(): Prisma.StudentDelegate<GlobalReject>;

    /**
     * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Teachers
     * const teachers = await prisma.teacher.findMany()
     * ```
     */
    get teacher(): Prisma.TeacherDelegate<GlobalReject>;
  }

  export namespace Prisma {
    export import DMMF = runtime.DMMF

    /**
     * Prisma Errors
     */
    export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
    export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
    export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
    export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
    export import PrismaClientValidationError = runtime.PrismaClientValidationError
    export import NotFoundError = runtime.NotFoundError

    /**
     * Re-export of sql-template-tag
     */
    export import sql = runtime.sqltag
    export import empty = runtime.empty
    export import join = runtime.join
    export import raw = runtime.raw
    export import Sql = runtime.Sql

    /**
     * Decimal.js
     */
    export import Decimal = runtime.Decimal

    export type DecimalJsLike = runtime.DecimalJsLike

    /**
     * Metrics
     */
    export type Metrics = runtime.Metrics
    export type Metric<T> = runtime.Metric<T>
    export type MetricHistogram = runtime.MetricHistogram
    export type MetricHistogramBucket = runtime.MetricHistogramBucket


    /**
     * Prisma Client JS version: 4.8.1
     * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
     */
    export type PrismaVersion = {
      client: string
    }

    export const prismaVersion: PrismaVersion;

    /**
     * Utility Types
     */

    /**
     * From https://github.com/sindresorhus/type-fest/
     * Matches a JSON object.
     * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
     */
    export type JsonObject = {[Key in string]?: JsonValue}

    /**
     * From https://github.com/sindresorhus/type-fest/
     * Matches a JSON array.
     */
    export type JsonArray = Array<JsonValue>

    /**
     * From https://github.com/sindresorhus/type-fest/
     * Matches any valid JSON value.
     */
    export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

    /**
     * Matches a JSON object.
     * Unlike `JsonObject`, this type allows undefined and read-only properties.
     */
    export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

    /**
     * Matches a JSON array.
     * Unlike `JsonArray`, readonly arrays are assignable to this type.
     */
    export type InputJsonArray = ReadonlyArray<InputJsonValue | null>

    /**
     * Matches any valid value that can be used as an input for operations like
     * create and update as the value of a JSON field. Unlike `JsonValue`, this
     * type allows read-only arrays and read-only object properties and disallows
     * `null` at the top level.
     *
     * `null` cannot be used as the value of a JSON field because its meaning
     * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
     * `Prisma.DbNull` to clear the JSON value and set the field to the database
     * NULL value instead.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
     */
    export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

    /**
     * Types of the values used to represent different kinds of `null` values when working with JSON fields.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    namespace NullTypes {
      /**
       * Type of `Prisma.DbNull`.
       *
       * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
       *
       * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
       */
      class DbNull {
        private DbNull: never;
        private constructor()
      }

      /**
       * Type of `Prisma.JsonNull`.
       *
       * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
       *
       * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
       */
      class JsonNull {
        private JsonNull: never;
        private constructor()
      }

      /**
       * Type of `Prisma.AnyNull`.
       *
       * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
       *
       * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
       */
      class AnyNull {
        private AnyNull: never;
        private constructor()
      }
    }

    /**
     * Helper for filtering JSON entries that have `null` on the database (empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const DbNull: NullTypes.DbNull;

    /**
     * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const JsonNull: NullTypes.JsonNull;

    /**
     * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const AnyNull: NullTypes.AnyNull;

    type SelectAndInclude = {
      select: any
      include: any
    }
    type HasSelect = {
      select: any
    }
    type HasInclude = {
      include: any
    }
    type CheckSelect<T, S, U> = T extends SelectAndInclude
      ? 'Please either choose `select` or `include`'
      : T extends HasSelect
        ? U
        : T extends HasInclude
          ? U
          : S

    /**
     * Get the type of the value, that the Promise holds.
     */
    export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

    /**
     * Get the return type of a function which returns a Promise.
     */
    export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

    /**
     * From T, pick a set of properties whose keys are in the union K
     */
    type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
    };


    export type Enumerable<T> = T | Array<T>;

    export type RequiredKeys<T> = {
      [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
    }[keyof T]

    export type TruthyKeys<T> = keyof {
      [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
    }

    export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

    /**
     * Subset
     * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
     */
    export type Subset<T, U> = {
      [key in keyof T]: key extends keyof U ? T[key] : never;
    };

    /**
     * SelectSubset
     * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
     * Additionally, it validates, if both select and include are present. If the case, it errors.
     */
    export type SelectSubset<T, U> = {
      [key in keyof T]: key extends keyof U ? T[key] : never
    } &
      (T extends SelectAndInclude
        ? 'Please either choose `select` or `include`.'
        : {})

    /**
     * Subset + Intersection
     * @desc From `T` pick properties that exist in `U` and intersect `K`
     */
    export type SubsetIntersection<T, U, K> = {
      [key in keyof T]: key extends keyof U ? T[key] : never
    } &
      K

    type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

    /**
     * XOR is needed to have a real mutually exclusive union type
     * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
     */
    type XOR<T, U> =
      T extends object ?
        U extends object ?
          (Without<T, U> & U) | (Without<U, T> & T)
          : U : T


    /**
     * Is T a Record?
     */
    type IsObject<T extends any> = T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends bigint
            ? False
            : T extends object
              ? True
              : False


    /**
     * If it's T[], return T
     */
    export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

    /**
     * From ts-toolbelt
     */

    type __Either<O extends object, K extends Key> = Omit<O, K> &
      {
        // Merge all but K
        [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
      }[K]

    type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

    type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

    type _Either<
      O extends object,
      K extends Key,
      strict extends boolean
    > = {
      1: EitherStrict<O, K>
      0: EitherLoose<O, K>
    }[strict]

    type Either<
      O extends object,
      K extends Key,
      strict extends boolean = 1
    > = O extends unknown ? _Either<O, K, strict> : never

    export type Union = any

    type PatchUndefined<O extends object, O1 extends object> = {
      [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
    } & {}

    /** Helper Types for "Merge" **/
    export type IntersectOf<U extends Union> = (
      U extends unknown ? (k: U) => void : never
      ) extends (k: infer I) => void
      ? I
      : never

    export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
    } & {};

    type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
    }>>;

    type Key = string | number | symbol;
    type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
    type AtStrict<O extends object, K extends Key> = O[K & keyof O];
    type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
    export type At<O extends object, K extends Key, strict extends boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
    }[strict];

    export type ComputeRaw<A extends any> = A extends Function ? A : {
      [K in keyof A]: A[K];
    } & {};

    export type OptionalFlat<O> = {
      [K in keyof O]?: O[K];
    } & {};

    type _Record<K extends keyof any, T> = {
      [P in K]: T;
    };

    // cause typescript not to expand types and preserve names
    type NoExpand<T> = T extends unknown ? T : never;

    // this type assumes the passed object is entirely optional
    type AtLeast<O extends object, K extends string> = NoExpand<
      O extends unknown
        ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
        | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
        : never>;

    type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

    export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
    /** End Helper Types for "Merge" **/

    export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

    /**
     A [[Boolean]]
     */
    export type Boolean = True | False

    // /**
    // 1
    // */
    export type True = 1

    /**
     0
     */
    export type False = 0

    export type Not<B extends boolean> = {
      0: 1
      1: 0
    }[B]

    export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
      ? 0 // anything `never` is false
      : A1 extends A2
        ? 1
        : 0

    export type Has<U extends Union, U1 extends Union> = Not<
      Extends<Exclude<U1, U>, U1>
    >

    export type Or<B1 extends boolean, B2 extends boolean> = {
      0: {
        0: 0
        1: 1
      }
      1: {
        0: 1
        1: 1
      }
    }[B1][B2]

    export type Keys<U extends Union> = U extends unknown ? keyof U : never

    type Exact<A, W = unknown> =
      W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
          {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
          {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
        : never;

    type Narrowable = string | number | boolean | bigint;

    type Cast<A, B> = A extends B ? A : B;

    export const type: unique symbol;

    export function validator<V>(): <S>(select: Exact<S, V>) => S;

    /**
     * Used by group by
     */

    export type GetScalarType<T, O> = O extends object ? {
      [P in keyof T]: P extends keyof O
        ? O[P]
        : never
    } : never

    type FieldPaths<
      T,
      U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
    > = IsObject<T> extends True ? U : T

    type GetHavingFields<T> = {
      [K in keyof T]: Or<
        Or<Extends<'OR', K>, Extends<'AND', K>>,
        Extends<'NOT', K>
      > extends True
        ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
          ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
          : never
        : {} extends FieldPaths<T[K]>
          ? never
          : K
    }[keyof T]

    /**
     * Convert tuple to union
     */
    type _TupleToUnion<T> = T extends (infer E)[] ? E : never
    type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
    type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

    /**
     * Like `Pick`, but with an array
     */
    type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

    /**
     * Exclude all keys with underscores
     */
    type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


    export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

    type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

    class PrismaClientFetcher {
      private readonly prisma;
      private readonly debug;
      private readonly hooks?;
      constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
      request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
      sanitizeMessage(message: string): string;
      protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
    }

    export const ModelName: {
      Class: 'Class',
      User: 'User',
      Student: 'Student',
      Teacher: 'Teacher'
    };

    export type ModelName = (typeof ModelName)[keyof typeof ModelName]


    export type Datasources = {
      db?: Datasource
    }

    export type DefaultPrismaClient = PrismaClient
    export type RejectOnNotFound = boolean | ((error: Error) => Error)
    export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
    export type RejectPerOperation =  { [P in 'findUnique' | 'findFirst']?: RejectPerModel | RejectOnNotFound }
    type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
    export type HasReject<
      GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
      LocalRejectSettings,
      Action extends PrismaAction,
      Model extends ModelName
    > = LocalRejectSettings extends RejectOnNotFound
      ? IsReject<LocalRejectSettings>
      : GlobalRejectSettings extends RejectPerOperation
        ? Action extends keyof GlobalRejectSettings
          ? GlobalRejectSettings[Action] extends RejectOnNotFound
            ? IsReject<GlobalRejectSettings[Action]>
            : GlobalRejectSettings[Action] extends RejectPerModel
              ? Model extends keyof GlobalRejectSettings[Action]
                ? IsReject<GlobalRejectSettings[Action][Model]>
                : False
              : False
          : False
        : IsReject<GlobalRejectSettings>
    export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

    export interface PrismaClientOptions {
      /**
       * Configure findUnique/findFirst to throw an error if the query returns null.
       * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
       * @example
       * ```
       * // Reject on both findUnique/findFirst
       * rejectOnNotFound: true
       * // Reject only on findFirst with a custom error
       * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
       * // Reject on user.findUnique with a custom error
       * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
       * ```
       */
      rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
      /**
       * Overwrites the datasource url from your schema.prisma file
       */
      datasources?: Datasources

      /**
       * @default "colorless"
       */
      errorFormat?: ErrorFormat

      /**
       * @example
       * ```
       * // Defaults to stdout
       * log: ['query', 'info', 'warn', 'error']
       *
       * // Emit as events
       * log: [
       *  { emit: 'stdout', level: 'query' },
       *  { emit: 'stdout', level: 'info' },
       *  { emit: 'stdout', level: 'warn' }
       *  { emit: 'stdout', level: 'error' }
       * ]
       * ```
       * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
       */
      log?: Array<LogLevel | LogDefinition>
    }

    export type Hooks = {
      beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
    }

    /* Types for Logging */
    export type LogLevel = 'info' | 'query' | 'warn' | 'error'
    export type LogDefinition = {
      level: LogLevel
      emit: 'stdout' | 'event'
    }

    export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
    export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
      GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
      : never

    export type QueryEvent = {
      timestamp: Date
      query: string
      params: string
      duration: number
      target: string
    }

    export type LogEvent = {
      timestamp: Date
      message: string
      target: string
    }
    /* End Types for Logging */


    export type PrismaAction =
      | 'findUnique'
      | 'findMany'
      | 'findFirst'
      | 'create'
      | 'createMany'
      | 'update'
      | 'updateMany'
      | 'upsert'
      | 'delete'
      | 'deleteMany'
      | 'executeRaw'
      | 'queryRaw'
      | 'aggregate'
      | 'count'
      | 'runCommandRaw'
      | 'findRaw'

    /**
     * These options are being passed into the middleware as "params"
     */
    export type MiddlewareParams = {
      model?: ModelName
      action: PrismaAction
      args: any
      dataPath: string[]
      runInTransaction: boolean
    }

    /**
     * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
     */
    export type Middleware<T = any> = (
      params: MiddlewareParams,
      next: (params: MiddlewareParams) => Promise<T>,
    ) => Promise<T>

    // tested in getLogLevel.test.ts
    export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

    /**
     * `PrismaClient` proxy available in interactive transactions.
     */
    export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

    export type Datasource = {
      url?: string
    }

    /**
     * Count Types
     */


    /**
     * Count Type ClassCountOutputType
     */


    export type ClassCountOutputType = {
      students: number
    }

    export type ClassCountOutputTypeSelect = {
      students?: boolean
    }

    export type ClassCountOutputTypeGetPayload<S extends boolean | null | undefined | ClassCountOutputTypeArgs> =
      S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
        S extends true ? ClassCountOutputType :
          S extends undefined ? never :
            S extends { include: any } & (ClassCountOutputTypeArgs)
              ? ClassCountOutputType
              : S extends { select: any } & (ClassCountOutputTypeArgs)
                ? {
                  [P in TruthyKeys<S['select']>]:
                  P extends keyof ClassCountOutputType ? ClassCountOutputType[P] : never
                }
                : ClassCountOutputType


    // Custom InputTypes

    /**
     * ClassCountOutputType without action
     */
    export type ClassCountOutputTypeArgs = {
      /**
       * Select specific fields to fetch from the ClassCountOutputType
       *
       **/
      select?: ClassCountOutputTypeSelect | null
    }


    /**
     * Models
     */

    /**
     * Model Class
     */


    export type AggregateClass = {
      _count: ClassCountAggregateOutputType | null
      _avg: ClassAvgAggregateOutputType | null
      _sum: ClassSumAggregateOutputType | null
      _min: ClassMinAggregateOutputType | null
      _max: ClassMaxAggregateOutputType | null
    }

    export type ClassAvgAggregateOutputType = {
      id: number | null
      tutorId: number | null
    }

    export type ClassSumAggregateOutputType = {
      id: number | null
      tutorId: number | null
    }

    export type ClassMinAggregateOutputType = {
      id: number | null
      name: string | null
      tutorId: number | null
    }

    export type ClassMaxAggregateOutputType = {
      id: number | null
      name: string | null
      tutorId: number | null
    }

    export type ClassCountAggregateOutputType = {
      id: number
      name: number
      tutorId: number
      _all: number
    }


    export type ClassAvgAggregateInputType = {
      id?: true
      tutorId?: true
    }

    export type ClassSumAggregateInputType = {
      id?: true
      tutorId?: true
    }

    export type ClassMinAggregateInputType = {
      id?: true
      name?: true
      tutorId?: true
    }

    export type ClassMaxAggregateInputType = {
      id?: true
      name?: true
      tutorId?: true
    }

    export type ClassCountAggregateInputType = {
      id?: true
      name?: true
      tutorId?: true
      _all?: true
    }

    export type ClassAggregateArgs = {
      /**
       * Filter which Class to aggregate.
       *
       **/
      where?: ClassWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Classes to fetch.
       *
       **/
      orderBy?: Enumerable<ClassOrderByWithRelationInput>
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the start position
       *
       **/
      cursor?: ClassWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Classes from the position of the cursor.
       *
       **/
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Classes.
       *
       **/
      skip?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Count returned Classes
       **/
      _count?: true | ClassCountAggregateInputType
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to average
       **/
      _avg?: ClassAvgAggregateInputType
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to sum
       **/
      _sum?: ClassSumAggregateInputType
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the minimum value
       **/
      _min?: ClassMinAggregateInputType
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the maximum value
       **/
      _max?: ClassMaxAggregateInputType
    }

    export type GetClassAggregateType<T extends ClassAggregateArgs> = {
      [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateClass[P]>
        : GetScalarType<T[P], AggregateClass[P]>
    }


    export type ClassGroupByArgs = {
      where?: ClassWhereInput
      orderBy?: Enumerable<ClassOrderByWithAggregationInput>
      by: Array<ClassScalarFieldEnum>
      having?: ClassScalarWhereWithAggregatesInput
      take?: number
      skip?: number
      _count?: ClassCountAggregateInputType | true
      _avg?: ClassAvgAggregateInputType
      _sum?: ClassSumAggregateInputType
      _min?: ClassMinAggregateInputType
      _max?: ClassMaxAggregateInputType
    }


    export type ClassGroupByOutputType = {
      id: number
      name: string
      tutorId: number
      _count: ClassCountAggregateOutputType | null
      _avg: ClassAvgAggregateOutputType | null
      _sum: ClassSumAggregateOutputType | null
      _min: ClassMinAggregateOutputType | null
      _max: ClassMaxAggregateOutputType | null
    }

    type GetClassGroupByPayload<T extends ClassGroupByArgs> = PrismaPromise<
      Array<
        PickArray<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
          : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


    export type ClassSelect = {
      id?: boolean
      name?: boolean
      students?: boolean | Class$studentsArgs
      tutor?: boolean | TeacherArgs
      tutorId?: boolean
      _count?: boolean | ClassCountOutputTypeArgs
    }


    export type ClassInclude = {
      students?: boolean | Class$studentsArgs
      tutor?: boolean | TeacherArgs
      _count?: boolean | ClassCountOutputTypeArgs
    }

    export type ClassGetPayload<S extends boolean | null | undefined | ClassArgs> =
      S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
        S extends true ? Class :
          S extends undefined ? never :
            S extends { include: any } & (ClassArgs | ClassFindManyArgs)
              ? Class  & {
              [P in TruthyKeys<S['include']>]:
              P extends 'students' ? Array < StudentGetPayload<S['include'][P]>>  :
                P extends 'tutor' ? TeacherGetPayload<S['include'][P]> :
                  P extends '_count' ? ClassCountOutputTypeGetPayload<S['include'][P]> :  never
            }
              : S extends { select: any } & (ClassArgs | ClassFindManyArgs)
                ? {
                  [P in TruthyKeys<S['select']>]:
                  P extends 'students' ? Array < StudentGetPayload<S['select'][P]>>  :
                    P extends 'tutor' ? TeacherGetPayload<S['select'][P]> :
                      P extends '_count' ? ClassCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Class ? Class[P] : never
                }
                : Class


    type ClassCountArgs = Merge<
      Omit<ClassFindManyArgs, 'select' | 'include'> & {
      select?: ClassCountAggregateInputType | true
    }
    >

    export interface ClassDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
      /**
       * Find zero or one Class that matches the filter.
       * @param {ClassFindUniqueArgs} args - Arguments to find a Class
       * @example
       * // Get one Class
       * const class = await prisma.class.findUnique({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       **/
      findUnique<T extends ClassFindUniqueArgs,  LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
        args: SelectSubset<T, ClassFindUniqueArgs>
      ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Class'> extends True ? Prisma__ClassClient<ClassGetPayload<T>> : Prisma__ClassClient<ClassGetPayload<T> | null, null>

      /**
       * Find one Class that matches the filter or throw an error  with `error.code='P2025'`
       *     if no matches were found.
       * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
       * @example
       * // Get one Class
       * const class = await prisma.class.findUniqueOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       **/
      findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(
        args?: SelectSubset<T, ClassFindUniqueOrThrowArgs>
      ): Prisma__ClassClient<ClassGetPayload<T>>

      /**
       * Find the first Class that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {ClassFindFirstArgs} args - Arguments to find a Class
       * @example
       * // Get one Class
       * const class = await prisma.class.findFirst({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       **/
      findFirst<T extends ClassFindFirstArgs,  LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
        args?: SelectSubset<T, ClassFindFirstArgs>
      ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Class'> extends True ? Prisma__ClassClient<ClassGetPayload<T>> : Prisma__ClassClient<ClassGetPayload<T> | null, null>

      /**
       * Find the first Class that matches the filter or
       * throw `NotFoundError` if no matches were found.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
       * @example
       * // Get one Class
       * const class = await prisma.class.findFirstOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       **/
      findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(
        args?: SelectSubset<T, ClassFindFirstOrThrowArgs>
      ): Prisma__ClassClient<ClassGetPayload<T>>

      /**
       * Find zero or more Classes that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {ClassFindManyArgs=} args - Arguments to filter and select certain fields only.
       * @example
       * // Get all Classes
       * const classes = await prisma.class.findMany()
       *
       * // Get first 10 Classes
       * const classes = await prisma.class.findMany({ take: 10 })
       *
       * // Only select the `id`
       * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
       *
       **/
      findMany<T extends ClassFindManyArgs>(
        args?: SelectSubset<T, ClassFindManyArgs>
      ): PrismaPromise<Array<ClassGetPayload<T>>>

      /**
       * Create a Class.
       * @param {ClassCreateArgs} args - Arguments to create a Class.
       * @example
       * // Create one Class
       * const Class = await prisma.class.create({
       *   data: {
       *     // ... data to create a Class
       *   }
       * })
       *
       **/
      create<T extends ClassCreateArgs>(
        args: SelectSubset<T, ClassCreateArgs>
      ): Prisma__ClassClient<ClassGetPayload<T>>

      /**
       * Create many Classes.
       *     @param {ClassCreateManyArgs} args - Arguments to create many Classes.
       *     @example
       *     // Create many Classes
       *     const class = await prisma.class.createMany({
       *       data: {
       *         // ... provide data here
       *       }
       *     })
       *
       **/
      createMany<T extends ClassCreateManyArgs>(
        args?: SelectSubset<T, ClassCreateManyArgs>
      ): PrismaPromise<BatchPayload>

      /**
       * Delete a Class.
       * @param {ClassDeleteArgs} args - Arguments to delete one Class.
       * @example
       * // Delete one Class
       * const Class = await prisma.class.delete({
       *   where: {
       *     // ... filter to delete one Class
       *   }
       * })
       *
       **/
      delete<T extends ClassDeleteArgs>(
        args: SelectSubset<T, ClassDeleteArgs>
      ): Prisma__ClassClient<ClassGetPayload<T>>

      /**
       * Update one Class.
       * @param {ClassUpdateArgs} args - Arguments to update one Class.
       * @example
       * // Update one Class
       * const class = await prisma.class.update({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       **/
      update<T extends ClassUpdateArgs>(
        args: SelectSubset<T, ClassUpdateArgs>
      ): Prisma__ClassClient<ClassGetPayload<T>>

      /**
       * Delete zero or more Classes.
       * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
       * @example
       * // Delete a few Classes
       * const { count } = await prisma.class.deleteMany({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       *
       **/
      deleteMany<T extends ClassDeleteManyArgs>(
        args?: SelectSubset<T, ClassDeleteManyArgs>
      ): PrismaPromise<BatchPayload>

      /**
       * Update zero or more Classes.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
       * @example
       * // Update many Classes
       * const class = await prisma.class.updateMany({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       **/
      updateMany<T extends ClassUpdateManyArgs>(
        args: SelectSubset<T, ClassUpdateManyArgs>
      ): PrismaPromise<BatchPayload>

      /**
       * Create or update one Class.
       * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
       * @example
       * // Update or create a Class
       * const class = await prisma.class.upsert({
       *   create: {
       *     // ... data to create a Class
       *   },
       *   update: {
       *     // ... in case it already exists, update
       *   },
       *   where: {
       *     // ... the filter for the Class we want to update
       *   }
       * })
       **/
      upsert<T extends ClassUpsertArgs>(
        args: SelectSubset<T, ClassUpsertArgs>
      ): Prisma__ClassClient<ClassGetPayload<T>>

      /**
       * Count the number of Classes.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {ClassCountArgs} args - Arguments to filter Classes to count.
       * @example
       * // Count the number of Classes
       * const count = await prisma.class.count({
       *   where: {
       *     // ... the filter for the Classes we want to count
       *   }
       * })
       **/
      count<T extends ClassCountArgs>(
        args?: Subset<T, ClassCountArgs>,
      ): PrismaPromise<
        T extends _Record<'select', any>
          ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], ClassCountAggregateOutputType>
          : number
      >

      /**
       * Allows you to perform aggregations operations on a Class.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
       * @example
       * // Ordered by age ascending
       * // Where email contains prisma.io
       * // Limited to the 10 users
       * const aggregations = await prisma.user.aggregate({
       *   _avg: {
       *     age: true,
       *   },
       *   where: {
       *     email: {
       *       contains: "prisma.io",
       *     },
       *   },
       *   orderBy: {
       *     age: "asc",
       *   },
       *   take: 10,
       * })
       **/
      aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): PrismaPromise<GetClassAggregateType<T>>

      /**
       * Group by Class.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {ClassGroupByArgs} args - Group by arguments.
       * @example
       * // Group by city, order by createdAt, get count
       * const result = await prisma.user.groupBy({
       *   by: ['city', 'createdAt'],
       *   orderBy: {
       *     createdAt: true
       *   },
       *   _count: {
       *     _all: true
       *   },
       * })
       *
       **/
      groupBy<
        T extends ClassGroupByArgs,
        HasSelectOrTake extends Or<
          Extends<'skip', Keys<T>>,
          Extends<'take', Keys<T>>
        >,
        OrderByArg extends True extends HasSelectOrTake
          ? { orderBy: ClassGroupByArgs['orderBy'] }
          : { orderBy?: ClassGroupByArgs['orderBy'] },
        OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
        ByFields extends TupleToUnion<T['by']>,
        ByValid extends Has<ByFields, OrderFields>,
        HavingFields extends GetHavingFields<T['having']>,
        HavingValid extends Has<ByFields, HavingFields>,
        ByEmpty extends T['by'] extends never[] ? True : False,
        InputErrors extends ByEmpty extends True
          ? 'Error: "by" must not be empty.'
          : HavingValid extends False
            ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                    Error,
                    'Field ',
                    P,
                    ' in "having" needs to be provided in "by"',
                  ]
            }[HavingFields]
            : 'take' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
                : 'Error: If you provide "take", you also need to provide "orderBy"'
              : 'skip' extends Keys<T>
                ? 'orderBy' extends Keys<T>
                  ? ByValid extends True
                    ? {}
                    : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                  : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends True
                  ? {}
                  : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
      >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : PrismaPromise<InputErrors>

    }

    /**
     * The delegate class that acts as a "Promise-like" for Class.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export class Prisma__ClassClient<T, Null = never> implements PrismaPromise<T> {
      [prisma]: true;
      private readonly _dmmf;
      private readonly _fetcher;
      private readonly _queryType;
      private readonly _rootField;
      private readonly _clientMethod;
      private readonly _args;
      private readonly _dataPath;
      private readonly _errorFormat;
      private readonly _measurePerformance?;
      private _isList;
      private _callsite;
      private _requestPromise?;
      constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
      readonly [Symbol.toStringTag]: 'PrismaClientPromise';

      students<T extends Class$studentsArgs= {}>(args?: Subset<T, Class$studentsArgs>): PrismaPromise<Array<StudentGetPayload<T>>| Null>;

      tutor<T extends TeacherArgs= {}>(args?: Subset<T, TeacherArgs>): Prisma__TeacherClient<TeacherGetPayload<T> | Null>;

      private get _document();
      /**
       * Attaches callbacks for the resolution and/or rejection of the Promise.
       * @param onfulfilled The callback to execute when the Promise is resolved.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of which ever callback is executed.
       */
      then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
      /**
       * Attaches a callback for only the rejection of the Promise.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of the callback.
       */
      catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
      /**
       * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
       * resolved value cannot be modified from the callback.
       * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
       * @returns A Promise for the completion of the callback.
       */
      finally(onfinally?: (() => void) | undefined | null): Promise<T>;
    }


    // Custom InputTypes

    /**
     * Class base type for findUnique actions
     */
    export type ClassFindUniqueArgsBase = {
      /**
       * Select specific fields to fetch from the Class
       *
       **/
      select?: ClassSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: ClassInclude | null
      /**
       * Filter, which Class to fetch.
       *
       **/
      where: ClassWhereUniqueInput
    }

    /**
     * Class findUnique
     */
    export interface ClassFindUniqueArgs extends ClassFindUniqueArgsBase {
      /**
       * Throw an Error if query returns no results
       * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
       */
      rejectOnNotFound?: RejectOnNotFound
    }


    /**
     * Class findUniqueOrThrow
     */
    export type ClassFindUniqueOrThrowArgs = {
      /**
       * Select specific fields to fetch from the Class
       *
       **/
      select?: ClassSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: ClassInclude | null
      /**
       * Filter, which Class to fetch.
       *
       **/
      where: ClassWhereUniqueInput
    }


    /**
     * Class base type for findFirst actions
     */
    export type ClassFindFirstArgsBase = {
      /**
       * Select specific fields to fetch from the Class
       *
       **/
      select?: ClassSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: ClassInclude | null
      /**
       * Filter, which Class to fetch.
       *
       **/
      where?: ClassWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Classes to fetch.
       *
       **/
      orderBy?: Enumerable<ClassOrderByWithRelationInput>
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for Classes.
       *
       **/
      cursor?: ClassWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Classes from the position of the cursor.
       *
       **/
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Classes.
       *
       **/
      skip?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Classes.
       *
       **/
      distinct?: Enumerable<ClassScalarFieldEnum>
    }

    /**
     * Class findFirst
     */
    export interface ClassFindFirstArgs extends ClassFindFirstArgsBase {
      /**
       * Throw an Error if query returns no results
       * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
       */
      rejectOnNotFound?: RejectOnNotFound
    }


    /**
     * Class findFirstOrThrow
     */
    export type ClassFindFirstOrThrowArgs = {
      /**
       * Select specific fields to fetch from the Class
       *
       **/
      select?: ClassSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: ClassInclude | null
      /**
       * Filter, which Class to fetch.
       *
       **/
      where?: ClassWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Classes to fetch.
       *
       **/
      orderBy?: Enumerable<ClassOrderByWithRelationInput>
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for Classes.
       *
       **/
      cursor?: ClassWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Classes from the position of the cursor.
       *
       **/
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Classes.
       *
       **/
      skip?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Classes.
       *
       **/
      distinct?: Enumerable<ClassScalarFieldEnum>
    }


    /**
     * Class findMany
     */
    export type ClassFindManyArgs = {
      /**
       * Select specific fields to fetch from the Class
       *
       **/
      select?: ClassSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: ClassInclude | null
      /**
       * Filter, which Classes to fetch.
       *
       **/
      where?: ClassWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Classes to fetch.
       *
       **/
      orderBy?: Enumerable<ClassOrderByWithRelationInput>
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Classes.
       *
       **/
      cursor?: ClassWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Classes from the position of the cursor.
       *
       **/
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Classes.
       *
       **/
      skip?: number
      distinct?: Enumerable<ClassScalarFieldEnum>
    }


    /**
     * Class create
     */
    export type ClassCreateArgs = {
      /**
       * Select specific fields to fetch from the Class
       *
       **/
      select?: ClassSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: ClassInclude | null
      /**
       * The data needed to create a Class.
       *
       **/
      data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    }


    /**
     * Class createMany
     */
    export type ClassCreateManyArgs = {
      /**
       * The data used to create many Classes.
       *
       **/
      data: Enumerable<ClassCreateManyInput>
      skipDuplicates?: boolean
    }


    /**
     * Class update
     */
    export type ClassUpdateArgs = {
      /**
       * Select specific fields to fetch from the Class
       *
       **/
      select?: ClassSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: ClassInclude | null
      /**
       * The data needed to update a Class.
       *
       **/
      data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
      /**
       * Choose, which Class to update.
       *
       **/
      where: ClassWhereUniqueInput
    }


    /**
     * Class updateMany
     */
    export type ClassUpdateManyArgs = {
      /**
       * The data used to update Classes.
       *
       **/
      data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
      /**
       * Filter which Classes to update
       *
       **/
      where?: ClassWhereInput
    }


    /**
     * Class upsert
     */
    export type ClassUpsertArgs = {
      /**
       * Select specific fields to fetch from the Class
       *
       **/
      select?: ClassSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: ClassInclude | null
      /**
       * The filter to search for the Class to update in case it exists.
       *
       **/
      where: ClassWhereUniqueInput
      /**
       * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
       *
       **/
      create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
      /**
       * In case the Class was found with the provided `where` argument, update it with this data.
       *
       **/
      update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    }


    /**
     * Class delete
     */
    export type ClassDeleteArgs = {
      /**
       * Select specific fields to fetch from the Class
       *
       **/
      select?: ClassSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: ClassInclude | null
      /**
       * Filter which Class to delete.
       *
       **/
      where: ClassWhereUniqueInput
    }


    /**
     * Class deleteMany
     */
    export type ClassDeleteManyArgs = {
      /**
       * Filter which Classes to delete
       *
       **/
      where?: ClassWhereInput
    }


    /**
     * Class.students
     */
    export type Class$studentsArgs = {
      /**
       * Select specific fields to fetch from the Student
       *
       **/
      select?: StudentSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: StudentInclude | null
      where?: StudentWhereInput
      orderBy?: Enumerable<StudentOrderByWithRelationInput>
      cursor?: StudentWhereUniqueInput
      take?: number
      skip?: number
      distinct?: Enumerable<StudentScalarFieldEnum>
    }


    /**
     * Class without action
     */
    export type ClassArgs = {
      /**
       * Select specific fields to fetch from the Class
       *
       **/
      select?: ClassSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: ClassInclude | null
    }


    /**
     * Model User
     */


    export type AggregateUser = {
      _count: UserCountAggregateOutputType | null
      _avg: UserAvgAggregateOutputType | null
      _sum: UserSumAggregateOutputType | null
      _min: UserMinAggregateOutputType | null
      _max: UserMaxAggregateOutputType | null
    }

    export type UserAvgAggregateOutputType = {
      id: number | null
    }

    export type UserSumAggregateOutputType = {
      id: number | null
    }

    export type UserMinAggregateOutputType = {
      id: number | null
      role: Role | null
      firstName: string | null
      lastName: string | null
      birth: Date | null
      email: string | null
      password: string | null
    }

    export type UserMaxAggregateOutputType = {
      id: number | null
      role: Role | null
      firstName: string | null
      lastName: string | null
      birth: Date | null
      email: string | null
      password: string | null
    }

    export type UserCountAggregateOutputType = {
      id: number
      role: number
      firstName: number
      lastName: number
      birth: number
      email: number
      password: number
      _all: number
    }


    export type UserAvgAggregateInputType = {
      id?: true
    }

    export type UserSumAggregateInputType = {
      id?: true
    }

    export type UserMinAggregateInputType = {
      id?: true
      role?: true
      firstName?: true
      lastName?: true
      birth?: true
      email?: true
      password?: true
    }

    export type UserMaxAggregateInputType = {
      id?: true
      role?: true
      firstName?: true
      lastName?: true
      birth?: true
      email?: true
      password?: true
    }

    export type UserCountAggregateInputType = {
      id?: true
      role?: true
      firstName?: true
      lastName?: true
      birth?: true
      email?: true
      password?: true
      _all?: true
    }

    export type UserAggregateArgs = {
      /**
       * Filter which User to aggregate.
       *
       **/
      where?: UserWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Users to fetch.
       *
       **/
      orderBy?: Enumerable<UserOrderByWithRelationInput>
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the start position
       *
       **/
      cursor?: UserWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Users from the position of the cursor.
       *
       **/
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Users.
       *
       **/
      skip?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Count returned Users
       **/
      _count?: true | UserCountAggregateInputType
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to average
       **/
      _avg?: UserAvgAggregateInputType
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to sum
       **/
      _sum?: UserSumAggregateInputType
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the minimum value
       **/
      _min?: UserMinAggregateInputType
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the maximum value
       **/
      _max?: UserMaxAggregateInputType
    }

    export type GetUserAggregateType<T extends UserAggregateArgs> = {
      [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateUser[P]>
        : GetScalarType<T[P], AggregateUser[P]>
    }


    export type UserGroupByArgs = {
      where?: UserWhereInput
      orderBy?: Enumerable<UserOrderByWithAggregationInput>
      by: Array<UserScalarFieldEnum>
      having?: UserScalarWhereWithAggregatesInput
      take?: number
      skip?: number
      _count?: UserCountAggregateInputType | true
      _avg?: UserAvgAggregateInputType
      _sum?: UserSumAggregateInputType
      _min?: UserMinAggregateInputType
      _max?: UserMaxAggregateInputType
    }


    export type UserGroupByOutputType = {
      id: number
      role: Role
      firstName: string
      lastName: string
      birth: Date
      email: string
      password: string
      _count: UserCountAggregateOutputType | null
      _avg: UserAvgAggregateOutputType | null
      _sum: UserSumAggregateOutputType | null
      _min: UserMinAggregateOutputType | null
      _max: UserMaxAggregateOutputType | null
    }

    type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
      Array<
        PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


    export type UserSelect = {
      id?: boolean
      role?: boolean
      firstName?: boolean
      lastName?: boolean
      birth?: boolean
      email?: boolean
      password?: boolean
      student?: boolean | StudentArgs
      teacher?: boolean | TeacherArgs
    }


    export type UserInclude = {
      student?: boolean | StudentArgs
      teacher?: boolean | TeacherArgs
    }

    export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
      S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
        S extends true ? User :
          S extends undefined ? never :
            S extends { include: any } & (UserArgs | UserFindManyArgs)
              ? User  & {
              [P in TruthyKeys<S['include']>]:
              P extends 'student' ? StudentGetPayload<S['include'][P]> | null :
                P extends 'teacher' ? TeacherGetPayload<S['include'][P]> | null :  never
            }
              : S extends { select: any } & (UserArgs | UserFindManyArgs)
                ? {
                  [P in TruthyKeys<S['select']>]:
                  P extends 'student' ? StudentGetPayload<S['select'][P]> | null :
                    P extends 'teacher' ? TeacherGetPayload<S['select'][P]> | null :  P extends keyof User ? User[P] : never
                }
                : User


    type UserCountArgs = Merge<
      Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
    >

    export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
      /**
       * Find zero or one User that matches the filter.
       * @param {UserFindUniqueArgs} args - Arguments to find a User
       * @example
       * // Get one User
       * const user = await prisma.user.findUnique({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       **/
      findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
        args: SelectSubset<T, UserFindUniqueArgs>
      ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

      /**
       * Find one User that matches the filter or throw an error  with `error.code='P2025'`
       *     if no matches were found.
       * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
       * @example
       * // Get one User
       * const user = await prisma.user.findUniqueOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       **/
      findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
        args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
      ): Prisma__UserClient<UserGetPayload<T>>

      /**
       * Find the first User that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {UserFindFirstArgs} args - Arguments to find a User
       * @example
       * // Get one User
       * const user = await prisma.user.findFirst({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       **/
      findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
        args?: SelectSubset<T, UserFindFirstArgs>
      ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

      /**
       * Find the first User that matches the filter or
       * throw `NotFoundError` if no matches were found.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
       * @example
       * // Get one User
       * const user = await prisma.user.findFirstOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       **/
      findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
        args?: SelectSubset<T, UserFindFirstOrThrowArgs>
      ): Prisma__UserClient<UserGetPayload<T>>

      /**
       * Find zero or more Users that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
       * @example
       * // Get all Users
       * const users = await prisma.user.findMany()
       *
       * // Get first 10 Users
       * const users = await prisma.user.findMany({ take: 10 })
       *
       * // Only select the `id`
       * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
       *
       **/
      findMany<T extends UserFindManyArgs>(
        args?: SelectSubset<T, UserFindManyArgs>
      ): PrismaPromise<Array<UserGetPayload<T>>>

      /**
       * Create a User.
       * @param {UserCreateArgs} args - Arguments to create a User.
       * @example
       * // Create one User
       * const User = await prisma.user.create({
       *   data: {
       *     // ... data to create a User
       *   }
       * })
       *
       **/
      create<T extends UserCreateArgs>(
        args: SelectSubset<T, UserCreateArgs>
      ): Prisma__UserClient<UserGetPayload<T>>

      /**
       * Create many Users.
       *     @param {UserCreateManyArgs} args - Arguments to create many Users.
       *     @example
       *     // Create many Users
       *     const user = await prisma.user.createMany({
       *       data: {
       *         // ... provide data here
       *       }
       *     })
       *
       **/
      createMany<T extends UserCreateManyArgs>(
        args?: SelectSubset<T, UserCreateManyArgs>
      ): PrismaPromise<BatchPayload>

      /**
       * Delete a User.
       * @param {UserDeleteArgs} args - Arguments to delete one User.
       * @example
       * // Delete one User
       * const User = await prisma.user.delete({
       *   where: {
       *     // ... filter to delete one User
       *   }
       * })
       *
       **/
      delete<T extends UserDeleteArgs>(
        args: SelectSubset<T, UserDeleteArgs>
      ): Prisma__UserClient<UserGetPayload<T>>

      /**
       * Update one User.
       * @param {UserUpdateArgs} args - Arguments to update one User.
       * @example
       * // Update one User
       * const user = await prisma.user.update({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       **/
      update<T extends UserUpdateArgs>(
        args: SelectSubset<T, UserUpdateArgs>
      ): Prisma__UserClient<UserGetPayload<T>>

      /**
       * Delete zero or more Users.
       * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
       * @example
       * // Delete a few Users
       * const { count } = await prisma.user.deleteMany({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       *
       **/
      deleteMany<T extends UserDeleteManyArgs>(
        args?: SelectSubset<T, UserDeleteManyArgs>
      ): PrismaPromise<BatchPayload>

      /**
       * Update zero or more Users.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
       * @example
       * // Update many Users
       * const user = await prisma.user.updateMany({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       **/
      updateMany<T extends UserUpdateManyArgs>(
        args: SelectSubset<T, UserUpdateManyArgs>
      ): PrismaPromise<BatchPayload>

      /**
       * Create or update one User.
       * @param {UserUpsertArgs} args - Arguments to update or create a User.
       * @example
       * // Update or create a User
       * const user = await prisma.user.upsert({
       *   create: {
       *     // ... data to create a User
       *   },
       *   update: {
       *     // ... in case it already exists, update
       *   },
       *   where: {
       *     // ... the filter for the User we want to update
       *   }
       * })
       **/
      upsert<T extends UserUpsertArgs>(
        args: SelectSubset<T, UserUpsertArgs>
      ): Prisma__UserClient<UserGetPayload<T>>

      /**
       * Count the number of Users.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {UserCountArgs} args - Arguments to filter Users to count.
       * @example
       * // Count the number of Users
       * const count = await prisma.user.count({
       *   where: {
       *     // ... the filter for the Users we want to count
       *   }
       * })
       **/
      count<T extends UserCountArgs>(
        args?: Subset<T, UserCountArgs>,
      ): PrismaPromise<
        T extends _Record<'select', any>
          ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], UserCountAggregateOutputType>
          : number
      >

      /**
       * Allows you to perform aggregations operations on a User.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
       * @example
       * // Ordered by age ascending
       * // Where email contains prisma.io
       * // Limited to the 10 users
       * const aggregations = await prisma.user.aggregate({
       *   _avg: {
       *     age: true,
       *   },
       *   where: {
       *     email: {
       *       contains: "prisma.io",
       *     },
       *   },
       *   orderBy: {
       *     age: "asc",
       *   },
       *   take: 10,
       * })
       **/
      aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

      /**
       * Group by User.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {UserGroupByArgs} args - Group by arguments.
       * @example
       * // Group by city, order by createdAt, get count
       * const result = await prisma.user.groupBy({
       *   by: ['city', 'createdAt'],
       *   orderBy: {
       *     createdAt: true
       *   },
       *   _count: {
       *     _all: true
       *   },
       * })
       *
       **/
      groupBy<
        T extends UserGroupByArgs,
        HasSelectOrTake extends Or<
          Extends<'skip', Keys<T>>,
          Extends<'take', Keys<T>>
        >,
        OrderByArg extends True extends HasSelectOrTake
          ? { orderBy: UserGroupByArgs['orderBy'] }
          : { orderBy?: UserGroupByArgs['orderBy'] },
        OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
        ByFields extends TupleToUnion<T['by']>,
        ByValid extends Has<ByFields, OrderFields>,
        HavingFields extends GetHavingFields<T['having']>,
        HavingValid extends Has<ByFields, HavingFields>,
        ByEmpty extends T['by'] extends never[] ? True : False,
        InputErrors extends ByEmpty extends True
          ? 'Error: "by" must not be empty.'
          : HavingValid extends False
            ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                    Error,
                    'Field ',
                    P,
                    ' in "having" needs to be provided in "by"',
                  ]
            }[HavingFields]
            : 'take' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
                : 'Error: If you provide "take", you also need to provide "orderBy"'
              : 'skip' extends Keys<T>
                ? 'orderBy' extends Keys<T>
                  ? ByValid extends True
                    ? {}
                    : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                  : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends True
                  ? {}
                  : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
      >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

    }

    /**
     * The delegate class that acts as a "Promise-like" for User.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
      [prisma]: true;
      private readonly _dmmf;
      private readonly _fetcher;
      private readonly _queryType;
      private readonly _rootField;
      private readonly _clientMethod;
      private readonly _args;
      private readonly _dataPath;
      private readonly _errorFormat;
      private readonly _measurePerformance?;
      private _isList;
      private _callsite;
      private _requestPromise?;
      constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
      readonly [Symbol.toStringTag]: 'PrismaClientPromise';

      student<T extends StudentArgs= {}>(args?: Subset<T, StudentArgs>): Prisma__StudentClient<StudentGetPayload<T> | Null>;

      teacher<T extends TeacherArgs= {}>(args?: Subset<T, TeacherArgs>): Prisma__TeacherClient<TeacherGetPayload<T> | Null>;

      private get _document();
      /**
       * Attaches callbacks for the resolution and/or rejection of the Promise.
       * @param onfulfilled The callback to execute when the Promise is resolved.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of which ever callback is executed.
       */
      then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
      /**
       * Attaches a callback for only the rejection of the Promise.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of the callback.
       */
      catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
      /**
       * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
       * resolved value cannot be modified from the callback.
       * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
       * @returns A Promise for the completion of the callback.
       */
      finally(onfinally?: (() => void) | undefined | null): Promise<T>;
    }


    // Custom InputTypes

    /**
     * User base type for findUnique actions
     */
    export type UserFindUniqueArgsBase = {
      /**
       * Select specific fields to fetch from the User
       *
       **/
      select?: UserSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: UserInclude | null
      /**
       * Filter, which User to fetch.
       *
       **/
      where: UserWhereUniqueInput
    }

    /**
     * User findUnique
     */
    export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
      /**
       * Throw an Error if query returns no results
       * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
       */
      rejectOnNotFound?: RejectOnNotFound
    }


    /**
     * User findUniqueOrThrow
     */
    export type UserFindUniqueOrThrowArgs = {
      /**
       * Select specific fields to fetch from the User
       *
       **/
      select?: UserSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: UserInclude | null
      /**
       * Filter, which User to fetch.
       *
       **/
      where: UserWhereUniqueInput
    }


    /**
     * User base type for findFirst actions
     */
    export type UserFindFirstArgsBase = {
      /**
       * Select specific fields to fetch from the User
       *
       **/
      select?: UserSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: UserInclude | null
      /**
       * Filter, which User to fetch.
       *
       **/
      where?: UserWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Users to fetch.
       *
       **/
      orderBy?: Enumerable<UserOrderByWithRelationInput>
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for Users.
       *
       **/
      cursor?: UserWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Users from the position of the cursor.
       *
       **/
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Users.
       *
       **/
      skip?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Users.
       *
       **/
      distinct?: Enumerable<UserScalarFieldEnum>
    }

    /**
     * User findFirst
     */
    export interface UserFindFirstArgs extends UserFindFirstArgsBase {
      /**
       * Throw an Error if query returns no results
       * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
       */
      rejectOnNotFound?: RejectOnNotFound
    }


    /**
     * User findFirstOrThrow
     */
    export type UserFindFirstOrThrowArgs = {
      /**
       * Select specific fields to fetch from the User
       *
       **/
      select?: UserSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: UserInclude | null
      /**
       * Filter, which User to fetch.
       *
       **/
      where?: UserWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Users to fetch.
       *
       **/
      orderBy?: Enumerable<UserOrderByWithRelationInput>
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for Users.
       *
       **/
      cursor?: UserWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Users from the position of the cursor.
       *
       **/
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Users.
       *
       **/
      skip?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Users.
       *
       **/
      distinct?: Enumerable<UserScalarFieldEnum>
    }


    /**
     * User findMany
     */
    export type UserFindManyArgs = {
      /**
       * Select specific fields to fetch from the User
       *
       **/
      select?: UserSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: UserInclude | null
      /**
       * Filter, which Users to fetch.
       *
       **/
      where?: UserWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Users to fetch.
       *
       **/
      orderBy?: Enumerable<UserOrderByWithRelationInput>
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Users.
       *
       **/
      cursor?: UserWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Users from the position of the cursor.
       *
       **/
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Users.
       *
       **/
      skip?: number
      distinct?: Enumerable<UserScalarFieldEnum>
    }


    /**
     * User create
     */
    export type UserCreateArgs = {
      /**
       * Select specific fields to fetch from the User
       *
       **/
      select?: UserSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: UserInclude | null
      /**
       * The data needed to create a User.
       *
       **/
      data: XOR<UserCreateInput, UserUncheckedCreateInput>
    }


    /**
     * User createMany
     */
    export type UserCreateManyArgs = {
      /**
       * The data used to create many Users.
       *
       **/
      data: Enumerable<UserCreateManyInput>
      skipDuplicates?: boolean
    }


    /**
     * User update
     */
    export type UserUpdateArgs = {
      /**
       * Select specific fields to fetch from the User
       *
       **/
      select?: UserSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: UserInclude | null
      /**
       * The data needed to update a User.
       *
       **/
      data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
      /**
       * Choose, which User to update.
       *
       **/
      where: UserWhereUniqueInput
    }


    /**
     * User updateMany
     */
    export type UserUpdateManyArgs = {
      /**
       * The data used to update Users.
       *
       **/
      data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
      /**
       * Filter which Users to update
       *
       **/
      where?: UserWhereInput
    }


    /**
     * User upsert
     */
    export type UserUpsertArgs = {
      /**
       * Select specific fields to fetch from the User
       *
       **/
      select?: UserSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: UserInclude | null
      /**
       * The filter to search for the User to update in case it exists.
       *
       **/
      where: UserWhereUniqueInput
      /**
       * In case the User found by the `where` argument doesn't exist, create a new User with this data.
       *
       **/
      create: XOR<UserCreateInput, UserUncheckedCreateInput>
      /**
       * In case the User was found with the provided `where` argument, update it with this data.
       *
       **/
      update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    }


    /**
     * User delete
     */
    export type UserDeleteArgs = {
      /**
       * Select specific fields to fetch from the User
       *
       **/
      select?: UserSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: UserInclude | null
      /**
       * Filter which User to delete.
       *
       **/
      where: UserWhereUniqueInput
    }


    /**
     * User deleteMany
     */
    export type UserDeleteManyArgs = {
      /**
       * Filter which Users to delete
       *
       **/
      where?: UserWhereInput
    }


    /**
     * User without action
     */
    export type UserArgs = {
      /**
       * Select specific fields to fetch from the User
       *
       **/
      select?: UserSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: UserInclude | null
    }


    /**
     * Model Student
     */


    export type AggregateStudent = {
      _count: StudentCountAggregateOutputType | null
      _avg: StudentAvgAggregateOutputType | null
      _sum: StudentSumAggregateOutputType | null
      _min: StudentMinAggregateOutputType | null
      _max: StudentMaxAggregateOutputType | null
    }

    export type StudentAvgAggregateOutputType = {
      id: number | null
      userId: number | null
      classId: number | null
    }

    export type StudentSumAggregateOutputType = {
      id: number | null
      userId: number | null
      classId: number | null
    }

    export type StudentMinAggregateOutputType = {
      id: number | null
      userId: number | null
      classId: number | null
    }

    export type StudentMaxAggregateOutputType = {
      id: number | null
      userId: number | null
      classId: number | null
    }

    export type StudentCountAggregateOutputType = {
      id: number
      userId: number
      classId: number
      _all: number
    }


    export type StudentAvgAggregateInputType = {
      id?: true
      userId?: true
      classId?: true
    }

    export type StudentSumAggregateInputType = {
      id?: true
      userId?: true
      classId?: true
    }

    export type StudentMinAggregateInputType = {
      id?: true
      userId?: true
      classId?: true
    }

    export type StudentMaxAggregateInputType = {
      id?: true
      userId?: true
      classId?: true
    }

    export type StudentCountAggregateInputType = {
      id?: true
      userId?: true
      classId?: true
      _all?: true
    }

    export type StudentAggregateArgs = {
      /**
       * Filter which Student to aggregate.
       *
       **/
      where?: StudentWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Students to fetch.
       *
       **/
      orderBy?: Enumerable<StudentOrderByWithRelationInput>
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the start position
       *
       **/
      cursor?: StudentWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Students from the position of the cursor.
       *
       **/
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Students.
       *
       **/
      skip?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Count returned Students
       **/
      _count?: true | StudentCountAggregateInputType
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to average
       **/
      _avg?: StudentAvgAggregateInputType
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to sum
       **/
      _sum?: StudentSumAggregateInputType
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the minimum value
       **/
      _min?: StudentMinAggregateInputType
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the maximum value
       **/
      _max?: StudentMaxAggregateInputType
    }

    export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
      [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateStudent[P]>
        : GetScalarType<T[P], AggregateStudent[P]>
    }


    export type StudentGroupByArgs = {
      where?: StudentWhereInput
      orderBy?: Enumerable<StudentOrderByWithAggregationInput>
      by: Array<StudentScalarFieldEnum>
      having?: StudentScalarWhereWithAggregatesInput
      take?: number
      skip?: number
      _count?: StudentCountAggregateInputType | true
      _avg?: StudentAvgAggregateInputType
      _sum?: StudentSumAggregateInputType
      _min?: StudentMinAggregateInputType
      _max?: StudentMaxAggregateInputType
    }


    export type StudentGroupByOutputType = {
      id: number
      userId: number
      classId: number
      _count: StudentCountAggregateOutputType | null
      _avg: StudentAvgAggregateOutputType | null
      _sum: StudentSumAggregateOutputType | null
      _min: StudentMinAggregateOutputType | null
      _max: StudentMaxAggregateOutputType | null
    }

    type GetStudentGroupByPayload<T extends StudentGroupByArgs> = PrismaPromise<
      Array<
        PickArray<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
          : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


    export type StudentSelect = {
      id?: boolean
      user?: boolean | UserArgs
      userId?: boolean
      class?: boolean | ClassArgs
      classId?: boolean
    }


    export type StudentInclude = {
      user?: boolean | UserArgs
      class?: boolean | ClassArgs
    }

    export type StudentGetPayload<S extends boolean | null | undefined | StudentArgs> =
      S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
        S extends true ? Student :
          S extends undefined ? never :
            S extends { include: any } & (StudentArgs | StudentFindManyArgs)
              ? Student  & {
              [P in TruthyKeys<S['include']>]:
              P extends 'user' ? UserGetPayload<S['include'][P]> :
                P extends 'class' ? ClassGetPayload<S['include'][P]> | null :  never
            }
              : S extends { select: any } & (StudentArgs | StudentFindManyArgs)
                ? {
                  [P in TruthyKeys<S['select']>]:
                  P extends 'user' ? UserGetPayload<S['select'][P]> :
                    P extends 'class' ? ClassGetPayload<S['select'][P]> | null :  P extends keyof Student ? Student[P] : never
                }
                : Student


    type StudentCountArgs = Merge<
      Omit<StudentFindManyArgs, 'select' | 'include'> & {
      select?: StudentCountAggregateInputType | true
    }
    >

    export interface StudentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
      /**
       * Find zero or one Student that matches the filter.
       * @param {StudentFindUniqueArgs} args - Arguments to find a Student
       * @example
       * // Get one Student
       * const student = await prisma.student.findUnique({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       **/
      findUnique<T extends StudentFindUniqueArgs,  LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
        args: SelectSubset<T, StudentFindUniqueArgs>
      ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Student'> extends True ? Prisma__StudentClient<StudentGetPayload<T>> : Prisma__StudentClient<StudentGetPayload<T> | null, null>

      /**
       * Find one Student that matches the filter or throw an error  with `error.code='P2025'`
       *     if no matches were found.
       * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
       * @example
       * // Get one Student
       * const student = await prisma.student.findUniqueOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       **/
      findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(
        args?: SelectSubset<T, StudentFindUniqueOrThrowArgs>
      ): Prisma__StudentClient<StudentGetPayload<T>>

      /**
       * Find the first Student that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {StudentFindFirstArgs} args - Arguments to find a Student
       * @example
       * // Get one Student
       * const student = await prisma.student.findFirst({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       **/
      findFirst<T extends StudentFindFirstArgs,  LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
        args?: SelectSubset<T, StudentFindFirstArgs>
      ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Student'> extends True ? Prisma__StudentClient<StudentGetPayload<T>> : Prisma__StudentClient<StudentGetPayload<T> | null, null>

      /**
       * Find the first Student that matches the filter or
       * throw `NotFoundError` if no matches were found.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
       * @example
       * // Get one Student
       * const student = await prisma.student.findFirstOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       **/
      findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(
        args?: SelectSubset<T, StudentFindFirstOrThrowArgs>
      ): Prisma__StudentClient<StudentGetPayload<T>>

      /**
       * Find zero or more Students that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {StudentFindManyArgs=} args - Arguments to filter and select certain fields only.
       * @example
       * // Get all Students
       * const students = await prisma.student.findMany()
       *
       * // Get first 10 Students
       * const students = await prisma.student.findMany({ take: 10 })
       *
       * // Only select the `id`
       * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
       *
       **/
      findMany<T extends StudentFindManyArgs>(
        args?: SelectSubset<T, StudentFindManyArgs>
      ): PrismaPromise<Array<StudentGetPayload<T>>>

      /**
       * Create a Student.
       * @param {StudentCreateArgs} args - Arguments to create a Student.
       * @example
       * // Create one Student
       * const Student = await prisma.student.create({
       *   data: {
       *     // ... data to create a Student
       *   }
       * })
       *
       **/
      create<T extends StudentCreateArgs>(
        args: SelectSubset<T, StudentCreateArgs>
      ): Prisma__StudentClient<StudentGetPayload<T>>

      /**
       * Create many Students.
       *     @param {StudentCreateManyArgs} args - Arguments to create many Students.
       *     @example
       *     // Create many Students
       *     const student = await prisma.student.createMany({
       *       data: {
       *         // ... provide data here
       *       }
       *     })
       *
       **/
      createMany<T extends StudentCreateManyArgs>(
        args?: SelectSubset<T, StudentCreateManyArgs>
      ): PrismaPromise<BatchPayload>

      /**
       * Delete a Student.
       * @param {StudentDeleteArgs} args - Arguments to delete one Student.
       * @example
       * // Delete one Student
       * const Student = await prisma.student.delete({
       *   where: {
       *     // ... filter to delete one Student
       *   }
       * })
       *
       **/
      delete<T extends StudentDeleteArgs>(
        args: SelectSubset<T, StudentDeleteArgs>
      ): Prisma__StudentClient<StudentGetPayload<T>>

      /**
       * Update one Student.
       * @param {StudentUpdateArgs} args - Arguments to update one Student.
       * @example
       * // Update one Student
       * const student = await prisma.student.update({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       **/
      update<T extends StudentUpdateArgs>(
        args: SelectSubset<T, StudentUpdateArgs>
      ): Prisma__StudentClient<StudentGetPayload<T>>

      /**
       * Delete zero or more Students.
       * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
       * @example
       * // Delete a few Students
       * const { count } = await prisma.student.deleteMany({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       *
       **/
      deleteMany<T extends StudentDeleteManyArgs>(
        args?: SelectSubset<T, StudentDeleteManyArgs>
      ): PrismaPromise<BatchPayload>

      /**
       * Update zero or more Students.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
       * @example
       * // Update many Students
       * const student = await prisma.student.updateMany({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       **/
      updateMany<T extends StudentUpdateManyArgs>(
        args: SelectSubset<T, StudentUpdateManyArgs>
      ): PrismaPromise<BatchPayload>

      /**
       * Create or update one Student.
       * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
       * @example
       * // Update or create a Student
       * const student = await prisma.student.upsert({
       *   create: {
       *     // ... data to create a Student
       *   },
       *   update: {
       *     // ... in case it already exists, update
       *   },
       *   where: {
       *     // ... the filter for the Student we want to update
       *   }
       * })
       **/
      upsert<T extends StudentUpsertArgs>(
        args: SelectSubset<T, StudentUpsertArgs>
      ): Prisma__StudentClient<StudentGetPayload<T>>

      /**
       * Count the number of Students.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {StudentCountArgs} args - Arguments to filter Students to count.
       * @example
       * // Count the number of Students
       * const count = await prisma.student.count({
       *   where: {
       *     // ... the filter for the Students we want to count
       *   }
       * })
       **/
      count<T extends StudentCountArgs>(
        args?: Subset<T, StudentCountArgs>,
      ): PrismaPromise<
        T extends _Record<'select', any>
          ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], StudentCountAggregateOutputType>
          : number
      >

      /**
       * Allows you to perform aggregations operations on a Student.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
       * @example
       * // Ordered by age ascending
       * // Where email contains prisma.io
       * // Limited to the 10 users
       * const aggregations = await prisma.user.aggregate({
       *   _avg: {
       *     age: true,
       *   },
       *   where: {
       *     email: {
       *       contains: "prisma.io",
       *     },
       *   },
       *   orderBy: {
       *     age: "asc",
       *   },
       *   take: 10,
       * })
       **/
      aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): PrismaPromise<GetStudentAggregateType<T>>

      /**
       * Group by Student.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {StudentGroupByArgs} args - Group by arguments.
       * @example
       * // Group by city, order by createdAt, get count
       * const result = await prisma.user.groupBy({
       *   by: ['city', 'createdAt'],
       *   orderBy: {
       *     createdAt: true
       *   },
       *   _count: {
       *     _all: true
       *   },
       * })
       *
       **/
      groupBy<
        T extends StudentGroupByArgs,
        HasSelectOrTake extends Or<
          Extends<'skip', Keys<T>>,
          Extends<'take', Keys<T>>
        >,
        OrderByArg extends True extends HasSelectOrTake
          ? { orderBy: StudentGroupByArgs['orderBy'] }
          : { orderBy?: StudentGroupByArgs['orderBy'] },
        OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
        ByFields extends TupleToUnion<T['by']>,
        ByValid extends Has<ByFields, OrderFields>,
        HavingFields extends GetHavingFields<T['having']>,
        HavingValid extends Has<ByFields, HavingFields>,
        ByEmpty extends T['by'] extends never[] ? True : False,
        InputErrors extends ByEmpty extends True
          ? 'Error: "by" must not be empty.'
          : HavingValid extends False
            ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                    Error,
                    'Field ',
                    P,
                    ' in "having" needs to be provided in "by"',
                  ]
            }[HavingFields]
            : 'take' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
                : 'Error: If you provide "take", you also need to provide "orderBy"'
              : 'skip' extends Keys<T>
                ? 'orderBy' extends Keys<T>
                  ? ByValid extends True
                    ? {}
                    : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                  : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends True
                  ? {}
                  : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
      >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : PrismaPromise<InputErrors>

    }

    /**
     * The delegate class that acts as a "Promise-like" for Student.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export class Prisma__StudentClient<T, Null = never> implements PrismaPromise<T> {
      [prisma]: true;
      private readonly _dmmf;
      private readonly _fetcher;
      private readonly _queryType;
      private readonly _rootField;
      private readonly _clientMethod;
      private readonly _args;
      private readonly _dataPath;
      private readonly _errorFormat;
      private readonly _measurePerformance?;
      private _isList;
      private _callsite;
      private _requestPromise?;
      constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
      readonly [Symbol.toStringTag]: 'PrismaClientPromise';

      user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

      class<T extends ClassArgs= {}>(args?: Subset<T, ClassArgs>): Prisma__ClassClient<ClassGetPayload<T> | Null>;

      private get _document();
      /**
       * Attaches callbacks for the resolution and/or rejection of the Promise.
       * @param onfulfilled The callback to execute when the Promise is resolved.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of which ever callback is executed.
       */
      then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
      /**
       * Attaches a callback for only the rejection of the Promise.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of the callback.
       */
      catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
      /**
       * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
       * resolved value cannot be modified from the callback.
       * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
       * @returns A Promise for the completion of the callback.
       */
      finally(onfinally?: (() => void) | undefined | null): Promise<T>;
    }


    // Custom InputTypes

    /**
     * Student base type for findUnique actions
     */
    export type StudentFindUniqueArgsBase = {
      /**
       * Select specific fields to fetch from the Student
       *
       **/
      select?: StudentSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: StudentInclude | null
      /**
       * Filter, which Student to fetch.
       *
       **/
      where: StudentWhereUniqueInput
    }

    /**
     * Student findUnique
     */
    export interface StudentFindUniqueArgs extends StudentFindUniqueArgsBase {
      /**
       * Throw an Error if query returns no results
       * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
       */
      rejectOnNotFound?: RejectOnNotFound
    }


    /**
     * Student findUniqueOrThrow
     */
    export type StudentFindUniqueOrThrowArgs = {
      /**
       * Select specific fields to fetch from the Student
       *
       **/
      select?: StudentSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: StudentInclude | null
      /**
       * Filter, which Student to fetch.
       *
       **/
      where: StudentWhereUniqueInput
    }


    /**
     * Student base type for findFirst actions
     */
    export type StudentFindFirstArgsBase = {
      /**
       * Select specific fields to fetch from the Student
       *
       **/
      select?: StudentSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: StudentInclude | null
      /**
       * Filter, which Student to fetch.
       *
       **/
      where?: StudentWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Students to fetch.
       *
       **/
      orderBy?: Enumerable<StudentOrderByWithRelationInput>
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for Students.
       *
       **/
      cursor?: StudentWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Students from the position of the cursor.
       *
       **/
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Students.
       *
       **/
      skip?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Students.
       *
       **/
      distinct?: Enumerable<StudentScalarFieldEnum>
    }

    /**
     * Student findFirst
     */
    export interface StudentFindFirstArgs extends StudentFindFirstArgsBase {
      /**
       * Throw an Error if query returns no results
       * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
       */
      rejectOnNotFound?: RejectOnNotFound
    }


    /**
     * Student findFirstOrThrow
     */
    export type StudentFindFirstOrThrowArgs = {
      /**
       * Select specific fields to fetch from the Student
       *
       **/
      select?: StudentSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: StudentInclude | null
      /**
       * Filter, which Student to fetch.
       *
       **/
      where?: StudentWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Students to fetch.
       *
       **/
      orderBy?: Enumerable<StudentOrderByWithRelationInput>
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for Students.
       *
       **/
      cursor?: StudentWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Students from the position of the cursor.
       *
       **/
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Students.
       *
       **/
      skip?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Students.
       *
       **/
      distinct?: Enumerable<StudentScalarFieldEnum>
    }


    /**
     * Student findMany
     */
    export type StudentFindManyArgs = {
      /**
       * Select specific fields to fetch from the Student
       *
       **/
      select?: StudentSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: StudentInclude | null
      /**
       * Filter, which Students to fetch.
       *
       **/
      where?: StudentWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Students to fetch.
       *
       **/
      orderBy?: Enumerable<StudentOrderByWithRelationInput>
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Students.
       *
       **/
      cursor?: StudentWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Students from the position of the cursor.
       *
       **/
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Students.
       *
       **/
      skip?: number
      distinct?: Enumerable<StudentScalarFieldEnum>
    }


    /**
     * Student create
     */
    export type StudentCreateArgs = {
      /**
       * Select specific fields to fetch from the Student
       *
       **/
      select?: StudentSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: StudentInclude | null
      /**
       * The data needed to create a Student.
       *
       **/
      data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    }


    /**
     * Student createMany
     */
    export type StudentCreateManyArgs = {
      /**
       * The data used to create many Students.
       *
       **/
      data: Enumerable<StudentCreateManyInput>
      skipDuplicates?: boolean
    }


    /**
     * Student update
     */
    export type StudentUpdateArgs = {
      /**
       * Select specific fields to fetch from the Student
       *
       **/
      select?: StudentSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: StudentInclude | null
      /**
       * The data needed to update a Student.
       *
       **/
      data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
      /**
       * Choose, which Student to update.
       *
       **/
      where: StudentWhereUniqueInput
    }


    /**
     * Student updateMany
     */
    export type StudentUpdateManyArgs = {
      /**
       * The data used to update Students.
       *
       **/
      data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
      /**
       * Filter which Students to update
       *
       **/
      where?: StudentWhereInput
    }


    /**
     * Student upsert
     */
    export type StudentUpsertArgs = {
      /**
       * Select specific fields to fetch from the Student
       *
       **/
      select?: StudentSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: StudentInclude | null
      /**
       * The filter to search for the Student to update in case it exists.
       *
       **/
      where: StudentWhereUniqueInput
      /**
       * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
       *
       **/
      create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
      /**
       * In case the Student was found with the provided `where` argument, update it with this data.
       *
       **/
      update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    }


    /**
     * Student delete
     */
    export type StudentDeleteArgs = {
      /**
       * Select specific fields to fetch from the Student
       *
       **/
      select?: StudentSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: StudentInclude | null
      /**
       * Filter which Student to delete.
       *
       **/
      where: StudentWhereUniqueInput
    }


    /**
     * Student deleteMany
     */
    export type StudentDeleteManyArgs = {
      /**
       * Filter which Students to delete
       *
       **/
      where?: StudentWhereInput
    }


    /**
     * Student without action
     */
    export type StudentArgs = {
      /**
       * Select specific fields to fetch from the Student
       *
       **/
      select?: StudentSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: StudentInclude | null
    }


    /**
     * Model Teacher
     */


    export type AggregateTeacher = {
      _count: TeacherCountAggregateOutputType | null
      _avg: TeacherAvgAggregateOutputType | null
      _sum: TeacherSumAggregateOutputType | null
      _min: TeacherMinAggregateOutputType | null
      _max: TeacherMaxAggregateOutputType | null
    }

    export type TeacherAvgAggregateOutputType = {
      id: number | null
      userId: number | null
    }

    export type TeacherSumAggregateOutputType = {
      id: number | null
      userId: number | null
    }

    export type TeacherMinAggregateOutputType = {
      id: number | null
      userId: number | null
    }

    export type TeacherMaxAggregateOutputType = {
      id: number | null
      userId: number | null
    }

    export type TeacherCountAggregateOutputType = {
      id: number
      userId: number
      _all: number
    }


    export type TeacherAvgAggregateInputType = {
      id?: true
      userId?: true
    }

    export type TeacherSumAggregateInputType = {
      id?: true
      userId?: true
    }

    export type TeacherMinAggregateInputType = {
      id?: true
      userId?: true
    }

    export type TeacherMaxAggregateInputType = {
      id?: true
      userId?: true
    }

    export type TeacherCountAggregateInputType = {
      id?: true
      userId?: true
      _all?: true
    }

    export type TeacherAggregateArgs = {
      /**
       * Filter which Teacher to aggregate.
       *
       **/
      where?: TeacherWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Teachers to fetch.
       *
       **/
      orderBy?: Enumerable<TeacherOrderByWithRelationInput>
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the start position
       *
       **/
      cursor?: TeacherWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Teachers from the position of the cursor.
       *
       **/
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Teachers.
       *
       **/
      skip?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Count returned Teachers
       **/
      _count?: true | TeacherCountAggregateInputType
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to average
       **/
      _avg?: TeacherAvgAggregateInputType
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to sum
       **/
      _sum?: TeacherSumAggregateInputType
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the minimum value
       **/
      _min?: TeacherMinAggregateInputType
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the maximum value
       **/
      _max?: TeacherMaxAggregateInputType
    }

    export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
      [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateTeacher[P]>
        : GetScalarType<T[P], AggregateTeacher[P]>
    }


    export type TeacherGroupByArgs = {
      where?: TeacherWhereInput
      orderBy?: Enumerable<TeacherOrderByWithAggregationInput>
      by: Array<TeacherScalarFieldEnum>
      having?: TeacherScalarWhereWithAggregatesInput
      take?: number
      skip?: number
      _count?: TeacherCountAggregateInputType | true
      _avg?: TeacherAvgAggregateInputType
      _sum?: TeacherSumAggregateInputType
      _min?: TeacherMinAggregateInputType
      _max?: TeacherMaxAggregateInputType
    }


    export type TeacherGroupByOutputType = {
      id: number
      userId: number
      _count: TeacherCountAggregateOutputType | null
      _avg: TeacherAvgAggregateOutputType | null
      _sum: TeacherSumAggregateOutputType | null
      _min: TeacherMinAggregateOutputType | null
      _max: TeacherMaxAggregateOutputType | null
    }

    type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = PrismaPromise<
      Array<
        PickArray<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
          : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


    export type TeacherSelect = {
      id?: boolean
      user?: boolean | UserArgs
      userId?: boolean
      class?: boolean | ClassArgs
    }


    export type TeacherInclude = {
      user?: boolean | UserArgs
      class?: boolean | ClassArgs
    }

    export type TeacherGetPayload<S extends boolean | null | undefined | TeacherArgs> =
      S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
        S extends true ? Teacher :
          S extends undefined ? never :
            S extends { include: any } & (TeacherArgs | TeacherFindManyArgs)
              ? Teacher  & {
              [P in TruthyKeys<S['include']>]:
              P extends 'user' ? UserGetPayload<S['include'][P]> :
                P extends 'class' ? ClassGetPayload<S['include'][P]> | null :  never
            }
              : S extends { select: any } & (TeacherArgs | TeacherFindManyArgs)
                ? {
                  [P in TruthyKeys<S['select']>]:
                  P extends 'user' ? UserGetPayload<S['select'][P]> :
                    P extends 'class' ? ClassGetPayload<S['select'][P]> | null :  P extends keyof Teacher ? Teacher[P] : never
                }
                : Teacher


    type TeacherCountArgs = Merge<
      Omit<TeacherFindManyArgs, 'select' | 'include'> & {
      select?: TeacherCountAggregateInputType | true
    }
    >

    export interface TeacherDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
      /**
       * Find zero or one Teacher that matches the filter.
       * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
       * @example
       * // Get one Teacher
       * const teacher = await prisma.teacher.findUnique({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       **/
      findUnique<T extends TeacherFindUniqueArgs,  LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
        args: SelectSubset<T, TeacherFindUniqueArgs>
      ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Teacher'> extends True ? Prisma__TeacherClient<TeacherGetPayload<T>> : Prisma__TeacherClient<TeacherGetPayload<T> | null, null>

      /**
       * Find one Teacher that matches the filter or throw an error  with `error.code='P2025'`
       *     if no matches were found.
       * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
       * @example
       * // Get one Teacher
       * const teacher = await prisma.teacher.findUniqueOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       **/
      findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(
        args?: SelectSubset<T, TeacherFindUniqueOrThrowArgs>
      ): Prisma__TeacherClient<TeacherGetPayload<T>>

      /**
       * Find the first Teacher that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
       * @example
       * // Get one Teacher
       * const teacher = await prisma.teacher.findFirst({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       **/
      findFirst<T extends TeacherFindFirstArgs,  LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
        args?: SelectSubset<T, TeacherFindFirstArgs>
      ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Teacher'> extends True ? Prisma__TeacherClient<TeacherGetPayload<T>> : Prisma__TeacherClient<TeacherGetPayload<T> | null, null>

      /**
       * Find the first Teacher that matches the filter or
       * throw `NotFoundError` if no matches were found.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
       * @example
       * // Get one Teacher
       * const teacher = await prisma.teacher.findFirstOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       **/
      findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(
        args?: SelectSubset<T, TeacherFindFirstOrThrowArgs>
      ): Prisma__TeacherClient<TeacherGetPayload<T>>

      /**
       * Find zero or more Teachers that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TeacherFindManyArgs=} args - Arguments to filter and select certain fields only.
       * @example
       * // Get all Teachers
       * const teachers = await prisma.teacher.findMany()
       *
       * // Get first 10 Teachers
       * const teachers = await prisma.teacher.findMany({ take: 10 })
       *
       * // Only select the `id`
       * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
       *
       **/
      findMany<T extends TeacherFindManyArgs>(
        args?: SelectSubset<T, TeacherFindManyArgs>
      ): PrismaPromise<Array<TeacherGetPayload<T>>>

      /**
       * Create a Teacher.
       * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
       * @example
       * // Create one Teacher
       * const Teacher = await prisma.teacher.create({
       *   data: {
       *     // ... data to create a Teacher
       *   }
       * })
       *
       **/
      create<T extends TeacherCreateArgs>(
        args: SelectSubset<T, TeacherCreateArgs>
      ): Prisma__TeacherClient<TeacherGetPayload<T>>

      /**
       * Create many Teachers.
       *     @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
       *     @example
       *     // Create many Teachers
       *     const teacher = await prisma.teacher.createMany({
       *       data: {
       *         // ... provide data here
       *       }
       *     })
       *
       **/
      createMany<T extends TeacherCreateManyArgs>(
        args?: SelectSubset<T, TeacherCreateManyArgs>
      ): PrismaPromise<BatchPayload>

      /**
       * Delete a Teacher.
       * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
       * @example
       * // Delete one Teacher
       * const Teacher = await prisma.teacher.delete({
       *   where: {
       *     // ... filter to delete one Teacher
       *   }
       * })
       *
       **/
      delete<T extends TeacherDeleteArgs>(
        args: SelectSubset<T, TeacherDeleteArgs>
      ): Prisma__TeacherClient<TeacherGetPayload<T>>

      /**
       * Update one Teacher.
       * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
       * @example
       * // Update one Teacher
       * const teacher = await prisma.teacher.update({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       **/
      update<T extends TeacherUpdateArgs>(
        args: SelectSubset<T, TeacherUpdateArgs>
      ): Prisma__TeacherClient<TeacherGetPayload<T>>

      /**
       * Delete zero or more Teachers.
       * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
       * @example
       * // Delete a few Teachers
       * const { count } = await prisma.teacher.deleteMany({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       *
       **/
      deleteMany<T extends TeacherDeleteManyArgs>(
        args?: SelectSubset<T, TeacherDeleteManyArgs>
      ): PrismaPromise<BatchPayload>

      /**
       * Update zero or more Teachers.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
       * @example
       * // Update many Teachers
       * const teacher = await prisma.teacher.updateMany({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       **/
      updateMany<T extends TeacherUpdateManyArgs>(
        args: SelectSubset<T, TeacherUpdateManyArgs>
      ): PrismaPromise<BatchPayload>

      /**
       * Create or update one Teacher.
       * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
       * @example
       * // Update or create a Teacher
       * const teacher = await prisma.teacher.upsert({
       *   create: {
       *     // ... data to create a Teacher
       *   },
       *   update: {
       *     // ... in case it already exists, update
       *   },
       *   where: {
       *     // ... the filter for the Teacher we want to update
       *   }
       * })
       **/
      upsert<T extends TeacherUpsertArgs>(
        args: SelectSubset<T, TeacherUpsertArgs>
      ): Prisma__TeacherClient<TeacherGetPayload<T>>

      /**
       * Count the number of Teachers.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
       * @example
       * // Count the number of Teachers
       * const count = await prisma.teacher.count({
       *   where: {
       *     // ... the filter for the Teachers we want to count
       *   }
       * })
       **/
      count<T extends TeacherCountArgs>(
        args?: Subset<T, TeacherCountArgs>,
      ): PrismaPromise<
        T extends _Record<'select', any>
          ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], TeacherCountAggregateOutputType>
          : number
      >

      /**
       * Allows you to perform aggregations operations on a Teacher.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
       * @example
       * // Ordered by age ascending
       * // Where email contains prisma.io
       * // Limited to the 10 users
       * const aggregations = await prisma.user.aggregate({
       *   _avg: {
       *     age: true,
       *   },
       *   where: {
       *     email: {
       *       contains: "prisma.io",
       *     },
       *   },
       *   orderBy: {
       *     age: "asc",
       *   },
       *   take: 10,
       * })
       **/
      aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): PrismaPromise<GetTeacherAggregateType<T>>

      /**
       * Group by Teacher.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TeacherGroupByArgs} args - Group by arguments.
       * @example
       * // Group by city, order by createdAt, get count
       * const result = await prisma.user.groupBy({
       *   by: ['city', 'createdAt'],
       *   orderBy: {
       *     createdAt: true
       *   },
       *   _count: {
       *     _all: true
       *   },
       * })
       *
       **/
      groupBy<
        T extends TeacherGroupByArgs,
        HasSelectOrTake extends Or<
          Extends<'skip', Keys<T>>,
          Extends<'take', Keys<T>>
        >,
        OrderByArg extends True extends HasSelectOrTake
          ? { orderBy: TeacherGroupByArgs['orderBy'] }
          : { orderBy?: TeacherGroupByArgs['orderBy'] },
        OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
        ByFields extends TupleToUnion<T['by']>,
        ByValid extends Has<ByFields, OrderFields>,
        HavingFields extends GetHavingFields<T['having']>,
        HavingValid extends Has<ByFields, HavingFields>,
        ByEmpty extends T['by'] extends never[] ? True : False,
        InputErrors extends ByEmpty extends True
          ? 'Error: "by" must not be empty.'
          : HavingValid extends False
            ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                    Error,
                    'Field ',
                    P,
                    ' in "having" needs to be provided in "by"',
                  ]
            }[HavingFields]
            : 'take' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
                : 'Error: If you provide "take", you also need to provide "orderBy"'
              : 'skip' extends Keys<T>
                ? 'orderBy' extends Keys<T>
                  ? ByValid extends True
                    ? {}
                    : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                  : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends True
                  ? {}
                  : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
      >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : PrismaPromise<InputErrors>

    }

    /**
     * The delegate class that acts as a "Promise-like" for Teacher.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export class Prisma__TeacherClient<T, Null = never> implements PrismaPromise<T> {
      [prisma]: true;
      private readonly _dmmf;
      private readonly _fetcher;
      private readonly _queryType;
      private readonly _rootField;
      private readonly _clientMethod;
      private readonly _args;
      private readonly _dataPath;
      private readonly _errorFormat;
      private readonly _measurePerformance?;
      private _isList;
      private _callsite;
      private _requestPromise?;
      constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
      readonly [Symbol.toStringTag]: 'PrismaClientPromise';

      user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

      class<T extends ClassArgs= {}>(args?: Subset<T, ClassArgs>): Prisma__ClassClient<ClassGetPayload<T> | Null>;

      private get _document();
      /**
       * Attaches callbacks for the resolution and/or rejection of the Promise.
       * @param onfulfilled The callback to execute when the Promise is resolved.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of which ever callback is executed.
       */
      then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
      /**
       * Attaches a callback for only the rejection of the Promise.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of the callback.
       */
      catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
      /**
       * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
       * resolved value cannot be modified from the callback.
       * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
       * @returns A Promise for the completion of the callback.
       */
      finally(onfinally?: (() => void) | undefined | null): Promise<T>;
    }


    // Custom InputTypes

    /**
     * Teacher base type for findUnique actions
     */
    export type TeacherFindUniqueArgsBase = {
      /**
       * Select specific fields to fetch from the Teacher
       *
       **/
      select?: TeacherSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: TeacherInclude | null
      /**
       * Filter, which Teacher to fetch.
       *
       **/
      where: TeacherWhereUniqueInput
    }

    /**
     * Teacher findUnique
     */
    export interface TeacherFindUniqueArgs extends TeacherFindUniqueArgsBase {
      /**
       * Throw an Error if query returns no results
       * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
       */
      rejectOnNotFound?: RejectOnNotFound
    }


    /**
     * Teacher findUniqueOrThrow
     */
    export type TeacherFindUniqueOrThrowArgs = {
      /**
       * Select specific fields to fetch from the Teacher
       *
       **/
      select?: TeacherSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: TeacherInclude | null
      /**
       * Filter, which Teacher to fetch.
       *
       **/
      where: TeacherWhereUniqueInput
    }


    /**
     * Teacher base type for findFirst actions
     */
    export type TeacherFindFirstArgsBase = {
      /**
       * Select specific fields to fetch from the Teacher
       *
       **/
      select?: TeacherSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: TeacherInclude | null
      /**
       * Filter, which Teacher to fetch.
       *
       **/
      where?: TeacherWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Teachers to fetch.
       *
       **/
      orderBy?: Enumerable<TeacherOrderByWithRelationInput>
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for Teachers.
       *
       **/
      cursor?: TeacherWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Teachers from the position of the cursor.
       *
       **/
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Teachers.
       *
       **/
      skip?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Teachers.
       *
       **/
      distinct?: Enumerable<TeacherScalarFieldEnum>
    }

    /**
     * Teacher findFirst
     */
    export interface TeacherFindFirstArgs extends TeacherFindFirstArgsBase {
      /**
       * Throw an Error if query returns no results
       * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
       */
      rejectOnNotFound?: RejectOnNotFound
    }


    /**
     * Teacher findFirstOrThrow
     */
    export type TeacherFindFirstOrThrowArgs = {
      /**
       * Select specific fields to fetch from the Teacher
       *
       **/
      select?: TeacherSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: TeacherInclude | null
      /**
       * Filter, which Teacher to fetch.
       *
       **/
      where?: TeacherWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Teachers to fetch.
       *
       **/
      orderBy?: Enumerable<TeacherOrderByWithRelationInput>
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for Teachers.
       *
       **/
      cursor?: TeacherWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Teachers from the position of the cursor.
       *
       **/
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Teachers.
       *
       **/
      skip?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Teachers.
       *
       **/
      distinct?: Enumerable<TeacherScalarFieldEnum>
    }


    /**
     * Teacher findMany
     */
    export type TeacherFindManyArgs = {
      /**
       * Select specific fields to fetch from the Teacher
       *
       **/
      select?: TeacherSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: TeacherInclude | null
      /**
       * Filter, which Teachers to fetch.
       *
       **/
      where?: TeacherWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Teachers to fetch.
       *
       **/
      orderBy?: Enumerable<TeacherOrderByWithRelationInput>
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Teachers.
       *
       **/
      cursor?: TeacherWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Teachers from the position of the cursor.
       *
       **/
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Teachers.
       *
       **/
      skip?: number
      distinct?: Enumerable<TeacherScalarFieldEnum>
    }


    /**
     * Teacher create
     */
    export type TeacherCreateArgs = {
      /**
       * Select specific fields to fetch from the Teacher
       *
       **/
      select?: TeacherSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: TeacherInclude | null
      /**
       * The data needed to create a Teacher.
       *
       **/
      data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    }


    /**
     * Teacher createMany
     */
    export type TeacherCreateManyArgs = {
      /**
       * The data used to create many Teachers.
       *
       **/
      data: Enumerable<TeacherCreateManyInput>
      skipDuplicates?: boolean
    }


    /**
     * Teacher update
     */
    export type TeacherUpdateArgs = {
      /**
       * Select specific fields to fetch from the Teacher
       *
       **/
      select?: TeacherSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: TeacherInclude | null
      /**
       * The data needed to update a Teacher.
       *
       **/
      data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
      /**
       * Choose, which Teacher to update.
       *
       **/
      where: TeacherWhereUniqueInput
    }


    /**
     * Teacher updateMany
     */
    export type TeacherUpdateManyArgs = {
      /**
       * The data used to update Teachers.
       *
       **/
      data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
      /**
       * Filter which Teachers to update
       *
       **/
      where?: TeacherWhereInput
    }


    /**
     * Teacher upsert
     */
    export type TeacherUpsertArgs = {
      /**
       * Select specific fields to fetch from the Teacher
       *
       **/
      select?: TeacherSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: TeacherInclude | null
      /**
       * The filter to search for the Teacher to update in case it exists.
       *
       **/
      where: TeacherWhereUniqueInput
      /**
       * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
       *
       **/
      create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
      /**
       * In case the Teacher was found with the provided `where` argument, update it with this data.
       *
       **/
      update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    }


    /**
     * Teacher delete
     */
    export type TeacherDeleteArgs = {
      /**
       * Select specific fields to fetch from the Teacher
       *
       **/
      select?: TeacherSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: TeacherInclude | null
      /**
       * Filter which Teacher to delete.
       *
       **/
      where: TeacherWhereUniqueInput
    }


    /**
     * Teacher deleteMany
     */
    export type TeacherDeleteManyArgs = {
      /**
       * Filter which Teachers to delete
       *
       **/
      where?: TeacherWhereInput
    }


    /**
     * Teacher without action
     */
    export type TeacherArgs = {
      /**
       * Select specific fields to fetch from the Teacher
       *
       **/
      select?: TeacherSelect | null
      /**
       * Choose, which related nodes to fetch as well.
       *
       **/
      include?: TeacherInclude | null
    }


    /**
     * Enums
     */

      // Based on
      // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

    export const ClassScalarFieldEnum: {
        id: 'id',
        name: 'name',
        tutorId: 'tutorId'
      };

    export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


    export const QueryMode: {
      default: 'default',
      insensitive: 'insensitive'
    };

    export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


    export const SortOrder: {
      asc: 'asc',
      desc: 'desc'
    };

    export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


    export const StudentScalarFieldEnum: {
      id: 'id',
      userId: 'userId',
      classId: 'classId'
    };

    export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


    export const TeacherScalarFieldEnum: {
      id: 'id',
      userId: 'userId'
    };

    export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


    export const TransactionIsolationLevel: {
      ReadUncommitted: 'ReadUncommitted',
      ReadCommitted: 'ReadCommitted',
      RepeatableRead: 'RepeatableRead',
      Serializable: 'Serializable'
    };

    export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


    export const UserScalarFieldEnum: {
      id: 'id',
      role: 'role',
      firstName: 'firstName',
      lastName: 'lastName',
      birth: 'birth',
      email: 'email',
      password: 'password'
    };

    export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


    /**
     * Deep Input Types
     */


    export type ClassWhereInput = {
      AND?: Enumerable<ClassWhereInput>
      OR?: Enumerable<ClassWhereInput>
      NOT?: Enumerable<ClassWhereInput>
      id?: IntFilter | number
      name?: StringFilter | string
      students?: StudentListRelationFilter
      tutor?: XOR<TeacherRelationFilter, TeacherWhereInput>
      tutorId?: IntFilter | number
    }

    export type ClassOrderByWithRelationInput = {
      id?: SortOrder
      name?: SortOrder
      students?: StudentOrderByRelationAggregateInput
      tutor?: TeacherOrderByWithRelationInput
      tutorId?: SortOrder
    }

    export type ClassWhereUniqueInput = {
      id?: number
      name?: string
      tutorId?: number
    }

    export type ClassOrderByWithAggregationInput = {
      id?: SortOrder
      name?: SortOrder
      tutorId?: SortOrder
      _count?: ClassCountOrderByAggregateInput
      _avg?: ClassAvgOrderByAggregateInput
      _max?: ClassMaxOrderByAggregateInput
      _min?: ClassMinOrderByAggregateInput
      _sum?: ClassSumOrderByAggregateInput
    }

    export type ClassScalarWhereWithAggregatesInput = {
      AND?: Enumerable<ClassScalarWhereWithAggregatesInput>
      OR?: Enumerable<ClassScalarWhereWithAggregatesInput>
      NOT?: Enumerable<ClassScalarWhereWithAggregatesInput>
      id?: IntWithAggregatesFilter | number
      name?: StringWithAggregatesFilter | string
      tutorId?: IntWithAggregatesFilter | number
    }

    export type UserWhereInput = {
      AND?: Enumerable<UserWhereInput>
      OR?: Enumerable<UserWhereInput>
      NOT?: Enumerable<UserWhereInput>
      id?: IntFilter | number
      role?: EnumRoleFilter | Role
      firstName?: StringFilter | string
      lastName?: StringFilter | string
      birth?: DateTimeFilter | Date | string
      email?: StringFilter | string
      password?: StringFilter | string
      student?: XOR<StudentRelationFilter, StudentWhereInput> | null
      teacher?: XOR<TeacherRelationFilter, TeacherWhereInput> | null
    }

    export type UserOrderByWithRelationInput = {
      id?: SortOrder
      role?: SortOrder
      firstName?: SortOrder
      lastName?: SortOrder
      birth?: SortOrder
      email?: SortOrder
      password?: SortOrder
      student?: StudentOrderByWithRelationInput
      teacher?: TeacherOrderByWithRelationInput
    }

    export type UserWhereUniqueInput = {
      id?: number
      email?: string
    }

    export type UserOrderByWithAggregationInput = {
      id?: SortOrder
      role?: SortOrder
      firstName?: SortOrder
      lastName?: SortOrder
      birth?: SortOrder
      email?: SortOrder
      password?: SortOrder
      _count?: UserCountOrderByAggregateInput
      _avg?: UserAvgOrderByAggregateInput
      _max?: UserMaxOrderByAggregateInput
      _min?: UserMinOrderByAggregateInput
      _sum?: UserSumOrderByAggregateInput
    }

    export type UserScalarWhereWithAggregatesInput = {
      AND?: Enumerable<UserScalarWhereWithAggregatesInput>
      OR?: Enumerable<UserScalarWhereWithAggregatesInput>
      NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
      id?: IntWithAggregatesFilter | number
      role?: EnumRoleWithAggregatesFilter | Role
      firstName?: StringWithAggregatesFilter | string
      lastName?: StringWithAggregatesFilter | string
      birth?: DateTimeWithAggregatesFilter | Date | string
      email?: StringWithAggregatesFilter | string
      password?: StringWithAggregatesFilter | string
    }

    export type StudentWhereInput = {
      AND?: Enumerable<StudentWhereInput>
      OR?: Enumerable<StudentWhereInput>
      NOT?: Enumerable<StudentWhereInput>
      id?: IntFilter | number
      user?: XOR<UserRelationFilter, UserWhereInput>
      userId?: IntFilter | number
      class?: XOR<ClassRelationFilter, ClassWhereInput> | null
      classId?: IntFilter | number
    }

    export type StudentOrderByWithRelationInput = {
      id?: SortOrder
      user?: UserOrderByWithRelationInput
      userId?: SortOrder
      class?: ClassOrderByWithRelationInput
      classId?: SortOrder
    }

    export type StudentWhereUniqueInput = {
      id?: number
      userId?: number
    }

    export type StudentOrderByWithAggregationInput = {
      id?: SortOrder
      userId?: SortOrder
      classId?: SortOrder
      _count?: StudentCountOrderByAggregateInput
      _avg?: StudentAvgOrderByAggregateInput
      _max?: StudentMaxOrderByAggregateInput
      _min?: StudentMinOrderByAggregateInput
      _sum?: StudentSumOrderByAggregateInput
    }

    export type StudentScalarWhereWithAggregatesInput = {
      AND?: Enumerable<StudentScalarWhereWithAggregatesInput>
      OR?: Enumerable<StudentScalarWhereWithAggregatesInput>
      NOT?: Enumerable<StudentScalarWhereWithAggregatesInput>
      id?: IntWithAggregatesFilter | number
      userId?: IntWithAggregatesFilter | number
      classId?: IntWithAggregatesFilter | number
    }

    export type TeacherWhereInput = {
      AND?: Enumerable<TeacherWhereInput>
      OR?: Enumerable<TeacherWhereInput>
      NOT?: Enumerable<TeacherWhereInput>
      id?: IntFilter | number
      user?: XOR<UserRelationFilter, UserWhereInput>
      userId?: IntFilter | number
      class?: XOR<ClassRelationFilter, ClassWhereInput> | null
    }

    export type TeacherOrderByWithRelationInput = {
      id?: SortOrder
      user?: UserOrderByWithRelationInput
      userId?: SortOrder
      class?: ClassOrderByWithRelationInput
    }

    export type TeacherWhereUniqueInput = {
      id?: number
      userId?: number
    }

    export type TeacherOrderByWithAggregationInput = {
      id?: SortOrder
      userId?: SortOrder
      _count?: TeacherCountOrderByAggregateInput
      _avg?: TeacherAvgOrderByAggregateInput
      _max?: TeacherMaxOrderByAggregateInput
      _min?: TeacherMinOrderByAggregateInput
      _sum?: TeacherSumOrderByAggregateInput
    }

    export type TeacherScalarWhereWithAggregatesInput = {
      AND?: Enumerable<TeacherScalarWhereWithAggregatesInput>
      OR?: Enumerable<TeacherScalarWhereWithAggregatesInput>
      NOT?: Enumerable<TeacherScalarWhereWithAggregatesInput>
      id?: IntWithAggregatesFilter | number
      userId?: IntWithAggregatesFilter | number
    }

    export type ClassCreateInput = {
      name: string
      students?: StudentCreateNestedManyWithoutClassInput
      tutor: TeacherCreateNestedOneWithoutClassInput
    }

    export type ClassUncheckedCreateInput = {
      id?: number
      name: string
      students?: StudentUncheckedCreateNestedManyWithoutClassInput
      tutorId: number
    }

    export type ClassUpdateInput = {
      name?: StringFieldUpdateOperationsInput | string
      students?: StudentUpdateManyWithoutClassNestedInput
      tutor?: TeacherUpdateOneRequiredWithoutClassNestedInput
    }

    export type ClassUncheckedUpdateInput = {
      id?: IntFieldUpdateOperationsInput | number
      name?: StringFieldUpdateOperationsInput | string
      students?: StudentUncheckedUpdateManyWithoutClassNestedInput
      tutorId?: IntFieldUpdateOperationsInput | number
    }

    export type ClassCreateManyInput = {
      id?: number
      name: string
      tutorId: number
    }

    export type ClassUpdateManyMutationInput = {
      name?: StringFieldUpdateOperationsInput | string
    }

    export type ClassUncheckedUpdateManyInput = {
      id?: IntFieldUpdateOperationsInput | number
      name?: StringFieldUpdateOperationsInput | string
      tutorId?: IntFieldUpdateOperationsInput | number
    }

    export type UserCreateInput = {
      role?: Role
      firstName: string
      lastName: string
      birth: Date | string
      email: string
      password: string
      student?: StudentCreateNestedOneWithoutUserInput
      teacher?: TeacherCreateNestedOneWithoutUserInput
    }

    export type UserUncheckedCreateInput = {
      id?: number
      role?: Role
      firstName: string
      lastName: string
      birth: Date | string
      email: string
      password: string
      student?: StudentUncheckedCreateNestedOneWithoutUserInput
      teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
    }

    export type UserUpdateInput = {
      role?: EnumRoleFieldUpdateOperationsInput | Role
      firstName?: StringFieldUpdateOperationsInput | string
      lastName?: StringFieldUpdateOperationsInput | string
      birth?: DateTimeFieldUpdateOperationsInput | Date | string
      email?: StringFieldUpdateOperationsInput | string
      password?: StringFieldUpdateOperationsInput | string
      student?: StudentUpdateOneWithoutUserNestedInput
      teacher?: TeacherUpdateOneWithoutUserNestedInput
    }

    export type UserUncheckedUpdateInput = {
      id?: IntFieldUpdateOperationsInput | number
      role?: EnumRoleFieldUpdateOperationsInput | Role
      firstName?: StringFieldUpdateOperationsInput | string
      lastName?: StringFieldUpdateOperationsInput | string
      birth?: DateTimeFieldUpdateOperationsInput | Date | string
      email?: StringFieldUpdateOperationsInput | string
      password?: StringFieldUpdateOperationsInput | string
      student?: StudentUncheckedUpdateOneWithoutUserNestedInput
      teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
    }

    export type UserCreateManyInput = {
      id?: number
      role?: Role
      firstName: string
      lastName: string
      birth: Date | string
      email: string
      password: string
    }

    export type UserUpdateManyMutationInput = {
      role?: EnumRoleFieldUpdateOperationsInput | Role
      firstName?: StringFieldUpdateOperationsInput | string
      lastName?: StringFieldUpdateOperationsInput | string
      birth?: DateTimeFieldUpdateOperationsInput | Date | string
      email?: StringFieldUpdateOperationsInput | string
      password?: StringFieldUpdateOperationsInput | string
    }

    export type UserUncheckedUpdateManyInput = {
      id?: IntFieldUpdateOperationsInput | number
      role?: EnumRoleFieldUpdateOperationsInput | Role
      firstName?: StringFieldUpdateOperationsInput | string
      lastName?: StringFieldUpdateOperationsInput | string
      birth?: DateTimeFieldUpdateOperationsInput | Date | string
      email?: StringFieldUpdateOperationsInput | string
      password?: StringFieldUpdateOperationsInput | string
    }

    export type StudentCreateInput = {
      user: UserCreateNestedOneWithoutStudentInput
      class?: ClassCreateNestedOneWithoutStudentsInput
    }

    export type StudentUncheckedCreateInput = {
      id?: number
      userId: number
      classId: number
    }

    export type StudentUpdateInput = {
      user?: UserUpdateOneRequiredWithoutStudentNestedInput
      class?: ClassUpdateOneWithoutStudentsNestedInput
    }

    export type StudentUncheckedUpdateInput = {
      id?: IntFieldUpdateOperationsInput | number
      userId?: IntFieldUpdateOperationsInput | number
      classId?: IntFieldUpdateOperationsInput | number
    }

    export type StudentCreateManyInput = {
      id?: number
      userId: number
      classId: number
    }

    export type StudentUpdateManyMutationInput = {

    }

    export type StudentUncheckedUpdateManyInput = {
      id?: IntFieldUpdateOperationsInput | number
      userId?: IntFieldUpdateOperationsInput | number
      classId?: IntFieldUpdateOperationsInput | number
    }

    export type TeacherCreateInput = {
      user: UserCreateNestedOneWithoutTeacherInput
      class?: ClassCreateNestedOneWithoutTutorInput
    }

    export type TeacherUncheckedCreateInput = {
      id?: number
      userId: number
      class?: ClassUncheckedCreateNestedOneWithoutTutorInput
    }

    export type TeacherUpdateInput = {
      user?: UserUpdateOneRequiredWithoutTeacherNestedInput
      class?: ClassUpdateOneWithoutTutorNestedInput
    }

    export type TeacherUncheckedUpdateInput = {
      id?: IntFieldUpdateOperationsInput | number
      userId?: IntFieldUpdateOperationsInput | number
      class?: ClassUncheckedUpdateOneWithoutTutorNestedInput
    }

    export type TeacherCreateManyInput = {
      id?: number
      userId: number
    }

    export type TeacherUpdateManyMutationInput = {

    }

    export type TeacherUncheckedUpdateManyInput = {
      id?: IntFieldUpdateOperationsInput | number
      userId?: IntFieldUpdateOperationsInput | number
    }

    export type IntFilter = {
      equals?: number
      in?: Enumerable<number>
      notIn?: Enumerable<number>
      lt?: number
      lte?: number
      gt?: number
      gte?: number
      not?: NestedIntFilter | number
    }

    export type StringFilter = {
      equals?: string
      in?: Enumerable<string>
      notIn?: Enumerable<string>
      lt?: string
      lte?: string
      gt?: string
      gte?: string
      contains?: string
      startsWith?: string
      endsWith?: string
      mode?: QueryMode
      not?: NestedStringFilter | string
    }

    export type StudentListRelationFilter = {
      every?: StudentWhereInput
      some?: StudentWhereInput
      none?: StudentWhereInput
    }

    export type TeacherRelationFilter = {
      is?: TeacherWhereInput
      isNot?: TeacherWhereInput
    }

    export type StudentOrderByRelationAggregateInput = {
      _count?: SortOrder
    }

    export type ClassCountOrderByAggregateInput = {
      id?: SortOrder
      name?: SortOrder
      tutorId?: SortOrder
    }

    export type ClassAvgOrderByAggregateInput = {
      id?: SortOrder
      tutorId?: SortOrder
    }

    export type ClassMaxOrderByAggregateInput = {
      id?: SortOrder
      name?: SortOrder
      tutorId?: SortOrder
    }

    export type ClassMinOrderByAggregateInput = {
      id?: SortOrder
      name?: SortOrder
      tutorId?: SortOrder
    }

    export type ClassSumOrderByAggregateInput = {
      id?: SortOrder
      tutorId?: SortOrder
    }

    export type IntWithAggregatesFilter = {
      equals?: number
      in?: Enumerable<number>
      notIn?: Enumerable<number>
      lt?: number
      lte?: number
      gt?: number
      gte?: number
      not?: NestedIntWithAggregatesFilter | number
      _count?: NestedIntFilter
      _avg?: NestedFloatFilter
      _sum?: NestedIntFilter
      _min?: NestedIntFilter
      _max?: NestedIntFilter
    }

    export type StringWithAggregatesFilter = {
      equals?: string
      in?: Enumerable<string>
      notIn?: Enumerable<string>
      lt?: string
      lte?: string
      gt?: string
      gte?: string
      contains?: string
      startsWith?: string
      endsWith?: string
      mode?: QueryMode
      not?: NestedStringWithAggregatesFilter | string
      _count?: NestedIntFilter
      _min?: NestedStringFilter
      _max?: NestedStringFilter
    }

    export type EnumRoleFilter = {
      equals?: Role
      in?: Enumerable<Role>
      notIn?: Enumerable<Role>
      not?: NestedEnumRoleFilter | Role
    }

    export type DateTimeFilter = {
      equals?: Date | string
      in?: Enumerable<Date> | Enumerable<string>
      notIn?: Enumerable<Date> | Enumerable<string>
      lt?: Date | string
      lte?: Date | string
      gt?: Date | string
      gte?: Date | string
      not?: NestedDateTimeFilter | Date | string
    }

    export type StudentRelationFilter = {
      is?: StudentWhereInput | null
      isNot?: StudentWhereInput | null
    }

    export type UserCountOrderByAggregateInput = {
      id?: SortOrder
      role?: SortOrder
      firstName?: SortOrder
      lastName?: SortOrder
      birth?: SortOrder
      email?: SortOrder
      password?: SortOrder
    }

    export type UserAvgOrderByAggregateInput = {
      id?: SortOrder
    }

    export type UserMaxOrderByAggregateInput = {
      id?: SortOrder
      role?: SortOrder
      firstName?: SortOrder
      lastName?: SortOrder
      birth?: SortOrder
      email?: SortOrder
      password?: SortOrder
    }

    export type UserMinOrderByAggregateInput = {
      id?: SortOrder
      role?: SortOrder
      firstName?: SortOrder
      lastName?: SortOrder
      birth?: SortOrder
      email?: SortOrder
      password?: SortOrder
    }

    export type UserSumOrderByAggregateInput = {
      id?: SortOrder
    }

    export type EnumRoleWithAggregatesFilter = {
      equals?: Role
      in?: Enumerable<Role>
      notIn?: Enumerable<Role>
      not?: NestedEnumRoleWithAggregatesFilter | Role
      _count?: NestedIntFilter
      _min?: NestedEnumRoleFilter
      _max?: NestedEnumRoleFilter
    }

    export type DateTimeWithAggregatesFilter = {
      equals?: Date | string
      in?: Enumerable<Date> | Enumerable<string>
      notIn?: Enumerable<Date> | Enumerable<string>
      lt?: Date | string
      lte?: Date | string
      gt?: Date | string
      gte?: Date | string
      not?: NestedDateTimeWithAggregatesFilter | Date | string
      _count?: NestedIntFilter
      _min?: NestedDateTimeFilter
      _max?: NestedDateTimeFilter
    }

    export type UserRelationFilter = {
      is?: UserWhereInput
      isNot?: UserWhereInput
    }

    export type ClassRelationFilter = {
      is?: ClassWhereInput | null
      isNot?: ClassWhereInput | null
    }

    export type StudentCountOrderByAggregateInput = {
      id?: SortOrder
      userId?: SortOrder
      classId?: SortOrder
    }

    export type StudentAvgOrderByAggregateInput = {
      id?: SortOrder
      userId?: SortOrder
      classId?: SortOrder
    }

    export type StudentMaxOrderByAggregateInput = {
      id?: SortOrder
      userId?: SortOrder
      classId?: SortOrder
    }

    export type StudentMinOrderByAggregateInput = {
      id?: SortOrder
      userId?: SortOrder
      classId?: SortOrder
    }

    export type StudentSumOrderByAggregateInput = {
      id?: SortOrder
      userId?: SortOrder
      classId?: SortOrder
    }

    export type TeacherCountOrderByAggregateInput = {
      id?: SortOrder
      userId?: SortOrder
    }

    export type TeacherAvgOrderByAggregateInput = {
      id?: SortOrder
      userId?: SortOrder
    }

    export type TeacherMaxOrderByAggregateInput = {
      id?: SortOrder
      userId?: SortOrder
    }

    export type TeacherMinOrderByAggregateInput = {
      id?: SortOrder
      userId?: SortOrder
    }

    export type TeacherSumOrderByAggregateInput = {
      id?: SortOrder
      userId?: SortOrder
    }

    export type StudentCreateNestedManyWithoutClassInput = {
      create?: XOR<Enumerable<StudentCreateWithoutClassInput>, Enumerable<StudentUncheckedCreateWithoutClassInput>>
      connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutClassInput>
      createMany?: StudentCreateManyClassInputEnvelope
      connect?: Enumerable<StudentWhereUniqueInput>
    }

    export type TeacherCreateNestedOneWithoutClassInput = {
      create?: XOR<TeacherCreateWithoutClassInput, TeacherUncheckedCreateWithoutClassInput>
      connectOrCreate?: TeacherCreateOrConnectWithoutClassInput
      connect?: TeacherWhereUniqueInput
    }

    export type StudentUncheckedCreateNestedManyWithoutClassInput = {
      create?: XOR<Enumerable<StudentCreateWithoutClassInput>, Enumerable<StudentUncheckedCreateWithoutClassInput>>
      connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutClassInput>
      createMany?: StudentCreateManyClassInputEnvelope
      connect?: Enumerable<StudentWhereUniqueInput>
    }

    export type StringFieldUpdateOperationsInput = {
      set?: string
    }

    export type StudentUpdateManyWithoutClassNestedInput = {
      create?: XOR<Enumerable<StudentCreateWithoutClassInput>, Enumerable<StudentUncheckedCreateWithoutClassInput>>
      connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutClassInput>
      upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutClassInput>
      createMany?: StudentCreateManyClassInputEnvelope
      set?: Enumerable<StudentWhereUniqueInput>
      disconnect?: Enumerable<StudentWhereUniqueInput>
      delete?: Enumerable<StudentWhereUniqueInput>
      connect?: Enumerable<StudentWhereUniqueInput>
      update?: Enumerable<StudentUpdateWithWhereUniqueWithoutClassInput>
      updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutClassInput>
      deleteMany?: Enumerable<StudentScalarWhereInput>
    }

    export type TeacherUpdateOneRequiredWithoutClassNestedInput = {
      create?: XOR<TeacherCreateWithoutClassInput, TeacherUncheckedCreateWithoutClassInput>
      connectOrCreate?: TeacherCreateOrConnectWithoutClassInput
      upsert?: TeacherUpsertWithoutClassInput
      connect?: TeacherWhereUniqueInput
      update?: XOR<TeacherUpdateWithoutClassInput, TeacherUncheckedUpdateWithoutClassInput>
    }

    export type IntFieldUpdateOperationsInput = {
      set?: number
      increment?: number
      decrement?: number
      multiply?: number
      divide?: number
    }

    export type StudentUncheckedUpdateManyWithoutClassNestedInput = {
      create?: XOR<Enumerable<StudentCreateWithoutClassInput>, Enumerable<StudentUncheckedCreateWithoutClassInput>>
      connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutClassInput>
      upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutClassInput>
      createMany?: StudentCreateManyClassInputEnvelope
      set?: Enumerable<StudentWhereUniqueInput>
      disconnect?: Enumerable<StudentWhereUniqueInput>
      delete?: Enumerable<StudentWhereUniqueInput>
      connect?: Enumerable<StudentWhereUniqueInput>
      update?: Enumerable<StudentUpdateWithWhereUniqueWithoutClassInput>
      updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutClassInput>
      deleteMany?: Enumerable<StudentScalarWhereInput>
    }

    export type StudentCreateNestedOneWithoutUserInput = {
      create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
      connectOrCreate?: StudentCreateOrConnectWithoutUserInput
      connect?: StudentWhereUniqueInput
    }

    export type TeacherCreateNestedOneWithoutUserInput = {
      create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
      connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
      connect?: TeacherWhereUniqueInput
    }

    export type StudentUncheckedCreateNestedOneWithoutUserInput = {
      create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
      connectOrCreate?: StudentCreateOrConnectWithoutUserInput
      connect?: StudentWhereUniqueInput
    }

    export type TeacherUncheckedCreateNestedOneWithoutUserInput = {
      create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
      connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
      connect?: TeacherWhereUniqueInput
    }

    export type EnumRoleFieldUpdateOperationsInput = {
      set?: Role
    }

    export type DateTimeFieldUpdateOperationsInput = {
      set?: Date | string
    }

    export type StudentUpdateOneWithoutUserNestedInput = {
      create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
      connectOrCreate?: StudentCreateOrConnectWithoutUserInput
      upsert?: StudentUpsertWithoutUserInput
      disconnect?: boolean
      delete?: boolean
      connect?: StudentWhereUniqueInput
      update?: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    }

    export type TeacherUpdateOneWithoutUserNestedInput = {
      create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
      connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
      upsert?: TeacherUpsertWithoutUserInput
      disconnect?: boolean
      delete?: boolean
      connect?: TeacherWhereUniqueInput
      update?: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
    }

    export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
      create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
      connectOrCreate?: StudentCreateOrConnectWithoutUserInput
      upsert?: StudentUpsertWithoutUserInput
      disconnect?: boolean
      delete?: boolean
      connect?: StudentWhereUniqueInput
      update?: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    }

    export type TeacherUncheckedUpdateOneWithoutUserNestedInput = {
      create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
      connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
      upsert?: TeacherUpsertWithoutUserInput
      disconnect?: boolean
      delete?: boolean
      connect?: TeacherWhereUniqueInput
      update?: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
    }

    export type UserCreateNestedOneWithoutStudentInput = {
      create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
      connectOrCreate?: UserCreateOrConnectWithoutStudentInput
      connect?: UserWhereUniqueInput
    }

    export type ClassCreateNestedOneWithoutStudentsInput = {
      create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
      connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
      connect?: ClassWhereUniqueInput
    }

    export type UserUpdateOneRequiredWithoutStudentNestedInput = {
      create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
      connectOrCreate?: UserCreateOrConnectWithoutStudentInput
      upsert?: UserUpsertWithoutStudentInput
      connect?: UserWhereUniqueInput
      update?: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    }

    export type ClassUpdateOneWithoutStudentsNestedInput = {
      create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
      connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
      upsert?: ClassUpsertWithoutStudentsInput
      disconnect?: boolean
      delete?: boolean
      connect?: ClassWhereUniqueInput
      update?: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
    }

    export type UserCreateNestedOneWithoutTeacherInput = {
      create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
      connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
      connect?: UserWhereUniqueInput
    }

    export type ClassCreateNestedOneWithoutTutorInput = {
      create?: XOR<ClassCreateWithoutTutorInput, ClassUncheckedCreateWithoutTutorInput>
      connectOrCreate?: ClassCreateOrConnectWithoutTutorInput
      connect?: ClassWhereUniqueInput
    }

    export type ClassUncheckedCreateNestedOneWithoutTutorInput = {
      create?: XOR<ClassCreateWithoutTutorInput, ClassUncheckedCreateWithoutTutorInput>
      connectOrCreate?: ClassCreateOrConnectWithoutTutorInput
      connect?: ClassWhereUniqueInput
    }

    export type UserUpdateOneRequiredWithoutTeacherNestedInput = {
      create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
      connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
      upsert?: UserUpsertWithoutTeacherInput
      connect?: UserWhereUniqueInput
      update?: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
    }

    export type ClassUpdateOneWithoutTutorNestedInput = {
      create?: XOR<ClassCreateWithoutTutorInput, ClassUncheckedCreateWithoutTutorInput>
      connectOrCreate?: ClassCreateOrConnectWithoutTutorInput
      upsert?: ClassUpsertWithoutTutorInput
      disconnect?: boolean
      delete?: boolean
      connect?: ClassWhereUniqueInput
      update?: XOR<ClassUpdateWithoutTutorInput, ClassUncheckedUpdateWithoutTutorInput>
    }

    export type ClassUncheckedUpdateOneWithoutTutorNestedInput = {
      create?: XOR<ClassCreateWithoutTutorInput, ClassUncheckedCreateWithoutTutorInput>
      connectOrCreate?: ClassCreateOrConnectWithoutTutorInput
      upsert?: ClassUpsertWithoutTutorInput
      disconnect?: boolean
      delete?: boolean
      connect?: ClassWhereUniqueInput
      update?: XOR<ClassUpdateWithoutTutorInput, ClassUncheckedUpdateWithoutTutorInput>
    }

    export type NestedIntFilter = {
      equals?: number
      in?: Enumerable<number>
      notIn?: Enumerable<number>
      lt?: number
      lte?: number
      gt?: number
      gte?: number
      not?: NestedIntFilter | number
    }

    export type NestedStringFilter = {
      equals?: string
      in?: Enumerable<string>
      notIn?: Enumerable<string>
      lt?: string
      lte?: string
      gt?: string
      gte?: string
      contains?: string
      startsWith?: string
      endsWith?: string
      not?: NestedStringFilter | string
    }

    export type NestedIntWithAggregatesFilter = {
      equals?: number
      in?: Enumerable<number>
      notIn?: Enumerable<number>
      lt?: number
      lte?: number
      gt?: number
      gte?: number
      not?: NestedIntWithAggregatesFilter | number
      _count?: NestedIntFilter
      _avg?: NestedFloatFilter
      _sum?: NestedIntFilter
      _min?: NestedIntFilter
      _max?: NestedIntFilter
    }

    export type NestedFloatFilter = {
      equals?: number
      in?: Enumerable<number>
      notIn?: Enumerable<number>
      lt?: number
      lte?: number
      gt?: number
      gte?: number
      not?: NestedFloatFilter | number
    }

    export type NestedStringWithAggregatesFilter = {
      equals?: string
      in?: Enumerable<string>
      notIn?: Enumerable<string>
      lt?: string
      lte?: string
      gt?: string
      gte?: string
      contains?: string
      startsWith?: string
      endsWith?: string
      not?: NestedStringWithAggregatesFilter | string
      _count?: NestedIntFilter
      _min?: NestedStringFilter
      _max?: NestedStringFilter
    }

    export type NestedEnumRoleFilter = {
      equals?: Role
      in?: Enumerable<Role>
      notIn?: Enumerable<Role>
      not?: NestedEnumRoleFilter | Role
    }

    export type NestedDateTimeFilter = {
      equals?: Date | string
      in?: Enumerable<Date> | Enumerable<string>
      notIn?: Enumerable<Date> | Enumerable<string>
      lt?: Date | string
      lte?: Date | string
      gt?: Date | string
      gte?: Date | string
      not?: NestedDateTimeFilter | Date | string
    }

    export type NestedEnumRoleWithAggregatesFilter = {
      equals?: Role
      in?: Enumerable<Role>
      notIn?: Enumerable<Role>
      not?: NestedEnumRoleWithAggregatesFilter | Role
      _count?: NestedIntFilter
      _min?: NestedEnumRoleFilter
      _max?: NestedEnumRoleFilter
    }

    export type NestedDateTimeWithAggregatesFilter = {
      equals?: Date | string
      in?: Enumerable<Date> | Enumerable<string>
      notIn?: Enumerable<Date> | Enumerable<string>
      lt?: Date | string
      lte?: Date | string
      gt?: Date | string
      gte?: Date | string
      not?: NestedDateTimeWithAggregatesFilter | Date | string
      _count?: NestedIntFilter
      _min?: NestedDateTimeFilter
      _max?: NestedDateTimeFilter
    }

    export type StudentCreateWithoutClassInput = {
      user: UserCreateNestedOneWithoutStudentInput
    }

    export type StudentUncheckedCreateWithoutClassInput = {
      id?: number
      userId: number
    }

    export type StudentCreateOrConnectWithoutClassInput = {
      where: StudentWhereUniqueInput
      create: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput>
    }

    export type StudentCreateManyClassInputEnvelope = {
      data: Enumerable<StudentCreateManyClassInput>
      skipDuplicates?: boolean
    }

    export type TeacherCreateWithoutClassInput = {
      user: UserCreateNestedOneWithoutTeacherInput
    }

    export type TeacherUncheckedCreateWithoutClassInput = {
      id?: number
      userId: number
    }

    export type TeacherCreateOrConnectWithoutClassInput = {
      where: TeacherWhereUniqueInput
      create: XOR<TeacherCreateWithoutClassInput, TeacherUncheckedCreateWithoutClassInput>
    }

    export type StudentUpsertWithWhereUniqueWithoutClassInput = {
      where: StudentWhereUniqueInput
      update: XOR<StudentUpdateWithoutClassInput, StudentUncheckedUpdateWithoutClassInput>
      create: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput>
    }

    export type StudentUpdateWithWhereUniqueWithoutClassInput = {
      where: StudentWhereUniqueInput
      data: XOR<StudentUpdateWithoutClassInput, StudentUncheckedUpdateWithoutClassInput>
    }

    export type StudentUpdateManyWithWhereWithoutClassInput = {
      where: StudentScalarWhereInput
      data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutStudentsInput>
    }

    export type StudentScalarWhereInput = {
      AND?: Enumerable<StudentScalarWhereInput>
      OR?: Enumerable<StudentScalarWhereInput>
      NOT?: Enumerable<StudentScalarWhereInput>
      id?: IntFilter | number
      userId?: IntFilter | number
      classId?: IntFilter | number
    }

    export type TeacherUpsertWithoutClassInput = {
      update: XOR<TeacherUpdateWithoutClassInput, TeacherUncheckedUpdateWithoutClassInput>
      create: XOR<TeacherCreateWithoutClassInput, TeacherUncheckedCreateWithoutClassInput>
    }

    export type TeacherUpdateWithoutClassInput = {
      user?: UserUpdateOneRequiredWithoutTeacherNestedInput
    }

    export type TeacherUncheckedUpdateWithoutClassInput = {
      id?: IntFieldUpdateOperationsInput | number
      userId?: IntFieldUpdateOperationsInput | number
    }

    export type StudentCreateWithoutUserInput = {
      class?: ClassCreateNestedOneWithoutStudentsInput
    }

    export type StudentUncheckedCreateWithoutUserInput = {
      id?: number
      classId: number
    }

    export type StudentCreateOrConnectWithoutUserInput = {
      where: StudentWhereUniqueInput
      create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    }

    export type TeacherCreateWithoutUserInput = {
      class?: ClassCreateNestedOneWithoutTutorInput
    }

    export type TeacherUncheckedCreateWithoutUserInput = {
      id?: number
      class?: ClassUncheckedCreateNestedOneWithoutTutorInput
    }

    export type TeacherCreateOrConnectWithoutUserInput = {
      where: TeacherWhereUniqueInput
      create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    }

    export type StudentUpsertWithoutUserInput = {
      update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
      create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    }

    export type StudentUpdateWithoutUserInput = {
      class?: ClassUpdateOneWithoutStudentsNestedInput
    }

    export type StudentUncheckedUpdateWithoutUserInput = {
      id?: IntFieldUpdateOperationsInput | number
      classId?: IntFieldUpdateOperationsInput | number
    }

    export type TeacherUpsertWithoutUserInput = {
      update: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
      create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    }

    export type TeacherUpdateWithoutUserInput = {
      class?: ClassUpdateOneWithoutTutorNestedInput
    }

    export type TeacherUncheckedUpdateWithoutUserInput = {
      id?: IntFieldUpdateOperationsInput | number
      class?: ClassUncheckedUpdateOneWithoutTutorNestedInput
    }

    export type UserCreateWithoutStudentInput = {
      role?: Role
      firstName: string
      lastName: string
      birth: Date | string
      email: string
      password: string
      teacher?: TeacherCreateNestedOneWithoutUserInput
    }

    export type UserUncheckedCreateWithoutStudentInput = {
      id?: number
      role?: Role
      firstName: string
      lastName: string
      birth: Date | string
      email: string
      password: string
      teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
    }

    export type UserCreateOrConnectWithoutStudentInput = {
      where: UserWhereUniqueInput
      create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    }

    export type ClassCreateWithoutStudentsInput = {
      name: string
      tutor: TeacherCreateNestedOneWithoutClassInput
    }

    export type ClassUncheckedCreateWithoutStudentsInput = {
      id?: number
      name: string
      tutorId: number
    }

    export type ClassCreateOrConnectWithoutStudentsInput = {
      where: ClassWhereUniqueInput
      create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    }

    export type UserUpsertWithoutStudentInput = {
      update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
      create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    }

    export type UserUpdateWithoutStudentInput = {
      role?: EnumRoleFieldUpdateOperationsInput | Role
      firstName?: StringFieldUpdateOperationsInput | string
      lastName?: StringFieldUpdateOperationsInput | string
      birth?: DateTimeFieldUpdateOperationsInput | Date | string
      email?: StringFieldUpdateOperationsInput | string
      password?: StringFieldUpdateOperationsInput | string
      teacher?: TeacherUpdateOneWithoutUserNestedInput
    }

    export type UserUncheckedUpdateWithoutStudentInput = {
      id?: IntFieldUpdateOperationsInput | number
      role?: EnumRoleFieldUpdateOperationsInput | Role
      firstName?: StringFieldUpdateOperationsInput | string
      lastName?: StringFieldUpdateOperationsInput | string
      birth?: DateTimeFieldUpdateOperationsInput | Date | string
      email?: StringFieldUpdateOperationsInput | string
      password?: StringFieldUpdateOperationsInput | string
      teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
    }

    export type ClassUpsertWithoutStudentsInput = {
      update: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
      create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    }

    export type ClassUpdateWithoutStudentsInput = {
      name?: StringFieldUpdateOperationsInput | string
      tutor?: TeacherUpdateOneRequiredWithoutClassNestedInput
    }

    export type ClassUncheckedUpdateWithoutStudentsInput = {
      id?: IntFieldUpdateOperationsInput | number
      name?: StringFieldUpdateOperationsInput | string
      tutorId?: IntFieldUpdateOperationsInput | number
    }

    export type UserCreateWithoutTeacherInput = {
      role?: Role
      firstName: string
      lastName: string
      birth: Date | string
      email: string
      password: string
      student?: StudentCreateNestedOneWithoutUserInput
    }

    export type UserUncheckedCreateWithoutTeacherInput = {
      id?: number
      role?: Role
      firstName: string
      lastName: string
      birth: Date | string
      email: string
      password: string
      student?: StudentUncheckedCreateNestedOneWithoutUserInput
    }

    export type UserCreateOrConnectWithoutTeacherInput = {
      where: UserWhereUniqueInput
      create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    }

    export type ClassCreateWithoutTutorInput = {
      name: string
      students?: StudentCreateNestedManyWithoutClassInput
    }

    export type ClassUncheckedCreateWithoutTutorInput = {
      id?: number
      name: string
      students?: StudentUncheckedCreateNestedManyWithoutClassInput
    }

    export type ClassCreateOrConnectWithoutTutorInput = {
      where: ClassWhereUniqueInput
      create: XOR<ClassCreateWithoutTutorInput, ClassUncheckedCreateWithoutTutorInput>
    }

    export type UserUpsertWithoutTeacherInput = {
      update: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
      create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    }

    export type UserUpdateWithoutTeacherInput = {
      role?: EnumRoleFieldUpdateOperationsInput | Role
      firstName?: StringFieldUpdateOperationsInput | string
      lastName?: StringFieldUpdateOperationsInput | string
      birth?: DateTimeFieldUpdateOperationsInput | Date | string
      email?: StringFieldUpdateOperationsInput | string
      password?: StringFieldUpdateOperationsInput | string
      student?: StudentUpdateOneWithoutUserNestedInput
    }

    export type UserUncheckedUpdateWithoutTeacherInput = {
      id?: IntFieldUpdateOperationsInput | number
      role?: EnumRoleFieldUpdateOperationsInput | Role
      firstName?: StringFieldUpdateOperationsInput | string
      lastName?: StringFieldUpdateOperationsInput | string
      birth?: DateTimeFieldUpdateOperationsInput | Date | string
      email?: StringFieldUpdateOperationsInput | string
      password?: StringFieldUpdateOperationsInput | string
      student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    }

    export type ClassUpsertWithoutTutorInput = {
      update: XOR<ClassUpdateWithoutTutorInput, ClassUncheckedUpdateWithoutTutorInput>
      create: XOR<ClassCreateWithoutTutorInput, ClassUncheckedCreateWithoutTutorInput>
    }

    export type ClassUpdateWithoutTutorInput = {
      name?: StringFieldUpdateOperationsInput | string
      students?: StudentUpdateManyWithoutClassNestedInput
    }

    export type ClassUncheckedUpdateWithoutTutorInput = {
      id?: IntFieldUpdateOperationsInput | number
      name?: StringFieldUpdateOperationsInput | string
      students?: StudentUncheckedUpdateManyWithoutClassNestedInput
    }

    export type StudentCreateManyClassInput = {
      id?: number
      userId: number
    }

    export type StudentUpdateWithoutClassInput = {
      user?: UserUpdateOneRequiredWithoutStudentNestedInput
    }

    export type StudentUncheckedUpdateWithoutClassInput = {
      id?: IntFieldUpdateOperationsInput | number
      userId?: IntFieldUpdateOperationsInput | number
    }

    export type StudentUncheckedUpdateManyWithoutStudentsInput = {
      id?: IntFieldUpdateOperationsInput | number
      userId?: IntFieldUpdateOperationsInput | number
    }


    /**
     * Batch Payload for updateMany & deleteMany & createMany
     */

    export type BatchPayload = {
      count: number
    }

    /**
     * DMMF
     */
    export const dmmf: runtime.BaseDMMF;
  }
}
