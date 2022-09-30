import React from 'react';
import styled from 'styled-components';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'January',
        total: 1200,
    },
    {
        name: 'February',
        total: 2100,
    },
    {
        name: 'March',
        total: 800,
    },
    {
        name: 'April',
        total: 1600,
    },
    {
        name: 'May',
        total: 900,
    },
    {
        name: 'June',
        total: 2390,
    },
];

const Container = styled.div`
    flex: 4;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius: 10px;
    color: gray;
    padding: 10px;
    &.chart {
        stroke: rgb(228, 225, 225);
    }
`;

const Title = styled.h4`
    margin-bottom: 20px;
    font-weight: 500;
    color: lightgray;
`;

const Chart = ({ aspect, title }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <ResponsiveContainer width='100%' aspect={aspect}>
                <AreaChart
                    width={730}
                    height={250}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
                            <stop
                                offset='5%'
                                stopColor='#8884d8'
                                stopOpacity={0.8}
                            />
                            <stop
                                offset='95%'
                                stopColor='#8884d8'
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey='name' stroke='gray' />
                    <YAxis />
                    <CartesianGrid className='chart' strokeDasharray='3 3' />
                    <Tooltip />
                    <Area
                        type='monotone'
                        dataKey='total'
                        stroke='#8884d8'
                        fillOpacity={1}
                        fill='url(#total)'
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Container>
    );
};

export default Chart;
