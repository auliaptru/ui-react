import React from 'react';
import styled from 'styled-components';
import {
    KeyboardArrowDown,
    KeyboardArrowUp,
    MoreVert,
} from '@mui/icons-material';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Container = styled.div`
    flex: 2;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius: 10px;
    padding: 10px;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: gray;
`;
const Title = styled.h4`
    font-weight: 500;
    margin-bottom: 10px;
`;

const Bottom = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;
const Chart = styled.div`
    width: 100px;
    height: 110px;
`;
const ChartTitle = styled.p`
    font-weight: 500;
    color: gray;
`;
const ChartAmount = styled.p`
    font-size: 30px;
`;
const ChartDesc = styled.p`
    font-size: 12px;
    font-weight: 300;
    color: gray;
    text-align: center;
`;
const ChartSummary = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Item = styled.div`
    text-align: center;
`;
const ItemTitle = styled.h3`
    font-size: 14px;
    color: gray;
`;
const ItemResult = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
    font-size: 14px;
    color: ${(props) => (props.type === 'positive' ? 'green' : 'red')};
`;
const ResultAmount = styled.div``;

const Featured = () => {
    return (
        <Container>
            <Top>
                <Title>Total Revenue</Title>
                <MoreVert fontSize='small' style={{ cursor: 'pointer' }} />
            </Top>

            <Bottom>
                <Chart>
                    <CircularProgressbar
                        value={70}
                        text='70%'
                        strokeWidth={5}
                    />
                </Chart>
                <ChartTitle>Total sales made today</ChartTitle>
                <ChartAmount>$420</ChartAmount>
                <ChartDesc>
                    Previous transactions processing. Last payments may not be
                    included.
                </ChartDesc>
                <ChartSummary>
                    <Item>
                        <ItemTitle>Target</ItemTitle>
                        <ItemResult>
                            <KeyboardArrowDown fontSize='small' />
                            <ResultAmount>$12.4k</ResultAmount>
                        </ItemResult>
                    </Item>
                    <Item>
                        <ItemTitle>Last Week</ItemTitle>
                        <ItemResult type='positive'>
                            <KeyboardArrowUp fontSize='small' />
                            <ResultAmount>$90.4k</ResultAmount>
                        </ItemResult>
                    </Item>
                    <Item>
                        <ItemTitle>Last Month</ItemTitle>
                        <ItemResult type='positive'>
                            <KeyboardArrowUp fontSize='small' />
                            <ResultAmount>$100.4k</ResultAmount>
                        </ItemResult>
                    </Item>
                </ChartSummary>
            </Bottom>
        </Container>
    );
};

export default Featured;
