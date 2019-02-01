<script>
import { PolarArea } from 'vue-chartjs'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'

export default {
  extends: PolarArea,
  mounted () {
    this.renderChart({
      labels: ['HTML5'],
      datasets: [
        {
          label: 'Mes Competences',
          backgroundColor: 'rgba(32,168,216,0.2)',
          borderColor: 'rgba(32,168,216,1)',
          pointBackgroundColor: 'rgba(32,168,216,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(32,168,216,1)',
          data: [80]
        },
        {
          label: 'Mes Competences',
          backgroundColor: 'rgba(32,168,216,0.2)',
          borderColor: 'rgba(32,168,216,1)',
          pointBackgroundColor: 'rgba(32,168,216,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(32,168,216,1)',
          data: [60]
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function (tooltipItem, chart) {
            return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].backgroundColor }
          }
        }
      }
    })
  }
}
</script>
