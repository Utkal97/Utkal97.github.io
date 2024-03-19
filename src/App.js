import './App.css';
import { Hero } from './Hero/component';
import { Navbar } from './Navbar/component';
import { Experience } from './Experience/component';
import { Projects } from './Projects/component';
import { Contact } from './Contact/component';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<Experience />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
