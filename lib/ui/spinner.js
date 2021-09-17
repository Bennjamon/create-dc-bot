import { DONE, ERROR } from "./prefixes.js";

const ball = ["|", "/", "-", "\\"];

function spinner(label) {
  let idx = 0;
  process.stdout.write(`${ball[idx]} ${label}`);
  const interval = setInterval(() => {
    idx++;
    if (idx > 3) idx = 0;
    process.stdout.write(`\r${ball[idx]} ${label}`);
  }, 100);
  return {
    stop(done = true, err = label) {
      process.stdout.write(`\r${done ? DONE : ERROR} - ${err}\n`);
      clearInterval(interval);
    },
  };
}

export default spinner;
