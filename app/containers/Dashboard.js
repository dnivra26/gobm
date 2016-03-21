import React from 'react';

class Dashboard extends React.Component {

    componentDidMount() {
        const headers = {
            Accept: 'application/vnd.go.cd.v1+json',
        };
        fetch('url',
            {
                method: 'get',
                credentials: 'include',
                headers: headers,
                mode: 'no-cors'
            }
        ).then(function (resolve, reject) {
            console.log(resolve);
            return resolve.text();
        }).then(function (text){
            console.log(' text ..........', text);
        });
    }

    render() {
        return (
            <div>Dashboard</div>
        );
    }
}

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
