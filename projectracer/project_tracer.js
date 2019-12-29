// examine the document object //
// console.dir(document)

function toPercentage (sum, total){
	return (Math.round(sum / total * 10000)/100 + "%")
}

// object, local storage???
const task = [
	{
		name: 'Chinese articles',
		sum: 3,
		total: 222,
		percentage: 0,
		isCompleted: false,
		date: [],
		delta: [1,2],
		daverage: 0,
		dcurrent: 0
	},
	{
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

// getelementbyid
// console.log(document.getElementById('tasks'))

// create element in html
function createTask(){
	var newDiv = document.createElement('div')
	newDiv.className = "task-item"
	// var newDivText = document.createTextNode('New Task')
	// newDiv.appendChild(newDivText)
	var taskList = document.getElementById('tasks')		// location
	taskList.appendChild(newDiv)		// add child
	
	var newSpan = document.createElement('span')
	newSpan.className = "task-name"
	var newSpanText = document.createTextNode('New Task')
	newSpan.appendChild(newSpanText)
	newDiv.appendChild(newSpan)
	
	// input delta
	var newInputPlus = document.createElement('input')
	newInputPlus.type = 'button'
	newInputPlus.value = '新进度'
	newInputPlus.className = 'task-progress-button'
	// newInputPlus.onclick = 'addProgress()'		// onclick is not working; addEventListen
	newDiv.appendChild(newInputPlus)
	
	var newInputSum = document.createElement('input')
	newInputSum.type = 'button'
	newInputSum.value = '总进度'
	newInputSum.className = 'task-overall-button'
	newDiv.appendChild(newInputSum)
	
	var newInputDetail = document.createElement('input')
	newInputDetail.type = 'button'
	newInputDetail.value = '···'
	newInputDetail.className = 'task-detail'
	newDiv.appendChild(newInputDetail)
	
	var newlist = document.createElement('ul')
	newDiv.appendChild(newlist)
	
	var newlipro = document.createElement('li')
	newlipro.className = "task-progress"
	var newliproText = document.createTextNode('sum / total; Current Percentage')
	newlipro.appendChild(newliproText)
	newDiv.appendChild(newlipro)
	
	var newliday = document.createElement('li')
	newliday.className = "task-day"
	var newlidayText = document.createTextNode('xd 平均; yd 当前')
	newliday.appendChild(newlidayText)
	newDiv.appendChild(newliday)
}

function TaskWrite(i){
	// getelementbyclassname
	// ul gets a [htmlcollection] - is an array
	var taskNames = document.getElementsByClassName('task-name')
	var progresses = document.getElementsByClassName('task-progress')
	var taskDays = document.getElementsByClassName('task-day')
	 // console.log(taskNames)
	// console.log(taskNames[1])
	// taskNames[0].textContent = task[0].name
	
	// objects of arrays	// overwrite HTML
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

// let ltask = task.length // get object array length
// console.log(task[1].name)
// process and print data
// let addbool = [true]
for (var i = 0; i < task.length; i++){
	createTask()
	TaskWrite(i)
	// addbool[i] = true
}

// console.log(task[0].delta)
// console.log(task[0].date)

var taskNum = document.getElementsByClassName('task-item').length
console.log(document.getElementsByClassName('task-item'))
console.log(taskNum)

// console.log(newDiv)

// button onclick
function submitTask(){
	console.log('function submit')
	var taskname = document.getElementById('taskname').value
	var totalamount = document.getElementById('totalamount').value
	var sumamount = document.getElementById('sumamount').value
	task.push({
		name: taskname,
		sum: sumamount,
		total: totalamount,
		percentage: 0,
		isCompleted: false,
		date: [],
		delta: [sumamount],
		daverage: 0,
		dcurrent: 0
	})
	
	
	if(taskname != '' && totalamount!='' && sumamount!=''){
		//console.log('UNDEFINED')
		createTask()
		// console.log(taskNum)
		TaskWrite(taskNum)
		taskNum = document.getElementsByClassName('task-item').length	//taskNum ++
		console.log(taskNum)
		
		document.getElementById('taskname').value = ''
		document.getElementById('totalamount').value = ''
		document.getElementById('sumamount').value = '0'
	} 
	else{
		// var newWarn = document.createElement('p')
		// var newWarnText = document.createTextNode('!Invaild Warning!')
		// newWarn.appendChild(newWarnText)
		
		// var body = document.getElementById('body')		// parent Node
		// var mainDiv = document.getElementById('tasks')
		// body.insertBefore(newWarn,mainDiv)
		
		// console.log(newWarn)
		
		alert('invalid input')
	}

	for(let i=0; i<taskNum; i++)
	{
		
		var day = task[i].delta.length
		var todayDate = new Date().toDateString()
		
		var addProgress = document.getElementsByClassName('task-progress-button')[i].addEventListener('click', function(){
			// console.log('new progress')
			/*	if(addbool[i])		// add form not loaded
				{
					// console.log(true)
					// create add form for progress
					var newProgress = document.createElement('form')
					
					var subTask = document.getElementsByClassName('task-item')[i]
						subTask.appendChild(newProgress)
					var newProText = document.createTextNode('Add')
						newProgress.appendChild(newProText)
					
					// checked radio box
					var newInputDelta = document.createElement('input')
					newInputDelta.type = 'radio'
					newInputDelta.name = 'progress'
					newInputDelta.checked = true
					newProgress.appendChild(newInputDelta)
					
					var newLabelDelta = document.createElement('label')
					var newLabelDeltaText = document.createTextNode('新进度')
					newLabelDelta.appendChild(newLabelDeltaText)
					newProgress.appendChild(newLabelDelta)
					
					var newInputSum = document.createElement('input')
					newInputSum.type = 'radio'
					newInputSum.name = 'progress'	// only if radio has the same name,互斥
					newInputSum.checked = false
					newProgress.appendChild(newInputSum)
					
					var newLabelSum = document.createElement('label')
					var newLabelSumText = document.createTextNode('总进度')
					newLabelSum.appendChild(newLabelSumText)
					newProgress.appendChild(newLabelSum)
					
					// text input box
					var newInput = document.createElement('input')
					newInput.type = "text"
					newInput.placeholder = "Input"
					newProgress.appendChild(newInput)
					
					// button
					var newSubmit = document.createElement('input')
					newSubmit.type = "button"
					newSubmit.value = "submit"
					newSubmit.onclick = "addProgress()"
					newProgress.appendChild(newSubmit)
					
					// console.log(newProgress)
					addbool[i] = false
				}   */
			// task[0].date[1] = new Date().toDateString()
			
			
			var addDelta = prompt("输入任务 " + task[i].name + " 的新进度")
			var numAdded = parseInt(addDelta, 10)		// char into ints
			if(addDelta != null && addDelta != ""){
				// console.log(addDelta)
				
				// add progress
				if(todayDate == task[i].date[day-1]){	// same day
					task[i].delta[day-1] += numAdded
				} else{
					task[i].date[day] = todayDate
					task[i].delta[day] += numAdded
				}
				task[i].sum += numAdded
				TaskWrite(i)
				console.log(task)
			}
		})
		
		var addSum = document.getElementsByClassName('task-overall-button')[i].addEventListener('click', function(){
			// console.log('add sum')
			var addSumProgress = prompt("输入任务 " + task[i].name + " 的总进度")
			var numSum = parseInt(addSumProgress, 10)
			if(addSumProgress != null && addSumProgress !=""){
				if(todayDate == task[i].date[day-1]){	// same day
					task[i].delta[day-1] += numSum - task[i].sum
				} else{		// new day
					task[i].date[day] = todayDate
					task[i].delta[day] += numSum - task[i].sum
				}
				task[i].sum = numSum
				TaskWrite(i)
				console.log(task)
			}
		})	
	}
}

