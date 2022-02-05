


export default function Links ({
	links
}) {

	let linkItems = links.map((v, i) => {
		return <a key={i} target="_blank" rel="noreferrer" href={v.url} className="border-2 border-blue-500 bg-slate-300 px-4 py-2 hover:bg-slate-100 focus:bg-slate-100">{v.title}</a>;
	});

	return (
		<div className="px-4 py-4 text-blue-700 text-sm font-bold space-x-2">
			{linkItems}
		</div>
	);
}
