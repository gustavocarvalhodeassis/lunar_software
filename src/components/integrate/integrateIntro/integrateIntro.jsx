import { CgUser, CgBriefcase } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const IntegrateIntro = () => {
      return (
            <>
                  <h1 className='snapshot-title'>
                        Venha ser representante ou cliente Lunar Software.
                  </h1>
                  <div className='cards-space'>
                        <Link to={'/integrar/representante'}>
                              <div className='card recomended'>
                                    <div className='card-content'>
                                          <CgBriefcase size={35} />
                                          <h1 className='card-text'>
                                                Desejo Ser<br />
                                                Representante.
                                          </h1>
                                    </div>

                              </div>
                        </Link>
                        <Link to={'/integrar/cliente'}>
                              <div className='card'>
                                    <div className='card-content'>
                                          <CgUser size={35} />
                                          <h1 className='card-text'>
                                                Desejo Ser<br />
                                                Cliente.
                                          </h1>
                                    </div>
                              </div>
                        </Link>


                  </div>
            </>
      );
}

export default IntegrateIntro;