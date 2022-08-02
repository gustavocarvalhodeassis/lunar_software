import { CgUser, CgBriefcase } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { integrateRepRoute } from '../../../router';

const IntegrateIntro = () => {
      return (
            <>
                  <h1 className='snapshot-title'>
                        Venha ser representante ou cliente Lunar Software.
                  </h1>
                  <div className='cards-space'>
                        <Link to={integrateRepRoute} className='card recomended'>
                              <div className='card-content'>
                                    <CgBriefcase size={35} />
                                    <h1 className='card-text'>
                                          Desejo Ser<br />
                                          Representante.
                                    </h1>
                              </div>
                        </Link>
                        <Link
                              to={integrateRepRoute}
                              className='card'
                        >
                              <div className='card-content'>
                                    <CgUser size={35} />
                                    <h1 className='card-text'>
                                          Desejo Ser<br />
                                          Cliente.
                                    </h1>
                              </div>
                        </Link>
                  </div>
            </>
      );
}

export default IntegrateIntro;