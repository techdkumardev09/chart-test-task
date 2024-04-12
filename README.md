# chart-test-task

This project utilizes React with Vite as the build tool to create a web application for displaying historical quarterly financial data using the Alpha Vantage API. The data is plotted on a chart using Chart.js library and TypeScript is used for type-checking.

## Features

- **Fetch Historical Financial Data**: Utilizes the Alpha Vantage API to fetch historical quarterly financial data for a specified stock symbol.
- **Plot Data Points on Chart**: Displays quarterly net income, total revenue, and total shareholder equity on a chart for the selected stock symbol.
- **Interactive UI**: Provides an input field for users to search for different stock symbols or companies.
- **Error Handling**: Implements error handling for failed API requests to ensure smooth user experience.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Basic understanding of React and TypeScript.

### Installation

1. Clone this repository: `git clone https://github.com/techdkumardev09/chart-test-task.git`
2. Navigate to the project directory: `cd chart-test-task`
3. Install dependencies: `npm install`

### Usage

1. Start the development server: `npm run dev`
2. Open your browser and navigate to `http://localhost:5173` to view the application.
3. Data fetch from Alpha Vantage API for Income Statement and Balance Sheet and show in chart using chart.js.
4. In Income Statement there are two data set one for Net Income and second one for Total Revenue initially you only able to see Net Income data after clicking Total Revenue chart show Total Revenue data.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs, feature requests, or suggestions.

## License

This project is licensed under the [MIT License](LICENSE).
