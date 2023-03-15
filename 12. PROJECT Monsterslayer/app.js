function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            battleLog: []
        };
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth <= 0) {
                return { width: '0%' };
            }
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyles() {
            if (this.playerHealth <= 0) {
                return { width: '0%' };
            }
            return { width: this.playerHealth + '%' };
        },
        canUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
        canHeal() {
            return this.currentRound % 5 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // A draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // A draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // monster lost
                this.winner = 'player';
            }
        }
    },
    methods: {
        attackMonster() {
            // attacking the monster
            this.currentRound++;
            const hit = getRandomValue(5, 12);
            this.monsterHealth -= hit;
            this.addLogMessage('player', 'attack', hit);
            this.attackPlayer();
        },
        attackPlayer() {
            // attacking the player
            const hit = getRandomValue(8, 15);
            this.playerHealth -= hit;
            this.addLogMessage('monster', 'attack', hit);
        },
        specialAttack() {
            // special attack the monster
            this.currentRound++;
            const hit = getRandomValue(10, 25);
            this.monsterHealth -= hit;
            this.addLogMessage('player', 'special-attack', hit);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const heal = getRandomValue(8, 20);
            if (this.playerHealth + heal > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += heal;
            }
            this.addLogMessage('player', 'heal', heal);
            this.attackPlayer();
        },
        restart() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.battleLog = [];
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.battleLog.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
});

app.mount('#game');