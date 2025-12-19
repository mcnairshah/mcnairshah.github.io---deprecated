import React, { useEffect, useRef } from 'react';

const ChladniBackground = () => {
    const canvasRef = useRef(null);
    const audioContextRef = useRef(null);
    const oscillatorRef = useRef(null);
    const gainNodeRef = useRef(null);
    const animationRef = useRef(null);

    // State for smoothing (store in refs to avoid re-renders loop)
    const params = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const gl = canvas.getContext('webgl');

        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

        // Vertex shader
        const vsSource = `
      attribute vec4 aVertexPosition;
      void main() {
        gl_Position = aVertexPosition;
      }
    `;

        // Fragment shader - Chladni pattern logic
        const fsSource = `
      precision mediump float;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      
      #define PI 3.14159265359

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        // Scale UV to -1 to 1 for symmetry
        vec2 p = uv * 2.0 - 1.0;
        // Correct aspect ratio
        p.x *= uResolution.x / uResolution.y;

        // Map mouse to Chladni parameters n and m
        // Reduced sensitivity: Range 1.0 to 5.0
        float n = 1.0 + uMouse.x * 7.0;
        float m = 1.0 + uMouse.y * 7.0;

        // Chladni equation: Cos(n*pi*x)*Cos(m*pi*y) - Cos(m*pi*x)*Cos(n*pi*y)
        float v = cos(n * PI * p.x) * cos(m * PI * p.y) - cos(m * PI * p.x) * cos(n * PI * p.y);
        
        // Visualize the nodal lines (where v is close to 0)
        // Use abs(v) and smoothstep for thickness
        float t = 0.02; // thickness
        float line = 1.0 - smoothstep(0.0, t, abs(v));
        
        // Add some glow/falloff
        float glow = 1.0 - smoothstep(0.0, 0.2, abs(v));
        
        // Color
        vec3 color = vec3(0.5) * line + vec3(0.2) * glow;
        
        // Fade edges
        // float vignette = smoothstep(1.5, 0.5, length(p));
        // color *= vignette;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

        // Shader compilation helpers
        const loadShader = (gl, type, source) => {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
        const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);

        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
            return;
        }

        // Set up geometry (fullscreen quad)
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = [
            -1.0, 1.0,
            1.0, 1.0,
            -1.0, -1.0,
            1.0, -1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        const vertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
        gl.enableVertexAttribArray(vertexPosition);
        gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);

        gl.useProgram(shaderProgram);

        const uResolution = gl.getUniformLocation(shaderProgram, 'uResolution');
        const uMouse = gl.getUniformLocation(shaderProgram, 'uMouse');

        // Rendering loop
        const render = () => {
            // Rotate size
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
                gl.viewport(0, 0, width, height);
            }

            // Smooth mouse
            params.current.x += (params.current.targetX - params.current.x) * 0.05;
            params.current.y += (params.current.targetY - params.current.y) * 0.05;

            gl.uniform2f(uResolution, width, height);
            gl.uniform2f(uMouse, params.current.x, params.current.y);

            gl.clearColor(0.05, 0.05, 0.05, 1.0); // Match bg color
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

            // Update Audio if active
            if (oscillatorRef.current && gainNodeRef.current) {
                // Map x to frequency (100Hz to 1000Hz)
                const freq = 100 + params.current.x * 600;
                oscillatorRef.current.frequency.setTargetAtTime(freq, audioContextRef.current.currentTime, 0.1);
            }

            animationRef.current = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationRef.current);
    }, []);

    // Event handlers
    const handleMouseMove = (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        params.current.targetX = x;
        params.current.targetY = y;

        // Init audio on first interaction if needed
        initAudio();
    };

    const initAudio = () => {
        if (!audioContextRef.current) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioContextRef.current = new AudioContext();

            oscillatorRef.current = audioContextRef.current.createOscillator();
            oscillatorRef.current.type = 'sine';

            gainNodeRef.current = audioContextRef.current.createGain();
            gainNodeRef.current.gain.value = 0.05; // Low volume

            oscillatorRef.current.connect(gainNodeRef.current);
            gainNodeRef.current.connect(audioContextRef.current.destination);

            oscillatorRef.current.start();
        }
        if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume();
        }
    };

    const handleMouseEnter = () => {
        if (gainNodeRef.current) {
            gainNodeRef.current.gain.setTargetAtTime(0.05, audioContextRef.current.currentTime, 0.1);
        }
    };

    const handleMouseLeave = () => {
        if (gainNodeRef.current) {
            gainNodeRef.current.gain.setTargetAtTime(0.0, audioContextRef.current.currentTime, 0.5);
        }
    };

    return (
        <canvas
            ref={canvasRef}
            style={{ width: '100%', height: '100%', display: 'block' }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={initAudio} // Fallback for mobile/policies
        />
    );
};

export default ChladniBackground;
