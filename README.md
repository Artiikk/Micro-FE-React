# Micro-FE-React
Microfrontend approach using React

This is an example of using completely separated microfrontends, using simple React component to handle all the rendering logic between the projects.

Everything is connected via Container app. 

Here is the most important part:

```
const renderMicroFrontend = () => window[`render${name}`](`${name}-container`, history);

fetch(`${host}/asset-manifest.json`)
  .then((res) => res.json())
  .then((manifest) => {
    const script = document.createElement("script");
    script.id = scriptId;
    script.crossOrigin = "";
    script.src = `${host}${manifest.files["main.js"]}`;
    script.onload = () => renderMicroFrontend();
    document.head.appendChild(script);
  });
```

We are using ```asset-manifest.json``` from each project to generate a script for booting it up.
