var age = prompt('Please enter your age');

		if (age>=18) {
	var a = prompt('Enter first number '),
		b = prompt('Enter second number '),
		value = (a * a) - (2 * a * b) + (b * b);
			if (value>0) {
		alert('(a * a) - (2 * a * b) + (b * b) value is ' + value + ', czyli wynik jest dodatni');
		console.log('a * a) - (2 * a * b) + (b * b) value for a= ' + a + ' and b= ' + b + ' is equal to: ' + value + ', czyli wynik jest dodatni');
			}
			else if (value<0){
		alert('(a * a) - (2 * a * b) + (b * b) value is ' + value + ', czyli wynik jest ujemny');
		console.log('a * a) - (2 * a * b) + (b * b) value for a= ' + a + ' and b= ' + b + ' is equal to: ' + value + ', czyli wynik jest ujemny');
			}
			else {
		alert('(a * a) - (2 * a * b) + (b * b) value is ' + value + ', czyli wynik jest równy zero');
		console.log('a * a) - (2 * a * b) + (b * b) value for a= ' + a + ' and b= ' + b + ' is equal to: ' + value + ', czyli wynik jest równy zero');
			}
		}
		else {
	alert('Sorry, this site is for adults only');
		}