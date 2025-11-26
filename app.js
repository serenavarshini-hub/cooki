// AR Camera Application
class ARApp {
    constructor() {
        this.isCameraActive = false;
        this.init();
    }

    init() {
        const startBtn = document.getElementById('start-camera-btn');
        const closeBtn = document.getElementById('close-camera-btn');
        const startScreen = document.getElementById('start-screen');
        const arScreen = document.getElementById('ar-screen');
        const arScene = document.getElementById('ar-scene');

        startBtn.addEventListener('click', () => this.startCamera());
        closeBtn.addEventListener('click', () => this.stopCamera());

        // Listen for marker detection
        const marker = document.querySelector('#marker');
        if (marker) {
            marker.addEventListener('markerFound', (e) => {
                console.log('✓ Marker detected!', e.detail);
                this.onMarkerFound();
            });

            marker.addEventListener('markerLost', () => {
                console.log('✗ Marker lost');
                this.onMarkerLost();
            });
            
            // Additional debugging - check if marker is loading
            marker.addEventListener('loaded', () => {
                console.log('Pattern file loaded successfully');
            });
            
            marker.addEventListener('error', (e) => {
                console.error('Error loading marker pattern:', e);
                alert('Error loading marker pattern. Check console for details.');
            });
        }
        
        // Check AR.js initialization
        const scene = document.getElementById('ar-scene');
        if (scene) {
            scene.addEventListener('loaded', () => {
                console.log('AR.js scene loaded');
                const arSystem = scene.systems['arjs'];
                if (arSystem) {
                    console.log('AR.js system initialized');
                    console.log('Detection mode:', arSystem.arToolkitSource);
                } else {
                    console.warn('AR.js system not found');
                }
            });
            
            // Monitor AR.js video system
            scene.addEventListener('renderstart', () => {
                console.log('AR.js render started');
                const videoSystem = scene.systems['arjs-video'];
                if (videoSystem) {
                    console.log('Video system found');
                    if (videoSystem._video) {
                        console.log('Video element:', videoSystem._video.videoWidth, 'x', videoSystem._video.videoHeight);
                    }
                }
            });
        }
        
        // Add periodic check for marker detection
        setInterval(() => {
            const marker = document.querySelector('#marker');
            if (marker && this.isCameraActive) {
                const isVisible = marker.object3D.visible;
                const position = marker.object3D.position;
                if (isVisible) {
                    console.log('Marker position:', position);
                }
            }
        }, 2000);
    }

    async startCamera() {
        try {
            // Switch to AR screen first
            document.getElementById('start-screen').classList.remove('active');
            document.getElementById('ar-screen').classList.add('active');
            
            // AR.js will automatically request camera access when the scene loads
            this.isCameraActive = true;
            
            console.log('AR scene activated - camera will start automatically');
        } catch (error) {
            console.error('Error starting AR:', error);
            alert('Unable to start AR. Please ensure you have granted camera permissions and are using HTTPS or localhost.');
        }
    }

    stopCamera() {
        this.isCameraActive = false;

        // Get the AR scene and stop the video stream
        const scene = document.getElementById('ar-scene');
        if (scene) {
            const arSystem = scene.systems['arjs-video'];
            if (arSystem && arSystem._video) {
                const stream = arSystem._video.srcObject;
                if (stream) {
                    stream.getTracks().forEach(track => track.stop());
                }
            }
        }

        // Switch back to start screen
        document.getElementById('ar-screen').classList.remove('active');
        document.getElementById('start-screen').classList.add('active');
    }

    onMarkerFound() {
        const modelContainer = document.getElementById('model-container');
        const statusIndicator = document.getElementById('marker-status');
        
        if (modelContainer) {
            modelContainer.setAttribute('visible', 'true');
            console.log('3D Model should now be visible');
        }
        
        if (statusIndicator) {
            statusIndicator.textContent = '✓ Marker Detected!';
            statusIndicator.className = 'marker-status detected';
        }
    }

    onMarkerLost() {
        const modelContainer = document.getElementById('model-container');
        const statusIndicator = document.getElementById('marker-status');
        
        if (modelContainer) {
            modelContainer.setAttribute('visible', 'false');
        }
        
        if (statusIndicator) {
            statusIndicator.textContent = 'Searching for marker...';
            statusIndicator.className = 'marker-status';
        }
    }

    // Method to load custom 3D model (GLTF/GLB format)
    load3DModel(modelPath, position = { x: 0, y: 0, z: 0 }, scale = { x: 1, y: 1, z: 1 }) {
        const marker = document.querySelector('#marker');
        const modelContainer = document.getElementById('model-container');
        
        if (modelContainer && marker) {
            // Clear existing models
            modelContainer.innerHTML = '';
            
            // Create new model entity
            const model = document.createElement('a-gltf-model');
            model.setAttribute('src', modelPath);
            model.setAttribute('position', `${position.x} ${position.y} ${position.z}`);
            model.setAttribute('scale', `${scale.x} ${scale.y} ${scale.z}`);
            model.setAttribute('animation-mixer', '');
            
            modelContainer.appendChild(model);
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.arApp = new ARApp();
    
    // Gift Loot Box model is already loaded in HTML
    // If you need to adjust position or scale dynamically, you can use:
    // window.arApp.load3DModel('glb/gift_loot_box_thing_wip.glb', { x: 0, y: 0.5, z: 0 }, { x: 0.5, y: 0.5, z: 0.5 });
});

