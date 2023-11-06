const age = Number(prompt('Скільки вам років?'));
const city = prompt('З якого ви міста?');

const ua = 'України';
const en = 'Лондона';
const usa = 'США';

if (city == 'Київ') {
	alert(`Вая! Тобі вже ${age} і ти досі живеш у столиці ${ua}?`);
} else if (city == 'Лондон') {
	alert(`Вам ${age}, і Ви живете у столиці ${en}.`);
} else if (city == 'Вашингтон') {
	alert(
		`Greetings, Mr. President! You're ${age} age piece of democracy from ${usa}!`
	);
} else {
	alert(`
	You're age: ${age}.
	You're city: ${city}
	`);
}

let bascketball = 'Bascketball';
const bascketballPlayer = 'Lebron James';

let football = 'Football';
const footballPlayer = 'Zineddin Zidan';

let racing = 'Racing';
const racer = 'Michael Schumacher';

const sportChoosing = prompt(
	`Pick one: ${bascketball}, ${football}, ${racing}`
);

if (bascketball == 'Bascketball') {
	alert(`So, you wanna b like ${bascketballPlayer}, honey?`);
} else if (football == 'Football') {
	alert(`Big power, it's a big responsibility. 
		  (c)${footballPlayer}

		 p.s.: Nah! It was a Peter Parkers uncle.`);
} else if (racing == 'Racing') {
	alert(`Wanna drive fast as ${racer}? Keep save)`);
} else {
	alert(`
	You're sport: ${sportChoosing}.
	`);
}


