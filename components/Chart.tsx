import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const apiKey = '488a0bff-c9fb-4067-899e-6a965a9ed9f8';
    const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=USDC';

    fetch(url, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey
      }
    })
    .then(response => response.json())
    .then(data => {
      const seriesData = [{
        name: 'USDC in Circulation',
        data: [data.data.USDC.total_supply]
      },
      {
        name: 'Reserves',
        data: [data.data.USDC.quote.USD.market_cap]
      }];

      setSeries(seriesData);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, []);

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ['USDC'],
      labels: {
        formatter: function (val) {
          return val.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40
    }
  };

  return (
    <div className="Chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
}

export default Chart;
