import { ResponsiveLine } from "@nivo/line";

const WeatherChart = ({ weatherData, timeOfDay }) => {
  const relevantHours = weatherData.days[0].hours.filter((hour) => {
    const hourAsInt = parseInt(hour.datetime.slice(0, -6));

    return hourAsInt >= timeOfDay.start && hourAsInt <= timeOfDay.end
      
  });



  const tempData = {
    id: "Temperature",
    color: "hsl(0, 60%, 59%)",
    data: relevantHours.map((hour) => {
      return {
        x: hour.datetime.slice(0, -3),
        y: hour.temp,
      };
    }),
  };

  const rainData = {
    id: "Percip Prob",
    color: "hsl(201, 64%, 49%)",
    data: relevantHours.map((hour) => {
        return {
          x: hour.datetime.slice(0, -3),
          y: Math.round(hour.precipprob),
        };
    }),
  };

  const windData = {
    id: "Windspeed",
    color: "#2D93CB",
    data: relevantHours.map((hour) => {
      return {
        x: hour.datetime.slice(0, -3),
        y: Math.round(hour.windspeed),
      };
    }),
  };

  return (
    <ResponsiveLine
      data={[tempData, rainData, windData]}
      margin={{ top: 50, right: 110, bottom: 160, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 60,
        legend: timeOfDay.humanFriendly,
        legendOffset: 50,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default WeatherChart;
