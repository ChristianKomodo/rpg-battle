// const actors = [
// 	{ first: 'Jack', last: 'Nicholson' },
// 	{ first: 'Robert', last: 'De Niro' },
// 	{ first: 'Tom', last: 'Hanks' },
// 	{ first: 'Marlon', last: 'Brando' },
// 	{ first: 'Leonardo', last: 'DiCaprio' },
// 	{ first: 'Humphrey', last: 'Bogart' },
// 	{ first: 'Johnny', last: 'Depp' }
// ];
// const fullNames = actors.map(actor => `${actor.first} ${actor.last}`);
// console.table(fullNames);

const enemies = [
	{ name: 'Fire Sprite', bow: 2, blade: 3, staff: 4 },
	{ name: 'Highland Ogre', bow: 4, blade: 2, staff: 3 },
	{ name: 'Lowland Goblin', bow: 3, blade: 2, staff: 4 },
	{ name: 'Eastern Dragonling', bow: 4, blade: 3, staff: 2 }
];

let player = {
	name: 'hero',
	hp: 20,
	weaponName: 'Wooden Bow',
	weaponType: 'bow',
	weaponBonus: 0,
	saying: 'Have at you!'
}

// Variables
let enemy = {};
const action = document.getElementById('action');
const hpBox = document.getElementById('hp-box');
let hp = document.getElementById('hp');
let weaponName = document.getElementById('weapon-name');
let weaponType = document.getElementById('weapon-type');
let weaponBonus = document.getElementById('weapon-bonus');
let enemyName = document.getElementById('enemy-name');
let enemyHP = document.getElementById('enemy-hp');
let enemyStats = document.getElementById('enemy-stats');
const getEnemyButton = document.getElementById('get-enemy-btn');
const strikeButton = document.getElementById('strike-btn');

const getRandomNum = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(getRandomNum(1, 6));


const getEnemy = function () {
	if (enemies.length) {
		const enemyIndex = getRandomNum(0, enemies.length - 1);
		enemy = enemies[enemyIndex];
		action.innerHTML = `${enemy.name} is approaching!`;
		enemyName.innerHTML = enemy.name;
		enemyStats.innerHTML = `
			<strong>Bow:</strong> ${enemy.bow}<br>
			<strong>Blade:</strong> ${enemy.blade}<br>
			<strong>Staff:</strong> ${enemy.staff}
		`;
	} else {
		action.innerHTML = `No more enemies!`;
	}
}
// getEnemy();

const setHP = function(newHP) {
	player.hp = newHP;
	// const allClasses = ['alert-success', 'alert-info', 'alert-warning', 'alert-danger'];
	// remove all classes (from array list) using spread syntax:
	// hpBox.classList.classList.remove(...allClasses);
	hpBox.classList = 'alert';
	if (newHP >= 20) {
		hpBox.classList.add('alert-success');
	} else if (newHP < 20 && newHP > 5) {
		hpBox.classList.add('alert-info');
	} else if (newHP <= 5) {
		hpBox.classList.add('alert-danger');
	}
}

const strike = function () {
	strikeButton.classList.add('disabled');
	action.innerHTML = `${player.saying}  You hit the ${enemy.name} with ${player.weaponName}!`;
}
// strike();

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Set up game state
hp.innerHTML = player.hp;
weaponName.innerHTML = player.weaponName;
weaponType.innerHTML = capitalizeFirstLetter(player.weaponType);
weaponBonus.innerHTML = player.weaponBonus;
setHP(player.hp);