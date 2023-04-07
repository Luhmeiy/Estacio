import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import LivroDados from "./LivroDados";
import LivroLista from "./LivroLista";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route path="/" element={<LivroLista />} />
					<Route path="/dados" element={<LivroDados />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
