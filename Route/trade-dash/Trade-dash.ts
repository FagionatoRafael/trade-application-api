import express from 'express';
import { getRealTimeValues } from '../../controller/Trade/Trade.controller';

const app = express()

interface body {
    CONVERT_VALUE: string,
    CONVERT_FROM: string,
    CONVERT_TO: string
}

app.route('/')
    .get(async (req, res) => {
        const result = await getRealTimeValues('https://api.forexfeed.net/data/163888186567810/i-1/s-GBPUSD,USDGBP')

        const arrayData: any[] = []
        arrayData.push(result.data.split('\n'))

        const firstValueGBPUSD = arrayData[0][19].split(',')[3];
        const firstValueUSDGBP = arrayData[0][20].split(',')[3];

        res.json(
        {   GBPUSD: {
                firstValue: firstValueGBPUSD
            },
            USDGBP: {
                firstValue: firstValueUSDGBP
            }
        })        
    })
    .post(async (req, res) => {
        const body: body = req.body
        const result = await getRealTimeValues(`http://api.forexfeed.net/convert/163888186567810/${body.CONVERT_VALUE}/${body.CONVERT_FROM}/${body.CONVERT_TO}`)
        
        const arrayData: any[] = []
        arrayData.push(result.data.split('\n'))
        
        const convertedValue = parseFloat(arrayData[0][19].split(',')[6]).toFixed(2);
        res.json({CONVERTED_VALUE: convertedValue})
    })

export default app;