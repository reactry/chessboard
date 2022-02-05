import DebugTable from './DebugTable';
import ShowToggle from './ShowToggle';



export default function DebugTab ({
	showDebugTable, setShowDebugTable,
	selectSquare, borderIndex,
	widthIndex, heightIndex, resolutionIndex,
	backgroundColorIndex, primaryColorIndex, secondaryColorIndex
}) {


	let debugTableToggleProps = {
		show: showDebugTable,
		setShow: setShowDebugTable,
		title: "Debug Info"
	};

	let debugTableProps = {
		selectSquare,
		borderIndex,
		widthIndex,
		heightIndex,
		resolutionIndex,
		backgroundColorIndex,
		primaryColorIndex,
		secondaryColorIndex
	};

	return (
		<div className="DebugTab">
			<ShowToggle {...debugTableToggleProps} />
			{showDebugTable && <DebugTable {...debugTableProps} />}
		</div>
	);
}
