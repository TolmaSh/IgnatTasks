import React from 'react'
import {Box, Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (event: Event, value: number | number[], activeThumb: number,) => void
    value?: number[]
    // min, max, step, disable, ...
}
const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 100,
        label: '100',
    },
];

function valuetext(value: number) {
    return `${value}`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <Box sx={{width: 200, marginLeft: 1, marginTop: 4}}>
            <Slider
                getAriaLabel={() => 'SuperDoubleRange'}
                marks={marks}
                value={value}
                onChange={onChangeRange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />
        </Box>
    )
}

export default SuperDoubleRange
