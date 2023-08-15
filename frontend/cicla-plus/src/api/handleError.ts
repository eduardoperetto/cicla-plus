import { isAxiosError } from "axios";
import Result from "../types/Result";
import { z } from "zod";

export function handleError(error: unknown) {
  if (isAxiosError(error) && error.response) {
    if (typeof error.response.data === "string" && error.response.data !== "") {
      return Result.err({ message: error.response.data });
    }
    return Result.err({ message: error.response.statusText });
  }
  if (error instanceof z.ZodError) {
    console.log(error);
    return Result.err({ message: "ZOD_ERROR" });
  }
  return Result.err({ message: "UNKNOWN_ERROR" });
}
