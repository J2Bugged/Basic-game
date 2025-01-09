class AudioManager {
    constructor() {
        this.sounds = {
            background: document.getElementById('backgroundMusic'),
            collect: document.getElementById('collectSound'),
            gameOver: document.getElementById('gameOverSound')
        };
        
        this.musicVolume = 0.5;
        this.sfxVolume = 0.5;
    }

    playBackground() {
        this.sounds.background.volume = this.musicVolume;
        this.sounds.background.play();
    }

    playSoundEffect(name) {
        const sound = this.sounds[name];
        if (sound) {
            sound.volume = this.sfxVolume;
            sound.currentTime = 0;
            sound.play();
        }
    }

    updateVolume(type, value) {
        if (type === 'music') {
            this.musicVolume = value;
            this.sounds.background.volume = value;
        } else if (type === 'sfx') {
            this.sfxVolume = value;
        }
    }
} 