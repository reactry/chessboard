import ColorPicker from './ColorPicker';



export default function ColorTab ({
	colors, backgroundColorIndex, setBackgroundColorIndex,
	primaryColorIndex, setPrimaryColorIndex,
	secondaryColorIndex, setSecondaryColorIndex
}) {
	return (
		<div className="ColorTab">
			<ColorPicker title="Background color"
					colors={colors}
					index={backgroundColorIndex}
					setIndex={setBackgroundColorIndex} />
			<ColorPicker title="Primary color"
				colors={colors}
				index={primaryColorIndex}
				setIndex={setPrimaryColorIndex} />
			<ColorPicker title="Secondary color"
				colors={colors}
				index={secondaryColorIndex}
				setIndex={setSecondaryColorIndex} />
		</div>
	);
}
