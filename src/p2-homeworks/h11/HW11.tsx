import React, {useCallback} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {Box} from "@material-ui/core";
import s from './HW11.module.css'

const minDistance = 5;

function HW11() {
    const [value, setValue] = React.useState<number[]>([10, 90]);

    const handleChangeRange = useCallback((newValue: number) => {
        setValue([Math.min(newValue, value[1] - minDistance), value[1]]);
    }, [value]);

    const handleChangeDoubleRangeCallback = useCallback((event: Event,
                                                         newValue: number | number[],
                                                         activeThumb: number,) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    }, [value]);

    return (
        <div>
            <h3>Homeworks 11</h3>

            {/*should work (должно работать)*/}
            <Box sx={{width: 200}}>
                <span>{value[0]}</span>
                <SuperRange
                    value={value[0]}
                    onChangeRange={handleChangeRange}
                    className={s.superRange}
                    // сделать так чтоб value1 изменялось
                />
            </Box>

            <Box sx={{width: 200}}>

                <SuperDoubleRange
                    value={value}
                    onChangeRange={handleChangeDoubleRangeCallback}
                    // сделать так чтоб value1 и value2 изменялось
                />
                {/*<Box sx={{display: 'flex', gap: 20}}>*/}
                {/*    <span>{value[0]}</span>*/}
                {/*    <span>{value[1]}</span>*/}
                {/*</Box>*/}

            </Box>

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW11
