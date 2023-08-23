import Result from "../types/Result";
import { z } from "zod";
import { api } from "./apiConfig";
import { handleError } from "./handleError";
import { transactionSchema } from "../types/Transaction";

const getTransactionsSchema = z.array(transactionSchema);

export type GetTransactionsResponse = z.infer<typeof getTransactionsSchema>;

export async function getTransactions(): Promise<
  Result.Result<GetTransactionsResponse, { message: string }>
> {
  try {
    const response = await api.get("/transaction");

    const returnValue = getTransactionsSchema.parse(response.data);
    return Result.ok(returnValue);
  } catch (error) {
    return handleError(error);
  }
}
