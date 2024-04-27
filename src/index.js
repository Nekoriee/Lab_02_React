/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import chocolate from './data.js'
const root = ReactDOM.createRoot(document.getElementById('root'));

/*
function InfoNumber(props) {
	const leng = (item) => item.toString().length;
	const isSquare = (item) => item.number % 2 == 0 ? "чётное": "нечётное";
	const getSquare = (item) => Math.pow(item.number, 2);
	
	return (
	<div>
		<p>Число <b>{props.number}</b></p>
		
		<ul>
		<li>количество символов - {leng(props.number)}</li>
		<li>число {isSquare(props.number)}</li>
		<li>полный квадрат числа {getSquare(props.number)}.</li>
		</ul>
	</div>
	)
}
const number = "225"
const element = <InfoNumber number={number} />;
*/
/*
function Temp(props) {
	const convert = (item) => item.type == "k" ? item.value - 273.15 : (item.value - 32) * 5/9 
	function press(item) {
		console.log("CLICK")
		alert(item.value + "°" + item.type.toUpperCase() + "= " + convert(item) + "°C")
	}
	return <button onClick={()=> press(props)}>{props.value + "°" + props.type.toUpperCase()}</button>;
}

function GetTemp(props) {
	return (
	<div>
		<p>Температура в Кельвинах - <Temp type="k" value={tempK} /></p>
		<p>Температура в Фаренгейтах - <Temp type="f" value={tempF} /></p>
	</div>
	)
}

const tempK = "225"
const tempF = "-22"
const element = <GetTemp valueK={tempK} valueF={tempF} />;
*/

