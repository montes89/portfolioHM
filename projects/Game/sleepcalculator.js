const getSleepHours = day => {

	switch(day) {
		case 'monday':
			return 8
			break;
		case 'tuesday':
			return 8
			break;
		case 'wednsday':
			return 8
			break;
		case 'thursday':
			return 8
			break;
		case 'friday':
			return 8
			break;
		case 'saturday':
			return 7
			break;
		case 'sunday':
			return 8
			break;
		default:
		return "Error"

	}
};

const getActualSleepHours = () =>
	getSleepHours('monday') + getSleepHours('tuesday') +
    getSleepHours('wednsday') + getSleepHours('thursday') +
	getSleepHours('friday') + getSleepHours('saturday') +
	getSleepHours('sunday');


const getIdealSleepHours = () => {
	let idealHours = 8;
	return idealHours * 7;
}

const calculateSleepDebt = () => {
	const actualSleepHours = getActualSleepHours();
	const idealSleepHours = getIdealSleepHours();

  console.log(actualSleepHours);
  console.log(idealSleepHours);

	if(actualSleepHours === idealSleepHours) {
		console.log('you got the perfect amount of sleep!');
	} else if(actualSleepHours > idealSleepHours) {
		console.log('you got ' + (idealSleepHours - actualSleepHours) + ' more hours this week!');
	}
  else if (actualSleepHours < idealSleepHours) {
		console.log('you should get some rest because you slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you should have this week!');
	}
  else {
		console.log("Error! Somthing went wrong");
	}
}

calculateSleepDebt();
