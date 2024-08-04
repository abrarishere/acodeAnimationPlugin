import plugin from '../plugin.json';
import './style.css';

const sidebarApps = acode.require("sidebarApps");

class AnimationPlugin {

  async init() {
    console.log('init');
    acode.addIcon('animation', this.baseUrl + 'icon.png');
    sidebarApps.add(
      'animation',
      'animation',
      'Animation',
      (app) => {
        const animationContainer = tag("div", {
          className: "animation-container-108373737",
        });
        const outputDiv = tag("div", {
          className: "output-192772625"
        });
        const innerOutputDiv = tag("div", {
          className: "inner-output-283652525"
        });
        const styles = `
  height: 50px;
  width: 50px;
  background: #fff;
  border-radius: 50%;
  `;
        const innerOutputAdjustDiv = tag("div", {
          className: "inner-output-adjust-283652525",
        });
        const innerOutputParagrah = tag("p", {
          innerText: "Styles for the animation div",
          className: "paragraph-1928374"
        });
        const innerOutputDivStyles = tag("input", {
          placeholder: "Styles",
          value: styles,
          className: "input-code-0987"
        });
        const applyStylesButton = tag("button", {
          innerText: "Apply styles",
          className: "button-3928"
        });

        const inputField = tag("input", {
          placeholder: "Write Keyframes",
          value: `
0% {
  transform: translateY(0);
}
50% {
  transform: translateY(100px);
}
100% {
  transform: translateY(0);
}
`,
          className: "input-code-0987"
        });
        const buttonsDiv = tag("div", {
          className: "buttons-1928374"
        });
        const runButton = tag("button", {
          innerText: "Run",
          className: "button-3928"
        });

        innerOutputAdjustDiv.append(innerOutputParagrah, innerOutputDivStyles, applyStylesButton);
        outputDiv.append(innerOutputDiv);
        buttonsDiv.append(runButton);
        animationContainer.append(
          outputDiv,
          innerOutputAdjustDiv,
          inputField,
          buttonsDiv
        );
        app.appendChild(animationContainer);

        runButton.addEventListener("click", () => {
          const randomName = `animation${Math.random().toString(36).substr(2, 9)}`;
          const keyframes = `@keyframes ${randomName} { ${inputField.value} }`;
          const styleTag = document.createElement("style");
          styleTag.innerHTML = keyframes;
          document.head.appendChild(styleTag);

          innerOutputDiv.style.animation = `${randomName} 5s infinite`;
        });
        
        applyStylesButton.addEventListener("click", () => {
          innerOutputDiv.style = innerOutputDivStyles.value;
        });

      }
    );
  }

  async destroy() {
    alert('Reopen the app to see the changes');
    sidebarApps.remove('animation');
  }
}

if (window.acode) {
  const acodePlugin = new AnimationPlugin();
  acode.setPluginInit(plugin.id, async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
    if (!baseUrl.endsWith('/')) {
      baseUrl += '/';
    }
    acodePlugin.baseUrl = baseUrl;
    await acodePlugin.init($page, cacheFile, cacheFileUrl);
  });
  acode.setPluginUnmount(plugin.id, () => {
    acodePlugin.destroy();
  });
}
