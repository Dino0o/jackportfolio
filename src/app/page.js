import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faRProject } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 text-black">
      <div className="border-4 border-r-2 border-white bg-white w-5/6 rounded-lg">
      <br/>
        <div className='text-center font-medium text-3xl'>Hello!</div>
        <br/>
        <div className='text-xl pl-5 font-bold'>Background:</div>
        <br/>
        <div className='pl-5 pr-5 indent-8'>
        My name is Jack DeGesero. I am 21 years old, and a student at Montclair State University pursuing a BS in Data Science with a Mathematics minor (expected a semester early!).
        Currently, I work as a Data Science Intern with Gill Energy. The reason I chose Data Science as my major is because data-driven insights are vital to making informed decisions,
        improving operations, and fueling innovation. While working as a mananger at my former place of employment, Ralph&apos;s Italian Ices, I was
        exposed to the applications of utilizing data in refining operations. This was accomplished by analyzing sales data to track and calculate average 
        product turnover. From this, I was able to find the target inventory contigent on our storage capacity. Overall, the position exposed me to the
        manipulation of tabular data, and that&apos;s when I fell in love with data.
        </div>
        <br/>
        <br/>
        <br/>
        <div className='text-xl text-center pl-5 font-bold'>Languages I use for analysis:</div>
        <br/>
        <div className='text flex space-x-4 flex justify-center items-center h-full'>
        <FontAwesomeIcon icon={faPython} className='fa_icon p-2'/>
        <FontAwesomeIcon icon={faRProject} className='fa_icon p-2'/>
        <FontAwesomeIcon icon={faDatabase} className='fa_icon p-2'/>

        </div>
        <br/>
        <br/>
        <br/>
        <div className='text-xl pl-5 font-bold'>Certifications & Awards:</div>
        <br/>
        <div className='pl-5 pr-5'>
        <ul style={{listStyleType: 'square'}}>
          <li>Industry Certified in Introductory JavaScript at Microsoft (2019)</li><br/>
          <li>Dean&apos;s List at Montclair State University - Fall 2021</li><br/>
          <li>Dean&apos;s List at Montclair State University - Spring 2022</li><br/>
          <li>Dean&apos;s List at Montclair State University - Fall 2022</li><br/>
          <li>Dean&apos;s List at Montclair State University - Spring 2023</li><br/>
          <li>Dean&apos;s List at Montclair State University - Summer 2023</li><br/>
          <li>Dean&apos;s List at Montclair State University - Fall 2023</li><br/>
          <li>Dean&apos;s List at Montclair State University - Spring 2024</li><br/>
          <li>Dean&apos;s List at Montclair State University - Summer 2024</li><br/>
        </ul>
        </div>
        <br/>
        
        <br/>
      </div>
    </main>
  )
}
