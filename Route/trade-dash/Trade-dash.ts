import express from 'express';
import axios from 'axios';

const app = express()

interface body {
    CONVERT_VALUE: string,
    CONVERT_FROM: string,
    CONVERT_TO: string
}

app.route('/')
    .get(async (req, res) => {
        const URL = 'https://api.forexfeed.net/data/163888186567810/i-1/s-GBPUSD,USDGBP';
        const arrayData: any[] = []
        let data = ''
        
        await axios(URL)
        .then((value) => {
            data = value.data
            arrayData.push(data.split('\n'))
        })
        .catch((err) => {
            console.log(err)
        })

        const firstValueGBPUSD = arrayData[0][19].split(',')[3];
        const secondValueGBPUSD = arrayData[0][19].split(',')[4];
        const time = arrayData[0][9].split(' ')[2];

        const firstValueUSDGBP = arrayData[0][20].split(',')[3];
        const secondValueUSDGBP = arrayData[0][20].split(',')[4];

        res.json(
        {   GBPUSD: {
                firstValue: firstValueGBPUSD,
                secondValue: secondValueGBPUSD
            },
            USDGBP: {
                firstValue: firstValueUSDGBP,
                secondValue: secondValueUSDGBP
            },
            time: time
        })
    })
    .post(async (req, res) => {
        const body: body = req.body
        const URL = `http://api.forexfeed.net/convert/163888186567810/${body.CONVERT_VALUE}/${body.CONVERT_FROM}/${body.CONVERT_TO}`;
        const arrayData: any[] = []
        let data = ''
        
        await axios(URL)
        .then((value) => {
            data = value.data
            arrayData.push(data.split('\n'))
        })
        .catch((err) => {
            console.log(err)
        })
        const convertedValue = parseFloat(arrayData[0][19].split(',')[6]).toFixed(2);
        res.json({CONVERTED_VALUE: convertedValue})
    })

export default app;