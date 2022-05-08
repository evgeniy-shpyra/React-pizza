import './scss/style.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';


const App = (props) => {



	return (
		<div className="page">
			<div className="wrapper">
				<Header />
				<Routes>
					<Route extend path='/' element={<Home />} />
					<Route extend path='/cart' element={<Cart />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