/*
const gloss= [
	{"Переменная" :
	"Это идентификатор, используемый для хранения значений в памяти компьютера. Программист может присваивать и изменять значения переменных.",
	},
	{"Функция" : 
	"Это блок кода, который выполняет определенную операцию. Функции могут быть вызваны и использованы в различных частях программы."
	},
	{"Условное выражение" :
	"Это конструкция, которую используют программисты для выполнения разных операций, в зависимости от условий. Примером может быть оператор if-else."
	},
	{"Цикл" :
	"Это конструкция, позволяющая программе выполнять определенный блок кода многократно. Циклы могут быть контролируемыми или бесконечными, в зависимости от задачи."
	},
	{"Массив" :
	"Это структура данных, позволяющая хранить множество элементов одного типа. Элементы массива могут быть обращены по индексу."
	},
	{"Класс" :
	"Это шаблон или описание для создания объектов. Класс определяет свойства и методы, которые могут быть использованы объектами этого класса."
	},
	{"Объект" :
	"Это экземпляр класса, который имеет свои собственные значения свойств и может вызывать методы, определенные в классе."
	},
	{"Интерфейс" :
	"Это контракт, определяющий набор методов, которые класс должен реализовать. Интерфейсы позволяют определить стандартизацию взаимодействия."
	},
	{"Рекурсия" :
	"Это процесс, когда функция вызывает саму себя. Рекурсия может быть полезна для решения задач, которые могут быть разделены на более простые подзадачи."
	},
	{"Стек" :
	"Это структура данных, работающая по принципу “последний пришел, первый ушел” (Last-In-First-Out, LIFO). Элементы добавляются и удаляются только с одного конца стека."
	},
	{"Очередь" :
	"Это структура данных, работающая по принципу “первый пришел, первый ушел” (First-In-First-Out, FIFO). Элементы добавляются в конец очереди, а извлекаются из начала."
	},
	{"Рекурсивный алгоритм" :
	"Это алгоритм, который использует рекурсию для решения задачи. Например, алгоритмы обхода деревьев часто используют рекурсивные вызовы."
	},
	{"SQL" :
	"Это язык программирования, используемый для управления и манипулирования реляционными базами данных."
	},
	{"API" :
	"Это интерфейс, предоставляемый программным обеспечением для взаимодействия с другими программами или компонентами."
	},
	{"GIT" :
	"Это распределенная система контроля версий, используемая для отслеживания изменений в кодовой базе и управления совместной разработкой."
	},
	{"IDE" :
	"Это программное обеспечение, которое облегчает разработку, отладку и тестирование программ."
	},
	{"Отладка" :
	"Это процесс исследования и исправления ошибок в программном коде. Отладка может включать использование специальных инструментов для поиска и исправления ошибок."
	},
	{"Алгоритм" :
	"Это последовательность шагов, выполняемых для решения задачи или выполнения определенной операции. Алгоритмы используются для решения различных задач программирования."
	},
	{"Исключение" :
	"Это объект, который представляет ошибку или необычную ситуацию, возникающую во время выполнения программы. Исключения позволяют программе обрабатывать ошибки и делать ее более надежной."
	},
	{"База данных" :
	"Это организованное хранилище данных, где информация сохраняется и управляется. Базы данных используются для эффективного хранения и извлечения информации."
	},
	{"Индекс" :
	"Это структура данных, которая упорядочивает значения в базе данных, чтобы ускорить поиск и извлечение данных."
	},
	{"Асинхронное программирование" :
	"Это подход к написанию программ, где задачи выполняются параллельно и независимо друг от друга. Асинхронное программирование позволяет создавать отзывчивые и эффективные приложения."
	},
	{"Поток" :
	"Это отдельный путь выполнения внутри программы. Потоки позволяют параллельно выполнять несколько задач и улучшить общую производительность приложения."
	},
	{"Распределенные системы" :
	"Это системы, в которых компьютерные ресурсы и задачи распределены по нескольким компьютерам или узлам сети. Распределенные системы позволяют повысить масштабируемость и отказоустойчивость приложений."
	},
	{"REST" :
	"Это архитектурный стиль разработки веб-сервисов, который использует стандартные протоколы HTTP для обмена данными между клиентом и сервером."
	},
	{"MVC" :
	"Это паттерн архитектуры программного обеспечения, который разделяет приложение на три основных компонента: модель, представление и контроллер. MVC позволяет улучшить структуру кода и упростить разработку приложений."
	},
	{"Хэширование" :
	"Это процесс преобразования данных фиксированной длины в хэш-значение фиксированного размера. Хэширование используется для уникальной идентификации данных и быстрого поиска."
	},
	{"Битовые операции" :
	"Это операции, которые выполняются над индивидуальными битами чисел. Битовые операции полезны для манипуляции с флагами и битовыми полями."
	},
	{"Рефакторинг" :
	"Это процесс изменения структуры и организации кода, чтобы сделать его более понятным, поддерживаемым и эффективным, тем не менее, без изменения его функциональности."
	},
	{"Управление памятью" :
	"Это процесс управления выделением и освобождением памяти во время выполнения программы. Управление памятью важно для эффективного использования ресурсов и предотвращения утечек памяти."
	},
	{"Десериализация" :
	"Это процесс преобразования сериализованных данных в исходный формат. Десериализация используется для восстановления объектов из данных, сохраненных или переданных по сети."
	},
	{"Регулярные выражения" :
	"Это последовательности символов, которые задают шаблон для поиска и сопоставления текста. Регулярные выражения широко используются для обработки и анализа строковых данных."
	},
	{"Сортировка" :
	"Это процесс упорядочивания элементов в заданном порядке. Существует множество алгоритмов сортировки, таких как сортировка пузырьком, сортировка вставками и быстрая сортировка."
	},
	{"Шаблон проектирования" :
	"Это повторяемое решение для общей проблемы в разработке программного обеспечения. Шаблоны проектирования помогают создавать гибкий, расширяемый и удобочитаемый код."
	},
	{"NoSQL" :
	"Это подход к хранению и обработке данных, который не использует традиционные реляционные базы данных. Базы данных NoSQL обладают гибкой схемой данных и масштабируемостью для работы с большими объемами информации."
	},
	{"ООП" :
	"Это методология программирования, в которой программы структурированы вокруг объектов, которые представляют реальные или абстрактные сущности. ООП позволяет создавать модульный, переиспользуемый и расширяемый код."
	},
	{"JSON" :
	"Это формат обмена данными, основанный на синтаксисе JavaScript. JSON часто используется для передачи данных между клиентской и серверной сторонами приложений."
	},
	{"Компиляция" :
	"Это процесс преобразования исходного кода программы в машинный код, который может быть выполнен компьютером. Компиляция обычно производится перед запуском программы."
	},
	{"Виртуализация" :
	"Это технология, которая позволяет работать нескольким операционным системам или приложениям на одном компьютере или сервере. Виртуализация повышает эффективность использования ресурсов и упрощает управление системами."
	},
	{"Криптография" :
	"Это область науки, которая занимается защитой информации путем шифрования и дешифрования данных. Криптография используется, например, для обеспечения безопасности в сети или защиты данных."
	},
	{"Эмуляция" :
	"Это процесс создания программного или аппаратного средства, которое имитирует поведение другого устройства или программы. Эмуляция позволяет запускать программы или игры на различных платформах."
	},
	{"CDN" :
	"Это сеть серверов, расположенных в разных местах мира, для ускорения доставки контента пользователю. CDN позволяет уменьшить задержку и повысить производительность при работе с веб-сайтами или приложениями."
	},
	{"Deadlock" :
	"Это ситуация, когда два или более потоков программы блокируют друг друга и не могут продолжить выполнение. Deadlock может привести к зависанию и некорректной работе программы."
	},
	{"Модульное тестирование" :
	"Это процесс проверки отдельных модулей или функций в программе для обеспечения корректности их работы. Модульные тесты являются важной частью процесса разработки ПО."
	},
	{"Нотация большого O" :
	"Это способ оценки производительности алгоритмов в терминах времени выполнения и использования ресурсов. Нотация большого O помогает программистам анализировать и сравнивать эффективность алгоритмов."
	},
	{"Многопоточность" :
	"Это возможность программы выполнять несколько потоков параллельно. Многопоточность улучшает производительность, позволяя выполнить параллельные задачи."
	},
	{"SIMD" :
	"Это техника параллельной обработки данных, которая позволяет одновременно выполнять одну инструкцию над несколькими элементами данных. SIMD используется для ускорения выполнения вычислений, таких как обработка изображений и аудио."
	},
	{"ORM" :
	"Это техника программирования, которая обеспечивает автоматическое сопоставление и взаимодействие между объектно-ориентированным кодом и реляционной базой данных."
	},
	{"Инкапсуляция" :
	"Это принцип объектно-ориентированного программирования, который объединяет данные и методы, работающие с этими данными, внутри класса. Инкапсуляция обеспечивает контролируемый доступ и скрытие данных."
	}
]
*/

