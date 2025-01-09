const saveSystem = {
    saveGame(gameState) {
        localStorage.setItem('gameState', JSON.stringify(gameState));
    },
    
    loadGame() {
        return JSON.parse(localStorage.getItem('gameState'));
    },
    
    saveHighScore(score) {
        let highScores = JSON.parse(localStorage.getItem('highScores') || '[]');
        highScores.push(score);
        highScores.sort((a, b) => b - a);
        highScores = highScores.slice(0, 10); // Keep top 10
        localStorage.setItem('highScores', JSON.stringify(highScores));
    }
}; 