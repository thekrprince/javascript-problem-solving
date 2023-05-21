/*
Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

link - https://leetcode.com/problems/sleep/?utm_campaign=PostD11&utm_medium=Post&utm_source=Post&gio_link_id=5Rp2Wmzo
*/

async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t));
sleep(200).then(() => console.log(Date.now() - t));
