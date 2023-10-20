import Image from 'next/image'
import Link from 'next/link'

export default function Document() {
    return (
      <main
        className="flex min-h-screen flex-col items-center justify-between pt-24"
        style={{ backgroundImage: `url('/mountain.jpg')` }}
      >
        <div className="bg-white w-5/6 rounded-lg">
  
            <h1 className='m-2 mt-4'><b>Forecasting Time Series with ARIMA</b></h1>
            <br/>
            <p className='m-2 indent-4'>In contemporary data analysis, time series' appear often regardless of the
            data being measured. From a time series, by using statistics, you can forceast future values using an ARIMA model. ARIMA 
            is an acronym and stands for AutoRegressive Integrated Moving Average. Essentially, the model will forecast future values based 
            on recorded historical values after accounting for a few input variables, all derived from the same time series. The variables ARIMA is composed of is as follows:</p>
            <br/>
            <ul className="pl-14" style={{listStyleType: 'square'}}> 
                <li>
                AutoRegression - often denoted as 'p', this variable is the number of statistically significant lag times measured from the Partial AutoCorrelation Plot (pacf). 
                </li>
                <br/>
                <li>
                Integration - often denoted as 'd', this variable will make the data being examined more stationary. Analysis can not provide much insight for us when there is a lot of unaccounted noise in our data. This makes our analysis more reliable.
                </li>
                <br/>
                <li>
                Moving Average - often denoted with 'q', measured from an AutoCorrelation plot, this accounts for the number of previously forecasted error values which occurred. This will help us improve the model to account for discrepancies between the predicted values and the actual values which the model is trained on.
                </li>
            </ul>
            <br/>
            <p className='m-2'>In this example, we will be looking at Amazon stock price from 2007 to 2022, determining p d q, then we will try to forecast Jan 2023 and compare it to historical data. Here is an preview of the data:</p>
            <br/>
  
            <div className="flex items-center justify-center">
              <Image src="/dfsnip.png" alt="Project1Photo" width={325} height={512} />
            </div>
            <br/>
            <p className='m-2'>
            When using ARIMA models, all values in the time series must have evenly spaced intervals; however, a typical stock in the US is not traded outside of market hours (Mon-Fri 9:30AM-4:00PM), so there are a lot of gaps in our time series. 
            To circumvent this, we will use interpolation to fill missing values with the average of the next and previous value. After filling all missing dates to obtain an evenly spaced time series, we can plot it to get the following graph:
            </p>
            <br/>
            <br/>
            <br/>

            <div className="flex items-center justify-center">
              <Image src="/amznhist.png" alt="amzngraph" width={500} height={512} />
            </div>

            <br/>
            <p className='m-2'>
            From this time series, we can also create our AutoCorrelation and Partial AutoCorrelation plots to derive our P,D, and Q values where X is the lag time and Y is our correlation coefficient.
            </p>
            <br/>
            <br/>

            <div className="flex items-center justify-center">
              <Image src="/acf.png" alt="amzngraph" width={500} height={512} />
            </div>

            <div className="flex items-center justify-center">
              <Image src="/pacf.png" alt="amzngraph" width={500} height={512} />
            </div>
            <p className='m-2'>
            From these graphs, we obtain our P (approx. 10) and Q (approx. 8) values, and from our series we get a differencing, D, of 1. Plug in the time series with these inputs into an ARIMA model and we can obtain our specified forecast, which will predict the first thirty days of 2023. 
            <br/>
            See this prediction below:
            </p>

            <div className="flex items-center justify-center">
              <Image src="/forecast.png" alt="amzngraph" width={500} height={512} />
            </div>
            <br/>
            <p className='m-2'>
            Unfortunately, this model isn't entirely accurate. Since ARIMA models are built on only historical data, it fails to account for Macro variables (a.k.a. Black Swans). 
            If we compare our forecast to what happened historically, we can see a notable difference. See the dates for AMZN stock in Jan 2023 below:</p>
            
            
            <div className="flex items-center justify-center">
              <Image src="/AMZNJan2023.png" alt="Jan2023Data" width={450} height={512} />
            </div>
            
              <div className="text-sm">
              (Sourced from: <Link className="text-blue-600" href="https://www.marketwatch.com/investing/stock/amzn/charts?mod=mw_quote_advanced" target="_blank">Market Watch</Link>)
              </div>
            <br/>

            <p className='m-2'>
            Some events that this discrepancies could be accredited to are Macro related. For example, in January of 2023, Amazon (and other tech companies) did some restructuring and laid off about 18,000 workers; also, they pushed out new features for their premium subscription service, Amazon Prime. 
            Coming into a new year, there could have also been general buzz about the stock, driving its price up. All things that historical data can't reflect.
            <br/>
            <br/>
            Overall, ARIMA models may not be accurate for long-term trading, but it can be a valuable factor to consider when doing short-term analysis.
            </p>
            <br/>
            <Link className="text-blue-600 m-2" href="/amznArima_JackDeGesero.ipynb">Download Source Code (ipynb)</Link>
            <br/>
            <br/>
            <br/>
        </div>
      </main>
    );
  }