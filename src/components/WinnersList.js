import React, {Component} from 'react';
import {Loader} from '.';
import {connect} from 'react-redux';
import * as Actions from '../actions';

export class WinnersList extends Component {

    render () {
        const listOfRaceWinners = this.props.listOfRaceWinners || {};
        const champion = this.props.champion || {};
        if (listOfRaceWinners === null) {
            return null;
        }
        return (
            <table className="col s12 m6 l4 offset-m3 offset-l4 flow-text">
                <thead>
                <tr>
                    <th>Name of the Race</th>
                    <th>Winner</th>
                </tr>
                </thead>
                <tbody>
                {
                    listOfRaceWinners.map(function (winner, i) {
                        var winners = winner.Results[0].Driver.familyName;
                        if (champion === winners) {
                            return <tr key={i} className="blue-text text-darken-2">
                                <td> {winner.raceName} </td>
                                <td> {winners} </td>
                            </tr>
                        }
                        return <tr key={i}>
                            <td> {winner.raceName} </td>
                            <td> {winners} </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        );
    }
}

class _WinnersListPage extends Component {

    componentDidMount () {
        const year = this.props.params.year;
        this.props.dispatch(Actions.fetchWinners(year));
    }

    render () {
        const champion = this.props.params.champion;
        if (this.props.loading) {
            return <div className="center-align"><Loader/></div>
        }
        return (
            <WinnersList
                champion={champion}
                listOfRaceWinners={this.props.listOfRaceWinners}/>
        );
    }
}

function mapFromStoreToProps (store) {
    return {
        listOfRaceWinners: store.listOfRaceWinners,
        loading: store.loading === 'HTTP_LOADING',
    };
}

export const WinnersListPage = connect(mapFromStoreToProps)(_WinnersListPage);
