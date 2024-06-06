import Card from 'react-bootstrap/Card';
import './Doctors.css'

const Doctors = () => {
  return (
    <div className="container px-5 py-2">
        <h1 className='py2'>Doctors list</h1>
        <div className="list-doctors d-flex  flex-wrap  justify-content-between   m-auto py-4 ">
        <Card className='cardWidth'>
        <Card.Img variant="top" src="../src/imges/pexels-photo-15960478.webp" />
        <Card.Body>
          <Card.Title>Dr: Samer Ahmed</Card.Title>
          <Card.Text>
            Specialist: Dentist <br/>
            Avilibale Days: <span className=' text-primary fs-6 '> Sun / Tue</span>

          </Card.Text>
          
        </Card.Body>
      </Card>

      <Card className='cardWidth'>
      <Card.Img variant="top" src="../src/imges/pexels-photo-3846038.webp" />
      <Card.Body>
          <Card.Title>Dr: Samer Ahmed</Card.Title>
          <Card.Text>
            Specialist: Dentist <br/>
            Avilibale Days: <span className=' text-primary fs-6 '> Sun / Tue</span>

          </Card.Text>
          
        </Card.Body>
    </Card>

      <Card className='cardWidth'>
      <Card.Img variant="top" src="../src/imges/pexels-photo-5215024.webp" />
      <Card.Body>
      <Card.Title>Dr: Samer Ahmed</Card.Title>
      <Card.Text>
        Specialist: Dentist <br/>
        Avilibale Days: <span className=' text-primary fs-6 '> Sun / Tue</span>

      </Card.Text>
      
    </Card.Body>
    </Card>
    <Card className='cardWidth'>
    <Card.Img variant="top" src="../src/imges/pexels-photo-5327580.webp" />
    <Card.Body>
          <Card.Title>Dr: Samer Ahmed</Card.Title>
          <Card.Text>
            Specialist: Dentist <br/>
            Avilibale Days: <span className=' text-primary fs-6 '> Sun / Tue</span>

          </Card.Text>
          
        </Card.Body>
  </Card>
  <Card className='cardWidth'>
  <Card.Img variant="top" src="../src/imges/pexels-photo-5452268.webp" />
  <Card.Body>
          <Card.Title>Dr: Samer Ahmed</Card.Title>
          <Card.Text>
            Specialist: Dentist <br/>
            Avilibale Days: <span className=' text-primary fs-6 '> Sun / Tue</span>

          </Card.Text>
          
        </Card.Body>
</Card >
<Card className='cardWidth'>
<Card.Img variant="top" src="../src/imges/pexels-photo-8460157.webp" />
<Card.Body>
          <Card.Title>Dr: Samer Ahmed</Card.Title>
          <Card.Text>
            Specialist: Dentist <br/>
            Avilibale Days: <span className=' text-primary fs-6 '> Sun / Tue</span>

          </Card.Text>
          
        </Card.Body>
</Card>
        </div>
    </div>
  )
}

export default Doctors