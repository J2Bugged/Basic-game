class ParticleSystem {
    constructor() {
        this.particles = [];
    }

    createExplosion(x, y, color) {
        for (let i = 0; i < 10; i++) {
            this.particles.push(new Particle(x, y, color));
        }
    }

    update() {
        this.particles = this.particles.filter(p => p.isAlive());
        this.particles.forEach(p => p.update());
    }
} 