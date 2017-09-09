var randomScalingFactor = function() {
    return Math.round(Math.random() * 1000);
};

var japanese_locale = d3.locale(
    {
        "decimal": ".",
        "thousands": ",",
        "grouping": [3],
        "currency": ["", "円"],
        "dateTime": "%a %b %e %X %Y",
        "date": "%Y/%m/%d",
        "time": "%H:%M:%S",
        "periods": ["AM", "PM"],
        "days": ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
        "shortDays": ["日", "月", "火", "水", "木", "金", "土"],
        "months": ["睦月", "如月", "弥生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"],
        "shortMonths": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    }
);

var nowDate = new Date();
var tmpDate = new Date();
// 半年前
var pastDate = new Date(tmpDate.setMonth(tmpDate.getMonth() - 6));

var nowYear = nowDate.getFullYear();
var nowMonth = nowDate.getMonth() + 1;
var pastYear =  pastDate.getFullYear();
var pastMonth = pastDate.getMonth() + 1;


  var bank1Data = {'bank':'bank1',
    2017 : [
        {'month':1,'y':randomScalingFactor()},
        {'month':2,'y':randomScalingFactor()},
        {'month':3,'y':randomScalingFactor()},
        {'month':4,'y':randomScalingFactor()},
        {'month':5,'y':randomScalingFactor()},
        {'month':6,'y':randomScalingFactor()},
        {'month':7,'y':randomScalingFactor()},
        {'month':8,'y':randomScalingFactor()},
        {'month':9,'y':randomScalingFactor()},
        {'month':10,'y':randomScalingFactor()},
        {'month':11,'y':randomScalingFactor()},
        {'month':12,'y':randomScalingFactor()}
    ]    
  }
  var bank2Data = {'bank':'bank2',
    2017 : [
        {'month':1, 'x':new Date(2017, 0, 0),'y':randomScalingFactor()},
        {'month':2,'x':new Date(2017, 1, 0),'y':randomScalingFactor()},
        {'month':3,'x':new Date(2017, 2, 0),'y':randomScalingFactor()},
        {'month':4,'x':new Date(2017, 3, 0),'y':randomScalingFactor()},
        {'month':5,'x':new Date(2017, 4, 0),'y':randomScalingFactor()},
        {'month':6,'x':new Date(2017, 5, 0),'y':randomScalingFactor()},
        {'month':7,'x':new Date(2017, 6, 0),'y':randomScalingFactor()},
        {'month':8,'x':new Date(2017, 7, 0),'y':randomScalingFactor()},
        {'month':9,'x':new Date(2017, 8, 0),'y':randomScalingFactor()},
        {'month':10,'x':new Date(2017, 9, 0),'y':randomScalingFactor()},
        {'month':11,'x':new Date(2017, 10, 0),'y':randomScalingFactor()},
        {'month':12,'x':new Date(2017, 11, 0),'y':randomScalingFactor()}
    ]    
  }
  var bank3Data = {'bank':'bank3',
    2017 : [
        {'month':1, 'x':new Date(2017, 0, 0),'y':randomScalingFactor()},
        {'month':2,'x':new Date(2017, 1, 0),'y':randomScalingFactor()},
        {'month':3,'x':new Date(2017, 2, 0),'y':randomScalingFactor()},
        {'month':4,'x':new Date(2017, 3, 0),'y':randomScalingFactor()},
        {'month':5,'x':new Date(2017, 4, 0),'y':randomScalingFactor()},
        {'month':6,'x':new Date(2017, 5, 0),'y':randomScalingFactor()},
        {'month':7,'x':new Date(2017, 6, 0),'y':randomScalingFactor()},
        {'month':8,'x':new Date(2017, 7, 0),'y':randomScalingFactor()},
        {'month':9,'x':new Date(2017, 8, 0),'y':randomScalingFactor()},
        {'month':10,'x':new Date(2017, 9, 0),'y':randomScalingFactor()},
        {'month':11,'x':new Date(2017, 10, 0),'y':randomScalingFactor()},
        {'month':12,'x':new Date(2017, 11, 0),'y':randomScalingFactor()}
    ]    
  }
  var bank4Data = {'bank':'bank4',
    2017 : [
        {'month':1, 'x':new Date(2017, 0, 0),'y':randomScalingFactor()},
        {'month':2,'x':new Date(2017, 1, 0),'y':randomScalingFactor()},
        {'month':3,'x':new Date(2017, 2, 0),'y':randomScalingFactor()},
        {'month':4,'x':new Date(2017, 3, 0),'y':randomScalingFactor()},
        {'month':5,'x':new Date(2017, 4, 0),'y':randomScalingFactor()},
        {'month':6,'x':new Date(2017, 5, 0),'y':randomScalingFactor()},
        {'month':7,'x':new Date(2017, 6, 0),'y':randomScalingFactor()},
        {'month':8,'x':new Date(2017, 7, 0),'y':randomScalingFactor()},
        {'month':9,'x':new Date(2017, 8, 0),'y':randomScalingFactor()},
        {'month':10,'x':new Date(2017, 9, 0),'y':randomScalingFactor()},
        {'month':11,'x':new Date(2017, 10, 0),'y':randomScalingFactor()},
        {'month':12,'x':new Date(2017, 11, 0),'y':randomScalingFactor()}
    ]    
  }
  
  // localstrageに口座残高データがない場合は作成
  if(!localStorage.getItem("balanceList1")){
    localStorage.setItem("balanceList1", JSON.stringify(bank1Data));   
  }
  

