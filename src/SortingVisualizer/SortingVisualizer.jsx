import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSort.js';
import {getQuickSortAnimations} from '../SortingAlgorithms/QuickSort.js';
import {getHeapSortAnimations} from '../SortingAlgorithms/HeapSort.js';
import {getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort.js';
import {getSelectionSortAnimations} from '../SortingAlgorithms/SelectionSort.js';
import {getInsertionSortAnimations} from '../SortingAlgorithms/InsertionSort.js';
import './SortingVisualizer.css';

//Speed of animation
const ANIMATION_SPEED = 2;

//number of array bars
var NUMBER_OF_ARRAY_BARS;

// Color of the bars
const PRIMARY_COLOR = 'SkyBlue';

//Color of the bars being compared
const SECONDARY_COLOR = 'GreenYellow';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    document.body.style.background = '#424242';
    this.resetArray();
  }

  resetArray() {
    const array = [];
    NUMBER_OF_ARRAY_BARS = randomIntFromInterval(50, 250)
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      switch(animations[i][0]){
        case 0:
          const barOneStyle = arrayBars[animations[i][1]].style;
          const barTwoStyle = arrayBars[animations[i][2]].style;
          const color = SECONDARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED);
          break;
        case 1:
          const barOneStylee = arrayBars[animations[i][1]].style;
          const barTwoStylee = arrayBars[animations[i][2]].style;
          const colorr = PRIMARY_COLOR;
          setTimeout(() => {
            barOneStylee.backgroundColor = colorr;
            barTwoStylee.backgroundColor = colorr;
          }, i * ANIMATION_SPEED);
          break;
        case 2:
          setTimeout(() => {
            const newHeight = animations[i][2];
            const barOneStyleee = arrayBars[animations[i][1]].style;
            barOneStyleee.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED);
          break;
        }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      switch(animations[i][0]){
        case 0:
          const barOneStyle = arrayBars[animations[i][1]].style;
          const barTwoStyle = arrayBars[animations[i][2]].style;
          const color = SECONDARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED);
          break;
        case 1:
          const barOneStylee = arrayBars[animations[i][1]].style;
          const barTwoStylee = arrayBars[animations[i][2]].style;
          const colorr = PRIMARY_COLOR;
          setTimeout(() => {
            barOneStylee.backgroundColor = colorr;
            barTwoStylee.backgroundColor = colorr;
          }, i * ANIMATION_SPEED);
          break;
        case 2:
          setTimeout(() => {
            const newHeight = animations[i][2];
            const barOneStyleee = arrayBars[animations[i][1]].style;
            barOneStyleee.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED);
          break;
        }
    }
  }

  heapSort() {
    const animations = getHeapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      switch(animations[i][0]){
        case 0:
          const barOneStyle = arrayBars[animations[i][1]].style;
          const barTwoStyle = arrayBars[animations[i][2]].style;
          const color = SECONDARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED);
          break;
        case 1:
          const barOneStylee = arrayBars[animations[i][1]].style;
          const barTwoStylee = arrayBars[animations[i][2]].style;
          const colorr = PRIMARY_COLOR;
          setTimeout(() => {
            barOneStylee.backgroundColor = colorr;
            barTwoStylee.backgroundColor = colorr;
          }, i * ANIMATION_SPEED);
          break;
        case 2:
          setTimeout(() => {
            const newHeight = animations[i][2];
            const barOneStyleee = arrayBars[animations[i][1]].style;
            barOneStyleee.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED);
          break;
        }
      }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      switch(animations[i][0]){
        case 0:
          const barOneStyle = arrayBars[animations[i][1]].style;
          const barTwoStyle = arrayBars[animations[i][2]].style;
          const color = SECONDARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED);
          break;
        case 1:
          const barOneStylee = arrayBars[animations[i][1]].style;
          const barTwoStylee = arrayBars[animations[i][2]].style;
          const colorr = PRIMARY_COLOR;
          setTimeout(() => {
            barOneStylee.backgroundColor = colorr;
            barTwoStylee.backgroundColor = colorr;
          }, i * ANIMATION_SPEED);
          break;
        case 2:
          setTimeout(() => {
            const newHeight = animations[i][2];
            const barOneStyleee = arrayBars[animations[i][1]].style;
            barOneStyleee.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED);
          break;
        }
      }
  }
  insertionSort(){
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      switch(animations[i][0]){
        case 0:
          const barOneStyle = arrayBars[animations[i][1]].style;
          const barTwoStyle = arrayBars[animations[i][2]].style;
          const color = SECONDARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED);
          break;
        case 1:
          const barOneStylee = arrayBars[animations[i][1]].style;
          const barTwoStylee = arrayBars[animations[i][2]].style;
          const colorr = PRIMARY_COLOR;
          setTimeout(() => {
            barOneStylee.backgroundColor = colorr;
            barTwoStylee.backgroundColor = colorr;
          }, i * ANIMATION_SPEED);
          break;
        case 2:
          setTimeout(() => {
            const newHeight = animations[i][2];
            const barOneStyleee = arrayBars[animations[i][1]].style;
            barOneStyleee.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED);
          break;
        }
      }
  }
  selectionSort(){
    const animations = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      switch(animations[i][0]){
        case 0:
          const barOneStyle = arrayBars[animations[i][1]].style;
          const barTwoStyle = arrayBars[animations[i][2]].style;
          const color = SECONDARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED);
          break;
        case 1:
          const barOneStylee = arrayBars[animations[i][1]].style;
          const barTwoStylee = arrayBars[animations[i][2]].style;
          const colorr = PRIMARY_COLOR;
          setTimeout(() => {
            barOneStylee.backgroundColor = colorr;
            barTwoStylee.backgroundColor = colorr;
          }, i * ANIMATION_SPEED);
          break;
        case 2:
          setTimeout(() => {
            const newHeight = animations[i][2];
            const barOneStyleee = arrayBars[animations[i][1]].style;
            barOneStyleee.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED);
          break;
        }
      }
  }
  render() {
    const {array} = this.state;
    return (
      <div className="array-container">
      <div className = "button">
      <button onClick={() => this.resetArray()} class="btn">Generate Array</button>
      <button onClick={() => this.mergeSort()} class="btn">Merge Sort</button>
      <button onClick={() => this.quickSort()} class="btn">Quick Sort</button>
      <button onClick={() => this.heapSort()} class="btn">Heap Sort</button>
      <button onClick={() => this.bubbleSort()} class="btn">Bubble Sort</button>
      <button onClick ={() => this.insertionSort()} class="btn">Insertion Sort</button>
      <button onClick ={() => this.selectionSort()} class="btn">Selection Sort</button>
      </div>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              width: `${800 / NUMBER_OF_ARRAY_BARS}px`,
            }}></div>
        ))}
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
