# AR Image Tracking - 3D Model Viewer

A web-based Augmented Reality application that displays 3D models when the camera detects a specific target image or logo, similar to Google's AR filters.

## Features

- 🎥 Camera access with a simple button click
- 🎯 Image tracking using AR.js
- 🎨 3D model rendering with animations
- 📱 Mobile-friendly responsive design
- 🎭 Multiple 3D objects with smooth animations

## How It Works

1. Click the "Open Camera" button
2. Allow camera permissions when prompted
3. Point your camera at the target marker image (Hiro marker by default)
4. Watch as 3D models appear in augmented reality!

## Setup Instructions

### Option 1: Using a Local Server (Recommended)

Since this app requires camera access, you need to run it on a local server (HTTPS or localhost):

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

### Option 2: Using VS Code Live Server

If you're using VS Code, install the "Live Server" extension and click "Go Live" to start the server.

## Customizing the Target Image

The app currently uses the default "Hiro" marker. To use your own custom image:

1. **Generate a marker pattern:**
   - Visit [AR.js Marker Training](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)
   - Upload your image/logo
   - Download the generated pattern file (.patt)

2. **Update the marker in `index.html`:**
   ```html
   <a-marker 
       type="pattern" 
       url="path/to/your/pattern.patt"
       ...>
   ```

## Adding Your Own 3D Models

### Method 1: Using GLTF/GLB Models (Recommended)

1. Place your 3D model file (`.glb` or `.gltf`) in a `models/` folder
2. Update `app.js` to load your model:

```javascript
// In app.js, uncomment and modify:
window.arApp.load3DModel(
    'models/your-model.glb', 
    { x: 0, y: 0.5, z: 0 },  // Position
    { x: 1, y: 1, z: 1 }     // Scale
);
```

### Method 2: Replace Default Objects

Edit the `<a-marker>` section in `index.html` to replace the default boxes, spheres, and cylinders with your own 3D models.

**Example:**
```html
<a-gltf-model 
    src="models/your-model.glb" 
    position="0 0.5 0" 
    scale="1 1 1"
    animation-mixer>
</a-gltf-model>
```

## Browser Compatibility

- **Chrome/Edge**: Full support ✅
- **Firefox**: Full support ✅
- **Safari**: Full support ✅ (iOS 11.3+)
- **Mobile browsers**: Supported on iOS and Android

## Requirements

- Modern browser with WebRTC support
- Camera access permissions
- HTTPS or localhost (required for camera access)

## Troubleshooting

### Camera not working?
- Ensure you're using HTTPS or localhost
- Check browser permissions for camera access
- Try a different browser

### Marker not detected?
- Ensure good lighting
- Hold the marker steady
- Make sure the marker is fully visible in the camera view
- Try printing the marker on a larger surface

### 3D model not loading?
- Check the file path is correct
- Ensure the model file is in GLTF/GLB format
- Check browser console for errors

## Technologies Used

- [A-Frame](https://aframe.io/) - Web framework for VR/AR
- [AR.js](https://ar-js-org.github.io/AR.js-Docs/) - Augmented Reality for the web
- [Three.js](https://threejs.org/) - 3D graphics library (included with A-Frame)

## License

MIT License - Feel free to use this project for your own purposes!

## Future Enhancements

- Support for multiple markers
- Custom marker training interface
- Model animation controls
- Save/load custom configurations
- Multi-user AR experiences