// 口座残高データを取得
var balances1 = JSON.parse(localStorage.getItem("balanceList1"));
for(var i = 0; i < balances1[nowYear].length ; i++){
    balances1[nowYear][i]['x'] = new Date(nowYear, i, 0);
}


var localAData = balances1;
var localBData = bank2Data;
var localCData = bank3Data;
var localDData = bank4Data;




//************************************************************
// Data notice the structure
//************************************************************
var AData = localAData[nowYear];
var BData = localBData[nowYear];
var CData = localCData[nowYear];
var DData = localDData[nowYear];

var data = [
    AData,
    BData,
    CData,
    DData
];
 
var colors = [
	'#ff9f40',
	'#ffcd56',
	'#4bc0c0',
	'#36a2eb'
]
 

//************************************************************
// Create Margins and Axis and hook our zoom function
//************************************************************
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = window.innerWidth - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
	
// var x = d3.scale.linear()
//     .domain([0, 12])
//     .range([0, width]);


// var data =     [
//     [{'x':1701,'y':randomScalingFactor()},{'x':1702,'y':randomScalingFactor()},{'x':1703,'y':randomScalingFactor()},{'x':1704,'y':randomScalingFactor()}]
// ];

// 時間のフォーマット
//var parseDate = d3.time.format("%y/%m").parse;


var x = d3.time.scale()
  .domain([
    new Date(pastYear, pastMonth, 0), // 開始日時
    new Date(nowYear, nowMonth, 0)
    
    //pastDate, // 開始日時
    //new Date()  // 終了日時
  ])
  .range([0, width]); // 実際の出力サイズ

// var x = d3.scale.linear()
//     .domain([1701, 1704])
//     .range([0, width]);
 
var y = d3.scale.linear()
    .domain([-1, 1000])
    .range([height, 0]);
	
var xAxis = d3.svg.axis()
    .scale(x)
	//.tickSize(-height)
	//.tickPadding(10)	
	//.tickSubdivide(true)	
    .orient("bottom")
    .ticks(d3.time.months, 1)
    //.tickFormat(japanese_locale.timeFormat("%b"));
    .tickFormat(d3.time.format("%y/%m"));


// var xAxis = d3.svg.axis()
//     .scale(x)
//     .tickSize(-height)
// 	.tickPadding(10)	
// 	.tickSubdivide(true)	
//     .orient("bottom");	
    
	
var yAxis = d3.svg.axis()
    .scale(y)
	.tickPadding(10)
	.tickSize(-width)
	.tickSubdivide(true)	
    .orient("left");
	
var zoom = d3.behavior.zoom()
    .x(x)
    .y(y)
    //.scaleExtent([1, 10])
    .scaleExtent([1 / 4, 8])
    .on("zoom", zoomed);	
	
	
 

	
//************************************************************
// Generate our SVG object
//************************************************************	
var svg = d3.select("#chart")
	.call(zoom)
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
 
svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);
 
// svg.append("g")
// 	.attr("class", "y axis")
// 	.append("text")
// 	.attr("class", "axis-label")
// 	.attr("transform", "rotate(-90)")
// 	.attr("y", (-margin.left) + 10)
// 	.attr("x", -height/2)
// 	.text('Axis Label');	
 
svg.append("clipPath")
	.attr("id", "clip")
	.append("rect")
	.attr("width", width)
	.attr("height", height);
	
	
	
	
	
//************************************************************
// Create D3 line object and draw data on our SVG object
//************************************************************
// 
// var line = d3.svg.line()
//     .interpolate("linear")    
//     .x(function(d) { return x(d.x); })
//     .y(function(d) { return y(d.y); });    
    
// 描画
// data.forEach(function(d){
//   d.x = parseDate(d.x);
//   d.y = +d.y;
// });

var line = d3.svg.line()
    .interpolate("linear")    
    .x(function(d) { return x(d.x); })
    .y(function(d) { return y(d.y); });
	
svg.selectAll('.line')
	.data(data)
	.enter()
	.append("path")
    .attr("class", "line")
	.attr("clip-path", "url(#clip)")
	.attr('stroke', function(d,i){ 			
		return colors[i%colors.length];
	})
    .attr("d", line);		
	  

	
//************************************************************
// Draw points on SVG object based on the data given
//************************************************************
var points = svg.selectAll('.dots')
	.data(data)
	.enter()
	.append("g")
    .attr("class", "dots")
	.attr("clip-path", "url(#clip)");	
 
points.selectAll('.dot')
	.data(function(d, index){ 		
		var a = [];
		d.forEach(function(point,i){
			a.push({'index': index, 'point': point});
		});		
		return a;
	})
	.enter()
	.append('circle')
	.attr('class','dot')
	.attr("r", 2.5)
	.attr('fill', function(d,i){ 	
		return colors[d.index%colors.length];
	})	
	.attr("transform", function(d) { 
		return "translate(" + x(d.point.x) + "," + y(d.point.y) + ")"; }
	);
	
 
	

	
	
//************************************************************
// Zoom specific updates
//************************************************************
function zoomed() {
    svg.select(".x.axis").call(xAxis);
	svg.select(".y.axis").call(yAxis);   
	svg.selectAll('path.line').attr('d', line);  
 
	points.selectAll('circle').attr("transform", function(d) { 
		return "translate(" + x(d.point.x) + "," + y(d.point.y) + ")"; }
	);  
}



