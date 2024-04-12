import { useMemo, useState } from "react";
import moment from "moment";
import { Chart } from "./components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useIncomeAndBalanceApi } from "./hooks";

function App() {
  const [equity, setEquity] = useState('IBM')
  const { isError, incomeStatement, balanceSheet, app } = useIncomeAndBalanceApi();

  const dataSets = useMemo(() => [
    {
      label: 'Net Income',
      data: incomeStatement?.quarterlyReports?.map((item: any) => item.netIncome),
      backgroundColor: 'rgba(25, 118, 210,0.7)',
      hidden: false
    },
    {
      label: 'Total Revenue',
      data: incomeStatement?.quarterlyReports?.map((item: any) => item.totalRevenue),
      backgroundColor: 'rgba(76, 175, 80,0.7)',
      hidden: true
    }
  ], [incomeStatement])

  const dataSets1 = useMemo(() => [
    {
      label: 'Total Shareholder Equity',
      data: balanceSheet?.quarterlyReports?.map((item: any) => item.totalShareholderEquity),
      backgroundColor: 'rgba(103, 58, 183,0.7)',
    }
  ], [balanceSheet])

  const incomeStatementLabels = useMemo(() => incomeStatement?.quarterlyReports?.map((item: any) => moment(item.fiscalDateEnding).format('YYYY-MM')), [incomeStatement])
  const balanceSheetLabels = useMemo(() => balanceSheet?.quarterlyReports?.map((item: any) => moment(item.fiscalDateEnding).format('YYYY-MM')), [balanceSheet])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      padding: 20
    }}>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <div
          style={{
            background: '#403f3f',
            width: 'fit-content',
            float: 'right',
            borderRadius: '20px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <input type="search" placeholder="Equity" onChange={(e) => setEquity(e.target.value)} value={equity}
            style={{
              border: 'none',
              paddingLeft: '20px',
              borderRadius: '20px',
              outline: 'none',
              background: 'transparent',
            }}
          />
          <button type="button" onClick={() => app(equity)}
            style={{
              borderRadius: '20px',
            }}
          >Search</button>
        </div>
      </div>
      <Chart isError={isError} title="Income Statement" labels={incomeStatementLabels} dataSets={dataSets} />
      <Chart isError={isError} title="Balance Sheet" labels={balanceSheetLabels} dataSets={dataSets1} />
      <ToastContainer />
    </div >
  )
}

export default App
