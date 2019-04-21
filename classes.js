class _Date {
	constructor(dt, tStart, tEnd){
		this.date = dt;
		this.timeStart = this.formatTheTime(tStart);
		this.timeEnd = this.formatTheTime(tEnd);
		this.timeStartFormatted = this.convertToDecimal(timeStart);
		this.timeEndFormatted = this.convertToDecimal(timeEnd);
	}
	
	formatTheTime(string){
		result = string.split(':');
		for (var i = 0; i <result.length; i++){
			result[i] = parseInt(result[i]);
		}
	}
	convertToDecimal(time){
		return hr + min/60 + sec/3600;
	}
	convertToNormalFormat(time){
		return 0;
	}
}
class Classes {
	constructor(nm, crnnum, schdle){
		this.name = nm;
		this.crn = crnnum;
		this.schedule = [];
		for (var i = 0; i<schdle.length; i++){
			if (schdle[i]){
				this.schedule[i] = new _Date(schdle[i][0],schdle[i][1], schdle[i][2], schdle[i][3]);
			}
		}
		//this._hour = this._convertToHour(this.HMS);
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
			this.timeBefore = time; 
		}

	}
	set after (time = null){
		if (!time){
			this.isAfter = false;
		}
		else {
			this.isAfter = true;
			this.timeAfter = time;
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
			this.dateLess = info[0];
			this.numLess = info[1];
		}
	}
	set chooseDate (info = null){ // info must be an array, date first, followed by date
		if (!info){
			this.isChooseDate = false;
		}
		else if (!info[0] || !info[1]){
			this.isChooseDate = false;
		}
		else {
			this.isChooseDate = true;
			this.chooseDateClass = info[0];
			this.chooseDate = info[1]; 
		}
	}


}

class Schedule {
	constructor(){
		this.list = [];
	}
	_isOverlap(aclass){
		for (var i = 0; i<this.list.length; i++){
			
		}
	}
}

class Catalog {
	constructor(db){
		this.database = [];

	}
	search(criteria){
		result = [];

	}

}
