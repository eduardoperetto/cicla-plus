namespace Result {
  export type Ok<T> = { readonly ok: true; readonly value: T };
  export type Err<E> = { readonly ok: false; readonly error: E };
  export type Result<T, E> = Ok<T> | Err<E>;

  export function ok<T>(t: T): Ok<T> {
    return { value: t, ok: true };
  }

  export function err<E>(e: E): Err<E> {
    return { error: e, ok: false };
  }
}

export default Result;
