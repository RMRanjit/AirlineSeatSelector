// seating picked from : https://www.seatguru.com/airlines/American_Airlines/American_Airlines_Airbus_A320.php

export const  Config = [
  {
  "seatingClass": "First",
  "aisleWidth": "max",
  "color": "#454545",
  "seatColor": "#F0F0F0",
  "rowConfig": [{ 
    "row": 1,
    "seats": [
    {"seatNumber": "A","position": "1","seatType": "window", position: [-0.35,0,0.5], rotation: [-0.3,Math.PI,0], scale:[1.2,1.2,1], occupied: true},
    {"seatNumber": "C","position": "2","seatType": "aisle" , position:[0.35, 0, 0.5], rotation:[-0.3, Math.PI, 0], scale:[1.2,1.2,1], occupied: false},
    {"seatNumber": "D","position": "3","seatType": "aisle" , position:[1.60, 0, 0.5], rotation:[-0.3, Math.PI, 0], scale:[1.2,1.2,1], occupied: false},
    {"seatNumber": "F","position": "4","seatType": "window", position:[2.30, 0, 0.5], rotation:[-0.3, Math.PI, 0], scale:[1.2,1.2,1], occupied: true},
    ]
  },
  {
    "row": 2,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window", position: [-0.35,0,0.5], rotation: [-0.3,Math.PI,0], scale:[1.2,1.2,1], occupied: true},
      {"seatNumber": "C","position": "2","seatType": "aisle" , position:[0.35, 0, 0.5], rotation:[-0.3, Math.PI, 0], scale:[1.2,1.2,1], occupied: true},
      {"seatNumber": "D","position": "3","seatType": "aisle" , position:[1.60, 0, 0.5], rotation:[-0.3, Math.PI, 0], scale:[1.2,1.2,1], occupied: false},
      {"seatNumber": "F","position": "4","seatType": "window", position:[2.30, 0, 0.5], rotation:[-0.3, Math.PI, 0], scale:[1.2,1.2,1], occupied: true},
      ]
  },
  {
    "row": "3",
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window", position: [-0.35,0,0.5], rotation: [-0.3,Math.PI,0], scale:[1.2,1.2,1], occupied: true},
      {"seatNumber": "C","position": "2","seatType": "aisle" , position:[0.35, 0, 0.5], rotation:[-0.3, Math.PI, 0], scale:[1.2,1.2,1], occupied: true},
      {"seatNumber": "D","position": "3","seatType": "aisle" , position:[1.60, 0, 0.5], rotation:[-0.3, Math.PI, 0], scale:[1.2,1.2,1], occupied: false},
      {"seatNumber": "F","position": "4","seatType": "window", position:[2.30, 0, 0.5], rotation:[-0.3, Math.PI, 0], scale:[1.2,1.2,1], occupied: true},
      ]
  }]
},
{
  "seatingClass": "Business",
  "aisleWidth": "mid",
  "color": "#454545",
  "seatColor": "#F0F0F0",
  "rowConfig": [{ 
    "row": 4,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window", position: [-0.35,0,0.5], rotation: [0,Math.PI,0], scale:[1.2,1,1], occupied: true},
      {"seatNumber": "C","position": "2","seatType": "aisle" , position:[0.35, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1.2,1,1], occupied: true},
      {"seatNumber": "D","position": "3","seatType": "aisle" , position:[1.60, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1.2,1,1], occupied: true},
      {"seatNumber": "F","position": "4","seatType": "window", position:[2.30, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1.2,1,1], occupied: true},
      ]
  },
  {
    "row": 5,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window", position: [-0.35,0,0.5], rotation: [0,Math.PI,0], scale:[1.2,1,1], occupied: true},
      {"seatNumber": "C","position": "2","seatType": "aisle" , position:[0.35, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1.2,1,1], occupied: false},
      {"seatNumber": "D","position": "3","seatType": "aisle" , position:[1.60, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1.2,1,1], occupied: false},
      {"seatNumber": "F","position": "4","seatType": "window", position:[2.30, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1.2,1,1], occupied: true},
      ]
  },
  {
    "row": 6,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window", position: [-0.35,0,0.5], rotation: [0,Math.PI,0], scale:[1.2,1,1], occupied: false},
      {"seatNumber": "C","position": "2","seatType": "aisle" , position:[0.35, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1.2,1,1], occupied: false},
      {"seatNumber": "D","position": "3","seatType": "aisle" , position:[1.60, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1.2,1,1], occupied: false},
      {"seatNumber": "F","position": "4","seatType": "window", position:[2.30, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1.2,1,1], occupied: false},
      ]
  },
  {
    "row": 7,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window", position: [-0.35,0,0.5], rotation: [0,Math.PI,0], scale:[1.2,1,1], occupied: true},
      {"seatNumber": "C","position": "2","seatType": "aisle" , position:[0.35, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1.2,1,1], occupied: true},
      {"seatNumber": "D","position": "3","seatType": "aisle" , position:[1.60, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1.2,1,1], occupied: false},
      {"seatNumber": "F","position": "4","seatType": "window", position:[2.30, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1.2,1,1], occupied: true},
      ]
  },
]
},
{
  "seatingClass": "Economy",
  "aisleWidth": "mid",
  "rows": 8,
  "color": "#454545",
  "seatColor": "#F0F0F0",
  "rowConfig": [{ 
    "row": 7,
    "seats": [
    {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
    {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
    {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
    {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
    {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
    {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
    ]
  },
  {
    "row": 9,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      ]
  },
  {
    "row": 10,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
      ]
  },
  {
    "row": 11,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      ]
  },
  {
    "row": 12,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      ]
  },
  {
    "row": 13,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
      ]
  },
  {
    "row": 14,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      ]
  },
  {
    "row": 15,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      ]
  },
  {
    "row": 16,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      ]
  },
  {
    "row": 17,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
      ]
  },
  {
    "row": 18,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      ]
  },
  {
    "row": 19,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
      ]
  },
  {
    "row": 20,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: true},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      ]
  },
  {
    "row": 21,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      ]
  },
  {
    "row": 22,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      ]
  },
  {
    "row": 23,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      ]
  },
  {
    "row": 24,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      ]
  },
  {
    "row": 25,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      ]
  },
  {
    "row": 26,
    "seats": [
      {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      ]
  },
  {
    "row": 27,
    "seats": [
      // {"seatNumber": "A","position": "1","seatType": "window" , position:[-0.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "B","position": "2","seatType": "middle", position:[-0.1, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "C","position": "3","seatType": "aisle", position:[0.5, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "D","position": "4","seatType": "aisle" , position:[1.7, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      {"seatNumber": "E","position": "5","seatType": "middle", position:[2.3, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      // {"seatNumber": "F","position": "6","seatType": "window", position:[2.9, 0, 0.5], rotation:[0, Math.PI, 0], scale:[1,1,1], occupied: false},
      ]
  },
]
}
]