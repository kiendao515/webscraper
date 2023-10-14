class Match {
    constructor(home, away, time) {
        this.home = new Team(home.fullname, home.short_name, home.hadicateBet, home.goals);
        this.away = new Team(away.fullname, away.short_name, away.hadicateBet, away.goals);
        this.time = time;
    }
    displayInfo() {
        
    }
}