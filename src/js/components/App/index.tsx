import React, { ReactElement, useEffect, Fragment, useState } from 'react';
import { AppState } from '../../reducers';
import { ScenarioProps } from '../../action-types/scenario';
import { connect } from 'react-redux';
import * as scenarioActionCreators from '../../action-creators/scenario';
import LoadingScreen from '../LoadingScreen';
import Renderer from '../Renderer';
import Tabs from '../Tabs';
import Button from '../Button';
import { NavLink } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from '../Modal';
import Dropdown from '../Dropdown';
import LazyDog from '../LazyDog';
import Physics from '../Content/Physics';
import Graphics from '../Content/Graphics';
import Camera from '../Content/Camera';
import Masses from '../Content/Masses';
import SaveScenario from '../Content/SaveScenario';
import { scenarios } from '../../data/scenarios';
import AddMass from '../Content/AddMass';
import './App.less';

const mapStateToProps = (state: AppState, ownProps: any) => ({
  scenarioName: ownProps.match.params.name,
  scenario: state.scenario
});

const mapDispatchToProps = {
  getScenario: scenarioActionCreators.getScenario,
  modifyScenarioProperty: scenarioActionCreators.modifyScenarioProperty,
  modifyMassProperty: scenarioActionCreators.modifyMassProperty,
  addMass: scenarioActionCreators.addMass,
  deleteMass: scenarioActionCreators.deleteMass
};

interface AppProps {
  scenario: ScenarioProps;
  modifyScenarioProperty: typeof scenarioActionCreators.modifyScenarioProperty;
  modifyMassProperty: typeof scenarioActionCreators.modifyMassProperty;
  deleteMass: typeof scenarioActionCreators.deleteMass;
  addMass: typeof scenarioActionCreators.addMass;
  getScenario: typeof scenarioActionCreators.getScenario;
  scenarioName: string;
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ({
    scenario,
    modifyScenarioProperty,
    modifyMassProperty,
    deleteMass,
    addMass,
    getScenario,
    scenarioName
  }: AppProps): ReactElement => {
    useEffect(
      () => {
        getScenario(scenarioName);
      },
      [scenarioName]
    );

    const [display, setDisplay] = useState({
      saveScenario: false
    });

    return (
      <Fragment>
        <Renderer scenarioName={scenario.name} />
        <Dropdown
          selectedOption={scenario.name}
          tabs={{
            cssClass: 'dropdown-tabs',
            activeCssClass: 'dropdown-tabs-active',
            optionsCssClass: 'dropdown-content',
            identifier: 'category'
          }}
          dropdownWrapperCssClassName="scenario-dropdown-wrapper"
          selectedOptionCssClassName="selected-option"
          optionsWrapperCssClass="scenario-menu"
        >
          {scenarios.map(scenario => (
            <div
              className="scenario-menu-option"
              key={scenario.name}
              data-identifier={scenario.type}
            >
              <NavLink to={`/scenario/${scenario.name}`}>
                <LazyDog
                  src={`./images/scenarios/${scenario.name}.png`}
                  alt={scenario.name}
                  caption={scenario.name}
                  width={159.42028985507247}
                  height={100}
                  placeHolderIcon="fa fa-venus-mars fa-2x"
                />
              </NavLink>
            </div>
          ))}
        </Dropdown>
        <Button
          cssClassName="save-scenario-button"
          callback={() =>
            setDisplay({ ...display, saveScenario: !display.saveScenario })
          }
        >
          <span>
            <i className="fas fa-save fa-2x" />Save
          </span>
        </Button>
        <Button
          cssClassName="set-simulation-state-button"
          callback={() =>
            modifyScenarioProperty({ key: 'playing', value: !scenario.playing })
          }
        >
          <i
            className={`fas fa-${scenario.playing ? 'pause' : 'play'} fa-lg`}
          />
        </Button>
        <Tabs
          tabsWrapperClassName="sidebar-wrapper"
          tabsContentClassName="sidebar-content"
          transition={{ name: 'slide', enterTimeout: 250, leaveTimeout: 250 }}
        >
          <div data-label="Physics" data-icon="fas fa-cube fa-2x">
            <Physics
              integrator={scenario.integrator}
              useBarnesHut={scenario.useBarnesHut}
              theta={scenario.theta}
              dt={scenario.dt}
              tol={scenario.tol}
              minDt={scenario.minDt}
              maxDt={scenario.maxDt}
              systemBarycenter={scenario.systemBarycenter}
              barycenterMassOne={scenario.barycenterMassOne}
              barycenterMassTwo={scenario.barycenterMassTwo}
              masses={scenario.masses}
              collisions={scenario.collisions}
              g={scenario.g}
              softeningConstant={scenario.softeningConstant}
              modifyScenarioProperty={modifyScenarioProperty}
            />
          </div>
          <div data-label="Graphics" data-icon="fas fa-paint-brush fa-2x">
            <Graphics
              barycenter={scenario.barycenter}
              trails={scenario.trails}
              labels={scenario.labels}
              background={scenario.background}
              sizeAttenuation={scenario.sizeAttenuation}
              twinklingParticles={scenario.twinklingParticles}
              modifyScenarioProperty={modifyScenarioProperty}
            />
          </div>
          <div data-label="Camera" data-icon="fas fa-camera-retro fa-2x">
            <Camera
              rotatingReferenceFrame={scenario.rotatingReferenceFrame}
              cameraPosition={scenario.cameraPosition}
              cameraFocus={scenario.cameraFocus}
              masses={scenario.masses}
              modifyScenarioProperty={modifyScenarioProperty}
            />
          </div>
          <div data-label="Masses" data-icon="fas fa-globe fa-2x">
            <Masses
              massBeingModified={scenario.massBeingModified}
              masses={scenario.masses}
              maximumDistance={scenario.maximumDistance}
              distMax={scenario.distMax}
              distMin={scenario.distMin}
              velMax={scenario.velMax}
              velMin={scenario.velMin}
              velStep={scenario.velStep}
              modifyScenarioProperty={modifyScenarioProperty}
              modifyMassProperty={modifyMassProperty}
              deleteMass={deleteMass}
            />
          </div>
          <div data-label="Add" data-icon="fas fa-plus-circle fa-2x">
            <AddMass
              a={scenario.a}
              e={scenario.e}
              w={scenario.w}
              i={scenario.i}
              primary={scenario.primary}
              maximumDistance={scenario.maximumDistance}
              masses={scenario.masses}
              addMass={addMass}
              modifyScenarioProperty={modifyScenarioProperty}
            />
          </div>
        </Tabs>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
          {display.saveScenario && (
            <Modal
              callback={() =>
                setDisplay({ ...display, saveScenario: !display.saveScenario })
              }
            >
              <SaveScenario
                scenario={scenario}
                closeWindowCallback={() =>
                  setDisplay({
                    ...display,
                    saveScenario: !display.saveScenario
                  })
                }
              />
            </Modal>
          )}
        </ReactCSSTransitionGroup>
        {!scenario.isLoaded && <LoadingScreen scenarioName={scenario.name} />}
        <div className="rotate-to-landscape-prompt">
          <h1>Hey friend...</h1>
          <p>Please rotate your device into landscape mode.</p>
        </div>
      </Fragment>
    );
  }
);
