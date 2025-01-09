class Game {
    constructor() {
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        this.isPaused = false;
    }

    update() {
        if (this.isPaused) return;
        
        // Update game logic
        this.updateEntities();
        this.checkCollisions();
        this.updateScore();
        
        // Check game conditions
        if (this.isLevelComplete()) {
            this.nextLevel();
        }
        if (this.isGameOver()) {
            this.endGame();
        }
    }

    draw() {
        // Draw game elements
    }
} 