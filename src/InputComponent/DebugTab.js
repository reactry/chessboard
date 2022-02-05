import DebugTable from './DebugTable';
import ShowToggle from './ShowToggle';



export default function DebugTab ({
	showDebugTable, setShowDebugTable,
	selectSquare, widthIndex, heightIndex, resolutionIndex,
	paddingIndex, borderIndex,
	backgroundColorIndex, primaryColorIndex, secondaryColorIndex
}) {


	let debugTableToggleProps = {
		show: showDebugTable,
		setShow: setShowDebugTable,
		title: "Debug Info"
	};

	let debugTableProps = {
		selectSquare,
		widthIndex, heightIndex, resolutionIndex,
		paddingIndex, borderIndex,
		backgroundColorIndex, primaryColorIndex, secondaryColorIndex
	};

	return (
		<div className="DebugTab px-4">
			<ShowToggle {...debugTableToggleProps} />
			{showDebugTable && <DebugTable {...debugTableProps} />}
		</div>
	);
}
