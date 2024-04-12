import { useCallback, useEffect, useState } from "react"
import StatementData from "../types"
import Api from "../utils/ApiCalls"

const useIncomeAndBalanceApi = () => {
    const [incomeStatement, setIncomeStatement] = useState<any>([])
    const [balanceSheet, setBalanceSheet] = useState<any>([])
    const [isError, setIsError] = useState(false)
    const app = useCallback(async (equity?:string) => {
        const incomeStatementData: StatementData = await Api.INCOME_STATEMENT_API(equity)
        const balanceSheetData: StatementData = await Api.BALANCE_SHEET_API(equity)
        if (incomeStatementData?.error) {
            setIsError(true)
            setIncomeStatement({})
        } else {
            setIncomeStatement(incomeStatementData)
        }
        if (balanceSheetData?.error) {
            setIsError(true)
            setBalanceSheet({})
        } else {
            setBalanceSheet(balanceSheetData)
        }
    }, [])

    useEffect(() => {
        app()
    }, [])

    return { isError, incomeStatement, balanceSheet, app }
}


export default useIncomeAndBalanceApi