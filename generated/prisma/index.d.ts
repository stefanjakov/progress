
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Opportunity
 * 
 */
export type Opportunity = $Result.DefaultSelection<Prisma.$OpportunityPayload>
/**
 * Model StageType
 * User-extensible catalog of stage kinds (Recruiter Screen, OA, System Design, ...).
 */
export type StageType = $Result.DefaultSelection<Prisma.$StageTypePayload>
/**
 * Model Stage
 * 
 */
export type Stage = $Result.DefaultSelection<Prisma.$StagePayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Task
 * Belongs to EXACTLY ONE of goal | project (XOR enforced in the tRPC layer).
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model DailyTodo
 * Standalone daily list, independent of goals/projects.
 */
export type DailyTodo = $Result.DefaultSelection<Prisma.$DailyTodoPayload>
/**
 * Model GoodieCategory
 * 
 */
export type GoodieCategory = $Result.DefaultSelection<Prisma.$GoodieCategoryPayload>
/**
 * Model GoodieLog
 * 
 */
export type GoodieLog = $Result.DefaultSelection<Prisma.$GoodieLogPayload>
/**
 * Model DayActivity
 * One row per day the app is opened — the (single) user's presence streak.
 */
export type DayActivity = $Result.DefaultSelection<Prisma.$DayActivityPayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OpportunityStatus: {
  WISHLIST: 'WISHLIST',
  APPLIED: 'APPLIED',
  INTERVIEWING: 'INTERVIEWING',
  OFFER: 'OFFER',
  REJECTED: 'REJECTED',
  ACCEPTED: 'ACCEPTED',
  WITHDRAWN: 'WITHDRAWN'
};

export type OpportunityStatus = (typeof OpportunityStatus)[keyof typeof OpportunityStatus]


export const StageStatus: {
  PENDING: 'PENDING',
  SCHEDULED: 'SCHEDULED',
  PASSED: 'PASSED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type StageStatus = (typeof StageStatus)[keyof typeof StageStatus]


export const GoalHorizon: {
  SHORT_TERM: 'SHORT_TERM',
  LONG_TERM: 'LONG_TERM'
};

export type GoalHorizon = (typeof GoalHorizon)[keyof typeof GoalHorizon]


export const GoalStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  ABANDONED: 'ABANDONED'
};

export type GoalStatus = (typeof GoalStatus)[keyof typeof GoalStatus]


export const ProjectStatus: {
  ACTIVE: 'ACTIVE',
  ON_HOLD: 'ON_HOLD',
  DONE: 'DONE',
  ARCHIVED: 'ARCHIVED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const GoodieType: {
  BOOLEAN: 'BOOLEAN',
  COUNT: 'COUNT',
  NUMBER: 'NUMBER'
};

export type GoodieType = (typeof GoodieType)[keyof typeof GoodieType]

}

export type OpportunityStatus = $Enums.OpportunityStatus

export const OpportunityStatus: typeof $Enums.OpportunityStatus

export type StageStatus = $Enums.StageStatus

export const StageStatus: typeof $Enums.StageStatus

export type GoalHorizon = $Enums.GoalHorizon

export const GoalHorizon: typeof $Enums.GoalHorizon

export type GoalStatus = $Enums.GoalStatus

export const GoalStatus: typeof $Enums.GoalStatus

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type GoodieType = $Enums.GoodieType

