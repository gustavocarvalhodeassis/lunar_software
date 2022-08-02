import './style.css'

const SnapshotScreen = (props) => {
     return ( 
          <section className='snapshot-section' id={'snapshot'}>
               <div className='container'>
                    <div className='snapshot-content'>
                         {
                              props.element
                         }
                    </div>
               </div>

          </section>
      );
}
 
export default SnapshotScreen;