/*
class CreateRange extends React.Component {
	state = {
		str: '',
		number: +this.props.number,
		step: +this.props.step
	};
	
	incNumber = () => {
		this.setState(({ number }) => ({number: number + this.state.step }));
		this.setState(({ str }) => ({str: str + ' ' + this.state.number }));
	};
	render() {
		return (
		<div>
			<p>
			{this.state.str + ' ' + this.state.number.toString() + ' '}
			<span onClick={this.incNumber}>...</span>
			</p>
		</div>
	);
}
}

const element = <CreateRange number='10' step='3' />
*/

/*
function Glossary(props) {
	
	const listDl = props.list.map((term, index) =>
		<dt key={index.toString()}>
			{index.toString()}
		</dt>
		<dd>
			{index.toString()}
		</dd>
	);
	

	return {
		<>
			<dl>
			{listDl}
			</dl>
		</>
	}
}
*/

/*
function GlossaryHead(props) {
	const handleClick = (event) => {
		props.updateActivePage(event.target.innerHTML.trim());
	}
	let headArr = props.list.map((item) =>
		Object.keys(item)[0][0].toUpperCase());
	headArr = [... new Set(headArr)].sort();
	const head = headArr.map ((item, index) => <span key={index + '_h'} onClick={handleClick}
		className={item === props.activePage ? "active": ""}> {item} </span>);
	return (
		<div>
			{head}
		</div>
	);	
}

function Glossary(props) {
	
	const [activePage, setActivePage] = React.useState("И");
	const updateActivePage = (value) => setActivePage(value);
	
	let arr = props.list.filter(item => Object.keys(item)[0][0].toUpperCase() === activePage);
	
	const sortArr =(a, b)=> Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1;
	arr = arr.sort(sortArr);
	
	const listDl = arr.map((item, index) =>
		<>
		<dt key={index + '_k'}>
			{Object.keys(item)}
		</dt>
		<dd key={index + '_v'}>
			{Object.values(item)}
		</dd>
		</>
	);
	
	return (
	<>
		<GlossaryHead list={props.list}
			updateActivePage={updateActivePage} activePage={activePage}/>
		<dl>
			{listDl}
		</dl>
	</>
	)
}
*/

