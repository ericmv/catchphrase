import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../../services/category.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  words: string[];
  current_phrase: string;
  current_index: number;
  team1_score: number;
  team2_score: number;
  audio: any;
  endOfRound: boolean;

  constructor(categoryService: CategoryService) {
      categoryService.getList('travel').subscribe(data => {
        const phrases = data.split("\n");
        this.words = phrases;
        this.shuffle(this.words);
        console.log(this.words)

        this.current_index = -1;
      })
      console.log(categoryService.category)

  }

  @Output() toggleEvent = new EventEmitter<boolean>();

  ngOnInit() {
    this.current_phrase = "Press Start"
    this.team1_score = 0;
    this.team2_score = 0;
    this.audio = new Audio();
    this.audio.src = "../../assets/game_audio.mp3";
    this.audio.addEventListener("ended", this.onRoundEnd());
    this.endOfRound = true;
  }

  shuffle(array) {
    let currentIndex = array.length;
    let randomIndex: number;
    let temporaryValue: string;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  onBackPress() {
    this.toggleEvent.emit(false);
  }

  onRoundEnd() {
    this.endOfRound = true;
  }

  onNext() {
    if (this.current_index == this.words.length - 1) {
      this.shuffle(this.words);
      this.current_index = -1;
    }
    this.current_index++;
    this.current_phrase = this.words[this.current_index];
  }

  toggleAudio() {
    if (this.endOfRound) {
      this.onNext();
      this.endOfRound = false;
    }

    let isPlaying = this.audio.currentTime > 0 && !this.audio.paused && !this.audio.ended;

    if (!isPlaying) {
      console.log(this.audio.currentTime)
      console.log("PLAYING")
      this.audio.play();
    } else {
      console.log("PAUSING")
      this.audio.pause();
    }
    return this.audio.paused;
  }

  incScore(team: number) {
    // if (this.endOfRound == true) {
      if (team == 1) {
        this.team1_score++;
      }
      else {
        this.team2_score++;
      }
    }

  // }



}
