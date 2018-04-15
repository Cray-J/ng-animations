import {Component, Renderer2} from '@angular/core';
import {animateStateTrigger, clickedStateTrigger, listStateTrigger, numberEnteredStateTrigger, showStateTrigger} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    clickedStateTrigger,
    numberEnteredStateTrigger,
    showStateTrigger,
    animateStateTrigger,
    listStateTrigger
  ]
})
export class AppComponent {
  isFavorite = false;
  divClicked = false;
  doAnimate = false;
  clickInfo = 'default';
  paragraphClick = 'default';
  numberEntered;

  isShown = false;
  width = 400;
  animate = false;
  testResults = [];

  constructor(private renderer: Renderer2) {}

  onClickSimple() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000);
  }

  onAddElement() {
    this.testResults.push(Math.random());
  }


  onShowBoring(element: HTMLElement) {
    this.renderer.setStyle(element, 'display', 'block');
  }

  onAnimationStarted(event: AnimationEvent) {
    console.log(event);
  }

  onAnimationDone(event: AnimationEvent) {
    console.log(event);
  }



  // courseGoals = [
  //   { title: 'Master Angular Styling', isActiveGoal: true },
  //   { title: 'Understand Angular Animations', isActiveGoal: false },
  //   { title: 'Master Angular Animations', isActiveGoal: false }
  // ];
}
