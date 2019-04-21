//the classes/methods/variables that has a leading underscore is reserved for internal use. Do not make changes if not absolutely necessary
//the expected input to make class is a 2 dimension array with the following format:
//database:
//	- entry #1:
//		- name (string)
//		- crn number (string)
//		- schedule:
//			- day #1: 
//				- date (monday/tuesday/...)
//				- start time (string hr:min 24h format)
//				- end time (string hr:min 24h format)
//			- day #2:++
//				- same as day 1
//	- entry #2:
//		- same as entry #1

class _Date {
	constructor(dt = null, tStart = null, tEnd = null){
		this.date = dt;
		if (tStart){
			this.timeStart = this.formatTheTime(tStart);
			this.timeStartFormatted = this.convertToDecimal(timeStart);
		}
		if (tEnd){
			this.timeEnd = this.formatTheTime(tEnd);
			this.timeEndFormatted = this.convertToDecimal(timeEnd);
		}
	}
	
	formatTheTime(string){
		result = string.split(':');
		for (var i = 0; i <result.length; i++){
			result[i] = parseInt(result[i]);
		}
		return result;
	}
	convertToDecimal(time){
		return hr + min/60;
	}
	convertToNormalFormat(time){
		minute = time*60;
		hour = Math.floor(minute/60);
		minute -= hour*60;

		return [hour, minute];
	}

	isOverlap(adate){
		condition1 = this.timeStartFormatted < adate.timeStartFormatted && this.timeEndFormatted > adate.timeStartFormatted;
		condition2 = this.timeStartFormatted < adate.timeEndFormatted && this.timeEndFormatted > adate.timeEndFormatted;
		if (condition1 || condition2){
			return true;
		}
		else{
			return false;
		}
	}
}
class Classes {
	constructor(nm, crnnum, schdle){
		this.name = nm;
		this.crn = crnnum;
		this.schedule = [];
		for (var i = 0; i<schdle.length; i++){
			if (schdle[i]){
				this.schedule[i] = new _Date(schdle[i][0],schdle[i][1], schdle[i][2]); //TODO:change this to the appropriate format after knowing the database output
			}
		}
		//this._hour = this._convertToHour(this.HMS);
	}

	isOverlap(aclass){
		min = this.schedule.length;
		max = aclass.schedule.length;
		for(var i = 0; i < min; i++){
			for (var j = 0; j < max; j++){
				if (this.schedule[i].isOverlap(aclass.schedule[j])){
					return true;
				}
				else {
					return false;
				}
			}
		}
	}


}

class Criteria {
	constructor(){
		//set switches
		this.isBefore = false;
		this.isAfter = false;
		this.isLess = false;
		this.isChooseDate = false;

		//set value
		this.timeBefore = null;
		this.timeAfter = null;

		this.dateLess = null;
		this.numLess = null;
		this.timeBefore = null;
		this.chooseDateClass = null;
		this.chooseDate = null;
	}
	//setters
	set before(time = null){
		if (!time){
			this.isBefore = false;
		}
		else {
			this.isBefore = true;
			this.timeBefore = _Date(null, null, time); 
		}

	}
	set after (time = null){
		if (!time){
			this.isAfter = false;
		}
		else {
			this.isAfter = true;
			this.timeAfter = _Date(null, time, null);
		}
	}
	set less (info = null){ //info must be an array, date first, followed by time 
		if (!info){
			this.isLess = false;
		}
		else if (!info[0] || !info[1]){
			this.isLess = false;
		}
		else {
			this.dateLess = _Date(info[0], null, null);
			this.numLess = info[1];
		}
	}
	set chooseDate (info = null){ // info must be an array, date first, followed by class
		if (!info){
			this.isChooseDate = false;
		}
		else if (!info[0] || !info[1]){
			this.isChooseDate = false;
		}
		else {
			this.isChooseDate = true;
			this.chooseDateClass = info[1];
			this.chooseDate = _Date(info[0],null,null); 
		}
	}


}

class Schedule {
	constructor(validClass){
		this.list = [];
		this.possibleChoice = sortChoices(validClass);
	}
	sortChoices(list){
		var result = [];
		var usedClass = [];
		//creates category
		for (var i = 0; i<list.length; i++){
			if (list[i].name in usedClass){
				for (var j = 0; j <result.length; i++){
					if (result[i][0] == list[i].name){
						result[i].push(list[i]);
						break;
					}
				}
			}
			else {
				result.push([list[i].name]);
				result[result.length - 1].push(list[i]);
			}

		}
		return result;
	}
	makeSchedule(){
		count = 0;
		result = [];
		pc = this.possibleChoice;
		for (var i = 0; i < this.possibleChoice.length; i++){
			if (!pc[i][0]){
				break;
			}
			result.push(pc[i][0]);
			count++;
			for (var j=i; j< this.possibleChoice.length; j++){
				pc[j] = this.filterChoices(pc[j], result[result.length-1]);
			}
			
		}
		return result;
	}
	filterChoices(list, item){
		for (var i = 0; i < list.length; i++){
			if (list[i]._isOverlap(item)){
				list.splice(i,1);
			}
		}
	}

}

class Catalog {
	constructor(db){
		this.database = [];
		for (var i = 0; i < db.length; i++){
			this.database[i] = new Classes(db[i][0], db[i][1], db[i][2]);
		}

	}
	search(name = null, crn = null, criteria = null){
		
		result = this.database;
		if (name){
			result = nameSearch(result, name);
		}
		if (crn){
			result = crnSearch(result, crn);
		}
		if (criteria){
			result = criteriaSearch(result, criteria);
		}
		return result;

	}
	nameSearch(list, nameList){
		result = [];
		for (var i = 0; i < list.length; i++){
			if (list[i].name in nameList){
				result.push(list[i]);
			}
		}
		return result;
	}
	crnSearch(list, crnList){
		result = [];
		for (var i = 0; i < list.length; i++){
			if (list[i].crnnum in crnList){
				result.push(list[i]);
			}
		}
	}
	criteriaSearch(list, criteria){
		result = [];
		for (var i = 0; i < list.length; i++){
			condition = true;
			for (var j = 0; j < list[i].schedule.length; j++){
				if (criteria.isBefore){
					condition = condition && _isBeforeFilter(list[i].schedule[j], criteria.timeBefore);
				}
				if (criteria.isAfter){
					condition = condition && _isAfterFilter(list[i].schedule[j], criteria.timeAfter);
				}
				if (!condition){
					break;
				}
			}
			if (isChooseDate){
				condition = condition && _isExistDate(list[i], criteria);
			}
			if (condition){
				result.push(list[i]);
			}

		}
		return result;
	}

	
	_isBeforeFilter(item, criteria){
		if (item.timeEndFormatted > criteria.timeEndFormatted){
			return false;
		}
			return true;
	}
	_isAfterFilter(item, criteria){		
		if (item.timeStartFormatted < criteria.timeStartFormatted){
			return false;
		}
		return true;
	}
	_isExistDate(item, criteria){
		if (item.name != criteria.chooseDateClass){
			return true;
		}
		condition = false
		for (var i = 0; i < item.schedule.length; i++){
			if (item.schedule[i].date == criteria.chooseDate.date){
				condition = true;
			}
		}
		return false;
	}
} 

