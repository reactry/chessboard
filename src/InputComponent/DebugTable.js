


export default function DebugTable (props) {
	let propsaArray = Object.keys(props);
	let propItems = propsaArray.map((v, i) => {
		return (
			<div key={i} className="bg-slate-300 px-2 py-3 flex mb-2 w-72">
				<div className="grow">
					<code className="bg-slate-100 px-2 py-1">{v}</code>
				</div>
				<div className="w-16">
					<code className="bg-slate-100 px-2 py-1 font-bold">{String(props[v])}</code>
				</div>
			</div>
		);
	});

	return (
		<div className="DebugTable">
			<div className="text-sm">
				{propItems}
			</div>
		</div>
	);
}
