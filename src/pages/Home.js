import React from 'react';

function Home() {
  localStorage.setItem('title', 'my title');
  localStorage.setItem('title1', 'my title 1');

  const keys = localStorage.key(1);
  console.log(keys);

  console.log(localStorage.length);

  return <div>Home</div>;
}

export default Home;
