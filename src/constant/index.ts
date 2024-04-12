// export const INCOME_STATEMENT = `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=demo`
// export const BALANCE_SHEET = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=IBM&apikey=demo`


export const INCOME_STATEMENT = (symbol:string="IBM") => `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${symbol}&apikey=demo`
export const BALANCE_SHEET = (symbol:string="IBM") => `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${symbol}&apikey=demo`