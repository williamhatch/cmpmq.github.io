// examine the document object //
// console.dir(document)

function toPercentage (sum, total){
	return (Math.round(sum / total * 10000)/100 + "%")
}

// object, local storage???
const task = [
	{
		id: 0,
		name: 'Chinese articles',
		sum: 6,
		total: 222,
		percentage: 0,
		isCompleted: false,
		date: [],
		delta: [1,2,3],
		daverage: 0,
		dcurrent: 0
	},
	{
		id: 1,
		name: 'Maths Examples',
		sum: 11,
		total: 180,
		percentage: 0,
		isCompleted: false,
		date: [],
		delta: [10,1],
		daverage: 0,
		dcurrent: 0
	},
	{
		id: 2,
		name: 'Maths Exercises',
		sum: 0,
		total: 260,
		percentage: 0,
		isCompleted: false,
		date: [],
		delta: [0],
		daverage: 0,
		dcurrent: 0
	}
]

console.log(task)
let x = new Date().toDateString()
task[0].date[1] = new Date().toDateString()
console.log(x)

// getelementbyid
console.log(document.getElementById('tasks'))

// getelementbyclassname
// ul gets a [htmlcollection] - is an array
var taskNames = document.getElementsByClassName('task-name')
var progresses = document.getElementsByClassName('task-progress')
var taskDays = document.getElementsByClassName('task-day')
// console.log(taskNames)
// console.log(taskNames[1])
// taskNames[0].textContent = task[0].name

// let ltask = task.length // get object array length
// console.log(task[1].name)
// process and print data
for (var i = 0; i < task.length; i++){
	taskNames[i].textContent = task[i].name
	task[i].percentage = toPercentage(task[i].sum, task[i].total)
	progresses[i].textContent = `${task[i].sum} / ${task[i].total}; ${task[i].percentage}`
	let days = task[i].delta.length
	let aspeed = (task[i].sum - task[i].delta[0]) / (days - 1)
	task[i].daverage = Math.round((task[i].total - task[i].sum) / aspeed)
	
	let cspeed = task[i].delta[days - 1]
	task[i].dcurrent = Math.round((task[i].total - task[i].sum) / cspeed)
	taskDays[i].textContent = task[i].daverage + " 平均; " + task[i].dcurrent + " 当前"
}


console.log(task[0].delta)
console.log(task[0].date)