const Input = (props) => {
	const [value, setValue] = React.useState('');
	const [sortType, setSortType] = React.useState('asc');
	const sortFields = props.sortFields;
	
	const handleUpdate = () => {
		let clone = Object.assign(props.filterValues);
		let cloneSort = Object.assign(props.sortValues);
		let arr = props.data;
		for(const key in clone) {
			let keyEnd = key.substr(key.length - 2)
			if (keyEnd !== 'fr' && keyEnd !== 'to') {
			arr = arr.filter(item =>
					item[key].toString().toLowerCase().includes(clone[key]));
			}
			else if(keyEnd == 'fr' && clone[key] != '') {
				let keyTrue = key.substring(0, key.length - 3);
				arr = arr.filter(item =>
					+item[keyTrue] >= +clone[key]);
			}
			else if(keyEnd == 'to' && clone[key] != '') {
				let keyTrue = key.substring(0, key.length - 3);
				arr = arr.filter(item =>
					+item[keyTrue] <= +clone[key]);
			}	
		}
		
		arr.sort((a, b) => {
			let iS = 0
			let bContinue = true
			while (bContinue) {
				if (cloneSort[iS]["field"] != '') {
				let aField = NaN;
				let bField = NaN;
				let sToUpper = '';
				if (cloneSort[iS]["field"] == 'company_manufacturer') sToUpper = '.toUpperCase()'
				
				if (cloneSort[iS]["type"] == 'desc') {
					aField = 'b.' + cloneSort[iS]["field"] + sToUpper
					bField = 'a.' + cloneSort[iS]["field"] + sToUpper
				}
				else {
					aField = 'a.' + cloneSort[iS]["field"] + sToUpper
					bField = 'b.' + cloneSort[iS]["field"] + sToUpper
				}
				if (eval(aField + ' < ' + bField)) {
					bContinue = false;
					return -1;
				}
				else if (eval(aField + ' > ' + bField)) {
					bContinue = false;
					return 1;
				}
				}
				iS += 1;
				if (iS == cloneSort.length) bContinue = false
			}
		});
		return arr;
	}
	
	const handleFilterChange = (event) => {
		const val = event.target.value;
		setValue(val);
		
		// клонируем состояние полей формы
		let clone = Object.assign(props.filterValues);
		//сохраняем значение поля
		clone[props.head] = val.toLowerCase();
		//фильтруем данные по значениям всех полей формы
		let arr = handleUpdate();
		
		// передаем родительскому компоненту новое состояние полей фильтрации
		props.updateFilters(clone);
		
		//передаем родительскому компоненту новое состояние - отфильтрованный массив
		props.filtering(arr);
	}
	
	const changeSortField = (event) => {
		console.log('field changed!');
		// клонируем состояние полей формы
		let cloneSort = Object.assign(props.sortValues);
		const val = event.target.value;
		setValue(val);
		cloneSort[props.head]["field"] = val.toLowerCase();
		// передаем родительскому компоненту новое состояние полей фильтрации
		props.updateSort(cloneSort);
	}
	
	const changeSortType = () => {
		console.log('type changed!');
		// клонируем состояние полей формы
		let cloneSort = Object.assign(props.sortValues);
		if (sortType == 'asc') {
			cloneSort[props.head]["type"] = 'desc';
			setSortType('desc');
		}
		
			
		else {
			cloneSort[props.head]["type"] = 'asc';
			setSortType('asc');
		}
			
			
		
		// передаем родительскому компоненту новое состояние полей фильтрации
		props.updateSort(cloneSort);
	}
	
	const handleSortChange = () => {
		//фильтруем данные по значениям всех полей формы
		let arr = handleUpdate();
		
		//передаем родительскому компоненту новое состояние - отфильтрованный массив
		props.filtering(arr);
	}
	
	const getValue = () => {
		if (props.value != '')
			return value;
		else {
			return '';
		}
	}
	
	const getSelected = (sField) => {
		//console.log("SELECTED_TRY: " + sField)
		//console.log("SELECTED_ACTUAL: " + getValue())
		//console.log(sField == getValue());
		if (sField == getValue()) return true
		return false
	}
	
	if (props.type != 'sort') {
		return (
			<p>
			<label for={props.head}>{props.head}:</label>
			<input
				id={props.head}
				type={props.type}
				value={getValue()}
				onChange={handleFilterChange}
				min={props.min}
				max={props.max}
			/>
			</p>
		)
	}
	else {
		if (props.head == props.sortFields.length - 1) {
			return (
				<p>
				<label>Сортировка {props.head}:</label>
				<select onChange={changeSortField}>
					<option value="" selected={getSelected('')}>нет</option>
					<option value={sortFields[0]} selected={getSelected(sortFields[0])}>{sortFields[0]}</option>
					<option value={sortFields[1]} selected={getSelected(sortFields[1])}>{sortFields[1]}</option>
					<option value={sortFields[2]} selected={getSelected(sortFields[2])}>{sortFields[2]}</option>
				</select>
				<br/>
				<label for={'sortType_' + props.head}>Нисходящая:</label>
				<input id={'sortType_' + props.head} type='checkbox' onChange={changeSortType}/>
				<br/><br/>
				<input type='button' onClick={handleSortChange} value='Применить сортировку'/>
				</p>
			)			
		}
		else {
			return (
				<p>
				<label>Сортировка {props.head}:</label>
				<select onChange={changeSortField}>
					<option value="" selected={getSelected('')}>нет</option>
					<option value={sortFields[0]} selected={getSelected(sortFields[0])}>{sortFields[0]}</option>
					<option value={sortFields[1]} selected={getSelected(sortFields[1])}>{sortFields[1]}</option>
					<option value={sortFields[2]} selected={getSelected(sortFields[2])}>{sortFields[2]}</option>
				</select>
				<br/>
				<label for={'sortType_' + props.head}>Нисходящая:</label>
				<input id={'sortType_' + props.head} type='checkbox' onChange={changeSortType}/>
				</p>
			)
		}
	}
	
}

