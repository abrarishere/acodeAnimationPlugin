
# Animation Plugin for Acode

## Overview

The **Animation Plugin** for Acode enhances your development environment by allowing you to create, run, and style CSS keyframe animations directly within the editor. It provides an intuitive interface for working with animations, including options to preview, adjust styles, and copy code snippets.

## Features

- **Keyframe Input**: Write and preview CSS keyframes.
- **Run Animations**: Execute animations with a single click.
- **Style Application**: Apply custom styles to the animation container.
- **Code Display**: View and copy generated CSS code.
- **Toggle Panels**: Show/hide animation settings and code snippets.

## Installation

1. Clone or download the plugin repository.
2. Place the plugin files in your Acode plugins directory.
3. Restart Acode or reload plugins to see the new plugin.

## Usage

1. **Open the Plugin**: Access the plugin from the sidebar in Acode by clicking the "Animation" icon.
2. **Write Keyframes**: Enter your CSS keyframes in the provided input field.
3. **Run Animation**: Click "Run" to apply the animation to the output div.
4. **Apply Styles**: Adjust and apply styles using the style input field and "Apply styles" button.
5. **Toggle Panels**: Use "Toggle animations panel" to show/hide animation settings and "Show/Hide Code" to view or hide the generated CSS code.
6. **Copy Code**: Click on the code blocks to copy the CSS code to your clipboard.

## Example

### Keyframes Input
```css
0% { transform: translateY(0); }
50% { transform: translateY(100px); }
100% { transform: translateY(0); }
```

### Animation Settings
- **Animation Name**: Define a name for the animation.
- **Duration**: Set the duration (e.g., `5s`).
- **Delay**: Define a delay before the animation starts (e.g., `2s`).
- **Iteration Count**: Set how many times the animation should repeat (e.g., `infinite`).
- **Direction**: Specify the direction (e.g., `alternate`).
- **Fill Mode**: Define the fill mode (e.g., `forwards`).

### Generated CSS Code
The plugin generates and displays the CSS code for the keyframes and animation based on your inputs, which you can copy to your clipboard.

## Code Details

### Initialization
The plugin is initialized using `acode.setPluginInit`, where it sets up the plugin interface, including adding the icon, creating the animation container, and attaching event listeners.

### Event Listeners
- **Run Button**: Creates and applies the CSS keyframes animation.
- **Apply Styles Button**: Applies custom styles to the animation container.
- **Toggle Buttons**: Show or hide the settings panel and code display.

### Clipboard Functionality
Clicking on the code blocks will copy the CSS code to your clipboard and display a toast notification confirming the action.

## CSS Classes
- `.animation-container-108373737`: Main container for the plugin.
- `.output-192772625`: Container for the animation output.
- `.inner-output-283652525`: Inner div where the animation runs.
- `.inner-output-adjust-283652525`: Container for the styles input section.
- `.paragraph-1928374`: Label and paragraph styles.
- `.input-code-0987`: Input fields for keyframes and styles.
- `.button-3928`: Button styles.
- `.buttons-1928374`: Container for buttons.
- `.animation-info-1928374`: Panel for animation settings.
- `.code-display-3356`: Container for displaying generated code.
- `.code-block-1928374`: Styles for code blocks.

## Feedback

We welcome feedback and contributions! If you encounter any issues or have suggestions for improvements, please open an issue on the repository or contact us directly.
