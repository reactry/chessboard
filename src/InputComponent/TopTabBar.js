


export default function TopTabBar ({
	tabs, currentTabIndex, setCurrentTabIndex
}) {

	let tabItems = tabs.map((v, i) => {
		let tabClass = "px-6 py-3 text-sm font-bold duration-300 cursor-pointer";
		tabClass += (i === currentTabIndex) ? " bg-purple-200" : " hover:bg-purple-100";
		return (
			<div className={tabClass} onClick={() => setCurrentTabIndex(i)}>{v}</div>
		);
	});

	return (
		<div className="TopTabBar">
			<div className="flex bg-slate-400">
				{tabItems}
			</div>
		</div>
	);
}
