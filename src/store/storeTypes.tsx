/* import { StateType, ActionType } from "typesafe-actions";

declare module "MyTypes" {
  export type Store = StateType<typeof import("./store")>;

  export type AuthAction = ActionType<typeof import("./actions/authActions")>;

  export type ProductAction = ActionType<
    typeof import("./actions/productActions")
  >;

  export type RootState = StateType<
    ReturnType<typeof import("./reducers/rootReducer").default>
  >;
}

declare module "typesafe-actions" {
  interface Types {
    AuthAction: ActionType<typeof import("./actions/authActions")>;
    ProductAction: ActionType<typeof import("./actions/productActions")>;
  }
}
 */
