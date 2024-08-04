import plugin from '../plugin.json';
import './style.css';

const sidebarApps = acode.require("sidebarApps");
const toast = acode.require("toast");

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
        const showCustomAnimationsPanel = tag("button", {
          innerText: "Toggle animations panel",
          className: "button-3928"
        });
        const showCodeButton = tag("button", {
          innerText: "Show/Hide Code",
          className: "button-3928"
        });
        const animationInfoDiv = tag("div", {
          className: "animation-info-1928374 hidden"
        });
        const animationNameLabel = tag("label", {
          innerText: "Animation name",
          className: "paragraph-1928374"
        });
        const animationName = tag("input", {
          placeholder: "e.g, move",
          className: "input-code-0987"
        });
        const animationDurationLabel = tag("label", {
          innerText: "Animation duration",
          className: "paragraph-1928374"
        });
        const animationTime = tag("input", {
          placeholder: "e.g, 5s",
          className: "input-code-0987"
        });
        const animationDelayLabel = tag("label", {
          innerText: "Animation delay",
          className: "paragraph-1928374"
        });
        const animationDelay = tag("input", {
          placeholder: "e.g, 2s",
          className: "input-code-0987"
        });
        const animationIterationLabel = tag("label", {
          innerText: "Animation iteration",
          className: "paragraph-1928374"
        });
        const animationIteration = tag("input", {
          placeholder: "e.g, infinite",
          className: "input-code-0987"
        });
        const animationDirectionLabel = tag("label", {
          innerText: "Animation direction",
          className: "paragraph-1928374"
        });
        const animationDirection = tag("input", {
          placeholder: "e.g, alternate",
          className: "input-code-0987"
        });
        const animationFillModeLabel = tag("label", {
          innerText: "Animation fill mode",
          className: "paragraph-1928374"
        });
        const animationFillMode = tag("input", {
          placeholder: "e.g, forwards",
          className: "input-code-0987"
        });
        const codeDisplayDiv = tag("div", {
          className: "code-display-3356 hidden"
        });
        const keyframesCode = tag("pre", {
          innerText: "",
          className: "code-block-1928374"
        });
        const animationCode = tag("pre", {
          innerText: "",
          className: "code-block-1928374"
        });

        innerOutputAdjustDiv.append(innerOutputParagrah, innerOutputDivStyles, applyStylesButton);
        outputDiv.append(innerOutputDiv);
        buttonsDiv.append(runButton, showCustomAnimationsPanel, showCodeButton);
        animationInfoDiv.append(
          animationNameLabel,
          animationName,
          animationDurationLabel,
          animationTime,
          animationDelayLabel,
          animationDelay,
          animationIterationLabel,
          animationIteration,
          animationDirectionLabel,
          animationDirection,
          animationFillModeLabel,
          animationFillMode
        );
        codeDisplayDiv.append(
          tag("p", { innerText: "Keyframes Code", className: "code-header-1928374" }),
          keyframesCode,
          tag("p", { innerText: "Animation Code", className: "code-header-1928374" }),
          animationCode
        );
        animationContainer.append(
          outputDiv,
          innerOutputAdjustDiv,
          inputField,
          buttonsDiv,
          animationInfoDiv,
          codeDisplayDiv
        );
        app.appendChild(animationContainer);

        showCustomAnimationsPanel.addEventListener("click", () => {
          animationInfoDiv.classList.toggle('hidden');
        });

        showCodeButton.addEventListener("click", () => {
          codeDisplayDiv.classList.toggle('hidden');
        });

        runButton.addEventListener("click", () => {
          let randomName = `animation${Math.random().toString(36).substr(2, 9)}`;
          if (animationName.value !== "") {
            randomName = animationName.value;
            console.log('randomName', randomName);
          }
          const keyframes = `@keyframes ${randomName} { ${inputField.value} }`;
          const styleTag = document.createElement("style");
          styleTag.innerHTML = keyframes;
          document.head.appendChild(styleTag);

          keyframesCode.innerText = keyframes;
          animationCode.innerText = `
animation-name: ${animationName.value || randomName};
animation-duration: ${animationTime.value || '5s'};
animation-delay: ${animationDelay.value || '0s'};
animation-iteration-count: ${animationIteration.value || 'infinite'};
animation-direction: ${animationDirection.value || 'normal'};
animation-fill-mode: ${animationFillMode.value || 'none'};
`;

          innerOutputDiv.style.animationName = randomName;
          innerOutputDiv.style.animationDuration = animationTime.value || '5s';
          innerOutputDiv.style.animationDelay = animationDelay.value || '0s';
          innerOutputDiv.style.animationIterationCount = animationIteration.value || 'infinite';
          innerOutputDiv.style.animationDirection = animationDirection.value || 'normal';
          innerOutputDiv.style.animationFillMode = animationFillMode.value || 'none';
        });

        applyStylesButton.addEventListener("click", () => {
          innerOutputDiv.style.cssText = innerOutputDivStyles.value;
        });

        // Function to copy text to clipboard
        const copyToClipboard = (text) => {
          navigator.clipboard.writeText(text).then(() => {
            toast("Code copied to clipboard", 3000);
          }).catch(err => {
            console.error("Failed to copy: ", err);
          });
        };

        // Add click event listeners to code blocks
        keyframesCode.addEventListener("click", () => {
          copyToClipboard(keyframesCode.innerText);
        });

        animationCode.addEventListener("click", () => {
          copyToClipboard(animationCode.innerText);
        });

      }
    );
  }

  async destroy() {
    toast("Reopen app to see the changes", 4000);
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
