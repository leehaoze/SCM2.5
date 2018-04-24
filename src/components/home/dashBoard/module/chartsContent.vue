<template>
  <Content class="chartsContent">
    <div class="ui link cards four centered cardsList">
      <chart-card v-for="(chart,key,index) in chartData.slice(0,4)" :chart="chart" :key="index">
      </chart-card>
      <!--<chart-card v-if="chartG" :chart="chartG"></chart-card>-->
    </div>
    <!--<Page :total="chartData.length"></Page>-->
  </Content>
</template>

<script>
  import ChartCard from "./chartCard";

  export default {
    name: "chartsContent",
    components: {ChartCard},
    data() {
      return {
        chartData : [
          {
            chartData: {
              data: {
                labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                datasets: [{
                  label: 'Data One',
                  backgroundColor: 'rgba(253,131,131,0.8)',
                  data: [40, 20, 30, 50, 45, 55, 39, 48]
                }, {
                  label: 'Data Two',
                  backgroundColor: '#c8f8bd',
                  data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                }]
              },
              options: {responsive: true, maintainAspectRatio: false}
            },
            chartContent: {
              header: 'Department A',
              meta: 'Cost',
              description: 'Description here',
            },
            extraContent: {
              rightFloated: 'April 2018',
              leftFloated: 'People A'
            },
            type: 'line'
          },
          {
            chartData: {
              data: {
                labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                datasets: [{
                  label: 'Data One',
                  backgroundColor: 'rgba(253,131,131,0.8)',
                  data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                }, {
                  label: 'Data Two',
                  backgroundColor: '#c8f8bd',
                  data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                }]
              },
              options: {responsive: true, maintainAspectRatio: false}
            },
            chartContent: {
              header: 'Department B',
              meta: 'Cost',
              description: 'Description here',
            },
            extraContent: {
              rightFloated: 'April 2018',
              leftFloated: 'People A'
            },
            type: 'radar'
          },
          {
            chartData: {
              data: {
                labels: ['April', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                datasets: [{
                  label: 'Data One',
                  backgroundColor: 'rgba(253,131,131,0.8)',
                  data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                }, {
                  label: 'Data Two',
                  backgroundColor: '#c8f8bd',
                  data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                }]
              },
              options: {responsive: true, maintainAspectRatio: false}
            },
            chartContent: {
              header: 'Department C',
              meta: 'Cost',
              description: 'Description here',
            },
            extraContent: {
              rightFloated: 'April 2018',
              leftFloated: 'People A'
            },
            type: 'pie'
          },
          {
            chartData: {
              data: {
                labels: ['April', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                datasets: [{
                  label: 'Data One',
                  backgroundColor: 'rgba(253,131,131,0.8)',
                  data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                }, {
                  label: 'Data Two',
                  backgroundColor: '#c8f8bd',
                  data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                }]
              },
              options: {responsive: true, maintainAspectRatio: false}
            },
            chartContent: {
              header: 'Department D',
              meta: 'Cost',
              description: 'Description here',
            },
            extraContent: {
              rightFloated: 'April 2018',
              leftFloated: 'People A'
            },
            type: 'bar'
          },
          {
            chartData: {
              data: {
                labels: ['April', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                datasets: [{
                  label: 'Data One',
                  backgroundColor: 'rgba(253,131,131,0.8)',
                  data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                }, {
                  label: 'Data Two',
                  backgroundColor: '#c8f8bd',
                  data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                }]
              },
              options: {responsive: true, maintainAspectRatio: false}
            },
            chartContent: {
              header: 'Department E',
              meta: 'Cost',
              description: 'Description here',
            },
            extraContent: {
              rightFloated: 'April 2018',
              leftFloated: 'People A'
            },
            type: 'pola'
          },
          {
            chartData: {
              data: {
                labels: ['April', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                datasets: [{
                  label: 'Data One',
                  backgroundColor: 'rgba(253,131,131,0.8)',
                  data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                }, {
                  label: 'Data Two',
                  backgroundColor: '#c8f8bd',
                  data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                }]
              },
              options: {responsive: true, maintainAspectRatio: false}
            },
            chartContent: {
              header: 'Department F',
              meta: 'Cost',
              description: 'Description here',
            },
            extraContent: {
              rightFloated: 'April 2018',
              leftFloated: 'People A'
            },
            type: 'line'
          },
          {
            chartData: {
              data: {
                labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                datasets: [{
                  label: 'Data One',
                  backgroundColor: 'rgba(253,131,131,0.8)',
                  data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                }, {
                  label: 'Data Two',
                  backgroundColor: '#c8f8bd',
                  data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                }]
              },
              options: {responsive: true, maintainAspectRatio: false}
            },
            chartContent: {
              header: 'Department G',
              meta: 'Cost',
              description: 'Description here',
            },
            extraContent: {
              rightFloated: 'April 2018',
              leftFloated: 'People A'
            },
            type: 'radar'
          }
        ],
        chartA: {
          chartData: {
            data: {
              labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
              datasets: [{
                label: 'Data One',
                backgroundColor: 'rgba(253,131,131,0.8)',
                data: [40, 20, 30, 50, 45, 55, 39, 48]
              }, {
                label: 'Data Two',
                backgroundColor: '#c8f8bd',
                data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
              }]
            },
            options: {responsive: true, maintainAspectRatio: false}
          },
          chartContent: {
            header: 'Department A',
            meta: 'Cost',
            description: 'Description here',
          },
          extraContent: {
            rightFloated: 'April 2018',
            leftFloated: 'People A'
          },
          type: 'line'
        },
        chartB: {
          chartData: {
            data: {
              labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
              datasets: [{
                label: 'Data One',
                backgroundColor: 'rgba(253,131,131,0.8)',
                data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
              }, {
                label: 'Data Two',
                backgroundColor: '#c8f8bd',
                data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
              }]
            },
            options: {responsive: true, maintainAspectRatio: false}
          },
          chartContent: {
            header: 'Department B',
            meta: 'Cost',
            description: 'Description here',
          },
          extraContent: {
            rightFloated: 'April 2018',
            leftFloated: 'People A'
          },
          type: 'radar'
        },
        chartC: {
          chartData: {
            data: {
              labels: ['April', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
              datasets: [{
                label: 'Data One',
                backgroundColor: 'rgba(253,131,131,0.8)',
                data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
              }, {
                label: 'Data Two',
                backgroundColor: '#c8f8bd',
                data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
              }]
            },
            options: {responsive: true, maintainAspectRatio: false}
          },
          chartContent: {
            header: 'Department C',
            meta: 'Cost',
            description: 'Description here',
          },
          extraContent: {
            rightFloated: 'April 2018',
            leftFloated: 'People A'
          },
          type: 'pie'
        },
        chartD: {
          chartData: {
            data: {
              labels: ['April', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
              datasets: [{
                label: 'Data One',
                backgroundColor: 'rgba(253,131,131,0.8)',
                data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
              }, {
                label: 'Data Two',
                backgroundColor: '#c8f8bd',
                data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
              }]
            },
            options: {responsive: true, maintainAspectRatio: false}
          },
          chartContent: {
            header: 'Department D',
            meta: 'Cost',
            description: 'Description here',
          },
          extraContent: {
            rightFloated: 'April 2018',
            leftFloated: 'People A'
          },
          type: 'bar'
        },
        chartE: {
          chartData: {
            data: {
              labels: ['April', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
              datasets: [{
                label: 'Data One',
                backgroundColor: 'rgba(253,131,131,0.8)',
                data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
              }, {
                label: 'Data Two',
                backgroundColor: '#c8f8bd',
                data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
              }]
            },
            options: {responsive: true, maintainAspectRatio: false}
          },
          chartContent: {
            header: 'Department E',
            meta: 'Cost',
            description: 'Description here',
          },
          extraContent: {
            rightFloated: 'April 2018',
            leftFloated: 'People A'
          },
          type: 'pola'
        },
        chartF: {
          chartData: {
            data: {
              labels: ['April', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
              datasets: [{
                label: 'Data One',
                backgroundColor: 'rgba(253,131,131,0.8)',
                data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
              }, {
                label: 'Data Two',
                backgroundColor: '#c8f8bd',
                data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
              }]
            },
            options: {responsive: true, maintainAspectRatio: false}
          },
          chartContent: {
            header: 'Department F',
            meta: 'Cost',
            description: 'Description here',
          },
          extraContent: {
            rightFloated: 'April 2018',
            leftFloated: 'People A'
          },
          type: 'line'
        },
        chartG: {
          chartData: {
            data: {
              labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
              datasets: [{
                label: 'Data One',
                backgroundColor: 'rgba(253,131,131,0.8)',
                data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
              }, {
                label: 'Data Two',
                backgroundColor: '#c8f8bd',
                data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
              }]
            },
            options: {responsive: true, maintainAspectRatio: false}
          },
          chartContent: {
            header: 'Department G',
            meta: 'Cost',
            description: 'Description here',
          },
          extraContent: {
            rightFloated: 'April 2018',
            leftFloated: 'People A'
          },
          type: 'radar'
        }
      }
    },
    methods: {
      getRandomInt() {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },
      reCalData() {
        setInterval(() => {
          console.log("Execute");
          this.chartA.chartData.data.datasets = [{
            label: 'Data One',
            backgroundColor: 'rgba(253,131,131,0.8)',
            data: [40, 20, 30, 50, 45, 55, 39, 48]
          }, {
            label: 'Data Two',
            backgroundColor: '#c8f8bd',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }];
          this.chartB.chartData.data.datasets = [{
            label: 'Data One',
            backgroundColor: 'rgba(253,131,131,0.8)',
            data: [40, 20, 30, 50, 45, 55, 39, 48]
          }, {
            label: 'Data Two',
            backgroundColor: '#c8f8bd',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }];
          this.chartC.chartData.data.datasets = [{
            label: 'Data One',
            backgroundColor: 'rgba(253,131,131,0.8)',
            data: [40, 20, 30, 50, 45, 55, 39, 48]
          }, {
            label: 'Data Two',
            backgroundColor: '#c8f8bd',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }];
          this.chartD.chartData.data.datasets = [{
            label: 'Data One',
            backgroundColor: 'rgba(253,131,131,0.8)',
            data: [40, 20, 30, 50, 45, 55, 39, 48]
          }, {
            label: 'Data Two',
            backgroundColor: '#c8f8bd',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }];
          this.chartE.chartData.data.datasets = [{
            label: 'Data One',
            backgroundColor: 'rgba(253,131,131,0.8)',
            data: [40, 20, 30, 50, 45, 55, 39, 48]
          }, {
            label: 'Data Two',
            backgroundColor: '#c8f8bd',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }];
          this.chartF.chartData.data.datasets = [{
            label: 'Data One',
            backgroundColor: 'rgba(253,131,131,0.8)',
            data: [40, 20, 30, 50, 45, 55, 39, 48]
          }, {
            label: 'Data Two',
            backgroundColor: '#c8f8bd',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }];
          this.chartG.chartData.data.datasets = [{
            label: 'Data One',
            backgroundColor: 'rgba(253,131,131,0.8)',
            data: [40, 20, 30, 50, 45, 55, 39, 48]
          }, {
            label: 'Data Two',
            backgroundColor: '#c8f8bd',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }];
        }, 4000)
      }
    },
    mounted() {
      // this.reCalData();
    }
  }
</script>

<style scoped>
  .chartsContent {
    padding: 40px;
  }

  .cardsList {
    /*background: white;*/
    /*width: 90%;*/
    padding-top: 1%;
    /*margin-left: 8%!important;*/
  }

  .chartCard {
    /*width: 900px;*/
  }
</style>
