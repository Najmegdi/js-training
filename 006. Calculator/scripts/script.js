const buttons = document.querySelectorAll('button')
const history = document.querySelector('.history')
const display = document.querySelector('.display')


function prettifyValue(value) {
	if (value === '') {
		return '0';
	}
	if (value.endsWith('.')) {
		return value + '0';
	}
	return value;
}

const operators = '+-×÷()=%';
const operatorsMap = {
	'Division': '÷',
	'Multiply': '×',
	'Minus': '-',
	'Plus': '+',
	'Equals': '=',
};

const state = {
	shouldClearHistory: true,
	history: [],
	__current_value: '',

	__updateDisplay() {
		display.innerHTML = prettifyValue(this.__current_value);
	},
	__updateHistory() {
		history.innerHTML = this.history.map((item) => {
			const className = operators.includes(item) ? 'operator' : 'value';

			return `<span class="${className}">${item}</span>`;
		}).join('');
	},

	get currentValue() {
		return this.__current_value;
	},
	set currentValue(newValue) {
		this.__current_value = newValue;

		this.__updateDisplay();
	},

	addToHistory(value, operator, clearNext = false) {
		if (this.shouldClearHistory) {
			this.history = [];
			this.shouldClearHistory = false;
		}

		this.history.push(value, operator);
		this.shouldClearHistory = clearNext;

		this.__updateHistory();

		// bia  history  ro bebinim
		console.log(this.history)
		// [1, '+', [3, '*', 7]]  => 1 + (3 * 7) che sakht benazar mirese:(  araye to dar to ro man faghat teori didam:(
		// kare sakhti  nist. albate   hanooz az in  kar motmaen nisttam
		// alan mitooni beri vase mohasebe kardan
		//man in araye to dar to ro benevisam?
		// na hanooz motmaen nistam. momkene nnatije nade.ahan faghat adad ro jam o zarb o ina konam?
		//  are. chand  ta  bug  ddarre . bartarafesh kon. bahash kar koni peydashoon  mikoni
		// va commit kon. hannooz hich committi nakhorded proje. az un ghesmate semte rast bala bayad commit konam are?
	},
	clearHistory() {
		this.history = [];

		this.__updateHistory();
	}
}

state.currentValue = '';

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const action = button.getAttribute('data-action');
		const [type, value] = action.split(' ');

		handleButton(type, value);
	})
})

function handleButton(type, value) {
	if (type === 'Digit'){
		handleDigit(value)
	}	else if (type === 'Operator'){
		handleOperator(value)
	}	else if (type === 'Action') {
		handleAction(value)
	} else {
		alert(`Invalid Action: '${type}'`)
	}
}

function handleDigit(value) {
	if (state.currentValue.length < 15) {
		if (value !== '0' || state.currentValue.length > 0) {
			state.currentValue += value
		}
	}
}

function handleOperator(value){
	const operator = operatorsMap[value];

	if ('+-×÷'.includes(operator) && state.currentValue !== '') {
		state.addToHistory(prettifyValue(state.currentValue), operator);
		state.currentValue = '';
	} else if (value === 'Equals') {
		state.addToHistory(prettifyValue(state.currentValue), operator, true);

		// TODO: Calculate

		state.currentValue = 'Natije';
	} else if (value === 'Parentheses') {
		// TODO
	} else if (value === 'Percent') {
		// TODO
	}
}

// nazaret? shegeft angize kare to. kare manam tu divar :))))
// BESIAR SAFAR BAYAD. TA POKHTE SHAVAD KHAAMI. DAGHIGHAN

function calc(currentValue , operate) {
	let value1 = ''
	let value2 = ''
	if (state.currentValue < 0) {
		value1 = state.currentValue
	} else {
		value2 = state.currentValue
	}
		if (value1 > '' && value2 > '') {
			console.log(value1 , value2)

			if (operate === `+`) {
				state.currentValue = value1 + value2
				console.log(state.currentValue)
			}
		}
	}



function handleAction(value){
	if (value === 'Clear'){
		if (state.currentValue.length > 0) {
			state.currentValue = '';
		} else {
			state.clearHistory();
		}
	} else if (value === 'Sign'){
		if (state.currentValue.startsWith('-')) {
			state.currentValue = state.currentValue.substring(1);
		} else {
			state.currentValue = '-' + state.currentValue;
		}
	} else if (value === 'Decimal') {
		if (state.currentValue.length === 0) {
			state.currentValue = '0.';
		} else if (!state.currentValue.includes('.')) {
			state.currentValue += '.';
		}
	}
}
