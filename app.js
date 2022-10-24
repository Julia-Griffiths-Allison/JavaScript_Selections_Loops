console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++){
    if (i % 2 !=0) 
    {console.log(i);}
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <=100; i++) {
    if (i % 3 == 0 && i % 5 == 0)
    {console.log(`i: ${i} /t FIZZBUZZ`);
} else if (i % 3 == 0) {
    console.log(`i: ${i} /t FIZZ`);
} else if (i % 5 == 0) {
    console.log(`i: ${i} /t BUZZ`);
}
}

// 3)
let i = 1;
while (i <=100)
{
    if (i % 2 != 0)
    {console.log(i);}
    i++;
}

let j = 1;
do
   {if (j % 3 == 0 && j % 5 == 0)
    {console.log(`j: ${j} /t FIZZBUZZ`);}
    else if (j % 3 == 0)
    {console.log(`j: ${j} /t FIZZ`);}
    else 
    {console.log(`j: ${J}`);}
    j++;
   } while (j <= 100);

//4) 
let value = Math.round((Math.random() * 500));
// creates a random number between 0 and 500

let n = Math.round(Math.random() * (500 - 100) + 100);
// creates a random number between 100 and 500

let valueFound = false;

for (let i = 0; i < n; i++)
{
    if (i === value) 
    {console.log(`Found the value ${value}`);
    valueFound = true;
    break;}
}
if (!valueFound)
{
    console.log("Did not find it!");
}