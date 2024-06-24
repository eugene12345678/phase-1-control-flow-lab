function scuberGreetingForFeet(rideFeet) {
  if (rideFeet <= 400) {
    return 'This one is on me!';
  } else if (rideFeet > 2000 && rideFeet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (rideFeet > 2500) {
    return 'No can do.';
  } else {
    return 'That will be twenty bucks.';
  }
}
function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}