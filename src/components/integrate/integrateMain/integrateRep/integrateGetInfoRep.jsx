import { CgArrowLeft } from 'react-icons/cg'
import { Link } from "react-router-dom";
import { integrateRoute } from "../../../../router";
import RepInputs from './inputs';

const IntegrateGetInfoRep = () => {

     return (
          <>
               <div className='push-title'>
                    <Link to={integrateRoute}>
                         <CgArrowLeft size={50} color='var(--dark-color)' />
                    </Link>
                    <h1 className='push-title-text'>
                         Você escolheu Representante. por favor preencha os dados.
                    </h1>
               </div>
               <RepInputs />
          </>
     );
}

export default IntegrateGetInfoRep;