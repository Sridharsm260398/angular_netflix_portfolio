import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import * as Matter from 'matter-js';

@Component({
  selector: 'app-backdrop',
  standalone: true,
  template: `<canvas #backdropCanvas></canvas>`,
  styles: [`
    canvas {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      z-index: -1;
      background: #ffffff; /* White background like your image */
    }
  `]
})
export class BackdropComponent implements AfterViewInit, OnDestroy {
  @ViewChild('backdropCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private engine!: Matter.Engine;
  private render!: Matter.Render;
  private runner!: Matter.Runner;
  private mousePosition = { x: -2000, y: -2000 };
  private particles: any[] = [];

  ngAfterViewInit() { this.initPhysics(); }

  ngOnDestroy() {
    if (this.runner) Matter.Runner.stop(this.runner);
    if (this.render) Matter.Render.stop(this.render);
    if (this.engine) Matter.Engine.clear(this.engine);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mousePosition.x = event.clientX;
    this.mousePosition.y = event.clientY;
  }

  private initPhysics() {
    const { Engine, Render, Runner, Bodies, Composite, Events, Body, Vector } = Matter;

    this.engine = Engine.create({ gravity: { x: 0, y: 0 } });

    this.render = Render.create({
      canvas: this.canvasRef.nativeElement,
      engine: this.engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
        pixelRatio: window.devicePixelRatio
      }
    });

    const spacing = 35; // Grid density
    const rows = Math.ceil(window.innerHeight / spacing);
    const cols = Math.ceil(window.innerWidth / spacing);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * spacing + spacing / 2;
        const y = r * spacing + spacing / 2;

        // Small "Capsule" shape like your image
        const particle = Bodies.rectangle(x, y, 2, 8, {
          isStatic: true, // Keep them in grid position
          render: {
            fillStyle: '#444', // Dark gray/black
            opacity: 0.1 // Faint when far away
          }
        });

        (particle as any).originalPos = { x, y };
        (particle as any).currentScale = 1;
        this.particles.push(particle);
      }
    }

    Composite.add(this.engine.world, this.particles);

    Events.on(this.engine, 'beforeUpdate', () => {
      const activeRadius = 200;

      this.particles.forEach(p => {
        const dx = this.mousePosition.x - p.position.x;
        const dy = this.mousePosition.y - p.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < activeRadius) {
          // 1. ANGLE: Point toward mouse
          const angle = Math.atan2(dy, dx) + Math.PI / 2;
          Body.setAngle(p, angle);

          // 2. SCALE & COLOR: Bloom effect
          const ratio = 1 - (distance / activeRadius);
          const targetScale = 1 + (ratio * 2.5); // Grow up to 3.5x

          // Smoothly update opacity and scale
          p.render.opacity = 0.1 + (ratio * 0.8);

          // Color shifting logic (Blue to Red like image)
          const blue = Math.floor(255 * (1 - ratio));
          const red = Math.floor(255 * ratio);
          p.render.fillStyle = `rgb(${red}, 100, ${blue})`;

          // Reset and apply new scale (Matter handles scale cumulatively, so we normalize)
          const scaleToApply = targetScale / (p as any).currentScale;
          Body.scale(p, 1, scaleToApply); // Scale height mainly
          (p as any).currentScale = targetScale;

        } else {
          // Reset to default state
          p.render.opacity = 0.1;
          p.render.fillStyle = '#444';
          if ((p as any).currentScale > 1) {
            const resetScale = 1 / (p as any).currentScale;
            Body.scale(p, 1, resetScale);
            (p as any).currentScale = 1;
          }
          Body.setAngle(p, 0);
        }
      });
    });

    Render.run(this.render);
    this.runner = Runner.create();
    Runner.run(this.runner, this.engine);
  }
}