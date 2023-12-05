//create a terminal clock (HH:MM:SS)
function terminalClock() {
  const date = new Date();
  const hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const displayHours = hours % 12 || 12;

  console.log(
    ` ${displayHours}:${date.getMinutes()}:${date.getSeconds()} ${ampm}`
  );
}

setInterval(terminalClock, 1000);
