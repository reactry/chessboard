import DebugTable from './DebugTable';



export default function DebugTab ({
	selectSquare, widthIndex, heightIndex, resolutionIndex,
	paddingIndex, borderIndex,
	backgroundColorIndex, primaryColorIndex, secondaryColorIndex
}) {

	let debugTableProps = {
		selectSquare,
		widthIndex, heightIndex, resolutionIndex,
		paddingIndex, borderIndex,
		backgroundColorIndex, primaryColorIndex, secondaryColorIndex
	};

	return (
		<div className="DebugTab px-4 py-4">
			<DebugTable {...debugTableProps} />
		</div>
	);
}
