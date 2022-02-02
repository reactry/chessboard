import './App.css';

import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';


function App () {
	let {...inputProps} = {};
	let {...outputProps} = {};

	return (
		<div className="App">
			<main className="flex min-h-screen">
				<div className="bg-slate-200 p-4 w-1/3">
					<OutputComponent {...outputProps} />
				</div>
				<div className="bg-purple-200 p-4 grow border-l-2 border-purple-800">
					<InputComponent {...inputProps} />
				</div>
			</main>
		</div>
	);
}

export default App;
