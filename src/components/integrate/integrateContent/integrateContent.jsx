import './style.css'

const IntegrateContent = (prosp) => {
     return ( 
          <section className="integrate-content-section">
               <div className='container'>
                    <div className="integrate-content">
                         {
                              prosp.element
                         }
                    </div>
               </div>
          </section>
      );
}
 
export default IntegrateContent;