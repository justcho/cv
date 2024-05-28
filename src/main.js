// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("skills"));

// 指定图表的配置项和数据
var option = {
  tooltip: {
    // trigger: "item",
    formatter: "{b}: {d}",
  },
  legend: {
    orient: "horizontal",
    left: 1,
    data: ["Vue", "Vue3", "Uniapp", "React", "TS"],
  },
  series: [
    {
      name: "技能百分比",
      type: "pie",
      radius: "50%",
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: "center",
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
      label: {
        show: true,
        formatter(param) {
          // correct the percentage
          return param.name + ' (' + param.percent + '%)';
        }
      },
      // labelLine: {
      //   show: true,
      // },
      data: [
        { value: 30, name: "Vue" },
        { value: 25, name: "Uniapp" },
        { value: 20, name: "Vue3" },
        { value: 15, name: "TS" },
        { value: 10, name: "React" },
      ],
    },
  ],
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

onmouseover = "this.style.cursor='hand'";

// mongod --dbpath "D:\Software\MongoDB\db" --logpath "D:\Software\MongoDB\log\mongod.log" --install --serviceName "MongoDB"
