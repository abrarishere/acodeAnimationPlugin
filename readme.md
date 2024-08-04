## Animation Plugin for Acode

### Description
This plugin allows users to create, run, and apply CSS keyframe animations within the Acode editor. It provides a simple interface for writing keyframes, running animations, and applying styles to the animation container.

### Features
- Add and display an icon for the animation plugin.
- Input field for writing CSS keyframes.
- Run button to execute the animation.
- Style application for the animation container.
- Sidebar integration for easy access.

### Installation
1. Clone or download the repository containing this plugin.
2. Place the plugin files in the appropriate directory within your Acode plugins folder.
3. Use Inbuilt extension manager to install the plugin.

### Usage
1. Open Acode editor.
2. Access the sidebar and find the "Animation" icon.
3. Click on the "Animation" icon to open the plugin interface.
4. Write your CSS keyframes in the input field.
5. Click "Run" to execute the animation on the output div.
6. Adjust the styles for the output div using the provided style input field and click "Apply styles" to apply the new styles.

### File Structure
- `plugin.json`: Contains plugin metadata.
- `style.css`: Defines the styles used by the plugin.
- `main.js`: Main JavaScript file for the plugin.

### Example Keyframes
```css
0% {
  transform: translateY(0);
}
50% {
  transform: translateY(100px);
}
100% {
  transform: translateY(0);
}
```

### Code Overview
The main functionality of the plugin is implemented in the `AnimationPlugin` class. The `init` method sets up the plugin interface and event listeners, while the `destroy` method handles cleanup when the plugin is removed.

### Plugin Initialization
The plugin is initialized by calling `acode.setPluginInit` with the plugin's ID and a function that sets the base URL and initializes the `AnimationPlugin` instance. The plugin is unmounted using `acode.setPluginUnmount`.

### CSS Classes
- `.animation-container-108373737`: Main container for the plugin.
- `.output-192772625`: Container for the animation output.
- `.inner-output-283652525`: Inner div where the animation runs.
- `.inner-output-adjust-283652525`: Container for the styles input section.
- `.paragraph-1928374`: Paragraph for the styles section.
- `.input-code-0987`: Input field for keyframes and styles.
- `.button-3928`: Button elements.
- `.buttons-1928374`: Container for buttons.

### Event Listeners
- `runButton`: Runs the animation based on the input keyframes.
- `applyStylesButton`: Applies the entered styles to the output div.

### Contribution
This project is open to contributions and suggestions. Feel free to fork the repository, make changes, and submit a pull request with your updates.
