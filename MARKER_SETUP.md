# Setting Up Your Star Marker

To use your star image as the AR marker, you need to generate a pattern file (`.patt`) from it.

## Step 1: Generate the Marker Pattern

1. **Visit the AR.js Marker Generator:**
   - Go to: https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html

2. **Upload Your Star Image:**
   - Click "Upload Image" or drag and drop your star image
   - The generator will process your image

3. **Download the Pattern File:**
   - Once processed, click "Download Pattern"
   - Save the file as `star-marker.patt`
   - Place it in the `markers/` folder

## Step 2: Update the HTML

Once you have the `star-marker.patt` file in the `markers/` folder, update `index.html`:

**Find this line (around line 42-45):**
```html
<a-marker 
    id="marker"
    type="pattern" 
    preset="hiro"
```

**Change it to:**
```html
<a-marker 
    id="marker"
    type="pattern" 
    url="markers/star-marker.patt"
```

## Step 3: Test It!

1. Print your star marker on paper (at least 8x8 cm / 3x3 inches)
2. Start the server: `npm start` or `python -m http.server 8000`
3. Open the camera in the app
4. Point at the printed star marker
5. Your gift loot box 3D model should appear!

## Tips for Best Results

- **High Contrast**: Your star image (black on white) is perfect for tracking
- **Print Size**: Print the marker at least 8x8 cm (3x3 inches) for best detection
- **Lighting**: Ensure good, even lighting when using the marker
- **Stability**: Keep the marker flat and steady for best tracking
- **Distance**: Hold the marker 20-50 cm (8-20 inches) from the camera

## Troubleshooting

**Marker not detected?**
- Make sure the `.patt` file is in the `markers/` folder
- Check that the URL in HTML matches the filename exactly
- Ensure good lighting and the marker is fully visible
- Try printing the marker larger

**Model not appearing?**
- Check browser console for errors
- Verify the `.glb` file path is correct: `glb/gift_loot_box_thing_wip.glb`
- Try adjusting the scale in the HTML if model is too large/small

