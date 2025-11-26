# Tips for Using Phone Screen as AR Marker

## The Problem
Using a phone screen as an AR marker is **much harder** than using a printed marker because:
- Screen glare and reflections interfere with detection
- Screen brightness and color calibration can affect pattern recognition
- The pattern file must match the **exact** image being displayed

## Critical Requirements

### 1. **Exact Image Match**
The `.patt` file must be generated from the **EXACT SAME IMAGE** you're showing on your phone:
- Same resolution
- Same size/scale
- Same orientation
- Same brightness/contrast

### 2. **Image on Phone**
- Use the **original image file** (pattern.jpeg) - don't screenshot it
- Make the image fill the entire phone screen
- Zoom in so the marker (with border) takes up most of the screen
- Lock screen rotation
- Set brightness to maximum

### 3. **Testing Steps**

1. **Verify Pattern File Matches Image:**
   - The pattern file was generated from `pattern.jpeg`
   - Make sure you're displaying `pattern.jpeg` on your phone (not a screenshot)
   - The image should show the black star in a square border

2. **Phone Setup:**
   - Open `pattern.jpeg` in your phone's gallery
   - Zoom in so the marker fills the screen
   - Turn brightness to maximum
   - Turn off auto-brightness
   - Lock the screen (so it doesn't turn off)

3. **Camera Setup:**
   - Hold phone 20-30 cm (8-12 inches) from laptop camera
   - Keep phone flat (not tilted)
   - Ensure entire marker is visible in camera view
   - Avoid reflections on phone screen
   - Use even lighting (not too bright, not too dark)

4. **Debug Mode:**
   - With debug mode enabled, you should see colored boxes
   - **Red boxes** = patterns detected but not matched
   - **Green box** = your marker detected and matched
   - If you see red but no green, the pattern doesn't match

## Alternative: Print the Marker

**Best solution:** Print the marker on paper instead of using phone screen:
1. Print `pattern.jpeg` on white paper
2. Make it at least 8x8 cm (3x3 inches)
3. Use matte/glossy paper (avoid glossy if there's glare)
4. This will work much more reliably!

## Regenerate Pattern File

If it's still not working, try regenerating the pattern:
1. Go to: https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html
2. Upload `pattern.jpeg` (the exact same file)
3. Download the new `.patt` file
4. Replace `markers/star-marker.patt` with the new file
5. Refresh the app and try again

## Check Browser Console

Open browser console (F12) and look for:
- "Pattern file loaded successfully" - pattern loaded OK
- "Marker detected!" - marker is being detected
- Any error messages about loading the pattern file

