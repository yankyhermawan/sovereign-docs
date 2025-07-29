import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import programs from './common/program'

function App() {
	const renderRoutes = () => {
		return programs.map(prog => (
			<Route Component={prog.components} path={prog.url} />
		))
	}
	return (
		<Layout>
			<Router>
				<Routes>
					{renderRoutes()}
				</Routes>
			</Router>
		</Layout>
	)
}

export default App
