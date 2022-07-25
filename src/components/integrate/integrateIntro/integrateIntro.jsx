import { CgUser, CgBriefcase } from 'react-icons/cg'
import { Link, useNavigate } from 'react-router-dom'

const IntegrateIntro = () => {

      let navigate = useNavigate()

      const routeChange = () => {
            let path = '/integrar/representante'
            navigate(path)
      }

      return (
            <>
                  <h1 className='snapshot-title'>
                        Venha ser representante ou cliente Lunar Software.
                  </h1>
                  <div className='cards-space'>
                        <div
                              className='card recomended'
                              onClick={routeChange}
                        >
                              <div className='card-content'>
                                    <CgBriefcase size={35} />
                                    <h1 className='card-text'>
                                          Desejo Ser<br />
                                          Representante.
                                    </h1>
                              </div>

                        </div>
                        <div
                              className='card'
                              onClick={routeChange}
                        >
                              <div className='card-content'>
                                    <CgUser size={35} />
                                    <h1 className='card-text'>
                                          Desejo Ser<br />
                                          Cliente.
                                    </h1>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default IntegrateIntro;