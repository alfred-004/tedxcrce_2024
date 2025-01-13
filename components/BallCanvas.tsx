import { useEffect, useRef } from "react";

const BallCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const balls = useRef<Ball[]>([]);
    const lastFrameTime = useRef<number>(performance.now());

    const colors = [
        "#66b2b2", //teal-light
        "#006666", //teal-dark
        "#FF4800", //Orange-dark
        "#FF9100",

    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        // Resize canvas to fit its parent container
        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        };

        const drawBalls = (deltaTime: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas each frame
            ctx.globalCompositeOperation = "source-over"; // Default drawing mode

            for (let i = balls.current.length - 1; i >= 0; i--) {
                const ball = balls.current[i];
                ball.update(deltaTime);
                ball.draw(ctx);
            }

            // Remove balls that have fully faded or shrunk
            balls.current = balls.current.filter((ball) => ball.alpha > 0 && ball.size > 0);
        };

        const animationLoop = (timestamp: number) => {
            const deltaTime = timestamp - lastFrameTime.current;
            lastFrameTime.current = timestamp;

            drawBalls(deltaTime);
            requestAnimationFrame(animationLoop);
        };

        const addBalls = (x: number, y: number) => {
            for (let i = 0; i < 5; i++) {
                const offsetX = Ball.getRandomInt(-10, 10);
                const offsetY = Ball.getRandomInt(-10, 10);
                balls.current.push(new Ball({ x: x + offsetX, y: y + offsetY }, colors));
            }
        };

        const mousemove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            // Add balls only if the mouse is within the canvas bounds
            if (mouseX >= 0 && mouseX <= canvas.width && mouseY >= 0 && mouseY <= canvas.height) {
                addBalls(mouseX, mouseY);
            }
        };

        resizeCanvas(); // Initial resize
        requestAnimationFrame(animationLoop);

        // Event listeners
        window.addEventListener("resize", resizeCanvas);
        canvas.addEventListener("mousemove", mousemove);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            canvas.removeEventListener("mousemove", mousemove);
        };
    }, [colors]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
        ></canvas>
    );
};

class Ball {
    x: number;
    y: number;
    size: number;
    style: string;
    alpha: number; // Transparency
    fadeSpeed: number; // Transparency fade speed
    shrinkSpeed: number; // Shrink speed

    constructor(mouse: { x: number; y: number }, colors: string[]) {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Ball.getRandomInt(20, 40);
        this.style = colors[Ball.getRandomInt(0, colors.length - 1)];
        this.alpha = 1;
        this.fadeSpeed = 0.0007; // Fade per millisecond
        this.shrinkSpeed = 0.04; // Shrink per millisecond
    }

    static getRandomInt(min: number, max: number) {
        return Math.round(Math.random() * (max - min)) + min;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.style;
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update(deltaTime: number) {
        this.alpha -= this.fadeSpeed * deltaTime;
        this.size -= this.shrinkSpeed * deltaTime;

        if (this.alpha < 0) this.alpha = 0;
        if (this.size < 0) this.size = 0;
    }
}

export default BallCanvas;