const Filter = (props) => {
	// начальное значение состояния для хранения значений полей фильтров
	const begState = {
		"company_manufacturer":'',
		"company_location": '',
		"country_of_bean_origin": '',
		"specific_bean_origin_or_bar_name": '',
		"ingredients": '',
		"most_memorable_characteristics": '',
	};
	const begStateNumbers = {
		"review_date_fr": [2006, 2021],
		"review_date_to": [2006, 2021],
		"cocoa_percent_fr": [0, 100],
		"cocoa_percent_to": [0, 100],
		"rating_fr": [0.0, 5.0],
		"rating_to": [0.0, 5.0],
	};
	const begSortState = [
		{
			"head": "0",
			"field": "company_manufacturer",
			"type": "asc",
		},
		{
			"head": "1",
			"field": "",
			"type": "",
		},
		{
			"head": "2",
			"field": "",
			"type": "",
		}
	];
	
	const sortFields = ["company_manufacturer", "review_date", "cocoa_percent"]
	
	// состояние для хранения значений полей фильтров
	const [filterValues, setFilterValues] = React.useState(begState);
	const [sortValues, setSortValues] = React.useState(begSortState);
	
	// функция для обновления состояния
	const updateFilter = (value) => setFilterValues(value)
	const updateSort = (value) => {setSortValues(value); console.log(value);}
	
	const handleReset = () => {
		updateFilter(begState)
		updateSort(begSortState)
		props.filtering(props.data);
	}
	
	const listInputs = (Object.keys(begState)).map((item) =>
		<>
		<Input type="text" head={item}
				filtering={props.filtering} data={props.data}
				updateFilters={updateFilter} filterValues={filterValues}
				sortValues={sortValues}
				value={filterValues[item]}
		/>
		</>
	);
	const listInputsNumbers = (Object.keys(begStateNumbers)).map((item) =>
		<>
		<Input type="number" head={item}
				min={begStateNumbers[item][0]}
				max={begStateNumbers[item][1]}
				filtering={props.filtering} data={props.data}
				updateFilters={updateFilter} filterValues={filterValues}
				sortValues={sortValues}
				value={filterValues[item]}
		/>
		</>
	);
	const listInputsSort = begSortState.map((item) =>
		<>
		<Input type="sort" head={item["head"]}
				filtering={props.filtering} data={props.data}
				filterValues={filterValues}
				updateSort={updateSort}
				sortValues={sortValues}
				sortFields={sortFields}
				value={item["field"]}
		/>
		</>
	);
	
	return (
		<form>
			{listInputs}
			{listInputsNumbers}
			{listInputsSort}
			<button type="reset" onClick={handleReset}>Очистить фильтры и сортировку</button>
		</form>
	)
}

