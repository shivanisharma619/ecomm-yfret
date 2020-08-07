import React, { useEffect } from 'react';

export function Header() {

  const string = 'aACeEjc';
  console.log(string.split(''));

  useEffect(() => {
    const sol = solution(string);
    console.log('sol', sol);
  },[]);

  const solution = (string) => {
    const stringToArray = string.split('');
    const sortedArray = stringToArray.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    console.log('sortedArray', sortedArray);
    const array = [];
    let i = 0;
    for (;i < sortedArray.length; i++) {
    	console.log('before i', i);
    	console.log(sortedArray[i]);
    	console.log(sortedArray[i + 1]);
      if ((i < sortedArray.length - 1) && sortedArray[i].toLowerCase() == sortedArray[i + 1].toLowerCase()) { //0==1
      	array.push(sortedArray[i]);
        i = i + 1;
      }
    }

    console.log('array', array);


  }

  return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		  <a className="navbar-brand" id="heading" href="#">Yfret Assignment</a>
		</nav>     
  );
};
