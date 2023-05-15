# Terribly Tiny Tales Assignment

## Deployment Link:
[Deployment Link](https://terribly-tiny-tales-assignment-nine.vercel.app/)

## About:
This project is developed using **React JS** and has two components. 

First,```App.js``` is used as the main component for fetching the data using **fetch** from the given API i.e. (https://www.terriblytinytales.com/test.txt) and selecting top 20 words with most occurrences.

Here, **{useState}** Hook is used to track the state of `ans` variable which is an array of objects, used as a prop to the ```<Histogram/>``` component.

Second component is ```<Histogram/>``` which is developed using **recharts** library. All the words with the count of occurrences are displayed in the form of histogram here.

After this, to export this data to CSV format, I have used **react-csv** library.