export const GoodieType: typeof $Enums.GoodieType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Opportunities
 * const opportunities = await prisma.opportunity.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Opportunities
   * const opportunities = await prisma.opportunity.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.opportunity`: Exposes CRUD operations for the **Opportunity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Opportunities
    * const opportunities = await prisma.opportunity.findMany()
    * ```
    */
  get opportunity(): Prisma.OpportunityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stageType`: Exposes CRUD operations for the **StageType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StageTypes
    * const stageTypes = await prisma.stageType.findMany()
    * ```
    */
  get stageType(): Prisma.StageTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stage`: Exposes CRUD operations for the **Stage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stages
    * const stages = await prisma.stage.findMany()
    * ```
    */
  get stage(): Prisma.StageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyTodo`: Exposes CRUD operations for the **DailyTodo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyTodos
    * const dailyTodos = await prisma.dailyTodo.findMany()
    * ```
    */
  get dailyTodo(): Prisma.DailyTodoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goodieCategory`: Exposes CRUD operations for the **GoodieCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoodieCategories
    * const goodieCategories = await prisma.goodieCategory.findMany()
    * ```
    */
  get goodieCategory(): Prisma.GoodieCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goodieLog`: Exposes CRUD operations for the **GoodieLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoodieLogs
    * const goodieLogs = await prisma.goodieLog.findMany()
    * ```
    */
  get goodieLog(): Prisma.GoodieLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dayActivity`: Exposes CRUD operations for the **DayActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DayActivities
    * const dayActivities = await prisma.dayActivity.findMany()
    * ```
    */
  get dayActivity(): Prisma.DayActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
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
      private JsonNull: never
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
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends BigInt
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
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
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
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  export type Not<B extends Boolean> = {
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

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Opportunity: 'Opportunity',
    StageType: 'StageType',
    Stage: 'Stage',
    Goal: 'Goal',
    Project: 'Project',
    Task: 'Task',
    DailyTodo: 'DailyTodo',
    GoodieCategory: 'GoodieCategory',
    GoodieLog: 'GoodieLog',
    DayActivity: 'DayActivity',
    Note: 'Note'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "opportunity" | "stageType" | "stage" | "goal" | "project" | "task" | "dailyTodo" | "goodieCategory" | "goodieLog" | "dayActivity" | "note"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Opportunity: {
        payload: Prisma.$OpportunityPayload<ExtArgs>
        fields: Prisma.OpportunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpportunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpportunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          findFirst: {
            args: Prisma.OpportunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpportunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          findMany: {
            args: Prisma.OpportunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>[]
          }
          create: {
            args: Prisma.OpportunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          createMany: {
            args: Prisma.OpportunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpportunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>[]
          }
          delete: {
            args: Prisma.OpportunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          update: {
            args: Prisma.OpportunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          deleteMany: {
            args: Prisma.OpportunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpportunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpportunityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>[]
          }
          upsert: {
            args: Prisma.OpportunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          aggregate: {
            args: Prisma.OpportunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpportunity>
          }
          groupBy: {
            args: Prisma.OpportunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpportunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpportunityCountArgs<ExtArgs>
            result: $Utils.Optional<OpportunityCountAggregateOutputType> | number
          }
        }
      }
      StageType: {
        payload: Prisma.$StageTypePayload<ExtArgs>
        fields: Prisma.StageTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StageTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StageTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageTypePayload>
          }
          findFirst: {
            args: Prisma.StageTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StageTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageTypePayload>
          }
          findMany: {
            args: Prisma.StageTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageTypePayload>[]
          }
          create: {
            args: Prisma.StageTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageTypePayload>
          }
          createMany: {
            args: Prisma.StageTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StageTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageTypePayload>[]
          }
          delete: {
            args: Prisma.StageTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageTypePayload>
          }
          update: {
            args: Prisma.StageTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageTypePayload>
          }
          deleteMany: {
            args: Prisma.StageTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StageTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StageTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageTypePayload>[]
          }
          upsert: {
            args: Prisma.StageTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageTypePayload>
          }
          aggregate: {
            args: Prisma.StageTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStageType>
          }
          groupBy: {
            args: Prisma.StageTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StageTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.StageTypeCountArgs<ExtArgs>
            result: $Utils.Optional<StageTypeCountAggregateOutputType> | number
          }
        }
      }
      Stage: {
        payload: Prisma.$StagePayload<ExtArgs>
        fields: Prisma.StageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          findFirst: {
            args: Prisma.StageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          findMany: {
            args: Prisma.StageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>[]
          }
          create: {
            args: Prisma.StageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          createMany: {
            args: Prisma.StageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>[]
          }
          delete: {
            args: Prisma.StageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          update: {
            args: Prisma.StageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          deleteMany: {
            args: Prisma.StageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>[]
          }
          upsert: {
            args: Prisma.StageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          aggregate: {
            args: Prisma.StageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStage>
          }
          groupBy: {
            args: Prisma.StageGroupByArgs<ExtArgs>
            result: $Utils.Optional<StageGroupByOutputType>[]
          }
          count: {
            args: Prisma.StageCountArgs<ExtArgs>
            result: $Utils.Optional<StageCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      DailyTodo: {
        payload: Prisma.$DailyTodoPayload<ExtArgs>
        fields: Prisma.DailyTodoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyTodoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTodoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyTodoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTodoPayload>
          }
          findFirst: {
            args: Prisma.DailyTodoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTodoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyTodoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTodoPayload>
          }
          findMany: {
            args: Prisma.DailyTodoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTodoPayload>[]
          }
          create: {
            args: Prisma.DailyTodoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTodoPayload>
          }
          createMany: {
            args: Prisma.DailyTodoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyTodoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTodoPayload>[]
          }
          delete: {
            args: Prisma.DailyTodoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTodoPayload>
          }
          update: {
            args: Prisma.DailyTodoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTodoPayload>
          }
          deleteMany: {
            args: Prisma.DailyTodoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyTodoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyTodoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTodoPayload>[]
          }
          upsert: {
            args: Prisma.DailyTodoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTodoPayload>
          }
          aggregate: {
            args: Prisma.DailyTodoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyTodo>
          }
          groupBy: {
            args: Prisma.DailyTodoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyTodoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyTodoCountArgs<ExtArgs>
            result: $Utils.Optional<DailyTodoCountAggregateOutputType> | number
          }
        }
      }
      GoodieCategory: {
        payload: Prisma.$GoodieCategoryPayload<ExtArgs>
        fields: Prisma.GoodieCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoodieCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoodieCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieCategoryPayload>
          }
          findFirst: {
            args: Prisma.GoodieCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoodieCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieCategoryPayload>
          }
          findMany: {
            args: Prisma.GoodieCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieCategoryPayload>[]
          }
          create: {
            args: Prisma.GoodieCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieCategoryPayload>
          }
          createMany: {
            args: Prisma.GoodieCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoodieCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieCategoryPayload>[]
          }
          delete: {
            args: Prisma.GoodieCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieCategoryPayload>
          }
          update: {
            args: Prisma.GoodieCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieCategoryPayload>
          }
          deleteMany: {
            args: Prisma.GoodieCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoodieCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoodieCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieCategoryPayload>[]
          }
          upsert: {
            args: Prisma.GoodieCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieCategoryPayload>
          }
          aggregate: {
            args: Prisma.GoodieCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoodieCategory>
          }
          groupBy: {
            args: Prisma.GoodieCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoodieCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoodieCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<GoodieCategoryCountAggregateOutputType> | number
          }
        }
      }
      GoodieLog: {
        payload: Prisma.$GoodieLogPayload<ExtArgs>
        fields: Prisma.GoodieLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoodieLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoodieLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieLogPayload>
          }
          findFirst: {
            args: Prisma.GoodieLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoodieLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieLogPayload>
          }
          findMany: {
            args: Prisma.GoodieLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieLogPayload>[]
          }
          create: {
            args: Prisma.GoodieLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieLogPayload>
          }
          createMany: {
            args: Prisma.GoodieLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoodieLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieLogPayload>[]
          }
          delete: {
            args: Prisma.GoodieLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieLogPayload>
          }
          update: {
            args: Prisma.GoodieLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieLogPayload>
          }
          deleteMany: {
            args: Prisma.GoodieLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoodieLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoodieLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieLogPayload>[]
          }
          upsert: {
            args: Prisma.GoodieLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoodieLogPayload>
          }
          aggregate: {
            args: Prisma.GoodieLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoodieLog>
          }
          groupBy: {
            args: Prisma.GoodieLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoodieLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoodieLogCountArgs<ExtArgs>
            result: $Utils.Optional<GoodieLogCountAggregateOutputType> | number
          }
        }
      }
      DayActivity: {
        payload: Prisma.$DayActivityPayload<ExtArgs>
        fields: Prisma.DayActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DayActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DayActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>
          }
          findFirst: {
            args: Prisma.DayActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DayActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>
          }
          findMany: {
            args: Prisma.DayActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>[]
          }
          create: {
            args: Prisma.DayActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>
          }
          createMany: {
            args: Prisma.DayActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DayActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>[]
          }
          delete: {
            args: Prisma.DayActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>
          }
          update: {
            args: Prisma.DayActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>
          }
          deleteMany: {
            args: Prisma.DayActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DayActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DayActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>[]
          }
          upsert: {
            args: Prisma.DayActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayActivityPayload>
          }
          aggregate: {
            args: Prisma.DayActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDayActivity>
          }
          groupBy: {
            args: Prisma.DayActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DayActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DayActivityCountArgs<ExtArgs>
            result: $Utils.Optional<DayActivityCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    opportunity?: OpportunityOmit
    stageType?: StageTypeOmit
    stage?: StageOmit
    goal?: GoalOmit
    project?: ProjectOmit
    task?: TaskOmit
    dailyTodo?: DailyTodoOmit
    goodieCategory?: GoodieCategoryOmit
    goodieLog?: GoodieLogOmit
    dayActivity?: DayActivityOmit
    note?: NoteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OpportunityCountOutputType
   */

  export type OpportunityCountOutputType = {
    stages: number
  }

  export type OpportunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stages?: boolean | OpportunityCountOutputTypeCountStagesArgs
  }

  // Custom InputTypes
  /**
   * OpportunityCountOutputType without action
   */
  export type OpportunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityCountOutputType
     */
    select?: OpportunityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OpportunityCountOutputType without action
   */
  export type OpportunityCountOutputTypeCountStagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StageWhereInput
  }


  /**
   * Count Type StageTypeCountOutputType
   */

  export type StageTypeCountOutputType = {
    stages: number
  }

  export type StageTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stages?: boolean | StageTypeCountOutputTypeCountStagesArgs
  }

  // Custom InputTypes
  /**
   * StageTypeCountOutputType without action
   */
  export type StageTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageTypeCountOutputType
     */
    select?: StageTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StageTypeCountOutputType without action
   */
  export type StageTypeCountOutputTypeCountStagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StageWhereInput
  }


  /**
   * Count Type GoalCountOutputType
   */

  export type GoalCountOutputType = {
    tasks: number
  }

  export type GoalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | GoalCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCountOutputType
     */
    select?: GoalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    tasks: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type GoodieCategoryCountOutputType
   */

  export type GoodieCategoryCountOutputType = {
    logs: number
  }

  export type GoodieCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | GoodieCategoryCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * GoodieCategoryCountOutputType without action
   */
  export type GoodieCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieCategoryCountOutputType
     */
    select?: GoodieCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GoodieCategoryCountOutputType without action
   */
  export type GoodieCategoryCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoodieLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Opportunity
   */

  export type AggregateOpportunity = {
    _count: OpportunityCountAggregateOutputType | null
    _avg: OpportunityAvgAggregateOutputType | null
    _sum: OpportunitySumAggregateOutputType | null
    _min: OpportunityMinAggregateOutputType | null
    _max: OpportunityMaxAggregateOutputType | null
  }

  export type OpportunityAvgAggregateOutputType = {
    priority: number | null
    order: number | null
  }

  export type OpportunitySumAggregateOutputType = {
    priority: number | null
    order: number | null
  }

  export type OpportunityMinAggregateOutputType = {
    id: string | null
    company: string | null
    role: string | null
    link: string | null
    priority: number | null
    status: $Enums.OpportunityStatus | null
    notes: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OpportunityMaxAggregateOutputType = {
    id: string | null
    company: string | null
    role: string | null
    link: string | null
    priority: number | null
    status: $Enums.OpportunityStatus | null
    notes: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OpportunityCountAggregateOutputType = {
    id: number
    company: number
    role: number
    link: number
    priority: number
    status: number
    notes: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OpportunityAvgAggregateInputType = {
    priority?: true
    order?: true
  }

  export type OpportunitySumAggregateInputType = {
    priority?: true
    order?: true
  }

  export type OpportunityMinAggregateInputType = {
    id?: true
    company?: true
    role?: true
    link?: true
    priority?: true
    status?: true
    notes?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OpportunityMaxAggregateInputType = {
    id?: true
    company?: true
    role?: true
    link?: true
    priority?: true
    status?: true
    notes?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OpportunityCountAggregateInputType = {
    id?: true
    company?: true
    role?: true
    link?: true
    priority?: true
    status?: true
    notes?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OpportunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opportunity to aggregate.
     */
    where?: OpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Opportunities
    **/
    _count?: true | OpportunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpportunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpportunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpportunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpportunityMaxAggregateInputType
  }

  export type GetOpportunityAggregateType<T extends OpportunityAggregateArgs> = {
        [P in keyof T & keyof AggregateOpportunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpportunity[P]>
      : GetScalarType<T[P], AggregateOpportunity[P]>
  }




  export type OpportunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunityWhereInput
    orderBy?: OpportunityOrderByWithAggregationInput | OpportunityOrderByWithAggregationInput[]
    by: OpportunityScalarFieldEnum[] | OpportunityScalarFieldEnum
    having?: OpportunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpportunityCountAggregateInputType | true
    _avg?: OpportunityAvgAggregateInputType
    _sum?: OpportunitySumAggregateInputType
    _min?: OpportunityMinAggregateInputType
    _max?: OpportunityMaxAggregateInputType
  }

  export type OpportunityGroupByOutputType = {
    id: string
    company: string
    role: string
    link: string | null
    priority: number
    status: $Enums.OpportunityStatus
    notes: string | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: OpportunityCountAggregateOutputType | null
    _avg: OpportunityAvgAggregateOutputType | null
    _sum: OpportunitySumAggregateOutputType | null
    _min: OpportunityMinAggregateOutputType | null
    _max: OpportunityMaxAggregateOutputType | null
  }

  type GetOpportunityGroupByPayload<T extends OpportunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpportunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpportunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpportunityGroupByOutputType[P]>
            : GetScalarType<T[P], OpportunityGroupByOutputType[P]>
        }
      >
    >


  export type OpportunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    role?: boolean
    link?: boolean
    priority?: boolean
    status?: boolean
    notes?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stages?: boolean | Opportunity$stagesArgs<ExtArgs>
    _count?: boolean | OpportunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opportunity"]>

  export type OpportunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    role?: boolean
    link?: boolean
    priority?: boolean
    status?: boolean
    notes?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["opportunity"]>

  export type OpportunitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    role?: boolean
    link?: boolean
    priority?: boolean
    status?: boolean
    notes?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["opportunity"]>

  export type OpportunitySelectScalar = {
    id?: boolean
    company?: boolean
    role?: boolean
    link?: boolean
    priority?: boolean
    status?: boolean
    notes?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OpportunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company" | "role" | "link" | "priority" | "status" | "notes" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["opportunity"]>
  export type OpportunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stages?: boolean | Opportunity$stagesArgs<ExtArgs>
    _count?: boolean | OpportunityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OpportunityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OpportunityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OpportunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Opportunity"
    objects: {
      stages: Prisma.$StagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company: string
      role: string
      link: string | null
      priority: number
      status: $Enums.OpportunityStatus
      notes: string | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["opportunity"]>
    composites: {}
  }

  type OpportunityGetPayload<S extends boolean | null | undefined | OpportunityDefaultArgs> = $Result.GetResult<Prisma.$OpportunityPayload, S>

  type OpportunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpportunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpportunityCountAggregateInputType | true
    }

  export interface OpportunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Opportunity'], meta: { name: 'Opportunity' } }
    /**
     * Find zero or one Opportunity that matches the filter.
     * @param {OpportunityFindUniqueArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpportunityFindUniqueArgs>(args: SelectSubset<T, OpportunityFindUniqueArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Opportunity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpportunityFindUniqueOrThrowArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpportunityFindUniqueOrThrowArgs>(args: SelectSubset<T, OpportunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opportunity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityFindFirstArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpportunityFindFirstArgs>(args?: SelectSubset<T, OpportunityFindFirstArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opportunity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityFindFirstOrThrowArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpportunityFindFirstOrThrowArgs>(args?: SelectSubset<T, OpportunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Opportunities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Opportunities
     * const opportunities = await prisma.opportunity.findMany()
     * 
     * // Get first 10 Opportunities
     * const opportunities = await prisma.opportunity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opportunityWithIdOnly = await prisma.opportunity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpportunityFindManyArgs>(args?: SelectSubset<T, OpportunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Opportunity.
     * @param {OpportunityCreateArgs} args - Arguments to create a Opportunity.
     * @example
     * // Create one Opportunity
     * const Opportunity = await prisma.opportunity.create({
     *   data: {
     *     // ... data to create a Opportunity
     *   }
     * })
     * 
     */
    create<T extends OpportunityCreateArgs>(args: SelectSubset<T, OpportunityCreateArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Opportunities.
     * @param {OpportunityCreateManyArgs} args - Arguments to create many Opportunities.
     * @example
     * // Create many Opportunities
     * const opportunity = await prisma.opportunity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpportunityCreateManyArgs>(args?: SelectSubset<T, OpportunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Opportunities and returns the data saved in the database.
     * @param {OpportunityCreateManyAndReturnArgs} args - Arguments to create many Opportunities.
     * @example
     * // Create many Opportunities
     * const opportunity = await prisma.opportunity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Opportunities and only return the `id`
     * const opportunityWithIdOnly = await prisma.opportunity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpportunityCreateManyAndReturnArgs>(args?: SelectSubset<T, OpportunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Opportunity.
     * @param {OpportunityDeleteArgs} args - Arguments to delete one Opportunity.
     * @example
     * // Delete one Opportunity
     * const Opportunity = await prisma.opportunity.delete({
     *   where: {
     *     // ... filter to delete one Opportunity
     *   }
     * })
     * 
     */
    delete<T extends OpportunityDeleteArgs>(args: SelectSubset<T, OpportunityDeleteArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Opportunity.
     * @param {OpportunityUpdateArgs} args - Arguments to update one Opportunity.
     * @example
     * // Update one Opportunity
     * const opportunity = await prisma.opportunity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpportunityUpdateArgs>(args: SelectSubset<T, OpportunityUpdateArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Opportunities.
     * @param {OpportunityDeleteManyArgs} args - Arguments to filter Opportunities to delete.
     * @example
     * // Delete a few Opportunities
     * const { count } = await prisma.opportunity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpportunityDeleteManyArgs>(args?: SelectSubset<T, OpportunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opportunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Opportunities
     * const opportunity = await prisma.opportunity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpportunityUpdateManyArgs>(args: SelectSubset<T, OpportunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opportunities and returns the data updated in the database.
     * @param {OpportunityUpdateManyAndReturnArgs} args - Arguments to update many Opportunities.
     * @example
     * // Update many Opportunities
     * const opportunity = await prisma.opportunity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Opportunities and only return the `id`
     * const opportunityWithIdOnly = await prisma.opportunity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OpportunityUpdateManyAndReturnArgs>(args: SelectSubset<T, OpportunityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Opportunity.
     * @param {OpportunityUpsertArgs} args - Arguments to update or create a Opportunity.
     * @example
     * // Update or create a Opportunity
     * const opportunity = await prisma.opportunity.upsert({
     *   create: {
     *     // ... data to create a Opportunity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Opportunity we want to update
     *   }
     * })
     */
    upsert<T extends OpportunityUpsertArgs>(args: SelectSubset<T, OpportunityUpsertArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Opportunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityCountArgs} args - Arguments to filter Opportunities to count.
     * @example
     * // Count the number of Opportunities
     * const count = await prisma.opportunity.count({
     *   where: {
     *     // ... the filter for the Opportunities we want to count
     *   }
     * })
    **/
    count<T extends OpportunityCountArgs>(
      args?: Subset<T, OpportunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpportunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Opportunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpportunityAggregateArgs>(args: Subset<T, OpportunityAggregateArgs>): Prisma.PrismaPromise<GetOpportunityAggregateType<T>>

    /**
     * Group by Opportunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityGroupByArgs} args - Group by arguments.
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
      T extends OpportunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpportunityGroupByArgs['orderBy'] }
        : { orderBy?: OpportunityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
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
                ` in "having" needs to be provided in "by"`,
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
    >(args: SubsetIntersection<T, OpportunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpportunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Opportunity model
   */
  readonly fields: OpportunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Opportunity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpportunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stages<T extends Opportunity$stagesArgs<ExtArgs> = {}>(args?: Subset<T, Opportunity$stagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Opportunity model
   */
  interface OpportunityFieldRefs {
    readonly id: FieldRef<"Opportunity", 'String'>
    readonly company: FieldRef<"Opportunity", 'String'>
    readonly role: FieldRef<"Opportunity", 'String'>
    readonly link: FieldRef<"Opportunity", 'String'>
    readonly priority: FieldRef<"Opportunity", 'Int'>
    readonly status: FieldRef<"Opportunity", 'OpportunityStatus'>
    readonly notes: FieldRef<"Opportunity", 'String'>
    readonly order: FieldRef<"Opportunity", 'Int'>
    readonly createdAt: FieldRef<"Opportunity", 'DateTime'>
    readonly updatedAt: FieldRef<"Opportunity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Opportunity findUnique
   */
  export type OpportunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity findUniqueOrThrow
   */
  export type OpportunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity findFirst
   */
  export type OpportunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where?: OpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opportunities.
     */
    cursor?: OpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opportunities.
     */
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[]
  }

  /**
   * Opportunity findFirstOrThrow
   */
  export type OpportunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where?: OpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opportunities.
     */
    cursor?: OpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opportunities.
     */
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[]
  }

  /**
   * Opportunity findMany
   */
  export type OpportunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunities to fetch.
     */
    where?: OpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Opportunities.
     */
    cursor?: OpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[]
  }

  /**
   * Opportunity create
   */
  export type OpportunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Opportunity.
     */
    data: XOR<OpportunityCreateInput, OpportunityUncheckedCreateInput>
  }

  /**
   * Opportunity createMany
   */
  export type OpportunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Opportunities.
     */
    data: OpportunityCreateManyInput | OpportunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Opportunity createManyAndReturn
   */
  export type OpportunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * The data used to create many Opportunities.
     */
    data: OpportunityCreateManyInput | OpportunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Opportunity update
   */
  export type OpportunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Opportunity.
     */
    data: XOR<OpportunityUpdateInput, OpportunityUncheckedUpdateInput>
    /**
     * Choose, which Opportunity to update.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity updateMany
   */
  export type OpportunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Opportunities.
     */
    data: XOR<OpportunityUpdateManyMutationInput, OpportunityUncheckedUpdateManyInput>
    /**
     * Filter which Opportunities to update
     */
    where?: OpportunityWhereInput
    /**
     * Limit how many Opportunities to update.
     */
    limit?: number
  }

  /**
   * Opportunity updateManyAndReturn
   */
  export type OpportunityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * The data used to update Opportunities.
     */
    data: XOR<OpportunityUpdateManyMutationInput, OpportunityUncheckedUpdateManyInput>
    /**
     * Filter which Opportunities to update
     */
    where?: OpportunityWhereInput
    /**
     * Limit how many Opportunities to update.
     */
    limit?: number
  }

  /**
   * Opportunity upsert
   */
  export type OpportunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Opportunity to update in case it exists.
     */
    where: OpportunityWhereUniqueInput
    /**
     * In case the Opportunity found by the `where` argument doesn't exist, create a new Opportunity with this data.
     */
    create: XOR<OpportunityCreateInput, OpportunityUncheckedCreateInput>
    /**
     * In case the Opportunity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpportunityUpdateInput, OpportunityUncheckedUpdateInput>
  }

  /**
   * Opportunity delete
   */
  export type OpportunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter which Opportunity to delete.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity deleteMany
   */
  export type OpportunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opportunities to delete
     */
    where?: OpportunityWhereInput
    /**
     * Limit how many Opportunities to delete.
     */
    limit?: number
  }

  /**
   * Opportunity.stages
   */
  export type Opportunity$stagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    where?: StageWhereInput
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    cursor?: StageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * Opportunity without action
   */
  export type OpportunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
  }


  /**
   * Model StageType
   */

  export type AggregateStageType = {
    _count: StageTypeCountAggregateOutputType | null
    _avg: StageTypeAvgAggregateOutputType | null
    _sum: StageTypeSumAggregateOutputType | null
    _min: StageTypeMinAggregateOutputType | null
    _max: StageTypeMaxAggregateOutputType | null
  }

  export type StageTypeAvgAggregateOutputType = {
    order: number | null
  }

  export type StageTypeSumAggregateOutputType = {
    order: number | null
  }

  export type StageTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    isDefault: boolean | null
    order: number | null
    createdAt: Date | null
  }

  export type StageTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isDefault: boolean | null
    order: number | null
    createdAt: Date | null
  }

  export type StageTypeCountAggregateOutputType = {
    id: number
    name: number
    isDefault: number
    order: number
    createdAt: number
    _all: number
  }


  export type StageTypeAvgAggregateInputType = {
    order?: true
  }

  export type StageTypeSumAggregateInputType = {
    order?: true
  }

  export type StageTypeMinAggregateInputType = {
    id?: true
    name?: true
    isDefault?: true
    order?: true
    createdAt?: true
  }

  export type StageTypeMaxAggregateInputType = {
    id?: true
    name?: true
    isDefault?: true
    order?: true
    createdAt?: true
  }

  export type StageTypeCountAggregateInputType = {
    id?: true
    name?: true
    isDefault?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type StageTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StageType to aggregate.
     */
    where?: StageTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StageTypes to fetch.
     */
    orderBy?: StageTypeOrderByWithRelationInput | StageTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StageTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StageTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StageTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StageTypes
    **/
    _count?: true | StageTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StageTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StageTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StageTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StageTypeMaxAggregateInputType
  }

  export type GetStageTypeAggregateType<T extends StageTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateStageType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStageType[P]>
      : GetScalarType<T[P], AggregateStageType[P]>
  }




  export type StageTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StageTypeWhereInput
    orderBy?: StageTypeOrderByWithAggregationInput | StageTypeOrderByWithAggregationInput[]
    by: StageTypeScalarFieldEnum[] | StageTypeScalarFieldEnum
    having?: StageTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StageTypeCountAggregateInputType | true
    _avg?: StageTypeAvgAggregateInputType
    _sum?: StageTypeSumAggregateInputType
    _min?: StageTypeMinAggregateInputType
    _max?: StageTypeMaxAggregateInputType
  }

  export type StageTypeGroupByOutputType = {
    id: string
    name: string
    isDefault: boolean
    order: number
    createdAt: Date
    _count: StageTypeCountAggregateOutputType | null
    _avg: StageTypeAvgAggregateOutputType | null
    _sum: StageTypeSumAggregateOutputType | null
    _min: StageTypeMinAggregateOutputType | null
    _max: StageTypeMaxAggregateOutputType | null
  }

  type GetStageTypeGroupByPayload<T extends StageTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StageTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StageTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StageTypeGroupByOutputType[P]>
            : GetScalarType<T[P], StageTypeGroupByOutputType[P]>
        }
      >
    >


  export type StageTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isDefault?: boolean
    order?: boolean
    createdAt?: boolean
    stages?: boolean | StageType$stagesArgs<ExtArgs>
    _count?: boolean | StageTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stageType"]>

  export type StageTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isDefault?: boolean
    order?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stageType"]>

  export type StageTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isDefault?: boolean
    order?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stageType"]>

  export type StageTypeSelectScalar = {
    id?: boolean
    name?: boolean
    isDefault?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type StageTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isDefault" | "order" | "createdAt", ExtArgs["result"]["stageType"]>
  export type StageTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stages?: boolean | StageType$stagesArgs<ExtArgs>
    _count?: boolean | StageTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StageTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StageTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StageTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StageType"
    objects: {
      stages: Prisma.$StagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isDefault: boolean
      order: number
      createdAt: Date
    }, ExtArgs["result"]["stageType"]>
    composites: {}
  }

  type StageTypeGetPayload<S extends boolean | null | undefined | StageTypeDefaultArgs> = $Result.GetResult<Prisma.$StageTypePayload, S>

  type StageTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StageTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StageTypeCountAggregateInputType | true
    }

  export interface StageTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StageType'], meta: { name: 'StageType' } }
    /**
     * Find zero or one StageType that matches the filter.
     * @param {StageTypeFindUniqueArgs} args - Arguments to find a StageType
     * @example
     * // Get one StageType
     * const stageType = await prisma.stageType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StageTypeFindUniqueArgs>(args: SelectSubset<T, StageTypeFindUniqueArgs<ExtArgs>>): Prisma__StageTypeClient<$Result.GetResult<Prisma.$StageTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StageType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StageTypeFindUniqueOrThrowArgs} args - Arguments to find a StageType
     * @example
     * // Get one StageType
     * const stageType = await prisma.stageType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StageTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, StageTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StageTypeClient<$Result.GetResult<Prisma.$StageTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StageType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageTypeFindFirstArgs} args - Arguments to find a StageType
     * @example
     * // Get one StageType
     * const stageType = await prisma.stageType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StageTypeFindFirstArgs>(args?: SelectSubset<T, StageTypeFindFirstArgs<ExtArgs>>): Prisma__StageTypeClient<$Result.GetResult<Prisma.$StageTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StageType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageTypeFindFirstOrThrowArgs} args - Arguments to find a StageType
     * @example
     * // Get one StageType
     * const stageType = await prisma.stageType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StageTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, StageTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__StageTypeClient<$Result.GetResult<Prisma.$StageTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StageTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StageTypes
     * const stageTypes = await prisma.stageType.findMany()
     * 
     * // Get first 10 StageTypes
     * const stageTypes = await prisma.stageType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stageTypeWithIdOnly = await prisma.stageType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StageTypeFindManyArgs>(args?: SelectSubset<T, StageTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StageTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StageType.
     * @param {StageTypeCreateArgs} args - Arguments to create a StageType.
     * @example
     * // Create one StageType
     * const StageType = await prisma.stageType.create({
     *   data: {
     *     // ... data to create a StageType
     *   }
     * })
     * 
     */
    create<T extends StageTypeCreateArgs>(args: SelectSubset<T, StageTypeCreateArgs<ExtArgs>>): Prisma__StageTypeClient<$Result.GetResult<Prisma.$StageTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StageTypes.
     * @param {StageTypeCreateManyArgs} args - Arguments to create many StageTypes.
     * @example
     * // Create many StageTypes
     * const stageType = await prisma.stageType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StageTypeCreateManyArgs>(args?: SelectSubset<T, StageTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StageTypes and returns the data saved in the database.
     * @param {StageTypeCreateManyAndReturnArgs} args - Arguments to create many StageTypes.
     * @example
     * // Create many StageTypes
     * const stageType = await prisma.stageType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StageTypes and only return the `id`
     * const stageTypeWithIdOnly = await prisma.stageType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StageTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, StageTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StageTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StageType.
     * @param {StageTypeDeleteArgs} args - Arguments to delete one StageType.
     * @example
     * // Delete one StageType
     * const StageType = await prisma.stageType.delete({
     *   where: {
     *     // ... filter to delete one StageType
     *   }
     * })
     * 
     */
    delete<T extends StageTypeDeleteArgs>(args: SelectSubset<T, StageTypeDeleteArgs<ExtArgs>>): Prisma__StageTypeClient<$Result.GetResult<Prisma.$StageTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StageType.
     * @param {StageTypeUpdateArgs} args - Arguments to update one StageType.
     * @example
     * // Update one StageType
     * const stageType = await prisma.stageType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StageTypeUpdateArgs>(args: SelectSubset<T, StageTypeUpdateArgs<ExtArgs>>): Prisma__StageTypeClient<$Result.GetResult<Prisma.$StageTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StageTypes.
     * @param {StageTypeDeleteManyArgs} args - Arguments to filter StageTypes to delete.
     * @example
     * // Delete a few StageTypes
     * const { count } = await prisma.stageType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StageTypeDeleteManyArgs>(args?: SelectSubset<T, StageTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StageTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StageTypes
     * const stageType = await prisma.stageType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StageTypeUpdateManyArgs>(args: SelectSubset<T, StageTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StageTypes and returns the data updated in the database.
     * @param {StageTypeUpdateManyAndReturnArgs} args - Arguments to update many StageTypes.
     * @example
     * // Update many StageTypes
     * const stageType = await prisma.stageType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StageTypes and only return the `id`
     * const stageTypeWithIdOnly = await prisma.stageType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StageTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, StageTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StageTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StageType.
     * @param {StageTypeUpsertArgs} args - Arguments to update or create a StageType.
     * @example
     * // Update or create a StageType
     * const stageType = await prisma.stageType.upsert({
     *   create: {
     *     // ... data to create a StageType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StageType we want to update
     *   }
     * })
     */
    upsert<T extends StageTypeUpsertArgs>(args: SelectSubset<T, StageTypeUpsertArgs<ExtArgs>>): Prisma__StageTypeClient<$Result.GetResult<Prisma.$StageTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StageTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageTypeCountArgs} args - Arguments to filter StageTypes to count.
     * @example
     * // Count the number of StageTypes
     * const count = await prisma.stageType.count({
     *   where: {
     *     // ... the filter for the StageTypes we want to count
     *   }
     * })
    **/
    count<T extends StageTypeCountArgs>(
      args?: Subset<T, StageTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StageTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StageType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StageTypeAggregateArgs>(args: Subset<T, StageTypeAggregateArgs>): Prisma.PrismaPromise<GetStageTypeAggregateType<T>>

    /**
     * Group by StageType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageTypeGroupByArgs} args - Group by arguments.
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
      T extends StageTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StageTypeGroupByArgs['orderBy'] }
        : { orderBy?: StageTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
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
                ` in "having" needs to be provided in "by"`,
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
    >(args: SubsetIntersection<T, StageTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStageTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StageType model
   */
  readonly fields: StageTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StageType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StageTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stages<T extends StageType$stagesArgs<ExtArgs> = {}>(args?: Subset<T, StageType$stagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StageType model
   */
  interface StageTypeFieldRefs {
    readonly id: FieldRef<"StageType", 'String'>
    readonly name: FieldRef<"StageType", 'String'>
    readonly isDefault: FieldRef<"StageType", 'Boolean'>
    readonly order: FieldRef<"StageType", 'Int'>
    readonly createdAt: FieldRef<"StageType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StageType findUnique
   */
  export type StageTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageType
     */
    select?: StageTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageType
     */
    omit?: StageTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageTypeInclude<ExtArgs> | null
    /**
     * Filter, which StageType to fetch.
     */
    where: StageTypeWhereUniqueInput
  }

  /**
   * StageType findUniqueOrThrow
   */
  export type StageTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageType
     */
    select?: StageTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageType
     */
    omit?: StageTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageTypeInclude<ExtArgs> | null
    /**
     * Filter, which StageType to fetch.
     */
    where: StageTypeWhereUniqueInput
  }

  /**
   * StageType findFirst
   */
  export type StageTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageType
     */
    select?: StageTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageType
     */
    omit?: StageTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageTypeInclude<ExtArgs> | null
    /**
     * Filter, which StageType to fetch.
     */
    where?: StageTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StageTypes to fetch.
     */
    orderBy?: StageTypeOrderByWithRelationInput | StageTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StageTypes.
     */
    cursor?: StageTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StageTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StageTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StageTypes.
     */
    distinct?: StageTypeScalarFieldEnum | StageTypeScalarFieldEnum[]
  }

  /**
   * StageType findFirstOrThrow
   */
  export type StageTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageType
     */
    select?: StageTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageType
     */
    omit?: StageTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageTypeInclude<ExtArgs> | null
    /**
     * Filter, which StageType to fetch.
     */
    where?: StageTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StageTypes to fetch.
     */
    orderBy?: StageTypeOrderByWithRelationInput | StageTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StageTypes.
     */
    cursor?: StageTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StageTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StageTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StageTypes.
     */
    distinct?: StageTypeScalarFieldEnum | StageTypeScalarFieldEnum[]
  }

  /**
   * StageType findMany
   */
  export type StageTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageType
     */
    select?: StageTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageType
     */
    omit?: StageTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageTypeInclude<ExtArgs> | null
    /**
     * Filter, which StageTypes to fetch.
     */
    where?: StageTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StageTypes to fetch.
     */
    orderBy?: StageTypeOrderByWithRelationInput | StageTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StageTypes.
     */
    cursor?: StageTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StageTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StageTypes.
     */
    skip?: number
    distinct?: StageTypeScalarFieldEnum | StageTypeScalarFieldEnum[]
  }

  /**
   * StageType create
   */
  export type StageTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageType
     */
    select?: StageTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageType
     */
    omit?: StageTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a StageType.
     */
    data: XOR<StageTypeCreateInput, StageTypeUncheckedCreateInput>
  }

  /**
   * StageType createMany
   */
  export type StageTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StageTypes.
     */
    data: StageTypeCreateManyInput | StageTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StageType createManyAndReturn
   */
  export type StageTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageType
     */
    select?: StageTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StageType
     */
    omit?: StageTypeOmit<ExtArgs> | null
    /**
     * The data used to create many StageTypes.
     */
    data: StageTypeCreateManyInput | StageTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StageType update
   */
  export type StageTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageType
     */
    select?: StageTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageType
     */
    omit?: StageTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a StageType.
     */
    data: XOR<StageTypeUpdateInput, StageTypeUncheckedUpdateInput>
    /**
     * Choose, which StageType to update.
     */
    where: StageTypeWhereUniqueInput
  }

  /**
   * StageType updateMany
   */
  export type StageTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StageTypes.
     */
    data: XOR<StageTypeUpdateManyMutationInput, StageTypeUncheckedUpdateManyInput>
    /**
     * Filter which StageTypes to update
     */
    where?: StageTypeWhereInput
    /**
     * Limit how many StageTypes to update.
     */
    limit?: number
  }

  /**
   * StageType updateManyAndReturn
   */
  export type StageTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageType
     */
    select?: StageTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StageType
     */
    omit?: StageTypeOmit<ExtArgs> | null
    /**
     * The data used to update StageTypes.
     */
    data: XOR<StageTypeUpdateManyMutationInput, StageTypeUncheckedUpdateManyInput>
    /**
     * Filter which StageTypes to update
     */
    where?: StageTypeWhereInput
    /**
     * Limit how many StageTypes to update.
     */
    limit?: number
  }

  /**
   * StageType upsert
   */
  export type StageTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageType
     */
    select?: StageTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageType
     */
    omit?: StageTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the StageType to update in case it exists.
     */
    where: StageTypeWhereUniqueInput
    /**
     * In case the StageType found by the `where` argument doesn't exist, create a new StageType with this data.
     */
    create: XOR<StageTypeCreateInput, StageTypeUncheckedCreateInput>
    /**
     * In case the StageType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StageTypeUpdateInput, StageTypeUncheckedUpdateInput>
  }

  /**
   * StageType delete
   */
  export type StageTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageType
     */
    select?: StageTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageType
     */
    omit?: StageTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageTypeInclude<ExtArgs> | null
    /**
     * Filter which StageType to delete.
     */
    where: StageTypeWhereUniqueInput
  }

  /**
   * StageType deleteMany
   */
  export type StageTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StageTypes to delete
     */
    where?: StageTypeWhereInput
    /**
     * Limit how many StageTypes to delete.
     */
    limit?: number
  }

  /**
   * StageType.stages
   */
  export type StageType$stagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    where?: StageWhereInput
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    cursor?: StageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * StageType without action
   */
  export type StageTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageType
     */
    select?: StageTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageType
     */
    omit?: StageTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageTypeInclude<ExtArgs> | null
  }


  /**
   * Model Stage
   */

  export type AggregateStage = {
    _count: StageCountAggregateOutputType | null
    _avg: StageAvgAggregateOutputType | null
    _sum: StageSumAggregateOutputType | null
    _min: StageMinAggregateOutputType | null
    _max: StageMaxAggregateOutputType | null
  }

  export type StageAvgAggregateOutputType = {
    order: number | null
  }

  export type StageSumAggregateOutputType = {
    order: number | null
  }

  export type StageMinAggregateOutputType = {
    id: string | null
    opportunityId: string | null
    stageTypeId: string | null
    status: $Enums.StageStatus | null
    scheduledAt: Date | null
    notes: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StageMaxAggregateOutputType = {
    id: string | null
    opportunityId: string | null
    stageTypeId: string | null
    status: $Enums.StageStatus | null
    scheduledAt: Date | null
    notes: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StageCountAggregateOutputType = {
    id: number
    opportunityId: number
    stageTypeId: number
    status: number
    scheduledAt: number
    notes: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StageAvgAggregateInputType = {
    order?: true
  }

  export type StageSumAggregateInputType = {
    order?: true
  }

  export type StageMinAggregateInputType = {
    id?: true
    opportunityId?: true
    stageTypeId?: true
    status?: true
    scheduledAt?: true
    notes?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StageMaxAggregateInputType = {
    id?: true
    opportunityId?: true
    stageTypeId?: true
    status?: true
    scheduledAt?: true
    notes?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StageCountAggregateInputType = {
    id?: true
    opportunityId?: true
    stageTypeId?: true
    status?: true
    scheduledAt?: true
    notes?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stage to aggregate.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stages
    **/
    _count?: true | StageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StageMaxAggregateInputType
  }

  export type GetStageAggregateType<T extends StageAggregateArgs> = {
        [P in keyof T & keyof AggregateStage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStage[P]>
      : GetScalarType<T[P], AggregateStage[P]>
  }




  export type StageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StageWhereInput
    orderBy?: StageOrderByWithAggregationInput | StageOrderByWithAggregationInput[]
    by: StageScalarFieldEnum[] | StageScalarFieldEnum
    having?: StageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StageCountAggregateInputType | true
    _avg?: StageAvgAggregateInputType
    _sum?: StageSumAggregateInputType
    _min?: StageMinAggregateInputType
    _max?: StageMaxAggregateInputType
  }

  export type StageGroupByOutputType = {
    id: string
    opportunityId: string
    stageTypeId: string
    status: $Enums.StageStatus
    scheduledAt: Date | null
    notes: string | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: StageCountAggregateOutputType | null
    _avg: StageAvgAggregateOutputType | null
    _sum: StageSumAggregateOutputType | null
    _min: StageMinAggregateOutputType | null
    _max: StageMaxAggregateOutputType | null
  }

  type GetStageGroupByPayload<T extends StageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StageGroupByOutputType[P]>
            : GetScalarType<T[P], StageGroupByOutputType[P]>
        }
      >
    >


  export type StageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    opportunityId?: boolean
    stageTypeId?: boolean
    status?: boolean
    scheduledAt?: boolean
    notes?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    stageType?: boolean | StageTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stage"]>

  export type StageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    opportunityId?: boolean
    stageTypeId?: boolean
    status?: boolean
    scheduledAt?: boolean
    notes?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    stageType?: boolean | StageTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stage"]>

  export type StageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    opportunityId?: boolean
    stageTypeId?: boolean
    status?: boolean
    scheduledAt?: boolean
    notes?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    stageType?: boolean | StageTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stage"]>

  export type StageSelectScalar = {
    id?: boolean
    opportunityId?: boolean
    stageTypeId?: boolean
    status?: boolean
    scheduledAt?: boolean
    notes?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "opportunityId" | "stageTypeId" | "status" | "scheduledAt" | "notes" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["stage"]>
  export type StageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    stageType?: boolean | StageTypeDefaultArgs<ExtArgs>
  }
  export type StageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    stageType?: boolean | StageTypeDefaultArgs<ExtArgs>
  }
  export type StageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    stageType?: boolean | StageTypeDefaultArgs<ExtArgs>
  }

  export type $StagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stage"
    objects: {
      opportunity: Prisma.$OpportunityPayload<ExtArgs>
      stageType: Prisma.$StageTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      opportunityId: string
      stageTypeId: string
      status: $Enums.StageStatus
      scheduledAt: Date | null
      notes: string | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stage"]>
    composites: {}
  }

  type StageGetPayload<S extends boolean | null | undefined | StageDefaultArgs> = $Result.GetResult<Prisma.$StagePayload, S>

  type StageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StageCountAggregateInputType | true
    }

  export interface StageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stage'], meta: { name: 'Stage' } }
    /**
     * Find zero or one Stage that matches the filter.
     * @param {StageFindUniqueArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StageFindUniqueArgs>(args: SelectSubset<T, StageFindUniqueArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StageFindUniqueOrThrowArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StageFindUniqueOrThrowArgs>(args: SelectSubset<T, StageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindFirstArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StageFindFirstArgs>(args?: SelectSubset<T, StageFindFirstArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindFirstOrThrowArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StageFindFirstOrThrowArgs>(args?: SelectSubset<T, StageFindFirstOrThrowArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stages
     * const stages = await prisma.stage.findMany()
     * 
     * // Get first 10 Stages
     * const stages = await prisma.stage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stageWithIdOnly = await prisma.stage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StageFindManyArgs>(args?: SelectSubset<T, StageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stage.
     * @param {StageCreateArgs} args - Arguments to create a Stage.
     * @example
     * // Create one Stage
     * const Stage = await prisma.stage.create({
     *   data: {
     *     // ... data to create a Stage
     *   }
     * })
     * 
     */
    create<T extends StageCreateArgs>(args: SelectSubset<T, StageCreateArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stages.
     * @param {StageCreateManyArgs} args - Arguments to create many Stages.
     * @example
     * // Create many Stages
     * const stage = await prisma.stage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StageCreateManyArgs>(args?: SelectSubset<T, StageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stages and returns the data saved in the database.
     * @param {StageCreateManyAndReturnArgs} args - Arguments to create many Stages.
     * @example
     * // Create many Stages
     * const stage = await prisma.stage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stages and only return the `id`
     * const stageWithIdOnly = await prisma.stage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StageCreateManyAndReturnArgs>(args?: SelectSubset<T, StageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stage.
     * @param {StageDeleteArgs} args - Arguments to delete one Stage.
     * @example
     * // Delete one Stage
     * const Stage = await prisma.stage.delete({
     *   where: {
     *     // ... filter to delete one Stage
     *   }
     * })
     * 
     */
    delete<T extends StageDeleteArgs>(args: SelectSubset<T, StageDeleteArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stage.
     * @param {StageUpdateArgs} args - Arguments to update one Stage.
     * @example
     * // Update one Stage
     * const stage = await prisma.stage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StageUpdateArgs>(args: SelectSubset<T, StageUpdateArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stages.
     * @param {StageDeleteManyArgs} args - Arguments to filter Stages to delete.
     * @example
     * // Delete a few Stages
     * const { count } = await prisma.stage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StageDeleteManyArgs>(args?: SelectSubset<T, StageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stages
     * const stage = await prisma.stage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StageUpdateManyArgs>(args: SelectSubset<T, StageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stages and returns the data updated in the database.
     * @param {StageUpdateManyAndReturnArgs} args - Arguments to update many Stages.
     * @example
     * // Update many Stages
     * const stage = await prisma.stage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stages and only return the `id`
     * const stageWithIdOnly = await prisma.stage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StageUpdateManyAndReturnArgs>(args: SelectSubset<T, StageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stage.
     * @param {StageUpsertArgs} args - Arguments to update or create a Stage.
     * @example
     * // Update or create a Stage
     * const stage = await prisma.stage.upsert({
     *   create: {
     *     // ... data to create a Stage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stage we want to update
     *   }
     * })
     */
    upsert<T extends StageUpsertArgs>(args: SelectSubset<T, StageUpsertArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageCountArgs} args - Arguments to filter Stages to count.
     * @example
     * // Count the number of Stages
     * const count = await prisma.stage.count({
     *   where: {
     *     // ... the filter for the Stages we want to count
     *   }
     * })
    **/
    count<T extends StageCountArgs>(
      args?: Subset<T, StageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StageAggregateArgs>(args: Subset<T, StageAggregateArgs>): Prisma.PrismaPromise<GetStageAggregateType<T>>

    /**
     * Group by Stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageGroupByArgs} args - Group by arguments.
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
      T extends StageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StageGroupByArgs['orderBy'] }
        : { orderBy?: StageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
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
                ` in "having" needs to be provided in "by"`,
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
    >(args: SubsetIntersection<T, StageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stage model
   */
  readonly fields: StageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    opportunity<T extends OpportunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OpportunityDefaultArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stageType<T extends StageTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StageTypeDefaultArgs<ExtArgs>>): Prisma__StageTypeClient<$Result.GetResult<Prisma.$StageTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stage model
   */
  interface StageFieldRefs {
    readonly id: FieldRef<"Stage", 'String'>
    readonly opportunityId: FieldRef<"Stage", 'String'>
    readonly stageTypeId: FieldRef<"Stage", 'String'>
    readonly status: FieldRef<"Stage", 'StageStatus'>
    readonly scheduledAt: FieldRef<"Stage", 'DateTime'>
    readonly notes: FieldRef<"Stage", 'String'>
    readonly order: FieldRef<"Stage", 'Int'>
    readonly createdAt: FieldRef<"Stage", 'DateTime'>
    readonly updatedAt: FieldRef<"Stage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stage findUnique
   */
  export type StageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where: StageWhereUniqueInput
  }

  /**
   * Stage findUniqueOrThrow
   */
  export type StageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where: StageWhereUniqueInput
  }

  /**
   * Stage findFirst
   */
  export type StageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stages.
     */
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * Stage findFirstOrThrow
   */
  export type StageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stages.
     */
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * Stage findMany
   */
  export type StageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stages to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * Stage create
   */
  export type StageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * The data needed to create a Stage.
     */
    data: XOR<StageCreateInput, StageUncheckedCreateInput>
  }

  /**
   * Stage createMany
   */
  export type StageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stages.
     */
    data: StageCreateManyInput | StageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stage createManyAndReturn
   */
  export type StageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * The data used to create many Stages.
     */
    data: StageCreateManyInput | StageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stage update
   */
  export type StageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * The data needed to update a Stage.
     */
    data: XOR<StageUpdateInput, StageUncheckedUpdateInput>
    /**
     * Choose, which Stage to update.
     */
    where: StageWhereUniqueInput
  }

  /**
   * Stage updateMany
   */
  export type StageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stages.
     */
    data: XOR<StageUpdateManyMutationInput, StageUncheckedUpdateManyInput>
    /**
     * Filter which Stages to update
     */
    where?: StageWhereInput
    /**
     * Limit how many Stages to update.
     */
    limit?: number
  }

  /**
   * Stage updateManyAndReturn
   */
  export type StageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * The data used to update Stages.
     */
    data: XOR<StageUpdateManyMutationInput, StageUncheckedUpdateManyInput>
    /**
     * Filter which Stages to update
     */
    where?: StageWhereInput
    /**
     * Limit how many Stages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stage upsert
   */
  export type StageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * The filter to search for the Stage to update in case it exists.
     */
    where: StageWhereUniqueInput
    /**
     * In case the Stage found by the `where` argument doesn't exist, create a new Stage with this data.
     */
    create: XOR<StageCreateInput, StageUncheckedCreateInput>
    /**
     * In case the Stage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StageUpdateInput, StageUncheckedUpdateInput>
  }

  /**
   * Stage delete
   */
  export type StageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter which Stage to delete.
     */
    where: StageWhereUniqueInput
  }

  /**
   * Stage deleteMany
   */
  export type StageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stages to delete
     */
    where?: StageWhereInput
    /**
     * Limit how many Stages to delete.
     */
    limit?: number
  }

  /**
   * Stage without action
   */
  export type StageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    order: number | null
  }

  export type GoalSumAggregateOutputType = {
    order: number | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    horizon: $Enums.GoalHorizon | null
    targetDate: Date | null
    status: $Enums.GoalStatus | null
    completedAt: Date | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    horizon: $Enums.GoalHorizon | null
    targetDate: Date | null
    status: $Enums.GoalStatus | null
    completedAt: Date | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    title: number
    description: number
    horizon: number
    targetDate: number
    status: number
    completedAt: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    order?: true
  }

  export type GoalSumAggregateInputType = {
    order?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    horizon?: true
    targetDate?: true
    status?: true
    completedAt?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    horizon?: true
    targetDate?: true
    status?: true
    completedAt?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    horizon?: true
    targetDate?: true
    status?: true
    completedAt?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    title: string
    description: string | null
    horizon: $Enums.GoalHorizon
    targetDate: Date | null
    status: $Enums.GoalStatus
    completedAt: Date | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    horizon?: boolean
    targetDate?: boolean
    status?: boolean
    completedAt?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tasks?: boolean | Goal$tasksArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    horizon?: boolean
    targetDate?: boolean
    status?: boolean
    completedAt?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    horizon?: boolean
    targetDate?: boolean
    status?: boolean
    completedAt?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    horizon?: boolean
    targetDate?: boolean
    status?: boolean
    completedAt?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "horizon" | "targetDate" | "status" | "completedAt" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Goal$tasksArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      horizon: $Enums.GoalHorizon
      targetDate: Date | null
      status: $Enums.GoalStatus
      completedAt: Date | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {GoalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
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
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
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
                ` in "having" needs to be provided in "by"`,
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
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Goal$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Goal$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly title: FieldRef<"Goal", 'String'>
    readonly description: FieldRef<"Goal", 'String'>
    readonly horizon: FieldRef<"Goal", 'GoalHorizon'>
    readonly targetDate: FieldRef<"Goal", 'DateTime'>
    readonly status: FieldRef<"Goal", 'GoalStatus'>
    readonly completedAt: FieldRef<"Goal", 'DateTime'>
    readonly order: FieldRef<"Goal", 'Int'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
    readonly updatedAt: FieldRef<"Goal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal updateManyAndReturn
   */
  export type GoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal.tasks
   */
  export type Goal$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    order: number | null
  }

  export type ProjectSumAggregateOutputType = {
    order: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.ProjectStatus | null
    startDate: Date | null
    endDate: Date | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.ProjectStatus | null
    startDate: Date | null
    endDate: Date | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    startDate: number
    endDate: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    order?: true
  }

  export type ProjectSumAggregateInputType = {
    order?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    startDate?: true
    endDate?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    startDate?: true
    endDate?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    startDate?: true
    endDate?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    description: string | null
    status: $Enums.ProjectStatus
    startDate: Date | null
    endDate: Date | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "startDate" | "endDate" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      status: $Enums.ProjectStatus
      startDate: Date | null
      endDate: Date | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
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
                ` in "having" needs to be provided in "by"`,
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
    readonly order: FieldRef<"Project", 'Int'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    order: number | null
  }

  export type TaskSumAggregateOutputType = {
    order: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    notes: string | null
    done: boolean | null
    dueDate: Date | null
    completedAt: Date | null
    order: number | null
    goalId: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    notes: string | null
    done: boolean | null
    dueDate: Date | null
    completedAt: Date | null
    order: number | null
    goalId: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    notes: number
    done: number
    dueDate: number
    completedAt: number
    order: number
    goalId: number
    projectId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    order?: true
  }

  export type TaskSumAggregateInputType = {
    order?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    notes?: true
    done?: true
    dueDate?: true
    completedAt?: true
    order?: true
    goalId?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    notes?: true
    done?: true
    dueDate?: true
    completedAt?: true
    order?: true
    goalId?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    notes?: true
    done?: true
    dueDate?: true
    completedAt?: true
    order?: true
    goalId?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    notes: string | null
    done: boolean
    dueDate: Date | null
    completedAt: Date | null
    order: number
    goalId: string | null
    projectId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    notes?: boolean
    done?: boolean
    dueDate?: boolean
    completedAt?: boolean
    order?: boolean
    goalId?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    goal?: boolean | Task$goalArgs<ExtArgs>
    project?: boolean | Task$projectArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    notes?: boolean
    done?: boolean
    dueDate?: boolean
    completedAt?: boolean
    order?: boolean
    goalId?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    goal?: boolean | Task$goalArgs<ExtArgs>
    project?: boolean | Task$projectArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    notes?: boolean
    done?: boolean
    dueDate?: boolean
    completedAt?: boolean
    order?: boolean
    goalId?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    goal?: boolean | Task$goalArgs<ExtArgs>
    project?: boolean | Task$projectArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    notes?: boolean
    done?: boolean
    dueDate?: boolean
    completedAt?: boolean
    order?: boolean
    goalId?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "notes" | "done" | "dueDate" | "completedAt" | "order" | "goalId" | "projectId" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | Task$goalArgs<ExtArgs>
    project?: boolean | Task$projectArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | Task$goalArgs<ExtArgs>
    project?: boolean | Task$projectArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | Task$goalArgs<ExtArgs>
    project?: boolean | Task$projectArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      goal: Prisma.$GoalPayload<ExtArgs> | null
      project: Prisma.$ProjectPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      notes: string | null
      done: boolean
      dueDate: Date | null
      completedAt: Date | null
      order: number
      goalId: string | null
      projectId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
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
                ` in "having" needs to be provided in "by"`,
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    goal<T extends Task$goalArgs<ExtArgs> = {}>(args?: Subset<T, Task$goalArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    project<T extends Task$projectArgs<ExtArgs> = {}>(args?: Subset<T, Task$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly notes: FieldRef<"Task", 'String'>
    readonly done: FieldRef<"Task", 'Boolean'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly completedAt: FieldRef<"Task", 'DateTime'>
    readonly order: FieldRef<"Task", 'Int'>
    readonly goalId: FieldRef<"Task", 'String'>
    readonly projectId: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.goal
   */
  export type Task$goalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
  }

  /**
   * Task.project
   */
  export type Task$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model DailyTodo
   */

  export type AggregateDailyTodo = {
    _count: DailyTodoCountAggregateOutputType | null
    _avg: DailyTodoAvgAggregateOutputType | null
    _sum: DailyTodoSumAggregateOutputType | null
    _min: DailyTodoMinAggregateOutputType | null
    _max: DailyTodoMaxAggregateOutputType | null
  }

  export type DailyTodoAvgAggregateOutputType = {
    order: number | null
  }

  export type DailyTodoSumAggregateOutputType = {
    order: number | null
  }

  export type DailyTodoMinAggregateOutputType = {
    id: string | null
    title: string | null
    done: boolean | null
    date: Date | null
    order: number | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type DailyTodoMaxAggregateOutputType = {
    id: string | null
    title: string | null
    done: boolean | null
    date: Date | null
    order: number | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type DailyTodoCountAggregateOutputType = {
    id: number
    title: number
    done: number
    date: number
    order: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type DailyTodoAvgAggregateInputType = {
    order?: true
  }

  export type DailyTodoSumAggregateInputType = {
    order?: true
  }

  export type DailyTodoMinAggregateInputType = {
    id?: true
    title?: true
    done?: true
    date?: true
    order?: true
    completedAt?: true
    createdAt?: true
  }

  export type DailyTodoMaxAggregateInputType = {
    id?: true
    title?: true
    done?: true
    date?: true
    order?: true
    completedAt?: true
    createdAt?: true
  }

  export type DailyTodoCountAggregateInputType = {
    id?: true
    title?: true
    done?: true
    date?: true
    order?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type DailyTodoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyTodo to aggregate.
     */
    where?: DailyTodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyTodos to fetch.
     */
    orderBy?: DailyTodoOrderByWithRelationInput | DailyTodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyTodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyTodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyTodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyTodos
    **/
    _count?: true | DailyTodoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyTodoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyTodoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyTodoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyTodoMaxAggregateInputType
  }

  export type GetDailyTodoAggregateType<T extends DailyTodoAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyTodo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyTodo[P]>
      : GetScalarType<T[P], AggregateDailyTodo[P]>
  }




  export type DailyTodoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyTodoWhereInput
    orderBy?: DailyTodoOrderByWithAggregationInput | DailyTodoOrderByWithAggregationInput[]
    by: DailyTodoScalarFieldEnum[] | DailyTodoScalarFieldEnum
    having?: DailyTodoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyTodoCountAggregateInputType | true
    _avg?: DailyTodoAvgAggregateInputType
    _sum?: DailyTodoSumAggregateInputType
    _min?: DailyTodoMinAggregateInputType
    _max?: DailyTodoMaxAggregateInputType
  }

  export type DailyTodoGroupByOutputType = {
    id: string
    title: string
    done: boolean
    date: Date
    order: number
    completedAt: Date | null
    createdAt: Date
    _count: DailyTodoCountAggregateOutputType | null
    _avg: DailyTodoAvgAggregateOutputType | null
    _sum: DailyTodoSumAggregateOutputType | null
    _min: DailyTodoMinAggregateOutputType | null
    _max: DailyTodoMaxAggregateOutputType | null
  }

  type GetDailyTodoGroupByPayload<T extends DailyTodoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyTodoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyTodoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyTodoGroupByOutputType[P]>
            : GetScalarType<T[P], DailyTodoGroupByOutputType[P]>
        }
      >
    >


  export type DailyTodoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    done?: boolean
    date?: boolean
    order?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dailyTodo"]>

  export type DailyTodoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    done?: boolean
    date?: boolean
    order?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dailyTodo"]>

  export type DailyTodoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    done?: boolean
    date?: boolean
    order?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dailyTodo"]>

  export type DailyTodoSelectScalar = {
    id?: boolean
    title?: boolean
    done?: boolean
    date?: boolean
    order?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type DailyTodoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "done" | "date" | "order" | "completedAt" | "createdAt", ExtArgs["result"]["dailyTodo"]>

  export type $DailyTodoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyTodo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      done: boolean
      date: Date
      order: number
      completedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["dailyTodo"]>
    composites: {}
  }

  type DailyTodoGetPayload<S extends boolean | null | undefined | DailyTodoDefaultArgs> = $Result.GetResult<Prisma.$DailyTodoPayload, S>

  type DailyTodoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyTodoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyTodoCountAggregateInputType | true
    }

  export interface DailyTodoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyTodo'], meta: { name: 'DailyTodo' } }
    /**
     * Find zero or one DailyTodo that matches the filter.
     * @param {DailyTodoFindUniqueArgs} args - Arguments to find a DailyTodo
     * @example
     * // Get one DailyTodo
     * const dailyTodo = await prisma.dailyTodo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyTodoFindUniqueArgs>(args: SelectSubset<T, DailyTodoFindUniqueArgs<ExtArgs>>): Prisma__DailyTodoClient<$Result.GetResult<Prisma.$DailyTodoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyTodo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyTodoFindUniqueOrThrowArgs} args - Arguments to find a DailyTodo
     * @example
     * // Get one DailyTodo
     * const dailyTodo = await prisma.dailyTodo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyTodoFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyTodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyTodoClient<$Result.GetResult<Prisma.$DailyTodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyTodo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTodoFindFirstArgs} args - Arguments to find a DailyTodo
     * @example
     * // Get one DailyTodo
     * const dailyTodo = await prisma.dailyTodo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyTodoFindFirstArgs>(args?: SelectSubset<T, DailyTodoFindFirstArgs<ExtArgs>>): Prisma__DailyTodoClient<$Result.GetResult<Prisma.$DailyTodoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyTodo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTodoFindFirstOrThrowArgs} args - Arguments to find a DailyTodo
     * @example
     * // Get one DailyTodo
     * const dailyTodo = await prisma.dailyTodo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyTodoFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyTodoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyTodoClient<$Result.GetResult<Prisma.$DailyTodoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyTodos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyTodos
     * const dailyTodos = await prisma.dailyTodo.findMany()
     * 
     * // Get first 10 DailyTodos
     * const dailyTodos = await prisma.dailyTodo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyTodoWithIdOnly = await prisma.dailyTodo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyTodoFindManyArgs>(args?: SelectSubset<T, DailyTodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyTodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyTodo.
     * @param {DailyTodoCreateArgs} args - Arguments to create a DailyTodo.
     * @example
     * // Create one DailyTodo
     * const DailyTodo = await prisma.dailyTodo.create({
     *   data: {
     *     // ... data to create a DailyTodo
     *   }
     * })
     * 
     */
    create<T extends DailyTodoCreateArgs>(args: SelectSubset<T, DailyTodoCreateArgs<ExtArgs>>): Prisma__DailyTodoClient<$Result.GetResult<Prisma.$DailyTodoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyTodos.
     * @param {DailyTodoCreateManyArgs} args - Arguments to create many DailyTodos.
     * @example
     * // Create many DailyTodos
     * const dailyTodo = await prisma.dailyTodo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyTodoCreateManyArgs>(args?: SelectSubset<T, DailyTodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyTodos and returns the data saved in the database.
     * @param {DailyTodoCreateManyAndReturnArgs} args - Arguments to create many DailyTodos.
     * @example
     * // Create many DailyTodos
     * const dailyTodo = await prisma.dailyTodo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyTodos and only return the `id`
     * const dailyTodoWithIdOnly = await prisma.dailyTodo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyTodoCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyTodoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyTodoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyTodo.
     * @param {DailyTodoDeleteArgs} args - Arguments to delete one DailyTodo.
     * @example
     * // Delete one DailyTodo
     * const DailyTodo = await prisma.dailyTodo.delete({
     *   where: {
     *     // ... filter to delete one DailyTodo
     *   }
     * })
     * 
     */
    delete<T extends DailyTodoDeleteArgs>(args: SelectSubset<T, DailyTodoDeleteArgs<ExtArgs>>): Prisma__DailyTodoClient<$Result.GetResult<Prisma.$DailyTodoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyTodo.
     * @param {DailyTodoUpdateArgs} args - Arguments to update one DailyTodo.
     * @example
     * // Update one DailyTodo
     * const dailyTodo = await prisma.dailyTodo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyTodoUpdateArgs>(args: SelectSubset<T, DailyTodoUpdateArgs<ExtArgs>>): Prisma__DailyTodoClient<$Result.GetResult<Prisma.$DailyTodoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyTodos.
     * @param {DailyTodoDeleteManyArgs} args - Arguments to filter DailyTodos to delete.
     * @example
     * // Delete a few DailyTodos
     * const { count } = await prisma.dailyTodo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyTodoDeleteManyArgs>(args?: SelectSubset<T, DailyTodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyTodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyTodos
     * const dailyTodo = await prisma.dailyTodo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyTodoUpdateManyArgs>(args: SelectSubset<T, DailyTodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyTodos and returns the data updated in the database.
     * @param {DailyTodoUpdateManyAndReturnArgs} args - Arguments to update many DailyTodos.
     * @example
     * // Update many DailyTodos
     * const dailyTodo = await prisma.dailyTodo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyTodos and only return the `id`
     * const dailyTodoWithIdOnly = await prisma.dailyTodo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyTodoUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyTodoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyTodoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyTodo.
     * @param {DailyTodoUpsertArgs} args - Arguments to update or create a DailyTodo.
     * @example
     * // Update or create a DailyTodo
     * const dailyTodo = await prisma.dailyTodo.upsert({
     *   create: {
     *     // ... data to create a DailyTodo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyTodo we want to update
     *   }
     * })
     */
    upsert<T extends DailyTodoUpsertArgs>(args: SelectSubset<T, DailyTodoUpsertArgs<ExtArgs>>): Prisma__DailyTodoClient<$Result.GetResult<Prisma.$DailyTodoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyTodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTodoCountArgs} args - Arguments to filter DailyTodos to count.
     * @example
     * // Count the number of DailyTodos
     * const count = await prisma.dailyTodo.count({
     *   where: {
     *     // ... the filter for the DailyTodos we want to count
     *   }
     * })
    **/
    count<T extends DailyTodoCountArgs>(
      args?: Subset<T, DailyTodoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyTodoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyTodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyTodoAggregateArgs>(args: Subset<T, DailyTodoAggregateArgs>): Prisma.PrismaPromise<GetDailyTodoAggregateType<T>>

    /**
     * Group by DailyTodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTodoGroupByArgs} args - Group by arguments.
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
      T extends DailyTodoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyTodoGroupByArgs['orderBy'] }
        : { orderBy?: DailyTodoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
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
                ` in "having" needs to be provided in "by"`,
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
    >(args: SubsetIntersection<T, DailyTodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyTodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyTodo model
   */
  readonly fields: DailyTodoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyTodo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyTodoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyTodo model
   */
  interface DailyTodoFieldRefs {
    readonly id: FieldRef<"DailyTodo", 'String'>
    readonly title: FieldRef<"DailyTodo", 'String'>
    readonly done: FieldRef<"DailyTodo", 'Boolean'>
    readonly date: FieldRef<"DailyTodo", 'DateTime'>
    readonly order: FieldRef<"DailyTodo", 'Int'>
    readonly completedAt: FieldRef<"DailyTodo", 'DateTime'>
    readonly createdAt: FieldRef<"DailyTodo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyTodo findUnique
   */
  export type DailyTodoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTodo
     */
    select?: DailyTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTodo
     */
    omit?: DailyTodoOmit<ExtArgs> | null
    /**
     * Filter, which DailyTodo to fetch.
     */
    where: DailyTodoWhereUniqueInput
  }

  /**
   * DailyTodo findUniqueOrThrow
   */
  export type DailyTodoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTodo
     */
    select?: DailyTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTodo
     */
    omit?: DailyTodoOmit<ExtArgs> | null
    /**
     * Filter, which DailyTodo to fetch.
     */
    where: DailyTodoWhereUniqueInput
  }

  /**
   * DailyTodo findFirst
   */
  export type DailyTodoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTodo
     */
    select?: DailyTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTodo
     */
    omit?: DailyTodoOmit<ExtArgs> | null
    /**
     * Filter, which DailyTodo to fetch.
     */
    where?: DailyTodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyTodos to fetch.
     */
    orderBy?: DailyTodoOrderByWithRelationInput | DailyTodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyTodos.
     */
    cursor?: DailyTodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyTodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyTodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyTodos.
     */
    distinct?: DailyTodoScalarFieldEnum | DailyTodoScalarFieldEnum[]
  }

  /**
   * DailyTodo findFirstOrThrow
   */
  export type DailyTodoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTodo
     */
    select?: DailyTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTodo
     */
    omit?: DailyTodoOmit<ExtArgs> | null
    /**
     * Filter, which DailyTodo to fetch.
     */
    where?: DailyTodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyTodos to fetch.
     */
    orderBy?: DailyTodoOrderByWithRelationInput | DailyTodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyTodos.
     */
    cursor?: DailyTodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyTodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyTodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyTodos.
     */
    distinct?: DailyTodoScalarFieldEnum | DailyTodoScalarFieldEnum[]
  }

  /**
   * DailyTodo findMany
   */
  export type DailyTodoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTodo
     */
    select?: DailyTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTodo
     */
    omit?: DailyTodoOmit<ExtArgs> | null
    /**
     * Filter, which DailyTodos to fetch.
     */
    where?: DailyTodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyTodos to fetch.
     */
    orderBy?: DailyTodoOrderByWithRelationInput | DailyTodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyTodos.
     */
    cursor?: DailyTodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyTodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyTodos.
     */
    skip?: number
    distinct?: DailyTodoScalarFieldEnum | DailyTodoScalarFieldEnum[]
  }

  /**
   * DailyTodo create
   */
  export type DailyTodoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTodo
     */
    select?: DailyTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTodo
     */
    omit?: DailyTodoOmit<ExtArgs> | null
    /**
     * The data needed to create a DailyTodo.
     */
    data: XOR<DailyTodoCreateInput, DailyTodoUncheckedCreateInput>
  }

  /**
   * DailyTodo createMany
   */
  export type DailyTodoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyTodos.
     */
    data: DailyTodoCreateManyInput | DailyTodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyTodo createManyAndReturn
   */
  export type DailyTodoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTodo
     */
    select?: DailyTodoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTodo
     */
    omit?: DailyTodoOmit<ExtArgs> | null
    /**
     * The data used to create many DailyTodos.
     */
    data: DailyTodoCreateManyInput | DailyTodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyTodo update
   */
  export type DailyTodoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTodo
     */
    select?: DailyTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTodo
     */
    omit?: DailyTodoOmit<ExtArgs> | null
    /**
     * The data needed to update a DailyTodo.
     */
    data: XOR<DailyTodoUpdateInput, DailyTodoUncheckedUpdateInput>
    /**
     * Choose, which DailyTodo to update.
     */
    where: DailyTodoWhereUniqueInput
  }

  /**
   * DailyTodo updateMany
   */
  export type DailyTodoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyTodos.
     */
    data: XOR<DailyTodoUpdateManyMutationInput, DailyTodoUncheckedUpdateManyInput>
    /**
     * Filter which DailyTodos to update
     */
    where?: DailyTodoWhereInput
    /**
     * Limit how many DailyTodos to update.
     */
    limit?: number
  }

  /**
   * DailyTodo updateManyAndReturn
   */
  export type DailyTodoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTodo
     */
    select?: DailyTodoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTodo
     */
    omit?: DailyTodoOmit<ExtArgs> | null
    /**
     * The data used to update DailyTodos.
     */
    data: XOR<DailyTodoUpdateManyMutationInput, DailyTodoUncheckedUpdateManyInput>
    /**
     * Filter which DailyTodos to update
     */
    where?: DailyTodoWhereInput
    /**
     * Limit how many DailyTodos to update.
     */
    limit?: number
  }

  /**
   * DailyTodo upsert
   */
  export type DailyTodoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTodo
     */
    select?: DailyTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTodo
     */
    omit?: DailyTodoOmit<ExtArgs> | null
    /**
     * The filter to search for the DailyTodo to update in case it exists.
     */
    where: DailyTodoWhereUniqueInput
    /**
     * In case the DailyTodo found by the `where` argument doesn't exist, create a new DailyTodo with this data.
     */
    create: XOR<DailyTodoCreateInput, DailyTodoUncheckedCreateInput>
    /**
     * In case the DailyTodo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyTodoUpdateInput, DailyTodoUncheckedUpdateInput>
  }

  /**
   * DailyTodo delete
   */
  export type DailyTodoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTodo
     */
    select?: DailyTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTodo
     */
    omit?: DailyTodoOmit<ExtArgs> | null
    /**
     * Filter which DailyTodo to delete.
     */
    where: DailyTodoWhereUniqueInput
  }

  /**
   * DailyTodo deleteMany
   */
  export type DailyTodoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyTodos to delete
     */
    where?: DailyTodoWhereInput
    /**
     * Limit how many DailyTodos to delete.
     */
    limit?: number
  }

  /**
   * DailyTodo without action
   */
  export type DailyTodoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTodo
     */
    select?: DailyTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTodo
     */
    omit?: DailyTodoOmit<ExtArgs> | null
  }


  /**
   * Model GoodieCategory
   */

  export type AggregateGoodieCategory = {
    _count: GoodieCategoryCountAggregateOutputType | null
    _avg: GoodieCategoryAvgAggregateOutputType | null
    _sum: GoodieCategorySumAggregateOutputType | null
    _min: GoodieCategoryMinAggregateOutputType | null
    _max: GoodieCategoryMaxAggregateOutputType | null
  }

  export type GoodieCategoryAvgAggregateOutputType = {
    target: number | null
    order: number | null
  }

  export type GoodieCategorySumAggregateOutputType = {
    target: number | null
    order: number | null
  }

  export type GoodieCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.GoodieType | null
    target: number | null
    unit: string | null
    color: string | null
    icon: string | null
    active: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoodieCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.GoodieType | null
    target: number | null
    unit: string | null
    color: string | null
    icon: string | null
    active: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoodieCategoryCountAggregateOutputType = {
    id: number
    name: number
    type: number
    target: number
    unit: number
    color: number
    icon: number
    active: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoodieCategoryAvgAggregateInputType = {
    target?: true
    order?: true
  }

  export type GoodieCategorySumAggregateInputType = {
    target?: true
    order?: true
  }

  export type GoodieCategoryMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    target?: true
    unit?: true
    color?: true
    icon?: true
    active?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoodieCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    target?: true
    unit?: true
    color?: true
    icon?: true
    active?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoodieCategoryCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    target?: true
    unit?: true
    color?: true
    icon?: true
    active?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoodieCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoodieCategory to aggregate.
     */
    where?: GoodieCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoodieCategories to fetch.
     */
    orderBy?: GoodieCategoryOrderByWithRelationInput | GoodieCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoodieCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoodieCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoodieCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoodieCategories
    **/
    _count?: true | GoodieCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoodieCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoodieCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoodieCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoodieCategoryMaxAggregateInputType
  }

  export type GetGoodieCategoryAggregateType<T extends GoodieCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateGoodieCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoodieCategory[P]>
      : GetScalarType<T[P], AggregateGoodieCategory[P]>
  }




  export type GoodieCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoodieCategoryWhereInput
    orderBy?: GoodieCategoryOrderByWithAggregationInput | GoodieCategoryOrderByWithAggregationInput[]
    by: GoodieCategoryScalarFieldEnum[] | GoodieCategoryScalarFieldEnum
    having?: GoodieCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoodieCategoryCountAggregateInputType | true
    _avg?: GoodieCategoryAvgAggregateInputType
    _sum?: GoodieCategorySumAggregateInputType
    _min?: GoodieCategoryMinAggregateInputType
    _max?: GoodieCategoryMaxAggregateInputType
  }

  export type GoodieCategoryGroupByOutputType = {
    id: string
    name: string
    type: $Enums.GoodieType
    target: number | null
    unit: string | null
    color: string | null
    icon: string | null
    active: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    _count: GoodieCategoryCountAggregateOutputType | null
    _avg: GoodieCategoryAvgAggregateOutputType | null
    _sum: GoodieCategorySumAggregateOutputType | null
    _min: GoodieCategoryMinAggregateOutputType | null
    _max: GoodieCategoryMaxAggregateOutputType | null
  }

  type GetGoodieCategoryGroupByPayload<T extends GoodieCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoodieCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoodieCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoodieCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], GoodieCategoryGroupByOutputType[P]>
        }
      >
    >


  export type GoodieCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    target?: boolean
    unit?: boolean
    color?: boolean
    icon?: boolean
    active?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    logs?: boolean | GoodieCategory$logsArgs<ExtArgs>
    _count?: boolean | GoodieCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goodieCategory"]>

  export type GoodieCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    target?: boolean
    unit?: boolean
    color?: boolean
    icon?: boolean
    active?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["goodieCategory"]>

  export type GoodieCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    target?: boolean
    unit?: boolean
    color?: boolean
    icon?: boolean
    active?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["goodieCategory"]>

  export type GoodieCategorySelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    target?: boolean
    unit?: boolean
    color?: boolean
    icon?: boolean
    active?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoodieCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "target" | "unit" | "color" | "icon" | "active" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["goodieCategory"]>
  export type GoodieCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | GoodieCategory$logsArgs<ExtArgs>
    _count?: boolean | GoodieCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GoodieCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GoodieCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GoodieCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoodieCategory"
    objects: {
      logs: Prisma.$GoodieLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.GoodieType
      target: number | null
      unit: string | null
      color: string | null
      icon: string | null
      active: boolean
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goodieCategory"]>
    composites: {}
  }

  type GoodieCategoryGetPayload<S extends boolean | null | undefined | GoodieCategoryDefaultArgs> = $Result.GetResult<Prisma.$GoodieCategoryPayload, S>

  type GoodieCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoodieCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoodieCategoryCountAggregateInputType | true
    }

  export interface GoodieCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoodieCategory'], meta: { name: 'GoodieCategory' } }
    /**
     * Find zero or one GoodieCategory that matches the filter.
     * @param {GoodieCategoryFindUniqueArgs} args - Arguments to find a GoodieCategory
     * @example
     * // Get one GoodieCategory
     * const goodieCategory = await prisma.goodieCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoodieCategoryFindUniqueArgs>(args: SelectSubset<T, GoodieCategoryFindUniqueArgs<ExtArgs>>): Prisma__GoodieCategoryClient<$Result.GetResult<Prisma.$GoodieCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GoodieCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoodieCategoryFindUniqueOrThrowArgs} args - Arguments to find a GoodieCategory
     * @example
     * // Get one GoodieCategory
     * const goodieCategory = await prisma.goodieCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoodieCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, GoodieCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoodieCategoryClient<$Result.GetResult<Prisma.$GoodieCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoodieCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodieCategoryFindFirstArgs} args - Arguments to find a GoodieCategory
     * @example
     * // Get one GoodieCategory
     * const goodieCategory = await prisma.goodieCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoodieCategoryFindFirstArgs>(args?: SelectSubset<T, GoodieCategoryFindFirstArgs<ExtArgs>>): Prisma__GoodieCategoryClient<$Result.GetResult<Prisma.$GoodieCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoodieCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodieCategoryFindFirstOrThrowArgs} args - Arguments to find a GoodieCategory
     * @example
     * // Get one GoodieCategory
     * const goodieCategory = await prisma.goodieCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoodieCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, GoodieCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoodieCategoryClient<$Result.GetResult<Prisma.$GoodieCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GoodieCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodieCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoodieCategories
     * const goodieCategories = await prisma.goodieCategory.findMany()
     * 
     * // Get first 10 GoodieCategories
     * const goodieCategories = await prisma.goodieCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goodieCategoryWithIdOnly = await prisma.goodieCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoodieCategoryFindManyArgs>(args?: SelectSubset<T, GoodieCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoodieCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GoodieCategory.
     * @param {GoodieCategoryCreateArgs} args - Arguments to create a GoodieCategory.
     * @example
     * // Create one GoodieCategory
     * const GoodieCategory = await prisma.goodieCategory.create({
     *   data: {
     *     // ... data to create a GoodieCategory
     *   }
     * })
     * 
     */
    create<T extends GoodieCategoryCreateArgs>(args: SelectSubset<T, GoodieCategoryCreateArgs<ExtArgs>>): Prisma__GoodieCategoryClient<$Result.GetResult<Prisma.$GoodieCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GoodieCategories.
     * @param {GoodieCategoryCreateManyArgs} args - Arguments to create many GoodieCategories.
     * @example
     * // Create many GoodieCategories
     * const goodieCategory = await prisma.goodieCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoodieCategoryCreateManyArgs>(args?: SelectSubset<T, GoodieCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GoodieCategories and returns the data saved in the database.
     * @param {GoodieCategoryCreateManyAndReturnArgs} args - Arguments to create many GoodieCategories.
     * @example
     * // Create many GoodieCategories
     * const goodieCategory = await prisma.goodieCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GoodieCategories and only return the `id`
     * const goodieCategoryWithIdOnly = await prisma.goodieCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoodieCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, GoodieCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoodieCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GoodieCategory.
     * @param {GoodieCategoryDeleteArgs} args - Arguments to delete one GoodieCategory.
     * @example
     * // Delete one GoodieCategory
     * const GoodieCategory = await prisma.goodieCategory.delete({
     *   where: {
     *     // ... filter to delete one GoodieCategory
     *   }
     * })
     * 
     */
    delete<T extends GoodieCategoryDeleteArgs>(args: SelectSubset<T, GoodieCategoryDeleteArgs<ExtArgs>>): Prisma__GoodieCategoryClient<$Result.GetResult<Prisma.$GoodieCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GoodieCategory.
     * @param {GoodieCategoryUpdateArgs} args - Arguments to update one GoodieCategory.
     * @example
     * // Update one GoodieCategory
     * const goodieCategory = await prisma.goodieCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoodieCategoryUpdateArgs>(args: SelectSubset<T, GoodieCategoryUpdateArgs<ExtArgs>>): Prisma__GoodieCategoryClient<$Result.GetResult<Prisma.$GoodieCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GoodieCategories.
     * @param {GoodieCategoryDeleteManyArgs} args - Arguments to filter GoodieCategories to delete.
     * @example
     * // Delete a few GoodieCategories
     * const { count } = await prisma.goodieCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoodieCategoryDeleteManyArgs>(args?: SelectSubset<T, GoodieCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoodieCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodieCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoodieCategories
     * const goodieCategory = await prisma.goodieCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoodieCategoryUpdateManyArgs>(args: SelectSubset<T, GoodieCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoodieCategories and returns the data updated in the database.
     * @param {GoodieCategoryUpdateManyAndReturnArgs} args - Arguments to update many GoodieCategories.
     * @example
     * // Update many GoodieCategories
     * const goodieCategory = await prisma.goodieCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GoodieCategories and only return the `id`
     * const goodieCategoryWithIdOnly = await prisma.goodieCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GoodieCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, GoodieCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoodieCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GoodieCategory.
     * @param {GoodieCategoryUpsertArgs} args - Arguments to update or create a GoodieCategory.
     * @example
     * // Update or create a GoodieCategory
     * const goodieCategory = await prisma.goodieCategory.upsert({
     *   create: {
     *     // ... data to create a GoodieCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoodieCategory we want to update
     *   }
     * })
     */
    upsert<T extends GoodieCategoryUpsertArgs>(args: SelectSubset<T, GoodieCategoryUpsertArgs<ExtArgs>>): Prisma__GoodieCategoryClient<$Result.GetResult<Prisma.$GoodieCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GoodieCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodieCategoryCountArgs} args - Arguments to filter GoodieCategories to count.
     * @example
     * // Count the number of GoodieCategories
     * const count = await prisma.goodieCategory.count({
     *   where: {
     *     // ... the filter for the GoodieCategories we want to count
     *   }
     * })
    **/
    count<T extends GoodieCategoryCountArgs>(
      args?: Subset<T, GoodieCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoodieCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoodieCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodieCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoodieCategoryAggregateArgs>(args: Subset<T, GoodieCategoryAggregateArgs>): Prisma.PrismaPromise<GetGoodieCategoryAggregateType<T>>

    /**
     * Group by GoodieCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodieCategoryGroupByArgs} args - Group by arguments.
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
      T extends GoodieCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoodieCategoryGroupByArgs['orderBy'] }
        : { orderBy?: GoodieCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
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
                ` in "having" needs to be provided in "by"`,
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
    >(args: SubsetIntersection<T, GoodieCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoodieCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoodieCategory model
   */
  readonly fields: GoodieCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoodieCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoodieCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends GoodieCategory$logsArgs<ExtArgs> = {}>(args?: Subset<T, GoodieCategory$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoodieLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GoodieCategory model
   */
  interface GoodieCategoryFieldRefs {
    readonly id: FieldRef<"GoodieCategory", 'String'>
    readonly name: FieldRef<"GoodieCategory", 'String'>
    readonly type: FieldRef<"GoodieCategory", 'GoodieType'>
    readonly target: FieldRef<"GoodieCategory", 'Float'>
    readonly unit: FieldRef<"GoodieCategory", 'String'>
    readonly color: FieldRef<"GoodieCategory", 'String'>
    readonly icon: FieldRef<"GoodieCategory", 'String'>
    readonly active: FieldRef<"GoodieCategory", 'Boolean'>
    readonly order: FieldRef<"GoodieCategory", 'Int'>
    readonly createdAt: FieldRef<"GoodieCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"GoodieCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GoodieCategory findUnique
   */
  export type GoodieCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieCategory
     */
    select?: GoodieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieCategory
     */
    omit?: GoodieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GoodieCategory to fetch.
     */
    where: GoodieCategoryWhereUniqueInput
  }

  /**
   * GoodieCategory findUniqueOrThrow
   */
  export type GoodieCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieCategory
     */
    select?: GoodieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieCategory
     */
    omit?: GoodieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GoodieCategory to fetch.
     */
    where: GoodieCategoryWhereUniqueInput
  }

  /**
   * GoodieCategory findFirst
   */
  export type GoodieCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieCategory
     */
    select?: GoodieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieCategory
     */
    omit?: GoodieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GoodieCategory to fetch.
     */
    where?: GoodieCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoodieCategories to fetch.
     */
    orderBy?: GoodieCategoryOrderByWithRelationInput | GoodieCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoodieCategories.
     */
    cursor?: GoodieCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoodieCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoodieCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoodieCategories.
     */
    distinct?: GoodieCategoryScalarFieldEnum | GoodieCategoryScalarFieldEnum[]
  }

  /**
   * GoodieCategory findFirstOrThrow
   */
  export type GoodieCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieCategory
     */
    select?: GoodieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieCategory
     */
    omit?: GoodieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GoodieCategory to fetch.
     */
    where?: GoodieCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoodieCategories to fetch.
     */
    orderBy?: GoodieCategoryOrderByWithRelationInput | GoodieCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoodieCategories.
     */
    cursor?: GoodieCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoodieCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoodieCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoodieCategories.
     */
    distinct?: GoodieCategoryScalarFieldEnum | GoodieCategoryScalarFieldEnum[]
  }

  /**
   * GoodieCategory findMany
   */
  export type GoodieCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieCategory
     */
    select?: GoodieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieCategory
     */
    omit?: GoodieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GoodieCategories to fetch.
     */
    where?: GoodieCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoodieCategories to fetch.
     */
    orderBy?: GoodieCategoryOrderByWithRelationInput | GoodieCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoodieCategories.
     */
    cursor?: GoodieCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoodieCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoodieCategories.
     */
    skip?: number
    distinct?: GoodieCategoryScalarFieldEnum | GoodieCategoryScalarFieldEnum[]
  }

  /**
   * GoodieCategory create
   */
  export type GoodieCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieCategory
     */
    select?: GoodieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieCategory
     */
    omit?: GoodieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a GoodieCategory.
     */
    data: XOR<GoodieCategoryCreateInput, GoodieCategoryUncheckedCreateInput>
  }

  /**
   * GoodieCategory createMany
   */
  export type GoodieCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoodieCategories.
     */
    data: GoodieCategoryCreateManyInput | GoodieCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoodieCategory createManyAndReturn
   */
  export type GoodieCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieCategory
     */
    select?: GoodieCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieCategory
     */
    omit?: GoodieCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many GoodieCategories.
     */
    data: GoodieCategoryCreateManyInput | GoodieCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoodieCategory update
   */
  export type GoodieCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieCategory
     */
    select?: GoodieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieCategory
     */
    omit?: GoodieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a GoodieCategory.
     */
    data: XOR<GoodieCategoryUpdateInput, GoodieCategoryUncheckedUpdateInput>
    /**
     * Choose, which GoodieCategory to update.
     */
    where: GoodieCategoryWhereUniqueInput
  }

  /**
   * GoodieCategory updateMany
   */
  export type GoodieCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoodieCategories.
     */
    data: XOR<GoodieCategoryUpdateManyMutationInput, GoodieCategoryUncheckedUpdateManyInput>
    /**
     * Filter which GoodieCategories to update
     */
    where?: GoodieCategoryWhereInput
    /**
     * Limit how many GoodieCategories to update.
     */
    limit?: number
  }

  /**
   * GoodieCategory updateManyAndReturn
   */
  export type GoodieCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieCategory
     */
    select?: GoodieCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieCategory
     */
    omit?: GoodieCategoryOmit<ExtArgs> | null
    /**
     * The data used to update GoodieCategories.
     */
    data: XOR<GoodieCategoryUpdateManyMutationInput, GoodieCategoryUncheckedUpdateManyInput>
    /**
     * Filter which GoodieCategories to update
     */
    where?: GoodieCategoryWhereInput
    /**
     * Limit how many GoodieCategories to update.
     */
    limit?: number
  }

  /**
   * GoodieCategory upsert
   */
  export type GoodieCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieCategory
     */
    select?: GoodieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieCategory
     */
    omit?: GoodieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the GoodieCategory to update in case it exists.
     */
    where: GoodieCategoryWhereUniqueInput
    /**
     * In case the GoodieCategory found by the `where` argument doesn't exist, create a new GoodieCategory with this data.
     */
    create: XOR<GoodieCategoryCreateInput, GoodieCategoryUncheckedCreateInput>
    /**
     * In case the GoodieCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoodieCategoryUpdateInput, GoodieCategoryUncheckedUpdateInput>
  }

  /**
   * GoodieCategory delete
   */
  export type GoodieCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieCategory
     */
    select?: GoodieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieCategory
     */
    omit?: GoodieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieCategoryInclude<ExtArgs> | null
    /**
     * Filter which GoodieCategory to delete.
     */
    where: GoodieCategoryWhereUniqueInput
  }

  /**
   * GoodieCategory deleteMany
   */
  export type GoodieCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoodieCategories to delete
     */
    where?: GoodieCategoryWhereInput
    /**
     * Limit how many GoodieCategories to delete.
     */
    limit?: number
  }

  /**
   * GoodieCategory.logs
   */
  export type GoodieCategory$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieLog
     */
    select?: GoodieLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieLog
     */
    omit?: GoodieLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieLogInclude<ExtArgs> | null
    where?: GoodieLogWhereInput
    orderBy?: GoodieLogOrderByWithRelationInput | GoodieLogOrderByWithRelationInput[]
    cursor?: GoodieLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoodieLogScalarFieldEnum | GoodieLogScalarFieldEnum[]
  }

  /**
   * GoodieCategory without action
   */
  export type GoodieCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieCategory
     */
    select?: GoodieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieCategory
     */
    omit?: GoodieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieCategoryInclude<ExtArgs> | null
  }


  /**
   * Model GoodieLog
   */

  export type AggregateGoodieLog = {
    _count: GoodieLogCountAggregateOutputType | null
    _avg: GoodieLogAvgAggregateOutputType | null
    _sum: GoodieLogSumAggregateOutputType | null
    _min: GoodieLogMinAggregateOutputType | null
    _max: GoodieLogMaxAggregateOutputType | null
  }

  export type GoodieLogAvgAggregateOutputType = {
    value: number | null
  }

  export type GoodieLogSumAggregateOutputType = {
    value: number | null
  }

  export type GoodieLogMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    date: Date | null
    value: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoodieLogMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    date: Date | null
    value: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoodieLogCountAggregateOutputType = {
    id: number
    categoryId: number
    date: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoodieLogAvgAggregateInputType = {
    value?: true
  }

  export type GoodieLogSumAggregateInputType = {
    value?: true
  }

  export type GoodieLogMinAggregateInputType = {
    id?: true
    categoryId?: true
    date?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoodieLogMaxAggregateInputType = {
    id?: true
    categoryId?: true
    date?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoodieLogCountAggregateInputType = {
    id?: true
    categoryId?: true
    date?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoodieLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoodieLog to aggregate.
     */
    where?: GoodieLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoodieLogs to fetch.
     */
    orderBy?: GoodieLogOrderByWithRelationInput | GoodieLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoodieLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoodieLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoodieLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoodieLogs
    **/
    _count?: true | GoodieLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoodieLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoodieLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoodieLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoodieLogMaxAggregateInputType
  }

  export type GetGoodieLogAggregateType<T extends GoodieLogAggregateArgs> = {
        [P in keyof T & keyof AggregateGoodieLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoodieLog[P]>
      : GetScalarType<T[P], AggregateGoodieLog[P]>
  }




  export type GoodieLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoodieLogWhereInput
    orderBy?: GoodieLogOrderByWithAggregationInput | GoodieLogOrderByWithAggregationInput[]
    by: GoodieLogScalarFieldEnum[] | GoodieLogScalarFieldEnum
    having?: GoodieLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoodieLogCountAggregateInputType | true
    _avg?: GoodieLogAvgAggregateInputType
    _sum?: GoodieLogSumAggregateInputType
    _min?: GoodieLogMinAggregateInputType
    _max?: GoodieLogMaxAggregateInputType
  }

  export type GoodieLogGroupByOutputType = {
    id: string
    categoryId: string
    date: Date
    value: number
    createdAt: Date
    updatedAt: Date
    _count: GoodieLogCountAggregateOutputType | null
    _avg: GoodieLogAvgAggregateOutputType | null
    _sum: GoodieLogSumAggregateOutputType | null
    _min: GoodieLogMinAggregateOutputType | null
    _max: GoodieLogMaxAggregateOutputType | null
  }

  type GetGoodieLogGroupByPayload<T extends GoodieLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoodieLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoodieLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoodieLogGroupByOutputType[P]>
            : GetScalarType<T[P], GoodieLogGroupByOutputType[P]>
        }
      >
    >


  export type GoodieLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    date?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | GoodieCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goodieLog"]>

  export type GoodieLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    date?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | GoodieCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goodieLog"]>

  export type GoodieLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    date?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | GoodieCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goodieLog"]>

  export type GoodieLogSelectScalar = {
    id?: boolean
    categoryId?: boolean
    date?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoodieLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "date" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["goodieLog"]>
  export type GoodieLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | GoodieCategoryDefaultArgs<ExtArgs>
  }
  export type GoodieLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | GoodieCategoryDefaultArgs<ExtArgs>
  }
  export type GoodieLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | GoodieCategoryDefaultArgs<ExtArgs>
  }

  export type $GoodieLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoodieLog"
    objects: {
      category: Prisma.$GoodieCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryId: string
      date: Date
      value: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goodieLog"]>
    composites: {}
  }

  type GoodieLogGetPayload<S extends boolean | null | undefined | GoodieLogDefaultArgs> = $Result.GetResult<Prisma.$GoodieLogPayload, S>

  type GoodieLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoodieLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoodieLogCountAggregateInputType | true
    }

  export interface GoodieLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoodieLog'], meta: { name: 'GoodieLog' } }
    /**
     * Find zero or one GoodieLog that matches the filter.
     * @param {GoodieLogFindUniqueArgs} args - Arguments to find a GoodieLog
     * @example
     * // Get one GoodieLog
     * const goodieLog = await prisma.goodieLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoodieLogFindUniqueArgs>(args: SelectSubset<T, GoodieLogFindUniqueArgs<ExtArgs>>): Prisma__GoodieLogClient<$Result.GetResult<Prisma.$GoodieLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GoodieLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoodieLogFindUniqueOrThrowArgs} args - Arguments to find a GoodieLog
     * @example
     * // Get one GoodieLog
     * const goodieLog = await prisma.goodieLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoodieLogFindUniqueOrThrowArgs>(args: SelectSubset<T, GoodieLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoodieLogClient<$Result.GetResult<Prisma.$GoodieLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoodieLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodieLogFindFirstArgs} args - Arguments to find a GoodieLog
     * @example
     * // Get one GoodieLog
     * const goodieLog = await prisma.goodieLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoodieLogFindFirstArgs>(args?: SelectSubset<T, GoodieLogFindFirstArgs<ExtArgs>>): Prisma__GoodieLogClient<$Result.GetResult<Prisma.$GoodieLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoodieLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodieLogFindFirstOrThrowArgs} args - Arguments to find a GoodieLog
     * @example
     * // Get one GoodieLog
     * const goodieLog = await prisma.goodieLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoodieLogFindFirstOrThrowArgs>(args?: SelectSubset<T, GoodieLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoodieLogClient<$Result.GetResult<Prisma.$GoodieLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GoodieLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodieLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoodieLogs
     * const goodieLogs = await prisma.goodieLog.findMany()
     * 
     * // Get first 10 GoodieLogs
     * const goodieLogs = await prisma.goodieLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goodieLogWithIdOnly = await prisma.goodieLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoodieLogFindManyArgs>(args?: SelectSubset<T, GoodieLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoodieLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GoodieLog.
     * @param {GoodieLogCreateArgs} args - Arguments to create a GoodieLog.
     * @example
     * // Create one GoodieLog
     * const GoodieLog = await prisma.goodieLog.create({
     *   data: {
     *     // ... data to create a GoodieLog
     *   }
     * })
     * 
     */
    create<T extends GoodieLogCreateArgs>(args: SelectSubset<T, GoodieLogCreateArgs<ExtArgs>>): Prisma__GoodieLogClient<$Result.GetResult<Prisma.$GoodieLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GoodieLogs.
     * @param {GoodieLogCreateManyArgs} args - Arguments to create many GoodieLogs.
     * @example
     * // Create many GoodieLogs
     * const goodieLog = await prisma.goodieLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoodieLogCreateManyArgs>(args?: SelectSubset<T, GoodieLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GoodieLogs and returns the data saved in the database.
     * @param {GoodieLogCreateManyAndReturnArgs} args - Arguments to create many GoodieLogs.
     * @example
     * // Create many GoodieLogs
     * const goodieLog = await prisma.goodieLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GoodieLogs and only return the `id`
     * const goodieLogWithIdOnly = await prisma.goodieLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoodieLogCreateManyAndReturnArgs>(args?: SelectSubset<T, GoodieLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoodieLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GoodieLog.
     * @param {GoodieLogDeleteArgs} args - Arguments to delete one GoodieLog.
     * @example
     * // Delete one GoodieLog
     * const GoodieLog = await prisma.goodieLog.delete({
     *   where: {
     *     // ... filter to delete one GoodieLog
     *   }
     * })
     * 
     */
    delete<T extends GoodieLogDeleteArgs>(args: SelectSubset<T, GoodieLogDeleteArgs<ExtArgs>>): Prisma__GoodieLogClient<$Result.GetResult<Prisma.$GoodieLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GoodieLog.
     * @param {GoodieLogUpdateArgs} args - Arguments to update one GoodieLog.
     * @example
     * // Update one GoodieLog
     * const goodieLog = await prisma.goodieLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoodieLogUpdateArgs>(args: SelectSubset<T, GoodieLogUpdateArgs<ExtArgs>>): Prisma__GoodieLogClient<$Result.GetResult<Prisma.$GoodieLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GoodieLogs.
     * @param {GoodieLogDeleteManyArgs} args - Arguments to filter GoodieLogs to delete.
     * @example
     * // Delete a few GoodieLogs
     * const { count } = await prisma.goodieLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoodieLogDeleteManyArgs>(args?: SelectSubset<T, GoodieLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoodieLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodieLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoodieLogs
     * const goodieLog = await prisma.goodieLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoodieLogUpdateManyArgs>(args: SelectSubset<T, GoodieLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoodieLogs and returns the data updated in the database.
     * @param {GoodieLogUpdateManyAndReturnArgs} args - Arguments to update many GoodieLogs.
     * @example
     * // Update many GoodieLogs
     * const goodieLog = await prisma.goodieLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GoodieLogs and only return the `id`
     * const goodieLogWithIdOnly = await prisma.goodieLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GoodieLogUpdateManyAndReturnArgs>(args: SelectSubset<T, GoodieLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoodieLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GoodieLog.
     * @param {GoodieLogUpsertArgs} args - Arguments to update or create a GoodieLog.
     * @example
     * // Update or create a GoodieLog
     * const goodieLog = await prisma.goodieLog.upsert({
     *   create: {
     *     // ... data to create a GoodieLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoodieLog we want to update
     *   }
     * })
     */
    upsert<T extends GoodieLogUpsertArgs>(args: SelectSubset<T, GoodieLogUpsertArgs<ExtArgs>>): Prisma__GoodieLogClient<$Result.GetResult<Prisma.$GoodieLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GoodieLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodieLogCountArgs} args - Arguments to filter GoodieLogs to count.
     * @example
     * // Count the number of GoodieLogs
     * const count = await prisma.goodieLog.count({
     *   where: {
     *     // ... the filter for the GoodieLogs we want to count
     *   }
     * })
    **/
    count<T extends GoodieLogCountArgs>(
      args?: Subset<T, GoodieLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoodieLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoodieLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodieLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoodieLogAggregateArgs>(args: Subset<T, GoodieLogAggregateArgs>): Prisma.PrismaPromise<GetGoodieLogAggregateType<T>>

    /**
     * Group by GoodieLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodieLogGroupByArgs} args - Group by arguments.
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
      T extends GoodieLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoodieLogGroupByArgs['orderBy'] }
        : { orderBy?: GoodieLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
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
                ` in "having" needs to be provided in "by"`,
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
    >(args: SubsetIntersection<T, GoodieLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoodieLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoodieLog model
   */
  readonly fields: GoodieLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoodieLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoodieLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends GoodieCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GoodieCategoryDefaultArgs<ExtArgs>>): Prisma__GoodieCategoryClient<$Result.GetResult<Prisma.$GoodieCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GoodieLog model
   */
  interface GoodieLogFieldRefs {
    readonly id: FieldRef<"GoodieLog", 'String'>
    readonly categoryId: FieldRef<"GoodieLog", 'String'>
    readonly date: FieldRef<"GoodieLog", 'DateTime'>
    readonly value: FieldRef<"GoodieLog", 'Float'>
    readonly createdAt: FieldRef<"GoodieLog", 'DateTime'>
    readonly updatedAt: FieldRef<"GoodieLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GoodieLog findUnique
   */
  export type GoodieLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieLog
     */
    select?: GoodieLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieLog
     */
    omit?: GoodieLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieLogInclude<ExtArgs> | null
    /**
     * Filter, which GoodieLog to fetch.
     */
    where: GoodieLogWhereUniqueInput
  }

  /**
   * GoodieLog findUniqueOrThrow
   */
  export type GoodieLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieLog
     */
    select?: GoodieLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieLog
     */
    omit?: GoodieLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieLogInclude<ExtArgs> | null
    /**
     * Filter, which GoodieLog to fetch.
     */
    where: GoodieLogWhereUniqueInput
  }

  /**
   * GoodieLog findFirst
   */
  export type GoodieLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieLog
     */
    select?: GoodieLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieLog
     */
    omit?: GoodieLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieLogInclude<ExtArgs> | null
    /**
     * Filter, which GoodieLog to fetch.
     */
    where?: GoodieLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoodieLogs to fetch.
     */
    orderBy?: GoodieLogOrderByWithRelationInput | GoodieLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoodieLogs.
     */
    cursor?: GoodieLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoodieLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoodieLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoodieLogs.
     */
    distinct?: GoodieLogScalarFieldEnum | GoodieLogScalarFieldEnum[]
  }

  /**
   * GoodieLog findFirstOrThrow
   */
  export type GoodieLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieLog
     */
    select?: GoodieLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieLog
     */
    omit?: GoodieLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieLogInclude<ExtArgs> | null
    /**
     * Filter, which GoodieLog to fetch.
     */
    where?: GoodieLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoodieLogs to fetch.
     */
    orderBy?: GoodieLogOrderByWithRelationInput | GoodieLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoodieLogs.
     */
    cursor?: GoodieLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoodieLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoodieLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoodieLogs.
     */
    distinct?: GoodieLogScalarFieldEnum | GoodieLogScalarFieldEnum[]
  }

  /**
   * GoodieLog findMany
   */
  export type GoodieLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieLog
     */
    select?: GoodieLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieLog
     */
    omit?: GoodieLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieLogInclude<ExtArgs> | null
    /**
     * Filter, which GoodieLogs to fetch.
     */
    where?: GoodieLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoodieLogs to fetch.
     */
    orderBy?: GoodieLogOrderByWithRelationInput | GoodieLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoodieLogs.
     */
    cursor?: GoodieLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoodieLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoodieLogs.
     */
    skip?: number
    distinct?: GoodieLogScalarFieldEnum | GoodieLogScalarFieldEnum[]
  }

  /**
   * GoodieLog create
   */
  export type GoodieLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieLog
     */
    select?: GoodieLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieLog
     */
    omit?: GoodieLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieLogInclude<ExtArgs> | null
    /**
     * The data needed to create a GoodieLog.
     */
    data: XOR<GoodieLogCreateInput, GoodieLogUncheckedCreateInput>
  }

  /**
   * GoodieLog createMany
   */
  export type GoodieLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoodieLogs.
     */
    data: GoodieLogCreateManyInput | GoodieLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoodieLog createManyAndReturn
   */
  export type GoodieLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieLog
     */
    select?: GoodieLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieLog
     */
    omit?: GoodieLogOmit<ExtArgs> | null
    /**
     * The data used to create many GoodieLogs.
     */
    data: GoodieLogCreateManyInput | GoodieLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GoodieLog update
   */
  export type GoodieLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieLog
     */
    select?: GoodieLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieLog
     */
    omit?: GoodieLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieLogInclude<ExtArgs> | null
    /**
     * The data needed to update a GoodieLog.
     */
    data: XOR<GoodieLogUpdateInput, GoodieLogUncheckedUpdateInput>
    /**
     * Choose, which GoodieLog to update.
     */
    where: GoodieLogWhereUniqueInput
  }

  /**
   * GoodieLog updateMany
   */
  export type GoodieLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoodieLogs.
     */
    data: XOR<GoodieLogUpdateManyMutationInput, GoodieLogUncheckedUpdateManyInput>
    /**
     * Filter which GoodieLogs to update
     */
    where?: GoodieLogWhereInput
    /**
     * Limit how many GoodieLogs to update.
     */
    limit?: number
  }

  /**
   * GoodieLog updateManyAndReturn
   */
  export type GoodieLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieLog
     */
    select?: GoodieLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieLog
     */
    omit?: GoodieLogOmit<ExtArgs> | null
    /**
     * The data used to update GoodieLogs.
     */
    data: XOR<GoodieLogUpdateManyMutationInput, GoodieLogUncheckedUpdateManyInput>
    /**
     * Filter which GoodieLogs to update
     */
    where?: GoodieLogWhereInput
    /**
     * Limit how many GoodieLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GoodieLog upsert
   */
  export type GoodieLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieLog
     */
    select?: GoodieLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieLog
     */
    omit?: GoodieLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieLogInclude<ExtArgs> | null
    /**
     * The filter to search for the GoodieLog to update in case it exists.
     */
    where: GoodieLogWhereUniqueInput
    /**
     * In case the GoodieLog found by the `where` argument doesn't exist, create a new GoodieLog with this data.
     */
    create: XOR<GoodieLogCreateInput, GoodieLogUncheckedCreateInput>
    /**
     * In case the GoodieLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoodieLogUpdateInput, GoodieLogUncheckedUpdateInput>
  }

  /**
   * GoodieLog delete
   */
  export type GoodieLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieLog
     */
    select?: GoodieLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieLog
     */
    omit?: GoodieLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieLogInclude<ExtArgs> | null
    /**
     * Filter which GoodieLog to delete.
     */
    where: GoodieLogWhereUniqueInput
  }

  /**
   * GoodieLog deleteMany
   */
  export type GoodieLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoodieLogs to delete
     */
    where?: GoodieLogWhereInput
    /**
     * Limit how many GoodieLogs to delete.
     */
    limit?: number
  }

  /**
   * GoodieLog without action
   */
  export type GoodieLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodieLog
     */
    select?: GoodieLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoodieLog
     */
    omit?: GoodieLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoodieLogInclude<ExtArgs> | null
  }


  /**
   * Model DayActivity
   */

  export type AggregateDayActivity = {
    _count: DayActivityCountAggregateOutputType | null
    _avg: DayActivityAvgAggregateOutputType | null
    _sum: DayActivitySumAggregateOutputType | null
    _min: DayActivityMinAggregateOutputType | null
    _max: DayActivityMaxAggregateOutputType | null
  }

  export type DayActivityAvgAggregateOutputType = {
    count: number | null
  }

  export type DayActivitySumAggregateOutputType = {
    count: number | null
  }

  export type DayActivityMinAggregateOutputType = {
    id: string | null
    date: Date | null
    count: number | null
  }

  export type DayActivityMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    count: number | null
  }

  export type DayActivityCountAggregateOutputType = {
    id: number
    date: number
    count: number
    _all: number
  }


  export type DayActivityAvgAggregateInputType = {
    count?: true
  }

  export type DayActivitySumAggregateInputType = {
    count?: true
  }

  export type DayActivityMinAggregateInputType = {
    id?: true
    date?: true
    count?: true
  }

  export type DayActivityMaxAggregateInputType = {
    id?: true
    date?: true
    count?: true
  }

  export type DayActivityCountAggregateInputType = {
    id?: true
    date?: true
    count?: true
    _all?: true
  }

  export type DayActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayActivity to aggregate.
     */
    where?: DayActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayActivities to fetch.
     */
    orderBy?: DayActivityOrderByWithRelationInput | DayActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DayActivities
    **/
    _count?: true | DayActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DayActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DayActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayActivityMaxAggregateInputType
  }

  export type GetDayActivityAggregateType<T extends DayActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateDayActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDayActivity[P]>
      : GetScalarType<T[P], AggregateDayActivity[P]>
  }




  export type DayActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayActivityWhereInput
    orderBy?: DayActivityOrderByWithAggregationInput | DayActivityOrderByWithAggregationInput[]
    by: DayActivityScalarFieldEnum[] | DayActivityScalarFieldEnum
    having?: DayActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayActivityCountAggregateInputType | true
    _avg?: DayActivityAvgAggregateInputType
    _sum?: DayActivitySumAggregateInputType
    _min?: DayActivityMinAggregateInputType
    _max?: DayActivityMaxAggregateInputType
  }

  export type DayActivityGroupByOutputType = {
    id: string
    date: Date
    count: number
    _count: DayActivityCountAggregateOutputType | null
    _avg: DayActivityAvgAggregateOutputType | null
    _sum: DayActivitySumAggregateOutputType | null
    _min: DayActivityMinAggregateOutputType | null
    _max: DayActivityMaxAggregateOutputType | null
  }

  type GetDayActivityGroupByPayload<T extends DayActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DayActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayActivityGroupByOutputType[P]>
            : GetScalarType<T[P], DayActivityGroupByOutputType[P]>
        }
      >
    >


  export type DayActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    count?: boolean
  }, ExtArgs["result"]["dayActivity"]>

  export type DayActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    count?: boolean
  }, ExtArgs["result"]["dayActivity"]>

  export type DayActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    count?: boolean
  }, ExtArgs["result"]["dayActivity"]>

  export type DayActivitySelectScalar = {
    id?: boolean
    date?: boolean
    count?: boolean
  }

  export type DayActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "count", ExtArgs["result"]["dayActivity"]>

  export type $DayActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DayActivity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      count: number
    }, ExtArgs["result"]["dayActivity"]>
    composites: {}
  }

  type DayActivityGetPayload<S extends boolean | null | undefined | DayActivityDefaultArgs> = $Result.GetResult<Prisma.$DayActivityPayload, S>

  type DayActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DayActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DayActivityCountAggregateInputType | true
    }

  export interface DayActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DayActivity'], meta: { name: 'DayActivity' } }
    /**
     * Find zero or one DayActivity that matches the filter.
     * @param {DayActivityFindUniqueArgs} args - Arguments to find a DayActivity
     * @example
     * // Get one DayActivity
     * const dayActivity = await prisma.dayActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DayActivityFindUniqueArgs>(args: SelectSubset<T, DayActivityFindUniqueArgs<ExtArgs>>): Prisma__DayActivityClient<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DayActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DayActivityFindUniqueOrThrowArgs} args - Arguments to find a DayActivity
     * @example
     * // Get one DayActivity
     * const dayActivity = await prisma.dayActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DayActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, DayActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DayActivityClient<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DayActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayActivityFindFirstArgs} args - Arguments to find a DayActivity
     * @example
     * // Get one DayActivity
     * const dayActivity = await prisma.dayActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DayActivityFindFirstArgs>(args?: SelectSubset<T, DayActivityFindFirstArgs<ExtArgs>>): Prisma__DayActivityClient<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DayActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayActivityFindFirstOrThrowArgs} args - Arguments to find a DayActivity
     * @example
     * // Get one DayActivity
     * const dayActivity = await prisma.dayActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DayActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, DayActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DayActivityClient<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DayActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DayActivities
     * const dayActivities = await prisma.dayActivity.findMany()
     * 
     * // Get first 10 DayActivities
     * const dayActivities = await prisma.dayActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayActivityWithIdOnly = await prisma.dayActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DayActivityFindManyArgs>(args?: SelectSubset<T, DayActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DayActivity.
     * @param {DayActivityCreateArgs} args - Arguments to create a DayActivity.
     * @example
     * // Create one DayActivity
     * const DayActivity = await prisma.dayActivity.create({
     *   data: {
     *     // ... data to create a DayActivity
     *   }
     * })
     * 
     */
    create<T extends DayActivityCreateArgs>(args: SelectSubset<T, DayActivityCreateArgs<ExtArgs>>): Prisma__DayActivityClient<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DayActivities.
     * @param {DayActivityCreateManyArgs} args - Arguments to create many DayActivities.
     * @example
     * // Create many DayActivities
     * const dayActivity = await prisma.dayActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DayActivityCreateManyArgs>(args?: SelectSubset<T, DayActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DayActivities and returns the data saved in the database.
     * @param {DayActivityCreateManyAndReturnArgs} args - Arguments to create many DayActivities.
     * @example
     * // Create many DayActivities
     * const dayActivity = await prisma.dayActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DayActivities and only return the `id`
     * const dayActivityWithIdOnly = await prisma.dayActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DayActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, DayActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DayActivity.
     * @param {DayActivityDeleteArgs} args - Arguments to delete one DayActivity.
     * @example
     * // Delete one DayActivity
     * const DayActivity = await prisma.dayActivity.delete({
     *   where: {
     *     // ... filter to delete one DayActivity
     *   }
     * })
     * 
     */
    delete<T extends DayActivityDeleteArgs>(args: SelectSubset<T, DayActivityDeleteArgs<ExtArgs>>): Prisma__DayActivityClient<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DayActivity.
     * @param {DayActivityUpdateArgs} args - Arguments to update one DayActivity.
     * @example
     * // Update one DayActivity
     * const dayActivity = await prisma.dayActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DayActivityUpdateArgs>(args: SelectSubset<T, DayActivityUpdateArgs<ExtArgs>>): Prisma__DayActivityClient<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DayActivities.
     * @param {DayActivityDeleteManyArgs} args - Arguments to filter DayActivities to delete.
     * @example
     * // Delete a few DayActivities
     * const { count } = await prisma.dayActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DayActivityDeleteManyArgs>(args?: SelectSubset<T, DayActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DayActivities
     * const dayActivity = await prisma.dayActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DayActivityUpdateManyArgs>(args: SelectSubset<T, DayActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayActivities and returns the data updated in the database.
     * @param {DayActivityUpdateManyAndReturnArgs} args - Arguments to update many DayActivities.
     * @example
     * // Update many DayActivities
     * const dayActivity = await prisma.dayActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DayActivities and only return the `id`
     * const dayActivityWithIdOnly = await prisma.dayActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DayActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, DayActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DayActivity.
     * @param {DayActivityUpsertArgs} args - Arguments to update or create a DayActivity.
     * @example
     * // Update or create a DayActivity
     * const dayActivity = await prisma.dayActivity.upsert({
     *   create: {
     *     // ... data to create a DayActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DayActivity we want to update
     *   }
     * })
     */
    upsert<T extends DayActivityUpsertArgs>(args: SelectSubset<T, DayActivityUpsertArgs<ExtArgs>>): Prisma__DayActivityClient<$Result.GetResult<Prisma.$DayActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DayActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayActivityCountArgs} args - Arguments to filter DayActivities to count.
     * @example
     * // Count the number of DayActivities
     * const count = await prisma.dayActivity.count({
     *   where: {
     *     // ... the filter for the DayActivities we want to count
     *   }
     * })
    **/
    count<T extends DayActivityCountArgs>(
      args?: Subset<T, DayActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DayActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DayActivityAggregateArgs>(args: Subset<T, DayActivityAggregateArgs>): Prisma.PrismaPromise<GetDayActivityAggregateType<T>>

    /**
     * Group by DayActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayActivityGroupByArgs} args - Group by arguments.
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
      T extends DayActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayActivityGroupByArgs['orderBy'] }
        : { orderBy?: DayActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
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
                ` in "having" needs to be provided in "by"`,
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
    >(args: SubsetIntersection<T, DayActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DayActivity model
   */
  readonly fields: DayActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DayActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DayActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DayActivity model
   */
  interface DayActivityFieldRefs {
    readonly id: FieldRef<"DayActivity", 'String'>
    readonly date: FieldRef<"DayActivity", 'DateTime'>
    readonly count: FieldRef<"DayActivity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DayActivity findUnique
   */
  export type DayActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * Filter, which DayActivity to fetch.
     */
    where: DayActivityWhereUniqueInput
  }

  /**
   * DayActivity findUniqueOrThrow
   */
  export type DayActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * Filter, which DayActivity to fetch.
     */
    where: DayActivityWhereUniqueInput
  }

  /**
   * DayActivity findFirst
   */
  export type DayActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * Filter, which DayActivity to fetch.
     */
    where?: DayActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayActivities to fetch.
     */
    orderBy?: DayActivityOrderByWithRelationInput | DayActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayActivities.
     */
    cursor?: DayActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayActivities.
     */
    distinct?: DayActivityScalarFieldEnum | DayActivityScalarFieldEnum[]
  }

  /**
   * DayActivity findFirstOrThrow
   */
  export type DayActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * Filter, which DayActivity to fetch.
     */
    where?: DayActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayActivities to fetch.
     */
    orderBy?: DayActivityOrderByWithRelationInput | DayActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayActivities.
     */
    cursor?: DayActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayActivities.
     */
    distinct?: DayActivityScalarFieldEnum | DayActivityScalarFieldEnum[]
  }

  /**
   * DayActivity findMany
   */
  export type DayActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * Filter, which DayActivities to fetch.
     */
    where?: DayActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayActivities to fetch.
     */
    orderBy?: DayActivityOrderByWithRelationInput | DayActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DayActivities.
     */
    cursor?: DayActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayActivities.
     */
    skip?: number
    distinct?: DayActivityScalarFieldEnum | DayActivityScalarFieldEnum[]
  }

  /**
   * DayActivity create
   */
  export type DayActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * The data needed to create a DayActivity.
     */
    data: XOR<DayActivityCreateInput, DayActivityUncheckedCreateInput>
  }

  /**
   * DayActivity createMany
   */
  export type DayActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DayActivities.
     */
    data: DayActivityCreateManyInput | DayActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DayActivity createManyAndReturn
   */
  export type DayActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * The data used to create many DayActivities.
     */
    data: DayActivityCreateManyInput | DayActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DayActivity update
   */
  export type DayActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * The data needed to update a DayActivity.
     */
    data: XOR<DayActivityUpdateInput, DayActivityUncheckedUpdateInput>
    /**
     * Choose, which DayActivity to update.
     */
    where: DayActivityWhereUniqueInput
  }

  /**
   * DayActivity updateMany
   */
  export type DayActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DayActivities.
     */
    data: XOR<DayActivityUpdateManyMutationInput, DayActivityUncheckedUpdateManyInput>
    /**
     * Filter which DayActivities to update
     */
    where?: DayActivityWhereInput
    /**
     * Limit how many DayActivities to update.
     */
    limit?: number
  }

  /**
   * DayActivity updateManyAndReturn
   */
  export type DayActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * The data used to update DayActivities.
     */
    data: XOR<DayActivityUpdateManyMutationInput, DayActivityUncheckedUpdateManyInput>
    /**
     * Filter which DayActivities to update
     */
    where?: DayActivityWhereInput
    /**
     * Limit how many DayActivities to update.
     */
    limit?: number
  }

  /**
   * DayActivity upsert
   */
  export type DayActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * The filter to search for the DayActivity to update in case it exists.
     */
    where: DayActivityWhereUniqueInput
    /**
     * In case the DayActivity found by the `where` argument doesn't exist, create a new DayActivity with this data.
     */
    create: XOR<DayActivityCreateInput, DayActivityUncheckedCreateInput>
    /**
     * In case the DayActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayActivityUpdateInput, DayActivityUncheckedUpdateInput>
  }

  /**
   * DayActivity delete
   */
  export type DayActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
    /**
     * Filter which DayActivity to delete.
     */
    where: DayActivityWhereUniqueInput
  }

  /**
   * DayActivity deleteMany
   */
  export type DayActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayActivities to delete
     */
    where?: DayActivityWhereInput
    /**
     * Limit how many DayActivities to delete.
     */
    limit?: number
  }

  /**
   * DayActivity without action
   */
  export type DayActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayActivity
     */
    select?: DayActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayActivity
     */
    omit?: DayActivityOmit<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    pinned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    pinned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    title: number
    content: number
    tags: number
    pinned: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NoteMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    pinned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    pinned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    tags?: true
    pinned?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: string
    title: string
    content: string
    tags: string[]
    pinned: boolean
    createdAt: Date
    updatedAt: Date
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    pinned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    pinned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    pinned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    pinned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "tags" | "pinned" | "createdAt" | "updatedAt", ExtArgs["result"]["note"]>

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      tags: string[]
      pinned: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
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
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
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
                ` in "having" needs to be provided in "by"`,
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
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'String'>
    readonly title: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'String'>
    readonly tags: FieldRef<"Note", 'String[]'>
    readonly pinned: FieldRef<"Note", 'Boolean'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OpportunityScalarFieldEnum: {
    id: 'id',
    company: 'company',
    role: 'role',
    link: 'link',
    priority: 'priority',
    status: 'status',
    notes: 'notes',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OpportunityScalarFieldEnum = (typeof OpportunityScalarFieldEnum)[keyof typeof OpportunityScalarFieldEnum]


  export const StageTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isDefault: 'isDefault',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type StageTypeScalarFieldEnum = (typeof StageTypeScalarFieldEnum)[keyof typeof StageTypeScalarFieldEnum]


  export const StageScalarFieldEnum: {
    id: 'id',
    opportunityId: 'opportunityId',
    stageTypeId: 'stageTypeId',
    status: 'status',
    scheduledAt: 'scheduledAt',
    notes: 'notes',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StageScalarFieldEnum = (typeof StageScalarFieldEnum)[keyof typeof StageScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    horizon: 'horizon',
    targetDate: 'targetDate',
    status: 'status',
    completedAt: 'completedAt',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    notes: 'notes',
    done: 'done',
    dueDate: 'dueDate',
    completedAt: 'completedAt',
    order: 'order',
    goalId: 'goalId',
    projectId: 'projectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const DailyTodoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    done: 'done',
    date: 'date',
    order: 'order',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type DailyTodoScalarFieldEnum = (typeof DailyTodoScalarFieldEnum)[keyof typeof DailyTodoScalarFieldEnum]


  export const GoodieCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    target: 'target',
    unit: 'unit',
    color: 'color',
    icon: 'icon',
    active: 'active',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoodieCategoryScalarFieldEnum = (typeof GoodieCategoryScalarFieldEnum)[keyof typeof GoodieCategoryScalarFieldEnum]


  export const GoodieLogScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    date: 'date',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoodieLogScalarFieldEnum = (typeof GoodieLogScalarFieldEnum)[keyof typeof GoodieLogScalarFieldEnum]


  export const DayActivityScalarFieldEnum: {
    id: 'id',
    date: 'date',
    count: 'count'
  };

  export type DayActivityScalarFieldEnum = (typeof DayActivityScalarFieldEnum)[keyof typeof DayActivityScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    tags: 'tags',
    pinned: 'pinned',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'OpportunityStatus'
   */
  export type EnumOpportunityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OpportunityStatus'>
    


  /**
   * Reference to a field of type 'OpportunityStatus[]'
   */
  export type ListEnumOpportunityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OpportunityStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StageStatus'
   */
  export type EnumStageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StageStatus'>
    


  /**
   * Reference to a field of type 'StageStatus[]'
   */
  export type ListEnumStageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StageStatus[]'>
    


  /**
   * Reference to a field of type 'GoalHorizon'
   */
  export type EnumGoalHorizonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalHorizon'>
    


  /**
   * Reference to a field of type 'GoalHorizon[]'
   */
  export type ListEnumGoalHorizonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalHorizon[]'>
    


  /**
   * Reference to a field of type 'GoalStatus'
   */
  export type EnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus'>
    


  /**
   * Reference to a field of type 'GoalStatus[]'
   */
  export type ListEnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'GoodieType'
   */
  export type EnumGoodieTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoodieType'>
    


  /**
   * Reference to a field of type 'GoodieType[]'
   */
  export type ListEnumGoodieTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoodieType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OpportunityWhereInput = {
    AND?: OpportunityWhereInput | OpportunityWhereInput[]
    OR?: OpportunityWhereInput[]
    NOT?: OpportunityWhereInput | OpportunityWhereInput[]
    id?: StringFilter<"Opportunity"> | string
    company?: StringFilter<"Opportunity"> | string
    role?: StringFilter<"Opportunity"> | string
    link?: StringNullableFilter<"Opportunity"> | string | null
    priority?: IntFilter<"Opportunity"> | number
    status?: EnumOpportunityStatusFilter<"Opportunity"> | $Enums.OpportunityStatus
    notes?: StringNullableFilter<"Opportunity"> | string | null
    order?: IntFilter<"Opportunity"> | number
    createdAt?: DateTimeFilter<"Opportunity"> | Date | string
    updatedAt?: DateTimeFilter<"Opportunity"> | Date | string
    stages?: StageListRelationFilter
  }

  export type OpportunityOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    role?: SortOrder
    link?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stages?: StageOrderByRelationAggregateInput
  }

  export type OpportunityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OpportunityWhereInput | OpportunityWhereInput[]
    OR?: OpportunityWhereInput[]
    NOT?: OpportunityWhereInput | OpportunityWhereInput[]
    company?: StringFilter<"Opportunity"> | string
    role?: StringFilter<"Opportunity"> | string
    link?: StringNullableFilter<"Opportunity"> | string | null
    priority?: IntFilter<"Opportunity"> | number
    status?: EnumOpportunityStatusFilter<"Opportunity"> | $Enums.OpportunityStatus
    notes?: StringNullableFilter<"Opportunity"> | string | null
    order?: IntFilter<"Opportunity"> | number
    createdAt?: DateTimeFilter<"Opportunity"> | Date | string
    updatedAt?: DateTimeFilter<"Opportunity"> | Date | string
    stages?: StageListRelationFilter
  }, "id">

  export type OpportunityOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    role?: SortOrder
    link?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OpportunityCountOrderByAggregateInput
    _avg?: OpportunityAvgOrderByAggregateInput
    _max?: OpportunityMaxOrderByAggregateInput
    _min?: OpportunityMinOrderByAggregateInput
    _sum?: OpportunitySumOrderByAggregateInput
  }

  export type OpportunityScalarWhereWithAggregatesInput = {
    AND?: OpportunityScalarWhereWithAggregatesInput | OpportunityScalarWhereWithAggregatesInput[]
    OR?: OpportunityScalarWhereWithAggregatesInput[]
    NOT?: OpportunityScalarWhereWithAggregatesInput | OpportunityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Opportunity"> | string
    company?: StringWithAggregatesFilter<"Opportunity"> | string
    role?: StringWithAggregatesFilter<"Opportunity"> | string
    link?: StringNullableWithAggregatesFilter<"Opportunity"> | string | null
    priority?: IntWithAggregatesFilter<"Opportunity"> | number
    status?: EnumOpportunityStatusWithAggregatesFilter<"Opportunity"> | $Enums.OpportunityStatus
    notes?: StringNullableWithAggregatesFilter<"Opportunity"> | string | null
    order?: IntWithAggregatesFilter<"Opportunity"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Opportunity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Opportunity"> | Date | string
  }

  export type StageTypeWhereInput = {
    AND?: StageTypeWhereInput | StageTypeWhereInput[]
    OR?: StageTypeWhereInput[]
    NOT?: StageTypeWhereInput | StageTypeWhereInput[]
    id?: StringFilter<"StageType"> | string
    name?: StringFilter<"StageType"> | string
    isDefault?: BoolFilter<"StageType"> | boolean
    order?: IntFilter<"StageType"> | number
    createdAt?: DateTimeFilter<"StageType"> | Date | string
    stages?: StageListRelationFilter
  }

  export type StageTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    stages?: StageOrderByRelationAggregateInput
  }

  export type StageTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: StageTypeWhereInput | StageTypeWhereInput[]
    OR?: StageTypeWhereInput[]
    NOT?: StageTypeWhereInput | StageTypeWhereInput[]
    isDefault?: BoolFilter<"StageType"> | boolean
    order?: IntFilter<"StageType"> | number
    createdAt?: DateTimeFilter<"StageType"> | Date | string
    stages?: StageListRelationFilter
  }, "id" | "name">

  export type StageTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: StageTypeCountOrderByAggregateInput
    _avg?: StageTypeAvgOrderByAggregateInput
    _max?: StageTypeMaxOrderByAggregateInput
    _min?: StageTypeMinOrderByAggregateInput
    _sum?: StageTypeSumOrderByAggregateInput
  }

  export type StageTypeScalarWhereWithAggregatesInput = {
    AND?: StageTypeScalarWhereWithAggregatesInput | StageTypeScalarWhereWithAggregatesInput[]
    OR?: StageTypeScalarWhereWithAggregatesInput[]
    NOT?: StageTypeScalarWhereWithAggregatesInput | StageTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StageType"> | string
    name?: StringWithAggregatesFilter<"StageType"> | string
    isDefault?: BoolWithAggregatesFilter<"StageType"> | boolean
    order?: IntWithAggregatesFilter<"StageType"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StageType"> | Date | string
  }

  export type StageWhereInput = {
    AND?: StageWhereInput | StageWhereInput[]
    OR?: StageWhereInput[]
    NOT?: StageWhereInput | StageWhereInput[]
    id?: StringFilter<"Stage"> | string
    opportunityId?: StringFilter<"Stage"> | string
    stageTypeId?: StringFilter<"Stage"> | string
    status?: EnumStageStatusFilter<"Stage"> | $Enums.StageStatus
    scheduledAt?: DateTimeNullableFilter<"Stage"> | Date | string | null
    notes?: StringNullableFilter<"Stage"> | string | null
    order?: IntFilter<"Stage"> | number
    createdAt?: DateTimeFilter<"Stage"> | Date | string
    updatedAt?: DateTimeFilter<"Stage"> | Date | string
    opportunity?: XOR<OpportunityScalarRelationFilter, OpportunityWhereInput>
    stageType?: XOR<StageTypeScalarRelationFilter, StageTypeWhereInput>
  }

  export type StageOrderByWithRelationInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    stageTypeId?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    opportunity?: OpportunityOrderByWithRelationInput
    stageType?: StageTypeOrderByWithRelationInput
  }

  export type StageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StageWhereInput | StageWhereInput[]
    OR?: StageWhereInput[]
    NOT?: StageWhereInput | StageWhereInput[]
    opportunityId?: StringFilter<"Stage"> | string
    stageTypeId?: StringFilter<"Stage"> | string
    status?: EnumStageStatusFilter<"Stage"> | $Enums.StageStatus
    scheduledAt?: DateTimeNullableFilter<"Stage"> | Date | string | null
    notes?: StringNullableFilter<"Stage"> | string | null
    order?: IntFilter<"Stage"> | number
    createdAt?: DateTimeFilter<"Stage"> | Date | string
    updatedAt?: DateTimeFilter<"Stage"> | Date | string
    opportunity?: XOR<OpportunityScalarRelationFilter, OpportunityWhereInput>
    stageType?: XOR<StageTypeScalarRelationFilter, StageTypeWhereInput>
  }, "id">

  export type StageOrderByWithAggregationInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    stageTypeId?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StageCountOrderByAggregateInput
    _avg?: StageAvgOrderByAggregateInput
    _max?: StageMaxOrderByAggregateInput
    _min?: StageMinOrderByAggregateInput
    _sum?: StageSumOrderByAggregateInput
  }

  export type StageScalarWhereWithAggregatesInput = {
    AND?: StageScalarWhereWithAggregatesInput | StageScalarWhereWithAggregatesInput[]
    OR?: StageScalarWhereWithAggregatesInput[]
    NOT?: StageScalarWhereWithAggregatesInput | StageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stage"> | string
    opportunityId?: StringWithAggregatesFilter<"Stage"> | string
    stageTypeId?: StringWithAggregatesFilter<"Stage"> | string
    status?: EnumStageStatusWithAggregatesFilter<"Stage"> | $Enums.StageStatus
    scheduledAt?: DateTimeNullableWithAggregatesFilter<"Stage"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Stage"> | string | null
    order?: IntWithAggregatesFilter<"Stage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Stage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Stage"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    horizon?: EnumGoalHorizonFilter<"Goal"> | $Enums.GoalHorizon
    targetDate?: DateTimeNullableFilter<"Goal"> | Date | string | null
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    completedAt?: DateTimeNullableFilter<"Goal"> | Date | string | null
    order?: IntFilter<"Goal"> | number
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    tasks?: TaskListRelationFilter
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    horizon?: SortOrder
    targetDate?: SortOrderInput | SortOrder
    status?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    horizon?: EnumGoalHorizonFilter<"Goal"> | $Enums.GoalHorizon
    targetDate?: DateTimeNullableFilter<"Goal"> | Date | string | null
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    completedAt?: DateTimeNullableFilter<"Goal"> | Date | string | null
    order?: IntFilter<"Goal"> | number
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    tasks?: TaskListRelationFilter
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    horizon?: SortOrder
    targetDate?: SortOrderInput | SortOrder
    status?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goal"> | string
    title?: StringWithAggregatesFilter<"Goal"> | string
    description?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    horizon?: EnumGoalHorizonWithAggregatesFilter<"Goal"> | $Enums.GoalHorizon
    targetDate?: DateTimeNullableWithAggregatesFilter<"Goal"> | Date | string | null
    status?: EnumGoalStatusWithAggregatesFilter<"Goal"> | $Enums.GoalStatus
    completedAt?: DateTimeNullableWithAggregatesFilter<"Goal"> | Date | string | null
    order?: IntWithAggregatesFilter<"Goal"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    order?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    tasks?: TaskListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    order?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    tasks?: TaskListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    startDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    order?: IntWithAggregatesFilter<"Project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    notes?: StringNullableFilter<"Task"> | string | null
    done?: BoolFilter<"Task"> | boolean
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    order?: IntFilter<"Task"> | number
    goalId?: StringNullableFilter<"Task"> | string | null
    projectId?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    notes?: SortOrderInput | SortOrder
    done?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    order?: SortOrder
    goalId?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    goal?: GoalOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    notes?: StringNullableFilter<"Task"> | string | null
    done?: BoolFilter<"Task"> | boolean
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    order?: IntFilter<"Task"> | number
    goalId?: StringNullableFilter<"Task"> | string | null
    projectId?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    notes?: SortOrderInput | SortOrder
    done?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    order?: SortOrder
    goalId?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    notes?: StringNullableWithAggregatesFilter<"Task"> | string | null
    done?: BoolWithAggregatesFilter<"Task"> | boolean
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    order?: IntWithAggregatesFilter<"Task"> | number
    goalId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    projectId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type DailyTodoWhereInput = {
    AND?: DailyTodoWhereInput | DailyTodoWhereInput[]
    OR?: DailyTodoWhereInput[]
    NOT?: DailyTodoWhereInput | DailyTodoWhereInput[]
    id?: StringFilter<"DailyTodo"> | string
    title?: StringFilter<"DailyTodo"> | string
    done?: BoolFilter<"DailyTodo"> | boolean
    date?: DateTimeFilter<"DailyTodo"> | Date | string
    order?: IntFilter<"DailyTodo"> | number
    completedAt?: DateTimeNullableFilter<"DailyTodo"> | Date | string | null
    createdAt?: DateTimeFilter<"DailyTodo"> | Date | string
  }

  export type DailyTodoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    done?: SortOrder
    date?: SortOrder
    order?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type DailyTodoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyTodoWhereInput | DailyTodoWhereInput[]
    OR?: DailyTodoWhereInput[]
    NOT?: DailyTodoWhereInput | DailyTodoWhereInput[]
    title?: StringFilter<"DailyTodo"> | string
    done?: BoolFilter<"DailyTodo"> | boolean
    date?: DateTimeFilter<"DailyTodo"> | Date | string
    order?: IntFilter<"DailyTodo"> | number
    completedAt?: DateTimeNullableFilter<"DailyTodo"> | Date | string | null
    createdAt?: DateTimeFilter<"DailyTodo"> | Date | string
  }, "id">

  export type DailyTodoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    done?: SortOrder
    date?: SortOrder
    order?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DailyTodoCountOrderByAggregateInput
    _avg?: DailyTodoAvgOrderByAggregateInput
    _max?: DailyTodoMaxOrderByAggregateInput
    _min?: DailyTodoMinOrderByAggregateInput
    _sum?: DailyTodoSumOrderByAggregateInput
  }

  export type DailyTodoScalarWhereWithAggregatesInput = {
    AND?: DailyTodoScalarWhereWithAggregatesInput | DailyTodoScalarWhereWithAggregatesInput[]
    OR?: DailyTodoScalarWhereWithAggregatesInput[]
    NOT?: DailyTodoScalarWhereWithAggregatesInput | DailyTodoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyTodo"> | string
    title?: StringWithAggregatesFilter<"DailyTodo"> | string
    done?: BoolWithAggregatesFilter<"DailyTodo"> | boolean
    date?: DateTimeWithAggregatesFilter<"DailyTodo"> | Date | string
    order?: IntWithAggregatesFilter<"DailyTodo"> | number
    completedAt?: DateTimeNullableWithAggregatesFilter<"DailyTodo"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DailyTodo"> | Date | string
  }

  export type GoodieCategoryWhereInput = {
    AND?: GoodieCategoryWhereInput | GoodieCategoryWhereInput[]
    OR?: GoodieCategoryWhereInput[]
    NOT?: GoodieCategoryWhereInput | GoodieCategoryWhereInput[]
    id?: StringFilter<"GoodieCategory"> | string
    name?: StringFilter<"GoodieCategory"> | string
    type?: EnumGoodieTypeFilter<"GoodieCategory"> | $Enums.GoodieType
    target?: FloatNullableFilter<"GoodieCategory"> | number | null
    unit?: StringNullableFilter<"GoodieCategory"> | string | null
    color?: StringNullableFilter<"GoodieCategory"> | string | null
    icon?: StringNullableFilter<"GoodieCategory"> | string | null
    active?: BoolFilter<"GoodieCategory"> | boolean
    order?: IntFilter<"GoodieCategory"> | number
    createdAt?: DateTimeFilter<"GoodieCategory"> | Date | string
    updatedAt?: DateTimeFilter<"GoodieCategory"> | Date | string
    logs?: GoodieLogListRelationFilter
  }

  export type GoodieCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    target?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    active?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    logs?: GoodieLogOrderByRelationAggregateInput
  }

  export type GoodieCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoodieCategoryWhereInput | GoodieCategoryWhereInput[]
    OR?: GoodieCategoryWhereInput[]
    NOT?: GoodieCategoryWhereInput | GoodieCategoryWhereInput[]
    name?: StringFilter<"GoodieCategory"> | string
    type?: EnumGoodieTypeFilter<"GoodieCategory"> | $Enums.GoodieType
    target?: FloatNullableFilter<"GoodieCategory"> | number | null
    unit?: StringNullableFilter<"GoodieCategory"> | string | null
    color?: StringNullableFilter<"GoodieCategory"> | string | null
    icon?: StringNullableFilter<"GoodieCategory"> | string | null
    active?: BoolFilter<"GoodieCategory"> | boolean
    order?: IntFilter<"GoodieCategory"> | number
    createdAt?: DateTimeFilter<"GoodieCategory"> | Date | string
    updatedAt?: DateTimeFilter<"GoodieCategory"> | Date | string
    logs?: GoodieLogListRelationFilter
  }, "id">

  export type GoodieCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    target?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    active?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoodieCategoryCountOrderByAggregateInput
    _avg?: GoodieCategoryAvgOrderByAggregateInput
    _max?: GoodieCategoryMaxOrderByAggregateInput
    _min?: GoodieCategoryMinOrderByAggregateInput
    _sum?: GoodieCategorySumOrderByAggregateInput
  }

  export type GoodieCategoryScalarWhereWithAggregatesInput = {
    AND?: GoodieCategoryScalarWhereWithAggregatesInput | GoodieCategoryScalarWhereWithAggregatesInput[]
    OR?: GoodieCategoryScalarWhereWithAggregatesInput[]
    NOT?: GoodieCategoryScalarWhereWithAggregatesInput | GoodieCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GoodieCategory"> | string
    name?: StringWithAggregatesFilter<"GoodieCategory"> | string
    type?: EnumGoodieTypeWithAggregatesFilter<"GoodieCategory"> | $Enums.GoodieType
    target?: FloatNullableWithAggregatesFilter<"GoodieCategory"> | number | null
    unit?: StringNullableWithAggregatesFilter<"GoodieCategory"> | string | null
    color?: StringNullableWithAggregatesFilter<"GoodieCategory"> | string | null
    icon?: StringNullableWithAggregatesFilter<"GoodieCategory"> | string | null
    active?: BoolWithAggregatesFilter<"GoodieCategory"> | boolean
    order?: IntWithAggregatesFilter<"GoodieCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GoodieCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GoodieCategory"> | Date | string
  }

  export type GoodieLogWhereInput = {
    AND?: GoodieLogWhereInput | GoodieLogWhereInput[]
    OR?: GoodieLogWhereInput[]
    NOT?: GoodieLogWhereInput | GoodieLogWhereInput[]
    id?: StringFilter<"GoodieLog"> | string
    categoryId?: StringFilter<"GoodieLog"> | string
    date?: DateTimeFilter<"GoodieLog"> | Date | string
    value?: FloatFilter<"GoodieLog"> | number
    createdAt?: DateTimeFilter<"GoodieLog"> | Date | string
    updatedAt?: DateTimeFilter<"GoodieLog"> | Date | string
    category?: XOR<GoodieCategoryScalarRelationFilter, GoodieCategoryWhereInput>
  }

  export type GoodieLogOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    date?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: GoodieCategoryOrderByWithRelationInput
  }

  export type GoodieLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    categoryId_date?: GoodieLogCategoryIdDateCompoundUniqueInput
    AND?: GoodieLogWhereInput | GoodieLogWhereInput[]
    OR?: GoodieLogWhereInput[]
    NOT?: GoodieLogWhereInput | GoodieLogWhereInput[]
    categoryId?: StringFilter<"GoodieLog"> | string
    date?: DateTimeFilter<"GoodieLog"> | Date | string
    value?: FloatFilter<"GoodieLog"> | number
    createdAt?: DateTimeFilter<"GoodieLog"> | Date | string
    updatedAt?: DateTimeFilter<"GoodieLog"> | Date | string
    category?: XOR<GoodieCategoryScalarRelationFilter, GoodieCategoryWhereInput>
  }, "id" | "categoryId_date">

  export type GoodieLogOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    date?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoodieLogCountOrderByAggregateInput
    _avg?: GoodieLogAvgOrderByAggregateInput
    _max?: GoodieLogMaxOrderByAggregateInput
    _min?: GoodieLogMinOrderByAggregateInput
    _sum?: GoodieLogSumOrderByAggregateInput
  }

  export type GoodieLogScalarWhereWithAggregatesInput = {
    AND?: GoodieLogScalarWhereWithAggregatesInput | GoodieLogScalarWhereWithAggregatesInput[]
    OR?: GoodieLogScalarWhereWithAggregatesInput[]
    NOT?: GoodieLogScalarWhereWithAggregatesInput | GoodieLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GoodieLog"> | string
    categoryId?: StringWithAggregatesFilter<"GoodieLog"> | string
    date?: DateTimeWithAggregatesFilter<"GoodieLog"> | Date | string
    value?: FloatWithAggregatesFilter<"GoodieLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GoodieLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GoodieLog"> | Date | string
  }

  export type DayActivityWhereInput = {
    AND?: DayActivityWhereInput | DayActivityWhereInput[]
    OR?: DayActivityWhereInput[]
    NOT?: DayActivityWhereInput | DayActivityWhereInput[]
    id?: StringFilter<"DayActivity"> | string
    date?: DateTimeFilter<"DayActivity"> | Date | string
    count?: IntFilter<"DayActivity"> | number
  }

  export type DayActivityOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    count?: SortOrder
  }

  export type DayActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    date?: Date | string
    AND?: DayActivityWhereInput | DayActivityWhereInput[]
    OR?: DayActivityWhereInput[]
    NOT?: DayActivityWhereInput | DayActivityWhereInput[]
    count?: IntFilter<"DayActivity"> | number
  }, "id" | "date">

  export type DayActivityOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    count?: SortOrder
    _count?: DayActivityCountOrderByAggregateInput
    _avg?: DayActivityAvgOrderByAggregateInput
    _max?: DayActivityMaxOrderByAggregateInput
    _min?: DayActivityMinOrderByAggregateInput
    _sum?: DayActivitySumOrderByAggregateInput
  }

  export type DayActivityScalarWhereWithAggregatesInput = {
    AND?: DayActivityScalarWhereWithAggregatesInput | DayActivityScalarWhereWithAggregatesInput[]
    OR?: DayActivityScalarWhereWithAggregatesInput[]
    NOT?: DayActivityScalarWhereWithAggregatesInput | DayActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DayActivity"> | string
    date?: DateTimeWithAggregatesFilter<"DayActivity"> | Date | string
    count?: IntWithAggregatesFilter<"DayActivity"> | number
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: StringFilter<"Note"> | string
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    tags?: StringNullableListFilter<"Note">
    pinned?: BoolFilter<"Note"> | boolean
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    pinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    tags?: StringNullableListFilter<"Note">
    pinned?: BoolFilter<"Note"> | boolean
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    pinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Note"> | string
    title?: StringWithAggregatesFilter<"Note"> | string
    content?: StringWithAggregatesFilter<"Note"> | string
    tags?: StringNullableListFilter<"Note">
    pinned?: BoolWithAggregatesFilter<"Note"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
  }

  export type OpportunityCreateInput = {
    id?: string
    company: string
    role: string
    link?: string | null
    priority?: number
    status?: $Enums.OpportunityStatus
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: StageCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityUncheckedCreateInput = {
    id?: string
    company: string
    role: string
    link?: string | null
    priority?: number
    status?: $Enums.OpportunityStatus
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: StageUncheckedCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: StageUpdateManyWithoutOpportunityNestedInput
  }

  export type OpportunityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: StageUncheckedUpdateManyWithoutOpportunityNestedInput
  }

  export type OpportunityCreateManyInput = {
    id?: string
    company: string
    role: string
    link?: string | null
    priority?: number
    status?: $Enums.OpportunityStatus
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpportunityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageTypeCreateInput = {
    id?: string
    name: string
    isDefault?: boolean
    order?: number
    createdAt?: Date | string
    stages?: StageCreateNestedManyWithoutStageTypeInput
  }

  export type StageTypeUncheckedCreateInput = {
    id?: string
    name: string
    isDefault?: boolean
    order?: number
    createdAt?: Date | string
    stages?: StageUncheckedCreateNestedManyWithoutStageTypeInput
  }

  export type StageTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: StageUpdateManyWithoutStageTypeNestedInput
  }

  export type StageTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: StageUncheckedUpdateManyWithoutStageTypeNestedInput
  }

  export type StageTypeCreateManyInput = {
    id?: string
    name: string
    isDefault?: boolean
    order?: number
    createdAt?: Date | string
  }

  export type StageTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageCreateInput = {
    id?: string
    status?: $Enums.StageStatus
    scheduledAt?: Date | string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    opportunity: OpportunityCreateNestedOneWithoutStagesInput
    stageType: StageTypeCreateNestedOneWithoutStagesInput
  }

  export type StageUncheckedCreateInput = {
    id?: string
    opportunityId: string
    stageTypeId: string
    status?: $Enums.StageStatus
    scheduledAt?: Date | string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStageStatusFieldUpdateOperationsInput | $Enums.StageStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunity?: OpportunityUpdateOneRequiredWithoutStagesNestedInput
    stageType?: StageTypeUpdateOneRequiredWithoutStagesNestedInput
  }

  export type StageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    stageTypeId?: StringFieldUpdateOperationsInput | string
    status?: EnumStageStatusFieldUpdateOperationsInput | $Enums.StageStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageCreateManyInput = {
    id?: string
    opportunityId: string
    stageTypeId: string
    status?: $Enums.StageStatus
    scheduledAt?: Date | string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStageStatusFieldUpdateOperationsInput | $Enums.StageStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    stageTypeId?: StringFieldUpdateOperationsInput | string
    status?: EnumStageStatusFieldUpdateOperationsInput | $Enums.StageStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    id?: string
    title: string
    description?: string | null
    horizon?: $Enums.GoalHorizon
    targetDate?: Date | string | null
    status?: $Enums.GoalStatus
    completedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    horizon?: $Enums.GoalHorizon
    targetDate?: Date | string | null
    status?: $Enums.GoalStatus
    completedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    horizon?: EnumGoalHorizonFieldUpdateOperationsInput | $Enums.GoalHorizon
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    horizon?: EnumGoalHorizonFieldUpdateOperationsInput | $Enums.GoalHorizon
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    horizon?: $Enums.GoalHorizon
    targetDate?: Date | string | null
    status?: $Enums.GoalStatus
    completedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    horizon?: EnumGoalHorizonFieldUpdateOperationsInput | $Enums.GoalHorizon
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    horizon?: EnumGoalHorizonFieldUpdateOperationsInput | $Enums.GoalHorizon
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    notes?: string | null
    done?: boolean
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    goal?: GoalCreateNestedOneWithoutTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    notes?: string | null
    done?: boolean
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    order?: number
    goalId?: string | null
    projectId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    done?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneWithoutTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    done?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    notes?: string | null
    done?: boolean
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    order?: number
    goalId?: string | null
    projectId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    done?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    done?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyTodoCreateInput = {
    id?: string
    title: string
    done?: boolean
    date?: Date | string
    order?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type DailyTodoUncheckedCreateInput = {
    id?: string
    title: string
    done?: boolean
    date?: Date | string
    order?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type DailyTodoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyTodoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyTodoCreateManyInput = {
    id?: string
    title: string
    done?: boolean
    date?: Date | string
    order?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type DailyTodoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyTodoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodieCategoryCreateInput = {
    id?: string
    name: string
    type?: $Enums.GoodieType
    target?: number | null
    unit?: string | null
    color?: string | null
    icon?: string | null
    active?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: GoodieLogCreateNestedManyWithoutCategoryInput
  }

  export type GoodieCategoryUncheckedCreateInput = {
    id?: string
    name: string
    type?: $Enums.GoodieType
    target?: number | null
    unit?: string | null
    color?: string | null
    icon?: string | null
    active?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: GoodieLogUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type GoodieCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumGoodieTypeFieldUpdateOperationsInput | $Enums.GoodieType
    target?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: GoodieLogUpdateManyWithoutCategoryNestedInput
  }

  export type GoodieCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumGoodieTypeFieldUpdateOperationsInput | $Enums.GoodieType
    target?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: GoodieLogUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type GoodieCategoryCreateManyInput = {
    id?: string
    name: string
    type?: $Enums.GoodieType
    target?: number | null
    unit?: string | null
    color?: string | null
    icon?: string | null
    active?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoodieCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumGoodieTypeFieldUpdateOperationsInput | $Enums.GoodieType
    target?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodieCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumGoodieTypeFieldUpdateOperationsInput | $Enums.GoodieType
    target?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodieLogCreateInput = {
    id?: string
    date: Date | string
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: GoodieCategoryCreateNestedOneWithoutLogsInput
  }

  export type GoodieLogUncheckedCreateInput = {
    id?: string
    categoryId: string
    date: Date | string
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoodieLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: GoodieCategoryUpdateOneRequiredWithoutLogsNestedInput
  }

  export type GoodieLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodieLogCreateManyInput = {
    id?: string
    categoryId: string
    date: Date | string
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoodieLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodieLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayActivityCreateInput = {
    id?: string
    date: Date | string
    count?: number
  }

  export type DayActivityUncheckedCreateInput = {
    id?: string
    date: Date | string
    count?: number
  }

  export type DayActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DayActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DayActivityCreateManyInput = {
    id?: string
    date: Date | string
    count?: number
  }

  export type DayActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DayActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type NoteCreateInput = {
    id?: string
    title: string
    content?: string
    tags?: NoteCreatetagsInput | string[]
    pinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUncheckedCreateInput = {
    id?: string
    title: string
    content?: string
    tags?: NoteCreatetagsInput | string[]
    pinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: NoteUpdatetagsInput | string[]
    pinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: NoteUpdatetagsInput | string[]
    pinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateManyInput = {
    id?: string
    title: string
    content?: string
    tags?: NoteCreatetagsInput | string[]
    pinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: NoteUpdatetagsInput | string[]
    pinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: NoteUpdatetagsInput | string[]
    pinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumOpportunityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | EnumOpportunityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityStatusFilter<$PrismaModel> | $Enums.OpportunityStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StageListRelationFilter = {
    every?: StageWhereInput
    some?: StageWhereInput
    none?: StageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpportunityCountOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    role?: SortOrder
    link?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OpportunityAvgOrderByAggregateInput = {
    priority?: SortOrder
    order?: SortOrder
  }

  export type OpportunityMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    role?: SortOrder
    link?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OpportunityMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    role?: SortOrder
    link?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OpportunitySumOrderByAggregateInput = {
    priority?: SortOrder
    order?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumOpportunityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | EnumOpportunityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityStatusWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOpportunityStatusFilter<$PrismaModel>
    _max?: NestedEnumOpportunityStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StageTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type StageTypeAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StageTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type StageTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type StageTypeSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumStageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StageStatus | EnumStageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StageStatus[] | ListEnumStageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StageStatus[] | ListEnumStageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStageStatusFilter<$PrismaModel> | $Enums.StageStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OpportunityScalarRelationFilter = {
    is?: OpportunityWhereInput
    isNot?: OpportunityWhereInput
  }

  export type StageTypeScalarRelationFilter = {
    is?: StageTypeWhereInput
    isNot?: StageTypeWhereInput
  }

  export type StageCountOrderByAggregateInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    stageTypeId?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    notes?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StageMaxOrderByAggregateInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    stageTypeId?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    notes?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StageMinOrderByAggregateInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    stageTypeId?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    notes?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumStageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StageStatus | EnumStageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StageStatus[] | ListEnumStageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StageStatus[] | ListEnumStageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStageStatusWithAggregatesFilter<$PrismaModel> | $Enums.StageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStageStatusFilter<$PrismaModel>
    _max?: NestedEnumStageStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGoalHorizonFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalHorizon | EnumGoalHorizonFieldRefInput<$PrismaModel>
    in?: $Enums.GoalHorizon[] | ListEnumGoalHorizonFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalHorizon[] | ListEnumGoalHorizonFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalHorizonFilter<$PrismaModel> | $Enums.GoalHorizon
  }

  export type EnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    horizon?: SortOrder
    targetDate?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    horizon?: SortOrder
    targetDate?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    horizon?: SortOrder
    targetDate?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumGoalHorizonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalHorizon | EnumGoalHorizonFieldRefInput<$PrismaModel>
    in?: $Enums.GoalHorizon[] | ListEnumGoalHorizonFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalHorizon[] | ListEnumGoalHorizonFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalHorizonWithAggregatesFilter<$PrismaModel> | $Enums.GoalHorizon
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalHorizonFilter<$PrismaModel>
    _max?: NestedEnumGoalHorizonFilter<$PrismaModel>
  }

  export type EnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type GoalNullableScalarRelationFilter = {
    is?: GoalWhereInput | null
    isNot?: GoalWhereInput | null
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    notes?: SortOrder
    done?: SortOrder
    dueDate?: SortOrder
    completedAt?: SortOrder
    order?: SortOrder
    goalId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    notes?: SortOrder
    done?: SortOrder
    dueDate?: SortOrder
    completedAt?: SortOrder
    order?: SortOrder
    goalId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    notes?: SortOrder
    done?: SortOrder
    dueDate?: SortOrder
    completedAt?: SortOrder
    order?: SortOrder
    goalId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type DailyTodoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    done?: SortOrder
    date?: SortOrder
    order?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyTodoAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type DailyTodoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    done?: SortOrder
    date?: SortOrder
    order?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyTodoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    done?: SortOrder
    date?: SortOrder
    order?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyTodoSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumGoodieTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GoodieType | EnumGoodieTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoodieType[] | ListEnumGoodieTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoodieType[] | ListEnumGoodieTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoodieTypeFilter<$PrismaModel> | $Enums.GoodieType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type GoodieLogListRelationFilter = {
    every?: GoodieLogWhereInput
    some?: GoodieLogWhereInput
    none?: GoodieLogWhereInput
  }

  export type GoodieLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoodieCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    target?: SortOrder
    unit?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    active?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoodieCategoryAvgOrderByAggregateInput = {
    target?: SortOrder
    order?: SortOrder
  }

  export type GoodieCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    target?: SortOrder
    unit?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    active?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoodieCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    target?: SortOrder
    unit?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    active?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoodieCategorySumOrderByAggregateInput = {
    target?: SortOrder
    order?: SortOrder
  }

  export type EnumGoodieTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoodieType | EnumGoodieTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoodieType[] | ListEnumGoodieTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoodieType[] | ListEnumGoodieTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoodieTypeWithAggregatesFilter<$PrismaModel> | $Enums.GoodieType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoodieTypeFilter<$PrismaModel>
    _max?: NestedEnumGoodieTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GoodieCategoryScalarRelationFilter = {
    is?: GoodieCategoryWhereInput
    isNot?: GoodieCategoryWhereInput
  }

  export type GoodieLogCategoryIdDateCompoundUniqueInput = {
    categoryId: string
    date: Date | string
  }

  export type GoodieLogCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    date?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoodieLogAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type GoodieLogMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    date?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoodieLogMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    date?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoodieLogSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DayActivityCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    count?: SortOrder
  }

  export type DayActivityAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type DayActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    count?: SortOrder
  }

  export type DayActivityMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    count?: SortOrder
  }

  export type DayActivitySumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    pinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StageCreateNestedManyWithoutOpportunityInput = {
    create?: XOR<StageCreateWithoutOpportunityInput, StageUncheckedCreateWithoutOpportunityInput> | StageCreateWithoutOpportunityInput[] | StageUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: StageCreateOrConnectWithoutOpportunityInput | StageCreateOrConnectWithoutOpportunityInput[]
    createMany?: StageCreateManyOpportunityInputEnvelope
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
  }

  export type StageUncheckedCreateNestedManyWithoutOpportunityInput = {
    create?: XOR<StageCreateWithoutOpportunityInput, StageUncheckedCreateWithoutOpportunityInput> | StageCreateWithoutOpportunityInput[] | StageUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: StageCreateOrConnectWithoutOpportunityInput | StageCreateOrConnectWithoutOpportunityInput[]
    createMany?: StageCreateManyOpportunityInputEnvelope
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumOpportunityStatusFieldUpdateOperationsInput = {
    set?: $Enums.OpportunityStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StageUpdateManyWithoutOpportunityNestedInput = {
    create?: XOR<StageCreateWithoutOpportunityInput, StageUncheckedCreateWithoutOpportunityInput> | StageCreateWithoutOpportunityInput[] | StageUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: StageCreateOrConnectWithoutOpportunityInput | StageCreateOrConnectWithoutOpportunityInput[]
    upsert?: StageUpsertWithWhereUniqueWithoutOpportunityInput | StageUpsertWithWhereUniqueWithoutOpportunityInput[]
    createMany?: StageCreateManyOpportunityInputEnvelope
    set?: StageWhereUniqueInput | StageWhereUniqueInput[]
    disconnect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    delete?: StageWhereUniqueInput | StageWhereUniqueInput[]
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    update?: StageUpdateWithWhereUniqueWithoutOpportunityInput | StageUpdateWithWhereUniqueWithoutOpportunityInput[]
    updateMany?: StageUpdateManyWithWhereWithoutOpportunityInput | StageUpdateManyWithWhereWithoutOpportunityInput[]
    deleteMany?: StageScalarWhereInput | StageScalarWhereInput[]
  }

  export type StageUncheckedUpdateManyWithoutOpportunityNestedInput = {
    create?: XOR<StageCreateWithoutOpportunityInput, StageUncheckedCreateWithoutOpportunityInput> | StageCreateWithoutOpportunityInput[] | StageUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: StageCreateOrConnectWithoutOpportunityInput | StageCreateOrConnectWithoutOpportunityInput[]
    upsert?: StageUpsertWithWhereUniqueWithoutOpportunityInput | StageUpsertWithWhereUniqueWithoutOpportunityInput[]
    createMany?: StageCreateManyOpportunityInputEnvelope
    set?: StageWhereUniqueInput | StageWhereUniqueInput[]
    disconnect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    delete?: StageWhereUniqueInput | StageWhereUniqueInput[]
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    update?: StageUpdateWithWhereUniqueWithoutOpportunityInput | StageUpdateWithWhereUniqueWithoutOpportunityInput[]
    updateMany?: StageUpdateManyWithWhereWithoutOpportunityInput | StageUpdateManyWithWhereWithoutOpportunityInput[]
    deleteMany?: StageScalarWhereInput | StageScalarWhereInput[]
  }

  export type StageCreateNestedManyWithoutStageTypeInput = {
    create?: XOR<StageCreateWithoutStageTypeInput, StageUncheckedCreateWithoutStageTypeInput> | StageCreateWithoutStageTypeInput[] | StageUncheckedCreateWithoutStageTypeInput[]
    connectOrCreate?: StageCreateOrConnectWithoutStageTypeInput | StageCreateOrConnectWithoutStageTypeInput[]
    createMany?: StageCreateManyStageTypeInputEnvelope
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
  }

  export type StageUncheckedCreateNestedManyWithoutStageTypeInput = {
    create?: XOR<StageCreateWithoutStageTypeInput, StageUncheckedCreateWithoutStageTypeInput> | StageCreateWithoutStageTypeInput[] | StageUncheckedCreateWithoutStageTypeInput[]
    connectOrCreate?: StageCreateOrConnectWithoutStageTypeInput | StageCreateOrConnectWithoutStageTypeInput[]
    createMany?: StageCreateManyStageTypeInputEnvelope
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StageUpdateManyWithoutStageTypeNestedInput = {
    create?: XOR<StageCreateWithoutStageTypeInput, StageUncheckedCreateWithoutStageTypeInput> | StageCreateWithoutStageTypeInput[] | StageUncheckedCreateWithoutStageTypeInput[]
    connectOrCreate?: StageCreateOrConnectWithoutStageTypeInput | StageCreateOrConnectWithoutStageTypeInput[]
    upsert?: StageUpsertWithWhereUniqueWithoutStageTypeInput | StageUpsertWithWhereUniqueWithoutStageTypeInput[]
    createMany?: StageCreateManyStageTypeInputEnvelope
    set?: StageWhereUniqueInput | StageWhereUniqueInput[]
    disconnect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    delete?: StageWhereUniqueInput | StageWhereUniqueInput[]
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    update?: StageUpdateWithWhereUniqueWithoutStageTypeInput | StageUpdateWithWhereUniqueWithoutStageTypeInput[]
    updateMany?: StageUpdateManyWithWhereWithoutStageTypeInput | StageUpdateManyWithWhereWithoutStageTypeInput[]
    deleteMany?: StageScalarWhereInput | StageScalarWhereInput[]
  }

  export type StageUncheckedUpdateManyWithoutStageTypeNestedInput = {
    create?: XOR<StageCreateWithoutStageTypeInput, StageUncheckedCreateWithoutStageTypeInput> | StageCreateWithoutStageTypeInput[] | StageUncheckedCreateWithoutStageTypeInput[]
    connectOrCreate?: StageCreateOrConnectWithoutStageTypeInput | StageCreateOrConnectWithoutStageTypeInput[]
    upsert?: StageUpsertWithWhereUniqueWithoutStageTypeInput | StageUpsertWithWhereUniqueWithoutStageTypeInput[]
    createMany?: StageCreateManyStageTypeInputEnvelope
    set?: StageWhereUniqueInput | StageWhereUniqueInput[]
    disconnect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    delete?: StageWhereUniqueInput | StageWhereUniqueInput[]
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    update?: StageUpdateWithWhereUniqueWithoutStageTypeInput | StageUpdateWithWhereUniqueWithoutStageTypeInput[]
    updateMany?: StageUpdateManyWithWhereWithoutStageTypeInput | StageUpdateManyWithWhereWithoutStageTypeInput[]
    deleteMany?: StageScalarWhereInput | StageScalarWhereInput[]
  }

  export type OpportunityCreateNestedOneWithoutStagesInput = {
    create?: XOR<OpportunityCreateWithoutStagesInput, OpportunityUncheckedCreateWithoutStagesInput>
    connectOrCreate?: OpportunityCreateOrConnectWithoutStagesInput
    connect?: OpportunityWhereUniqueInput
  }

  export type StageTypeCreateNestedOneWithoutStagesInput = {
    create?: XOR<StageTypeCreateWithoutStagesInput, StageTypeUncheckedCreateWithoutStagesInput>
    connectOrCreate?: StageTypeCreateOrConnectWithoutStagesInput
    connect?: StageTypeWhereUniqueInput
  }

  export type EnumStageStatusFieldUpdateOperationsInput = {
    set?: $Enums.StageStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OpportunityUpdateOneRequiredWithoutStagesNestedInput = {
    create?: XOR<OpportunityCreateWithoutStagesInput, OpportunityUncheckedCreateWithoutStagesInput>
    connectOrCreate?: OpportunityCreateOrConnectWithoutStagesInput
    upsert?: OpportunityUpsertWithoutStagesInput
    connect?: OpportunityWhereUniqueInput
    update?: XOR<XOR<OpportunityUpdateToOneWithWhereWithoutStagesInput, OpportunityUpdateWithoutStagesInput>, OpportunityUncheckedUpdateWithoutStagesInput>
  }

  export type StageTypeUpdateOneRequiredWithoutStagesNestedInput = {
    create?: XOR<StageTypeCreateWithoutStagesInput, StageTypeUncheckedCreateWithoutStagesInput>
    connectOrCreate?: StageTypeCreateOrConnectWithoutStagesInput
    upsert?: StageTypeUpsertWithoutStagesInput
    connect?: StageTypeWhereUniqueInput
    update?: XOR<XOR<StageTypeUpdateToOneWithWhereWithoutStagesInput, StageTypeUpdateWithoutStagesInput>, StageTypeUncheckedUpdateWithoutStagesInput>
  }

  export type TaskCreateNestedManyWithoutGoalInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EnumGoalHorizonFieldUpdateOperationsInput = {
    set?: $Enums.GoalHorizon
  }

  export type EnumGoalStatusFieldUpdateOperationsInput = {
    set?: $Enums.GoalStatus
  }

  export type TaskUpdateManyWithoutGoalNestedInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutGoalInput | TaskUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutGoalInput | TaskUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutGoalInput | TaskUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutGoalInput | TaskUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutGoalInput | TaskUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutGoalInput | TaskUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type GoalCreateNestedOneWithoutTasksInput = {
    create?: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
    connectOrCreate?: GoalCreateOrConnectWithoutTasksInput
    connect?: GoalWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type GoalUpdateOneWithoutTasksNestedInput = {
    create?: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
    connectOrCreate?: GoalCreateOrConnectWithoutTasksInput
    upsert?: GoalUpsertWithoutTasksInput
    disconnect?: GoalWhereInput | boolean
    delete?: GoalWhereInput | boolean
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutTasksInput, GoalUpdateWithoutTasksInput>, GoalUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateOneWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type GoodieLogCreateNestedManyWithoutCategoryInput = {
    create?: XOR<GoodieLogCreateWithoutCategoryInput, GoodieLogUncheckedCreateWithoutCategoryInput> | GoodieLogCreateWithoutCategoryInput[] | GoodieLogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GoodieLogCreateOrConnectWithoutCategoryInput | GoodieLogCreateOrConnectWithoutCategoryInput[]
    createMany?: GoodieLogCreateManyCategoryInputEnvelope
    connect?: GoodieLogWhereUniqueInput | GoodieLogWhereUniqueInput[]
  }

  export type GoodieLogUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<GoodieLogCreateWithoutCategoryInput, GoodieLogUncheckedCreateWithoutCategoryInput> | GoodieLogCreateWithoutCategoryInput[] | GoodieLogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GoodieLogCreateOrConnectWithoutCategoryInput | GoodieLogCreateOrConnectWithoutCategoryInput[]
    createMany?: GoodieLogCreateManyCategoryInputEnvelope
    connect?: GoodieLogWhereUniqueInput | GoodieLogWhereUniqueInput[]
  }

  export type EnumGoodieTypeFieldUpdateOperationsInput = {
    set?: $Enums.GoodieType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GoodieLogUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<GoodieLogCreateWithoutCategoryInput, GoodieLogUncheckedCreateWithoutCategoryInput> | GoodieLogCreateWithoutCategoryInput[] | GoodieLogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GoodieLogCreateOrConnectWithoutCategoryInput | GoodieLogCreateOrConnectWithoutCategoryInput[]
    upsert?: GoodieLogUpsertWithWhereUniqueWithoutCategoryInput | GoodieLogUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: GoodieLogCreateManyCategoryInputEnvelope
    set?: GoodieLogWhereUniqueInput | GoodieLogWhereUniqueInput[]
    disconnect?: GoodieLogWhereUniqueInput | GoodieLogWhereUniqueInput[]
    delete?: GoodieLogWhereUniqueInput | GoodieLogWhereUniqueInput[]
    connect?: GoodieLogWhereUniqueInput | GoodieLogWhereUniqueInput[]
    update?: GoodieLogUpdateWithWhereUniqueWithoutCategoryInput | GoodieLogUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: GoodieLogUpdateManyWithWhereWithoutCategoryInput | GoodieLogUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: GoodieLogScalarWhereInput | GoodieLogScalarWhereInput[]
  }

  export type GoodieLogUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<GoodieLogCreateWithoutCategoryInput, GoodieLogUncheckedCreateWithoutCategoryInput> | GoodieLogCreateWithoutCategoryInput[] | GoodieLogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GoodieLogCreateOrConnectWithoutCategoryInput | GoodieLogCreateOrConnectWithoutCategoryInput[]
    upsert?: GoodieLogUpsertWithWhereUniqueWithoutCategoryInput | GoodieLogUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: GoodieLogCreateManyCategoryInputEnvelope
    set?: GoodieLogWhereUniqueInput | GoodieLogWhereUniqueInput[]
    disconnect?: GoodieLogWhereUniqueInput | GoodieLogWhereUniqueInput[]
    delete?: GoodieLogWhereUniqueInput | GoodieLogWhereUniqueInput[]
    connect?: GoodieLogWhereUniqueInput | GoodieLogWhereUniqueInput[]
    update?: GoodieLogUpdateWithWhereUniqueWithoutCategoryInput | GoodieLogUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: GoodieLogUpdateManyWithWhereWithoutCategoryInput | GoodieLogUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: GoodieLogScalarWhereInput | GoodieLogScalarWhereInput[]
  }

  export type GoodieCategoryCreateNestedOneWithoutLogsInput = {
    create?: XOR<GoodieCategoryCreateWithoutLogsInput, GoodieCategoryUncheckedCreateWithoutLogsInput>
    connectOrCreate?: GoodieCategoryCreateOrConnectWithoutLogsInput
    connect?: GoodieCategoryWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GoodieCategoryUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<GoodieCategoryCreateWithoutLogsInput, GoodieCategoryUncheckedCreateWithoutLogsInput>
    connectOrCreate?: GoodieCategoryCreateOrConnectWithoutLogsInput
    upsert?: GoodieCategoryUpsertWithoutLogsInput
    connect?: GoodieCategoryWhereUniqueInput
    update?: XOR<XOR<GoodieCategoryUpdateToOneWithWhereWithoutLogsInput, GoodieCategoryUpdateWithoutLogsInput>, GoodieCategoryUncheckedUpdateWithoutLogsInput>
  }

  export type NoteCreatetagsInput = {
    set: string[]
  }

  export type NoteUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumOpportunityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | EnumOpportunityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityStatusFilter<$PrismaModel> | $Enums.OpportunityStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumOpportunityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | EnumOpportunityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityStatusWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOpportunityStatusFilter<$PrismaModel>
    _max?: NestedEnumOpportunityStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StageStatus | EnumStageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StageStatus[] | ListEnumStageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StageStatus[] | ListEnumStageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStageStatusFilter<$PrismaModel> | $Enums.StageStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StageStatus | EnumStageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StageStatus[] | ListEnumStageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StageStatus[] | ListEnumStageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStageStatusWithAggregatesFilter<$PrismaModel> | $Enums.StageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStageStatusFilter<$PrismaModel>
    _max?: NestedEnumStageStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGoalHorizonFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalHorizon | EnumGoalHorizonFieldRefInput<$PrismaModel>
    in?: $Enums.GoalHorizon[] | ListEnumGoalHorizonFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalHorizon[] | ListEnumGoalHorizonFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalHorizonFilter<$PrismaModel> | $Enums.GoalHorizon
  }

  export type NestedEnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type NestedEnumGoalHorizonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalHorizon | EnumGoalHorizonFieldRefInput<$PrismaModel>
    in?: $Enums.GoalHorizon[] | ListEnumGoalHorizonFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalHorizon[] | ListEnumGoalHorizonFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalHorizonWithAggregatesFilter<$PrismaModel> | $Enums.GoalHorizon
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalHorizonFilter<$PrismaModel>
    _max?: NestedEnumGoalHorizonFilter<$PrismaModel>
  }

  export type NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedEnumGoodieTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GoodieType | EnumGoodieTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoodieType[] | ListEnumGoodieTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoodieType[] | ListEnumGoodieTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoodieTypeFilter<$PrismaModel> | $Enums.GoodieType
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGoodieTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoodieType | EnumGoodieTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoodieType[] | ListEnumGoodieTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoodieType[] | ListEnumGoodieTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoodieTypeWithAggregatesFilter<$PrismaModel> | $Enums.GoodieType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoodieTypeFilter<$PrismaModel>
    _max?: NestedEnumGoodieTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StageCreateWithoutOpportunityInput = {
    id?: string
    status?: $Enums.StageStatus
    scheduledAt?: Date | string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stageType: StageTypeCreateNestedOneWithoutStagesInput
  }

  export type StageUncheckedCreateWithoutOpportunityInput = {
    id?: string
    stageTypeId: string
    status?: $Enums.StageStatus
    scheduledAt?: Date | string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StageCreateOrConnectWithoutOpportunityInput = {
    where: StageWhereUniqueInput
    create: XOR<StageCreateWithoutOpportunityInput, StageUncheckedCreateWithoutOpportunityInput>
  }

  export type StageCreateManyOpportunityInputEnvelope = {
    data: StageCreateManyOpportunityInput | StageCreateManyOpportunityInput[]
    skipDuplicates?: boolean
  }

  export type StageUpsertWithWhereUniqueWithoutOpportunityInput = {
    where: StageWhereUniqueInput
    update: XOR<StageUpdateWithoutOpportunityInput, StageUncheckedUpdateWithoutOpportunityInput>
    create: XOR<StageCreateWithoutOpportunityInput, StageUncheckedCreateWithoutOpportunityInput>
  }

  export type StageUpdateWithWhereUniqueWithoutOpportunityInput = {
    where: StageWhereUniqueInput
    data: XOR<StageUpdateWithoutOpportunityInput, StageUncheckedUpdateWithoutOpportunityInput>
  }

  export type StageUpdateManyWithWhereWithoutOpportunityInput = {
    where: StageScalarWhereInput
    data: XOR<StageUpdateManyMutationInput, StageUncheckedUpdateManyWithoutOpportunityInput>
  }

  export type StageScalarWhereInput = {
    AND?: StageScalarWhereInput | StageScalarWhereInput[]
    OR?: StageScalarWhereInput[]
    NOT?: StageScalarWhereInput | StageScalarWhereInput[]
    id?: StringFilter<"Stage"> | string
    opportunityId?: StringFilter<"Stage"> | string
    stageTypeId?: StringFilter<"Stage"> | string
    status?: EnumStageStatusFilter<"Stage"> | $Enums.StageStatus
    scheduledAt?: DateTimeNullableFilter<"Stage"> | Date | string | null
    notes?: StringNullableFilter<"Stage"> | string | null
    order?: IntFilter<"Stage"> | number
    createdAt?: DateTimeFilter<"Stage"> | Date | string
    updatedAt?: DateTimeFilter<"Stage"> | Date | string
  }

  export type StageCreateWithoutStageTypeInput = {
    id?: string
    status?: $Enums.StageStatus
    scheduledAt?: Date | string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    opportunity: OpportunityCreateNestedOneWithoutStagesInput
  }

  export type StageUncheckedCreateWithoutStageTypeInput = {
    id?: string
    opportunityId: string
    status?: $Enums.StageStatus
    scheduledAt?: Date | string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StageCreateOrConnectWithoutStageTypeInput = {
    where: StageWhereUniqueInput
    create: XOR<StageCreateWithoutStageTypeInput, StageUncheckedCreateWithoutStageTypeInput>
  }

  export type StageCreateManyStageTypeInputEnvelope = {
    data: StageCreateManyStageTypeInput | StageCreateManyStageTypeInput[]
    skipDuplicates?: boolean
  }

  export type StageUpsertWithWhereUniqueWithoutStageTypeInput = {
    where: StageWhereUniqueInput
    update: XOR<StageUpdateWithoutStageTypeInput, StageUncheckedUpdateWithoutStageTypeInput>
    create: XOR<StageCreateWithoutStageTypeInput, StageUncheckedCreateWithoutStageTypeInput>
  }

  export type StageUpdateWithWhereUniqueWithoutStageTypeInput = {
    where: StageWhereUniqueInput
    data: XOR<StageUpdateWithoutStageTypeInput, StageUncheckedUpdateWithoutStageTypeInput>
  }

  export type StageUpdateManyWithWhereWithoutStageTypeInput = {
    where: StageScalarWhereInput
    data: XOR<StageUpdateManyMutationInput, StageUncheckedUpdateManyWithoutStageTypeInput>
  }

  export type OpportunityCreateWithoutStagesInput = {
    id?: string
    company: string
    role: string
    link?: string | null
    priority?: number
    status?: $Enums.OpportunityStatus
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpportunityUncheckedCreateWithoutStagesInput = {
    id?: string
    company: string
    role: string
    link?: string | null
    priority?: number
    status?: $Enums.OpportunityStatus
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpportunityCreateOrConnectWithoutStagesInput = {
    where: OpportunityWhereUniqueInput
    create: XOR<OpportunityCreateWithoutStagesInput, OpportunityUncheckedCreateWithoutStagesInput>
  }

  export type StageTypeCreateWithoutStagesInput = {
    id?: string
    name: string
    isDefault?: boolean
    order?: number
    createdAt?: Date | string
  }

  export type StageTypeUncheckedCreateWithoutStagesInput = {
    id?: string
    name: string
    isDefault?: boolean
    order?: number
    createdAt?: Date | string
  }

  export type StageTypeCreateOrConnectWithoutStagesInput = {
    where: StageTypeWhereUniqueInput
    create: XOR<StageTypeCreateWithoutStagesInput, StageTypeUncheckedCreateWithoutStagesInput>
  }

  export type OpportunityUpsertWithoutStagesInput = {
    update: XOR<OpportunityUpdateWithoutStagesInput, OpportunityUncheckedUpdateWithoutStagesInput>
    create: XOR<OpportunityCreateWithoutStagesInput, OpportunityUncheckedCreateWithoutStagesInput>
    where?: OpportunityWhereInput
  }

  export type OpportunityUpdateToOneWithWhereWithoutStagesInput = {
    where?: OpportunityWhereInput
    data: XOR<OpportunityUpdateWithoutStagesInput, OpportunityUncheckedUpdateWithoutStagesInput>
  }

  export type OpportunityUpdateWithoutStagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityUncheckedUpdateWithoutStagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageTypeUpsertWithoutStagesInput = {
    update: XOR<StageTypeUpdateWithoutStagesInput, StageTypeUncheckedUpdateWithoutStagesInput>
    create: XOR<StageTypeCreateWithoutStagesInput, StageTypeUncheckedCreateWithoutStagesInput>
    where?: StageTypeWhereInput
  }

  export type StageTypeUpdateToOneWithWhereWithoutStagesInput = {
    where?: StageTypeWhereInput
    data: XOR<StageTypeUpdateWithoutStagesInput, StageTypeUncheckedUpdateWithoutStagesInput>
  }

  export type StageTypeUpdateWithoutStagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageTypeUncheckedUpdateWithoutStagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateWithoutGoalInput = {
    id?: string
    title: string
    notes?: string | null
    done?: boolean
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project?: ProjectCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutGoalInput = {
    id?: string
    title: string
    notes?: string | null
    done?: boolean
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    order?: number
    projectId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutGoalInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput>
  }

  export type TaskCreateManyGoalInputEnvelope = {
    data: TaskCreateManyGoalInput | TaskCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutGoalInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutGoalInput, TaskUncheckedUpdateWithoutGoalInput>
    create: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutGoalInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutGoalInput, TaskUncheckedUpdateWithoutGoalInput>
  }

  export type TaskUpdateManyWithWhereWithoutGoalInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutGoalInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    notes?: StringNullableFilter<"Task"> | string | null
    done?: BoolFilter<"Task"> | boolean
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    order?: IntFilter<"Task"> | number
    goalId?: StringNullableFilter<"Task"> | string | null
    projectId?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type TaskCreateWithoutProjectInput = {
    id?: string
    title: string
    notes?: string | null
    done?: boolean
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    goal?: GoalCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutProjectInput = {
    id?: string
    title: string
    notes?: string | null
    done?: boolean
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    order?: number
    goalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskCreateManyProjectInputEnvelope = {
    data: TaskCreateManyProjectInput | TaskCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type GoalCreateWithoutTasksInput = {
    id?: string
    title: string
    description?: string | null
    horizon?: $Enums.GoalHorizon
    targetDate?: Date | string | null
    status?: $Enums.GoalStatus
    completedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUncheckedCreateWithoutTasksInput = {
    id?: string
    title: string
    description?: string | null
    horizon?: $Enums.GoalHorizon
    targetDate?: Date | string | null
    status?: $Enums.GoalStatus
    completedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalCreateOrConnectWithoutTasksInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
  }

  export type ProjectCreateWithoutTasksInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type GoalUpsertWithoutTasksInput = {
    update: XOR<GoalUpdateWithoutTasksInput, GoalUncheckedUpdateWithoutTasksInput>
    create: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutTasksInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutTasksInput, GoalUncheckedUpdateWithoutTasksInput>
  }

  export type GoalUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    horizon?: EnumGoalHorizonFieldUpdateOperationsInput | $Enums.GoalHorizon
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    horizon?: EnumGoalHorizonFieldUpdateOperationsInput | $Enums.GoalHorizon
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodieLogCreateWithoutCategoryInput = {
    id?: string
    date: Date | string
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoodieLogUncheckedCreateWithoutCategoryInput = {
    id?: string
    date: Date | string
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoodieLogCreateOrConnectWithoutCategoryInput = {
    where: GoodieLogWhereUniqueInput
    create: XOR<GoodieLogCreateWithoutCategoryInput, GoodieLogUncheckedCreateWithoutCategoryInput>
  }

  export type GoodieLogCreateManyCategoryInputEnvelope = {
    data: GoodieLogCreateManyCategoryInput | GoodieLogCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type GoodieLogUpsertWithWhereUniqueWithoutCategoryInput = {
    where: GoodieLogWhereUniqueInput
    update: XOR<GoodieLogUpdateWithoutCategoryInput, GoodieLogUncheckedUpdateWithoutCategoryInput>
    create: XOR<GoodieLogCreateWithoutCategoryInput, GoodieLogUncheckedCreateWithoutCategoryInput>
  }

  export type GoodieLogUpdateWithWhereUniqueWithoutCategoryInput = {
    where: GoodieLogWhereUniqueInput
    data: XOR<GoodieLogUpdateWithoutCategoryInput, GoodieLogUncheckedUpdateWithoutCategoryInput>
  }

  export type GoodieLogUpdateManyWithWhereWithoutCategoryInput = {
    where: GoodieLogScalarWhereInput
    data: XOR<GoodieLogUpdateManyMutationInput, GoodieLogUncheckedUpdateManyWithoutCategoryInput>
  }

  export type GoodieLogScalarWhereInput = {
    AND?: GoodieLogScalarWhereInput | GoodieLogScalarWhereInput[]
    OR?: GoodieLogScalarWhereInput[]
    NOT?: GoodieLogScalarWhereInput | GoodieLogScalarWhereInput[]
    id?: StringFilter<"GoodieLog"> | string
    categoryId?: StringFilter<"GoodieLog"> | string
    date?: DateTimeFilter<"GoodieLog"> | Date | string
    value?: FloatFilter<"GoodieLog"> | number
    createdAt?: DateTimeFilter<"GoodieLog"> | Date | string
    updatedAt?: DateTimeFilter<"GoodieLog"> | Date | string
  }

  export type GoodieCategoryCreateWithoutLogsInput = {
    id?: string
    name: string
    type?: $Enums.GoodieType
    target?: number | null
    unit?: string | null
    color?: string | null
    icon?: string | null
    active?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoodieCategoryUncheckedCreateWithoutLogsInput = {
    id?: string
    name: string
    type?: $Enums.GoodieType
    target?: number | null
    unit?: string | null
    color?: string | null
    icon?: string | null
    active?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoodieCategoryCreateOrConnectWithoutLogsInput = {
    where: GoodieCategoryWhereUniqueInput
    create: XOR<GoodieCategoryCreateWithoutLogsInput, GoodieCategoryUncheckedCreateWithoutLogsInput>
  }

  export type GoodieCategoryUpsertWithoutLogsInput = {
    update: XOR<GoodieCategoryUpdateWithoutLogsInput, GoodieCategoryUncheckedUpdateWithoutLogsInput>
    create: XOR<GoodieCategoryCreateWithoutLogsInput, GoodieCategoryUncheckedCreateWithoutLogsInput>
    where?: GoodieCategoryWhereInput
  }

  export type GoodieCategoryUpdateToOneWithWhereWithoutLogsInput = {
    where?: GoodieCategoryWhereInput
    data: XOR<GoodieCategoryUpdateWithoutLogsInput, GoodieCategoryUncheckedUpdateWithoutLogsInput>
  }

  export type GoodieCategoryUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumGoodieTypeFieldUpdateOperationsInput | $Enums.GoodieType
    target?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodieCategoryUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumGoodieTypeFieldUpdateOperationsInput | $Enums.GoodieType
    target?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageCreateManyOpportunityInput = {
    id?: string
    stageTypeId: string
    status?: $Enums.StageStatus
    scheduledAt?: Date | string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StageUpdateWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStageStatusFieldUpdateOperationsInput | $Enums.StageStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stageType?: StageTypeUpdateOneRequiredWithoutStagesNestedInput
  }

  export type StageUncheckedUpdateWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageTypeId?: StringFieldUpdateOperationsInput | string
    status?: EnumStageStatusFieldUpdateOperationsInput | $Enums.StageStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageUncheckedUpdateManyWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageTypeId?: StringFieldUpdateOperationsInput | string
    status?: EnumStageStatusFieldUpdateOperationsInput | $Enums.StageStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageCreateManyStageTypeInput = {
    id?: string
    opportunityId: string
    status?: $Enums.StageStatus
    scheduledAt?: Date | string | null
    notes?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StageUpdateWithoutStageTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStageStatusFieldUpdateOperationsInput | $Enums.StageStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunity?: OpportunityUpdateOneRequiredWithoutStagesNestedInput
  }

  export type StageUncheckedUpdateWithoutStageTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    status?: EnumStageStatusFieldUpdateOperationsInput | $Enums.StageStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageUncheckedUpdateManyWithoutStageTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    status?: EnumStageStatusFieldUpdateOperationsInput | $Enums.StageStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyGoalInput = {
    id?: string
    title: string
    notes?: string | null
    done?: boolean
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    order?: number
    projectId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    done?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    done?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    done?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyProjectInput = {
    id?: string
    title: string
    notes?: string | null
    done?: boolean
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    order?: number
    goalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    done?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    done?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    done?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodieLogCreateManyCategoryInput = {
    id?: string
    date: Date | string
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoodieLogUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodieLogUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodieLogUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export const dmmf: runtime.BaseDMMF
}