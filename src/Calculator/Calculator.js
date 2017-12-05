import React, { Component } from 'react';

import Week from '../Week/Week';
import LocalForage from 'localforage';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './Calculator.css';
import '../Global/Tabs.css';

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.METRIC_TO_IMPERIAL = 2.20462;
    this.IMPERIAL_TO_METRIC = 0.453592;

    this.state = {
      bench: 0,
      deadlift: 0,
      squats: 0,
      ohp: 0,
      submitted: false,
      unit: false,
      roundingFactor: false,
    }

    this.submit = this.submit.bind(this);
    this.updateBench = this.updateBench.bind(this);
    this.updateSquats = this.updateSquats.bind(this);
    this.updateDeadlift = this.updateDeadlift.bind(this);
    this.updateOhp = this.updateOhp.bind(this);
    this.updateAndConvertUnit = this.updateAndConvertUnit.bind(this);
    this.saveState = this.saveState.bind(this);
    this.clearState = this.clearState.bind(this);
    this.increaseWeights = this.increaseWeights.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      bench: nextProps.bench ? nextProps.bench : false,
      deadlift: nextProps.deadlift ? nextProps.deadlift : false,
      squats: nextProps.squats ? nextProps.squats : false,
      ohp: nextProps.ohp ? nextProps.ohp : false,
      submitted: nextProps.submitted ? nextProps.submitted : false,
      unit: nextProps.unit ? nextProps.unit : false,
      roundingFactor: nextProps.roundingFactor ? nextProps.roundingFactor : false,
    });
  }

  updateBench(event) {
    this.setState({
      bench: parseInt(event.target.value, 10),
    });
  };

  updateSquats(event) {
    this.setState({
      squats: parseInt(event.target.value, 10),
    });
  };

  updateDeadlift(event) {
    this.setState({
      deadlift: parseInt(event.target.value, 10),
    });
  };

  updateOhp(event) {
    this.setState({
      ohp: parseInt(event.target.value, 10),
    });
  };

  // TODO: dear god so much repetition
  updateAndConvertUnit(event) {
    const currentState = this.state;
    const currentUnit = currentState.unit;
    const nextUnit = event.target.value;

    if (currentUnit === 'kg' && nextUnit === 'lbs') {
      this.setState({
        unit: event.target.value,
        roundingFactor: 5,
        bench: currentState.bench * this.METRIC_TO_IMPERIAL,
        deadlift: currentState.deadlift * this.METRIC_TO_IMPERIAL,
        squats: currentState.squats * this.METRIC_TO_IMPERIAL,
        ohp: currentState.ohp * this.METRIC_TO_IMPERIAL,
      }, this.saveState);
    } else {
      this.setState({
        unit: event.target.value,
        roundingFactor: 2.5,
        bench: currentState.bench * this.IMPERIAL_TO_METRIC,
        deadlift: currentState.deadlift * this.IMPERIAL_TO_METRIC,
        squats: currentState.squats * this.IMPERIAL_TO_METRIC,
        ohp: currentState.ohp * this.IMPERIAL_TO_METRIC,
      }, this.saveState);
    }
  };

  submit() {
    this.setState({submitted: true}, () => {
      this.saveState();
    });
  };

  saveState() {
    LocalForage.setItem('data', this.state);
  };

  increaseWeights() {
    const modifier = this.state.unit === 'kg' ? 2.5 : 5;

    this.setState({
      bench: this.state.bench + modifier,
      deadlift: this.state.deadlift + (modifier * 2),
      squats: this.state.squats + (modifier * 2),
      ohp: this.state.ohp + modifier,
    }, () => {
      LocalForage.setItem('data', this.state);
    });
  };

  clearState() {
    const that = this;
    LocalForage.removeItem('data', (err) => {
      that.setState({
        submitted: false
      });
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="calculator">
        { !this.state.submitted ?
        <section>
          <label>
            <span>Squats 1RM</span>
            <input value={this.state.squats} onChange={this.updateSquats} min="1" max="300" type="number" id="orm-squat" />
          </label>

          <label>
            <span>Bench Press 1RM</span>
            <input value={this.state.bench} onChange={this.updateBench} min="1" max="300" type="number" id="orm-deadlift" />
          </label>

          <label>
            <span>Deadlift 1RM</span>
            <input value={this.state.deadlift} onChange={this.updateDeadlift} min="1" max="300" type="number" id="orm-bench" />
          </label>

          <label>
            <span>Overhead Press 1RM</span>
            <input value={this.state.ohp} onChange={this.updateOhp} min="1" max="300" type="number" id="orm-ohp" />
          </label>

          <fieldset>
            <legend>Units of preference?</legend>
            <label>
              <span>Metric (kg)</span>
              <input onChange={this.updateAndConvertUnit} id="unit-metric" name="unit" type="radio" value="kg" checked={this.state.unit === 'kg' } />
            </label>
            <label>
              <span>Imperial (lbs)</span>
              <input onChange={this.updateAndConvertUnit} id="unit-imperial" name="unit" type="radio" value="lbs" checked={this.state.unit === 'lbs' } />
            </label>
          </fieldset>

          <button onClick={this.submit}>
            HIT ME WITH YOUR RHYTHM STICK. HIT ME, HIT ME
          </button>
        </section> :
        <section>
          <Tabs
            className='tabs tabs--week'
            selectedTabClassName='tabs__tab--selected'
            selectedTabPanelClassName='tabs__panel--selected'>

            <TabList className='tabs__tab-list'>
              <Tab className='tabs__tab'>
                <span className='tabs--week__text'>Week</span>
                <strong className='tabs--week__number'>1</strong>
              </Tab>

              <Tab className='tabs__tab'>
                <span className='tabs--week__text'>Week</span>
                <strong className='tabs--week__number'>2</strong>
              </Tab>

              <Tab className='tabs__tab'>
                <span className='tabs--week__text'>Week</span>
                <strong className='tabs--week__number'>3</strong>
              </Tab>

              <Tab className='tabs__tab'>
                <span className='tabs--week__text'>Week</span>
                <strong className='tabs--week__number'>4</strong>
              </Tab>
            </TabList>

            <TabPanel className='tabs__panel'>
              <Week weekNumber={1} {...this.state} />
            </TabPanel>

            <TabPanel className='tabs__panel'>
              <Week weekNumber={2} {...this.state} />
            </TabPanel>

            <TabPanel className='tabs__panel'>
              <Week weekNumber={3} {...this.state} />
            </TabPanel>

            <TabPanel className='tabs__panel'>
              <Week weekNumber={4} {...this.state} />
            </TabPanel>
          </Tabs>

          <button onClick={this.clearState}>Reset gains pls!</button>
          <button onClick={this.increaseWeights}>More gains pls!</button>
          <fieldset>
            <legend>Units of preference?</legend>
            <label>
              <span>Metric (kg)</span>
              <input onChange={this.updateAndConvertUnit} id="unit-metric" name="unit" type="radio" value="kg" checked={this.state.unit === 'kg' } />
            </label>
            <label>
              <span>Imperial (lbs)</span>
              <input onChange={this.updateAndConvertUnit} id="unit-imperial" name="unit" type="radio" value="lbs" checked={this.state.unit === 'lbs' } />
            </label>
          </fieldset>
        </section>
        }
      </div>
    );
  }
}

export default Calculator;
