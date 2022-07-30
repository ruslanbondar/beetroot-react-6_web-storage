import React from 'react';

function Home() {
  localStorage.setItem('title', 'my title');
  localStorage.setItem('title1', 'my title 1');

  const key = localStorage.key(1);
  console.log(key);

  console.log(localStorage.length);

  return <div>Home</div>;
}

export default Home;