const TableHead = (props) => {
	return (
		<thead>
			<tr>
				<TableRow row={props.head} isHead="1"/>
			</tr>
		</thead>
	)
}

const TableRow = (props) => {
	const cells = (props.isHead == "0")
		? props.row.map((item, index) => <td key={index}> {item} </td>)
		: props.row.map((item, index) => <th key={index}> {item} </th>);
	return(
		<>
		{cells}
		</>
	)
}

const TableBody = (props) => {
	
	// индексы строк, которые нужно вывести
	const begRange = (props.numPage - 1) * props.amountRows;
	const endRange = begRange + Number(props.amountRows);
	
	//let arr = props.body.filter(item => Object.keys(item)[0][0].toUpperCase() === activePage);
	let arr = props.body
	//console.log(arr[0]['company_manufacturer'])
	//const sortArr = (a, b) => a['company_manufacturer'] > b['company_manufacturer'] ? 1 : -1;
	//arr = arr.sort(sortArr);
	
	if (typeof arr[0] !== 'undefined') {
		const tbody = arr.map((item, index) =>
		<tr key={index} className={
			(index >= begRange && index < endRange) ? "show" : "hide"
		}>
		<TableRow row={Object.values(item)} isHead="0"/>
		</tr>
		);
		return (
			<tbody>
			{tbody}
			</tbody>
		)
	}
	return (<></>)
}

const Table = (props) => {
	
	const [dataTable, setDataTable] = React.useState(props.data);
	const updateDataTable = (value) => setDataTable(value)
	
	const [activePage, setActivePage] = React.useState("1");
	const changeActive = (event) => {
		setActivePage(event.target.innerHTML);
	};
	
	//количество страниц разбиения таблицы
	const n = Math.ceil(props.data.length / props.amountRows);
	// массив с номерами страниц
	const arr = Array.from({ length: n }, (v, i) => i + 1);
	//формируем совокупность span с номерами страниц
	const pages = arr.map((item, index) =>
		<span onClick = {changeActive} className={item == activePage ? "active": ""}> {item}</span>
	);
	
	return(
	<>
		<h4>Фильтры и сортировка</h4>
		<Filter filtering={updateDataTable} data={props.data}/>
		<h3>Список компаний</h3>
		<table>
			<TableHead head={Object.keys(props.data[0])} />
			<TableBody body={dataTable} amountRows={props.amountRows}
				numPage={activePage}/>
		</table>
		<div>
			{pages}
		</div>
	</>
	)
}

function Content() {
	return(
		<>
		<Table data={chocolate} amountRows="15" />
		</>
	)
}
root.render(<Content />)

/*
const element = <Glossary list={ gloss } />

root.render(element);
*/