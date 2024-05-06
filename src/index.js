import React from 'react';
import { useEffect, useMemo, useRef, useState } from "react";	
import ReactDOM from 'react-dom/client';
import './App.css';
import chocolate from './data.js'
import * as d3 from "d3";

const root = ReactDOM.createRoot(document.getElementById('root'));

const createArrGraph =(data, minChart, maxChart)=>{
	
	let dataInterval = data.filter(function (d) {
		return (+d.review_date >= +minChart && +d.review_date <= +maxChart );
	})
	
	// заполнение массива точек для построения
	let arrGraph = []
	let groupObj = d3.group(dataInterval, d => d.review_date)
	for(let item of groupObj) {
		let minMax = d3.extent(item[1].map(d => d.cocoa_percent))
		arrGraph.push({labelX : item[0], values : minMax});
	}
	arrGraph.sort((a, b) => d3.ascending(a.labelX, b.labelX))
	return arrGraph;
}

const Chart = (props) =>{
	
	const axesRef = useRef(null);
	
	// ширина и высота области для вывода графиков
	const boundsWidth = props.width - props.margin.left - props.margin.right;
	const boundsHeight = props.height - props.margin.top - props.margin.bottom;
	
	// формируем шкалы для осей
	const scaleX = useMemo(() => {
		return d3
			.scaleLinear()
			.domain(d3.extent(props.data.map(d => d.labelX)))
			.range([0,boundsWidth]);
	}, [props.data, boundsWidth]);

	const scaleY = useMemo(() => {
		return d3
			.scaleLinear()
			.domain([0, 110])
			.range([boundsHeight, 0]);
	}, [boundsHeight]);
	
	// создаем область с осями и графиком с помощью d3
	useEffect(() => {
		
		const svgElement = d3.select(axesRef.current);
		svgElement.selectAll("*").remove();
		
		// рисуем оси
		let ticksX = []
		props.data.forEach((item, index) => {
			ticksX.push(item.labelX)
		});
		const xAxis = d3.axisBottom(scaleX);
		xAxis.tickFormat(d3.format(".0f"));
		xAxis.tickValues(ticksX)
		
		svgElement
			.append("g")
			.attr("transform", `translate(${props.margin.left}, ${props.height -
		props.margin.bottom})`)
			.call(xAxis)
			.selectAll("text")
			.style("text-anchor", "end")
			.attr("dx", "-.8em")
			.attr("dy", ".15em")
			.attr("transform", d => "rotate(-30)");
			
		const yAxis = d3.axisLeft(scaleY);
		
		svgElement
			.append("g")
			.attr("transform", `translate(${props.margin.left},
		${props.margin.top})`)
			.call(yAxis);
			
		//рисуем график
		const color = ["blue", "red"]
		const item = props.oy;

		// создание path
		let lineXY = d3.line()
			.x(d => scaleX(d[0]))
			.y(d => scaleY(d[1] + 16.5));
			
		svgElement
			.append("path") // добавляем путь
			.attr("id", "graph")
			.attr("transform", `translate(${props.margin.left}, ${props.margin.bottom})`)
			.style("stroke-width", "3")
			.style("stroke", color[item]);
			
		let pathArr = []
		for(let dataPoint of props.data) {
			let arrContents = [dataPoint.labelX, dataPoint.values[props.oy]]
			pathArr.push(arrContents)
		} 
			
		// отрисовка chart
		const path = svgElement
			.select("path#graph")
			.datum(pathArr)
			.attr("d", lineXY);
	
		const pathLength = path.node().getTotalLength();
	
		path
			.attr("stroke-dashoffset", pathLength)
			.attr("stroke-dasharray", pathLength)
			.transition()
			.ease(d3.easeLinear)
			.duration(1000)
			.attr("stroke-dashoffset", 0);
	}, [scaleX, scaleY, props.data, props.margin, props.height, props.oy]);
	
	return (
		<div>
			<svg width={props.width} height={props.height}>
				<g ref={axesRef} />
			</svg>
		</div>
	)
}

const SettingAndGraph =(props)=>{
	const margin = {top:10, bottom:60, left:40,right:10}
	const [arrGraph, createArr] = React.useState(createArrGraph(props.data, 2006, 2021));
	//при изменении значений по оси OX получаем данные для нового графика
	const [oxMin, setOxMin] = useState(2006);
	const [oxMax, setOxMax] = useState(2021);
	const [oy, setOy] = useState(0);
	const updateGraph = () => {
		createArr(createArrGraph(props.data, oxMin, oxMax));
	}
	const onChangeOxMin = (event) => {
		setOxMin(event.target.value);
		createArr(createArrGraph(props.data, event.target.value, oxMax));
	}
	const onChangeOxMax = (event) => {
		setOxMax(event.target.value);
		createArr(createArrGraph(props.data, oxMin, event.target.value));
	}
	const onChangeOy = (event) => {
		setOy(event.target.value);
		updateGraph();
	}
	return (
		<div>
			<form>
				<div>
					<p><b>Значение по оси OX:</b></p>
					<div>
						<label>review_date:</label><br/>
						<label for="ox_min" >From:</label>
						<input onChange={onChangeOxMin} id="ox_min" type="number" value={oxMin} min="2006" max="2021"/>
						<br/>
						<label for="ox_max" >To:</label>
						<input onChange={onChangeOxMax} id="ox_max" type="number" value={oxMax} min="2006" max="2021"/>
					</div>
				</div>
				<div>
					<p><b>Значение по оси OY:</b></p>
					<div onChange={onChangeOy}>
						<input id="oy_min" type="radio" name="oy" value="0" defaultChecked={ oy === 0 } />
						<label for="oy_min">Минимальный процент какао</label><br/>
						<input id="oy_max" type="radio" name="oy" value="1" defaultChecked={ oy === 1 } />
						<label for="oy_max">Максимальный процент какао</label>
					</div>
				</div>
			</form>
			<Chart width="800" height="400" margin={margin} data={arrGraph} oy={oy}/>
		</div>
	)
};


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
		<br/>
		<SettingAndGraph data={chocolate}/>
		</>
	)
}
root.render(<Content />)

/*
const element = <Glossary list={ gloss } />

root.render(element);
*/