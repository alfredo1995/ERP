$(function() {
	"use strict";
	var e = {
		series: [{
			name: "Revenue",
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: "line",
			height: 65,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: 0,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#fff"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#fff"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 3,
			curve: "smooth"
		},
		colors: ["#fff"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart1"), e).render();
	e = {
		series: [{
			name: "Customers",
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: "line",
			height: 65,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: 0,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#fff"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#fff"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 3,
			curve: "smooth"
		},
		colors: ["#fff"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart2"), e).render();
	e = {
		series: [{
			name: "Store Visitores",
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: "line",
			height: 65,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: 0,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#fff"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#fff"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 3,
			curve: "smooth"
		},
		colors: ["#fff"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart3"), e).render();
	e = {
		series: [{
			name: "Total Sales",
			data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
		}, {
			name: "Customers",
			data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
		}, {
			name: "Store Visitores",
			data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
		}],
		chart: {
			foreColor: "#9ba7b2",
			type: "bar",
			height: 300,
			toolbar: {
				show: !1
			}
		},
		plotOptions: {
			bar: {
				horizontal: !1,
				columnWidth: "55%",
				endingShape: "rounded"
			}
		},
        grid: {
			borderColor: 'rgba(255, 255, 255, 0.12)',
            show: true,
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			colors: ["transparent"]
		},
		colors: ["rgba(255, 255, 255, 0.60)", "#fff", "rgba(255, 255, 255, 0.25)"],
		xaxis: {
			categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			y: {
				formatter: function(e) {
					return "$ " + e + " thousands"
				}
			}
		}
	};
	new ApexCharts(document.querySelector("#chart4"), e).render();
	e = {
		series: [{
			name: "Revenue",
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 45,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#fff"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#fff"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		fill: {
		  type: 'gradient',
		  gradient: {
			shade: 'light',
			type: "vertical",
			shadeIntensity: 0.5,
			gradientToColors: ["#fff"],
			inverseColors: true,
			opacityFrom: 0.2,	
			opacityTo: 0.5,
			stops: [0, 50, 100],
			colorStops: []
		  }
		},
		colors: ["#fff"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart5"), e).render();
	e = {
		series: [{
			name: "Revenue",
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 45,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#fff"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#fff"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		fill: {
		  type: 'gradient',
		  gradient: {
			shade: 'light',
			type: "vertical",
			shadeIntensity: 0.5,
			gradientToColors: ["#fff"],
			inverseColors: true,
			opacityFrom: 0.2,	
			opacityTo: 0.5,
			stops: [0, 50, 100],
			colorStops: []
		  }
		},
		colors: ["#fff"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart6"), e).render();
	e = {
		series: [{
			name: "Revenue",
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 45,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#fff"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#fff"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		fill: {
		  type: 'gradient',
		  gradient: {
			shade: 'light',
			type: "vertical",
			shadeIntensity: 0.5,
			gradientToColors: ["#fff"],
			inverseColors: true,
			opacityFrom: 0.2,	
			opacityTo: 0.5,
			stops: [0, 50, 100],
			colorStops: []
		  }
		},
		colors: ["#fff"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart7"), e).render();
	e = {
		series: [{
			name: "Revenue",
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 45,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#fff"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#fff"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		fill: {
		  type: 'gradient',
		  gradient: {
			shade: 'light',
			type: "vertical",
			shadeIntensity: 0.5,
			gradientToColors: ["#fff"],
			inverseColors: true,
			opacityFrom: 0.2,	
			opacityTo: 0.5,
			stops: [0, 50, 100],
			colorStops: []
		  }
		},
		colors: ["#fff"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart8"), e).render();
	e = {
		series: [{
			name: "Revenue",
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 45,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#fff"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#fff"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		fill: {
		  type: 'gradient',
		  gradient: {
			shade: 'light',
			type: "vertical",
			shadeIntensity: 0.5,
			gradientToColors: ["#fff"],
			inverseColors: true,
			opacityFrom: 0.2,	
			opacityTo: 0.5,
			stops: [0, 50, 100],
			colorStops: []
		  }
		},
		colors: ["#fff"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart9"), e).render();
	e = {
		series: [{
			name: "Revenue",
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 45,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#fff"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#fff"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		fill: {
		  type: 'gradient',
		  gradient: {
			shade: 'light',
			type: "vertical",
			shadeIntensity: 0.5,
			gradientToColors: ["#fff"],
			inverseColors: true,
			opacityFrom: 0.2,	
			opacityTo: 0.5,
			stops: [0, 50, 100],
			colorStops: []
		  }
		},
		colors: ["#fff"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart10"), e).render();
	e = {
		series: [{
			name: "Revenue",
			data: [240, 160, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 45,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#fff"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#fff"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		fill: {
		  type: 'gradient',
		  gradient: {
			shade: 'light',
			type: "vertical",
			shadeIntensity: 0.5,
			gradientToColors: ["#fff"],
			inverseColors: true,
			opacityFrom: 0.2,	
			opacityTo: 0.5,
			stops: [0, 50, 100],
			colorStops: []
		  }
		},
		colors: ["#fff"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart11"), e).render();
	e = {
		series: [{
			name: "Revenue",
			data: [332, 540, 160, 240, 160, 671, 355, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 100,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#fff"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#fff"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		fill: {
		  type: 'gradient',
		  gradient: {
			shade: 'light',
			type: "vertical",
			shadeIntensity: 0.5,
			gradientToColors: ["#fff"],
			inverseColors: true,
			opacityFrom: 0.2,	
			opacityTo: 0.5,
			stops: [0, 50, 100],
			colorStops: []
		  }
		},
		colors: ["#fff"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart12"), e).render();
	e = {
		series: [{
			name: "Pageviews",
			data: [332, 540, 160, 240, 160, 671, 355, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 100,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#fff"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#fff"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		fill: {
		  type: 'gradient',
		  gradient: {
			shade: 'light',
			type: "vertical",
			shadeIntensity: 0.5,
			gradientToColors: ["#fff"],
			inverseColors: true,
			opacityFrom: 0.2,	
			opacityTo: 0.5,
			stops: [0, 50, 100],
			colorStops: []
		  }
		},
		colors: ["#fff"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart13"), e).render();
	e = {
		series: [{
			name: "New Sessions",
			data: [332, 540, 160, 240, 160, 671, 355, 671, 414, 555, 257, 901, 613]
		}],
		chart: {
			type: "area",
			height: 100,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#fff"
			},
			sparkline: {
				enabled: !0
			}
		},
		markers: {
			size: 0,
			colors: ["#fff"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 2,
			curve: "smooth"
		},
		fill: {
		  type: 'gradient',
		  gradient: {
			shade: 'light',
			type: "vertical",
			shadeIntensity: 0.5,
			gradientToColors: ["#fff"],
			inverseColors: true,
			opacityFrom: 0.2,	
			opacityTo: 0.5,
			stops: [0, 50, 100],
			colorStops: []
		  }
		},
		colors: ["#fff"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart14"), e).render();
	e = {
		series: [25, 65, 10, 14],
		chart: {
			height: 240,
			type: "donut"
		},
		legend: {
			position: "bottom",
			show: !1
		},
		plotOptions: {
			pie: {
				donut: {
					size: "80%"
				}
			}
		},
		colors: ["rgba(255, 255, 255, 0.70)", "#fff", "rgba(255, 255, 255, 0.55)", "rgba(255, 255, 255, 0.25)"],
		dataLabels: {
			enabled: !1
		},
        tooltip: {
			enabled:false,
			theme: "dark",
			y: {
				formatter: function(e) {
					return "$ " + e + " thousands"
				}
			}
		},   
		labels: ["Kids", "Men", "Women", "Furniture"],
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					height: 200
				},
				legend: {
					position: "bottom"
				}
			}
		}]
	};
	new ApexCharts(document.querySelector("#chart15"), e).render();
	e = {
		chart: {
			height: 180,
			type: "radialBar",
			toolbar: {
				show: !1
			}
		},
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: "78%",
					background: "transparent",
					image: void 0,
					imageOffsetX: 0,
					imageOffsetY: 0,
					position: "front",
					dropShadow: {
						enabled: !1,
						top: 3,
						left: 0,
						blur: 4,
						color: "rgba(0, 169, 255, 0.85)",
						opacity: .65
					}
				},
				track: {
					background: "rgba(255, 255, 255, 0.12)",
					margin: 0,
					dropShadow: {
						enabled: !1,
						top: -3,
						left: 0,
						blur: 4,
						color: "rgba(0, 169, 255, 0.85)",
						opacity: .65
					}
				},
				dataLabels: {
					showOn: "always",
					name: {
						offsetY: -8,
						show: !0,
						color: "#fff",
						fontSize: "15px"
					},
					value: {
						formatter: function(e) {
							return e + "%"
						},
						color: "#fff",
						fontSize: "25px",
						show: !0,
						offsetY: 10
					}
				}
			}
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "horizontal",
				shadeIntensity: .5,
				gradientToColors: ["#fff"],
				inverseColors: !1,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100]
			}
		},
		colors: ["#fff"],
		series: [68],
		stroke: {
			lineCap: "round",
			width: "5"
		},
		labels: ["Completed"]
	};
	new ApexCharts(document.querySelector("#chart16"), e).render();
	e = {
		chart: {
			height: 180,
			type: "radialBar",
			toolbar: {
				show: !1
			}
		},
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: "78%",
					background: "transparent",
					image: void 0,
					imageOffsetX: 0,
					imageOffsetY: 0,
					position: "front",
					dropShadow: {
						enabled: !1,
						top: 3,
						left: 0,
						blur: 4,
						color: "rgba(0, 169, 255, 0.85)",
						opacity: .65
					}
				},
				track: {
					background: "rgba(255, 255, 255, 0.12)",
					margin: 0,
					dropShadow: {
						enabled: !1,
						top: -3,
						left: 0,
						blur: 4,
						color: "rgba(0, 169, 255, 0.85)",
						opacity: .65
					}
				},
				dataLabels: {
					showOn: "always",
					name: {
						offsetY: -8,
						show: !0,
						color: "#fff",
						fontSize: "15px"
					},
					value: {
						formatter: function(e) {
							return e + "%"
						},
						color: "#fff",
						fontSize: "25px",
						show: !0,
						offsetY: 10
					}
				}
			}
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "horizontal",
				shadeIntensity: .5,
				gradientToColors: ["#fff"],
				inverseColors: !1,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100]
			}
		},
		colors: ["#fff"],
		series: [60],
		stroke: {
			lineCap: "round"
		},
		labels: ["Cancelled"]
	};
	new ApexCharts(document.querySelector("#chart17"), e).render();
	e = {
		chart: {
			height: 180,
			type: "radialBar",
			toolbar: {
				show: !1
			}
		},
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: "78%",
					background: "transparent",
					image: void 0,
					imageOffsetX: 0,
					imageOffsetY: 0,
					position: "front",
					dropShadow: {
						enabled: !1,
						top: 3,
						left: 0,
						blur: 4,
						color: "rgba(0, 169, 255, 0.85)",
						opacity: .65
					}
				},
				track: {
					background: "rgba(255, 255, 255, 0.12)",
					margin: 0,
					dropShadow: {
						enabled: !1,
						top: -3,
						left: 0,
						blur: 4,
						color: "rgba(0, 169, 255, 0.85)",
						opacity: .65
					}
				},
				dataLabels: {
					showOn: "always",
					name: {
						offsetY: -8,
						show: !0,
						color: "#fff",
						fontSize: "15px"
					},
					value: {
						formatter: function(e) {
							return e + "%"
						},
						color: "#fff",
						fontSize: "25px",
						show: !0,
						offsetY: 10
					}
				}
			}
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "horizontal",
				shadeIntensity: .5,
				gradientToColors: ["#fff"],
				inverseColors: !1,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100]
			}
		},
		colors: ["#fff"],
		series: [45],
		stroke: {
			lineCap: "round"
		},
		labels: ["In Progress"]
	};
	new ApexCharts(document.querySelector("#chart18"), e).render();
	e = {
		series: [{
			name: "Orders",
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			foreColor: "rgba(255, 255, 255, 0.65)",
			type: "bar",
			height: 270,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: 0,
				top: 3,
				left: 14,
				blur: 4,
				opacity: .12,
				color: "#0d6efd"
			},
			sparkline: {
				enabled: !1
			}
		},
		markers: {
			size: 0,
			colors: ["#0d6efd"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		plotOptions: {
			bar: {
				horizontal: !1,
				columnWidth: "30%",
				endingShape: "rounded"
			}
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			show: !0,
			width: 3,
			curve: "smooth"
		},
		grid: {
			borderColor: 'rgba(255, 255, 255, 0.12)',
            show: true,
		},
		colors: ["#fff"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: !1
			},
			x: {
				show: !0
			},
			y: {
				formatter: function(e) {
					return " " + e + " "
				}
			},
			marker: {
				show: !1
			}
		}
	};
	new ApexCharts(document.querySelector("#chart19"), e).render();
	e = {
		series: [87],
		chart: {
			height: 310,
			type: "radialBar",
			offsetY: -10
		},
		plotOptions: {
			radialBar: {
				startAngle: -135,
				endAngle: 135,
				hollow: {
					margin: 0,
					size: "70%",
					background: "transparent"
				},
				track: {
					background: "rgba(255, 255, 255, 0.25)",
					strokeWidth: "100%",
					dropShadow: {
						enabled: !1,
						top: -3,
						left: 0,
						blur: 4,
						opacity: .12
					}
				},
				dataLabels: {
					name: {
						fontSize: "16px",
						color: "#fff",
						offsetY: 5
					},
					value: {
						offsetY: 20,
						fontSize: "30px",
						color: "#fff",
						formatter: function(e) {
							return e + "%"
						}
					}
				}
			}
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "dark",
				shadeIntensity: .15,
				inverseColors: !1,
				gradientToColors: ["#fff"],
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 50, 65, 91]
			}
		},
		colors: ["#fff"],
		stroke: {
			dashArray: 4
		},
		labels: ["Total Sales"],
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					height: 300
				}
			}
		}]
	};
	new ApexCharts(document.querySelector("#chart20"), e).render();
	e = {
		series: [{
			name: "Visitors",
			data: [427, 613, 801, 457, 605, 414, 671, 360, 540]
		}],
		chart: {
			foreColor: "rgba(255, 255, 255, 0.50)",
			type: "bar",
			height: 390,
			toolbar: {
				show: !1
			},
			zoom: {
				enabled: !1
			},
			dropShadow: {
				enabled: !1,
				top: 3,
				left: 10,
				blur: 3,
				opacity: .1,
				color: "#0d6efd"
			},
			sparkline: {
				enabled: !1
			}
		},
		plotOptions: {
			radialBar: {
				hollow: {
					size: "70%"
				}
			},
			bar: {
				horizontal: !1,
				columnWidth: "35%",
				endingShape: "rounded"
			}
		},
		markers: {
			size: 0,
			colors: ["#fff"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7
			}
		},
		dataLabels: {
			enabled: !1
		},
		grid: {
			borderColor: 'rgba(255, 255, 255, 0.12)',
            show: true,
		},
		stroke: {
			show: !0,
			width: 3,
			curve: "smooth"
		},
		colors: ["#fff"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: "dark",
			y: {
				formatter: function(e) {
					return "$ " + e + " thousands"
				}
			}
		}
	};
	new ApexCharts(document.querySelector("#chart21"), e).render()
});