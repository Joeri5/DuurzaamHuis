import {Route, Routes} from "react-router-dom";
import DashboardLayout from "./pages/layouts/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
	return (
		<Routes>
			<Route path="/auth/*" element={<AuthRoutes />} />
			<Route path="/*" element={<DashboardRoutes />} />
		</Routes>
	)
}

function AuthRoutes() {
	return (
		<Routes>
			<Route path="/login" element={<>{/* TODO */}</>} />
			<Route path="/register" element={<>{/* TODO */}</>} />
			<Route path="/*" element={<>{/* TODO: Fallback 404 */}</>} />
		</Routes>
	)
}

function DashboardRoutes() {
	return (
		<DashboardLayout>
			<Routes>
				<Route path="/" element={<DashboardPage/>} />
				<Route path="/weather" element={<>{/* TODO */}</>} />
				<Route path="/power" element={<>{/* TODO */}</>} />
				<Route path="/calculator" element={<>{/* TODO */}</>} />
				<Route path="/lights" element={<>{/* TODO */}</>} />
				<Route path="/*" element={<>{/* TODO: Fallback 404 */}</>} />
			</Routes>
		</DashboardLayout>
	)
}