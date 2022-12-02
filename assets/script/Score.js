'use strict'

class Score{
    #score;
    #time;
    #percentage;

    constructor(score, time, percentage){
        this.score =score;
        this.time = time;
        this.percentage = percentage;
    }

    getScore(){
        return this.score
    }

    getTime(){
        return this.time
    }

    getPercentage(){
        return this.percentage
    }
}

export {Score};