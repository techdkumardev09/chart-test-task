import { BALANCE_SHEET, INCOME_STATEMENT } from "../constant";
import StatementData from "../types";
import Api from "./Api";

async function INCOME_STATEMENT_API(symbol?: string): Promise<StatementData> {
    const data = await Api.get<StatementData>(INCOME_STATEMENT(symbol));
    console.log(data);
    return data
}

async function BALANCE_SHEET_API(symbol?: string): Promise<StatementData> {
    const data = await Api.get<StatementData>(BALANCE_SHEET(symbol));
    return data
}

export default { INCOME_STATEMENT_API, BALANCE_SHEET_API }