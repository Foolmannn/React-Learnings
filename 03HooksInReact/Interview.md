  const addValue1 = () => {
    console.log(count, Math.random());
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

above code in app.jsx

Comman thinking is that counter = 0 then on click it will become 4 .

But the actual update will occur just like a single setcount was done . 
So only one time the update will occur. 
This happens because the setState hook update the state in batches . Ie when multiple same update of the state is done useState will update the same update only once . 

  const addValue1 = () => {
    console.log(count, Math.random());
    setCount(count + 1);
    setCount(count + 2);

  };
  // now what will happen is the last setter function will work so the coutner will be updated by 2 only not 3 


IF we need to update the state multiple times: then we need to do this 


  const addValue1 = () => {  //count=0
    console.log(count, Math.random());
    setCount(count + 1);   // 1
     setCount((prevCounter)=> prevCounter +1 ); //2
     setCount((prevCounter)=> prevCounter +1 );  //3
     setCount((prevCounter)=> prevCounter +1 ); //4
     setCount((prevCounter)=> prevCounter +1 ); //5
    
  };
  so count will increase by 5 each time 
  so output will be 0,5,10,15,20 ....

  Here prevCounter is just the name the setter function expects the call back with the prvious value of the state . 