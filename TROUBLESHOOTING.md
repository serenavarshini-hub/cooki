# Troubleshooting: Marker Not Detected on Phone Screen

## Common Issues When Using Phone Screen as Marker

### 1. **Screen Brightness & Glare**
- **Problem**: Phone screens can have glare or reflections that interfere with detection
- **Solution**: 
  - Increase phone brightness to maximum
  - Turn off auto-brightness
  - Avoid direct light sources reflecting on the screen
  - Try in a dimmer room to reduce reflections

### 2. **Marker Size**
- **Problem**: Marker too small on phone screen
- **Solution**:
  - Make the marker image fill most of the phone screen
  - Hold the phone 20-30 cm (8-12 inches) away from the camera
  - Ensure the entire marker (including the black border) is visible

### 3. **Screen Quality**
- **Problem**: Low resolution or pixelated marker
- **Solution**:
  - Use a high-resolution image of the marker
  - Zoom in on the marker image on your phone
  - Ensure the marker image is sharp and clear

### 4. **Lighting Conditions**
- **Problem**: Poor lighting affects detection
- **Solution**:
  - Use even, diffused lighting (avoid harsh shadows)
  - Don't point camera directly at bright light sources
  - Ensure the phone screen is well-lit but not reflecting light

### 5. **Distance & Angle**
- **Problem**: Wrong distance or angle
- **Solution**:
  - Hold phone 20-50 cm (8-20 inches) from camera
  - Keep phone screen flat (not tilted)
  - Keep phone steady - avoid shaking
  - Camera should be perpendicular to the screen

### 6. **Pattern File Issues**
- **Problem**: Pattern file might not match the image
- **Solution**:
  - Make sure the pattern file was generated from the exact same image
  - The image should be the black star in a square border (high contrast)

## Debug Mode Enabled

I've enabled debug mode in the app. You should see:
- **Red/Green overlay** on detected markers (debug visualization)
- **Status indicator** at the bottom showing "Marker Detected" or "Searching for marker..."

## Tips for Best Results

1. **Print the marker** instead of using phone screen (more reliable)
2. **Use a tablet** if available (larger screen = better detection)
3. **Test with Hiro marker first** to verify the app works
4. **Check browser console** (F12) for any error messages
5. **Try different browsers** (Chrome usually works best)

## Quick Test

1. Open the app and click "Open Camera"
2. Look at the debug overlay - you should see colored boxes around detected patterns
3. Check the status indicator at the bottom
4. If you see red boxes but no green, the marker is being detected but not recognized
5. If you see nothing, try adjusting lighting and distance

## Still Not Working?

- Check browser console (F12 → Console tab) for errors
- Try printing the marker on paper instead
- Verify the pattern file is loading (check Network tab in browser dev tools)
- Try the default Hiro marker to test if AR.js is working

