import {BrowserRouter, Route, Routes} from "react-router"
import PageComponents from "./Pages/page-components"
import LayoutMain from "./Pages/layout-main"
import PageHome from "./Pages/page-home"
import PhotoDetails from "./Pages/page-photo-details"

export default function App() {
	return(
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutMain/>}>
					<Route index element={<PageHome/>}/>
					<Route path="/photos/:id" element={<PhotoDetails/>}/>
					<Route path="/components" element={<PageComponents/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
