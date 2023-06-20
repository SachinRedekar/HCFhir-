import './PatientDetail.css'
function PatientDetail() {
  

      return(
        <>
          <div className="tabs">
              <input type="radio" class="tabs__radio" name="tabs-example" id="tab1" checked/>
              <label for="tab1" class="tabs__label">Summary</label>
              <div className="tabs__content">
                CONTENT for Tab #1
              </div>
              
              <input type="radio" class="tabs__radio" name="tabs-example" id="tab2"/>
              <label for="tab2" class="tabs__label">Patient</label>
              <div className="tabs__content">
                CONTENT for Tab #2
              </div>

              <input type="radio" class="tabs__radio" name="tabs-example" id="tab3"/>
              <label for="tab3" class="tabs__label">Encounter</label>
              <div className="tabs__content">
                CONTENT for Tab #3
              </div>

              <input type="radio" class="tabs__radio" name="tabs-example" id="tab4"/>
              <label for="tab4" class="tabs__label">Medication</label>
              <div className="tabs__content">
                CONTENT for Tab #4
              </div>

              <input type="radio" class="tabs__radio" name="tabs-example" id="tab5"/>
              <label for="tab5" class="tabs__label">Observation</label>
              <div className="tabs__content">
                CONTENT for Tab #5
              </div>

              <input type="radio" class="tabs__radio" name="tabs-example" id="tab6"/>
              <label for="tab6" class="tabs__label">Condition</label>
              <div className="tabs__content">
                CONTENT for Tab #6
              </div>

            </div>
        </>
      )
}

export default PatientDetail