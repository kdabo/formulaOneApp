import React, {Component} from 'react';
import {Loader} from '.';
import {connect} from 'react-redux';
import * as Actions from "../actions";
import * as PropTypes from "react/lib/ReactDOMFactories";

export class Champions extends Component {

    onSelectChampion = (e, year, champion) => {
        e.preventDefault();
        this.props.onSelectChampion(year, champion);
    };

    render () {
        const listOfChampions = this.props.listOfChampions || {};
        const that = this;
        return (
            <table className="col s12 m6 l4 offset-m3 offset-l4 highlight flow-text">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Year</th>
                </tr>
                </thead>
                <tbody>
                {
                    Object.keys(listOfChampions).map(function (key) {
                        var year = parseInt(key, 10) + 2005;
                        var champion = listOfChampions[key].driver.familyName;
                        return <tr key={year} onClick={e => that.onSelectChampion(e, year, champion)}>
                            <td> {champion} </td>
                            <td> {year} </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        );
    }
}

class _ChampionsPage extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount () {
        this.props.dispatch(Actions.fetchChampions());
    }

    onSelectChampion = (year, champion) => {
        this.context.router.push({
            pathname: `WinnersList/${year}/${champion}`
        });
    };

    render () {
        if (this.props.loading) {
            return <div className="center-align"><Loader/></div>
        }
        return (
            <Champions
                onSelectChampion={this.onSelectChampion}
                listOfChampions={this.props.listOfChampions}
            />
        );
    }
}

function mapFromStoreToProps (store) {
    return {
        listOfChampions: store.listOfChampions,
        loading: store.loading === 'HTTP_LOADING',
    };
}

export const ChampionsPage = connect(mapFromStoreToProps)(_ChampionsPage);
