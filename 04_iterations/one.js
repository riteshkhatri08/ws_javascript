// for loop

for (let index = 0; index < 10; index++) {
  let element = index;
  console.log(element);
}
// console.log(element);

// break and continue
for (let index = 0; index < 10; index++) {
  if (index === 5) {
    continue;
  } else if (index === 7) {
    break;
  }

  let element = index;
  console.log(element);
}

/// while loop
let i = 0;
while (i < 10) {
  console.log(`value of index is ${i}`);
  i++;
}

// do while loop
do {
  console.log(`dowhile loop index is ${index}`);
  index++;
} while (index < 10);
