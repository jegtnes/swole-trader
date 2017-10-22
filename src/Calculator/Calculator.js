import React, { Component } from 'react';

import Week from '../Week/Week';
import LocalForage from 'localforage';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './Calculator.css';
import '../Global/Tabs.css';

class Calculator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bench: false,
      deadlift: false,
      squats: false,
      ohp: false,
      submitted: false,
      unit: false,
      roundingFactor: false,
    }

    this.updateBench = this.updateBench.bind(this);
    this.updateSquats = this.updateSquats.bind(this);
    this.updateDeadlift = this.updateDeadlift.bind(this);
    this.updateOhp = this.updateOhp.bind(this);
    this.updateUnit = this.updateUnit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.clearState = this.clearState.bind(this);
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
      bench: event.target.value,
    });
  };

  updateSquats(event) {
    this.setState({
      squats: event.target.value,
    });
  };

  updateDeadlift(event) {
    this.setState({
      deadlift: event.target.value,
    });
  };

  updateOhp(event) {
    this.setState({
      ohp: event.target.value,
    });
  };

  updateUnit(event) {
    this.setState({
      unit: event.target.value,
      roundingFactor: event.target.value === 'kg' ? 2.5 : 5,
    });
  };

  updateState() {
    const cheatingState = this.state;
    const that = this;
    cheatingState.submitted = true;
    LocalForage.setItem('data', cheatingState, (err) => {
      LocalForage.getItem('data', (err, val) => {
        that.setState({submitted: true});
      });
    });
  };

  clearState() {
    const that = this;
    LocalForage.removeItem('data', (err) => {
      that.setState({
        bench: false,
        deadlift: false,
        squats: false,
        ohp: false,
        submitted: false,
        unit: false,
      });
    });
  };

  render() {
    return (
      <div className="calculator">
        { !this.state.submitted ?
        <section>
          <label>
            <span>Squats 1RM</span>
            <input onChange={this.updateSquats} min="1" max="300" type="number" id="orm-squat" />
          </label>

          <label>
            <span>Bench Press 1RM</span>
            <input onChange={this.updateBench} min="1" max="300" type="number" id="orm-deadlift" />
          </label>

          <label>
            <span>Deadlift 1RM</span>
            <input onChange={this.updateDeadlift} min="1" max="300" type="number" id="orm-bench" />
          </label>

          <label>
            <span>Overhead Press 1RM</span>
            <input onChange={this.updateOhp} min="1" max="300" type="number" id="orm-ohp" />
          </label>

          <fieldset>
            <legend>Units of preference?</legend>
            <label>
              <span>Metric (kg)</span>
              <input onChange={this.updateUnit} id="unit-metric" name="unit" type="radio" value="kg" />
            </label>
            <label>
              <span>Imperial (lbs)</span>
              <input onChange={this.updateUnit} id="unit-imperial" name="unit" type="radio" value="lbs" />
            </label>
          </fieldset>

          <button onClick={this.updateState}>
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
        </section>
        }
      </div>
    );
  }
}

export default Calculator;
