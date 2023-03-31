import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shipping from "./pages/Shipping";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";
import PrivateRouter from "./PrivateRouter";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/product/:id' element={<SingleProduct />} />
				<Route path='/cart/:id?' element={<Cart />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/product' element={<Shop />} />
				<Route path='/contact' element={<Contact />} />
				<Route element={<PrivateRouter />}>
					<Route path='/shipping' element={<Shipping />} />
				</Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
